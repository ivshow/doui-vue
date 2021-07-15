/*
 * @Author : jaydon
 * @Date   : 2021-06-17 10:55
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import _ from 'lodash';
import dayjs from 'dayjs';
import ls from 'local-storage';
import jsCookie from 'js-cookie';
import { parseContext, addPrototype } from './common';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

const context = require.context('./', false, /^(?!\.\/index).*\.js$/);
const utils = parseContext(context);

const install = Vue => {
  addPrototype('d', Object.assign(utils, _));
  addPrototype('ls', ls);
  addPrototype('dayjs', dayjs);
  addPrototype('cookie', jsCookie);
  addPrototype('event', new Vue());
};

module.exports = { ...utils, install };
