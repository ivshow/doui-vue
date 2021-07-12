/*
 * @Author : jaydon
 * @Date   : 2021-07-10 16:26
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

const COS = require('cos-nodejs-sdk-v5');
const uploadQcloud = require('qcloud-upload');

const config = {
  Bucket: 'doui-vue-1257301295',
  Region: 'ap-chengdu',
  SecretId: 'AKID5zd196nDMEqBG4cttc5HCqCNJzPaVBbl',
  SecretKey: '61kHcljYEj3BAyb2FEwNXQ2NRFm21jAL'
};

const cos = new COS({
  SecretId: config.SecretId,
  SecretKey: config.SecretKey
});

function upload() {
  uploadQcloud({
    ...config,
    src: './docs/.vuepress/dist',
    overWrite: 1
  });
}

function clear(marker) {
  return new Promise(r => {
    cos.getBucket(
      {
        Bucket: config.Bucket,
        Region: config.Region,
        Marker: marker,
        MaxKeys: 1000
      },
      function (listError, listResult) {
        listResult.Contents.length
          ? cos.deleteMultipleObject(
              {
                Bucket: config.Bucket,
                Region: config.Region,
                Objects: listResult.Contents.map(item => ({ Key: item.Key }))
              },
              function (delError) {
                if (delError) {
                  console.log('删除失败', delError);
                } else {
                  if (listResult.IsTruncated === 'true') {
                    clear(listResult.NextMarker);
                  } else {
                    console.log('删除成功');
                    r();
                  }
                }
              }
            )
          : r();
      }
    );
  });
}

async function start() {
  await clear();
  upload();
}

start();
