/**
 * @Author : vshow
 * @Date   : 2021-07-16 15:13
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import { render } from '@';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

export const openDrawer = ({
  onOk,
  onCancel,
  content,
  okText = '确定',
  cancelText = '取消',
  okButtonProps,
  cancelButtonProps,
  ...props
} = {}) => {
  const vm = render({
    data() {
      return {
        visible: true
      };
    },
    methods: {
      async handleOk() {
        await onOk?.();
        this.visible = false;
      },
      async handleClose() {
        await onCancel?.();
        this.visible = false;
      }
    },
    render(h) {
      return (
        <a-config-provider locale={zhCN}>
          <a-drawer
            wrapClassName="d-drawer"
            visible={this.visible}
            placement="right"
            afterVisibleChange={vm?.destroy}
            width="500"
            onClose={this.handleClose}
            props={props}
          >
            <div class="d-drawer-content">{typeof content === 'function' ? content(h) : content}</div>
            <div class="d-drawer-footer">
              <a-space size="middle">
                <a-button onClick={this.handleClose} props={cancelButtonProps}>
                  {cancelText}
                </a-button>
                <a-button type="primary" onClick={this.handleOk} props={okButtonProps}>
                  {okText}
                </a-button>
              </a-space>
            </div>
          </a-drawer>
        </a-config-provider>
      );
    }
  });

  return vm;
};
