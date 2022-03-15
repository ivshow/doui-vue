/**
 * @Author : vshow
 * @Date   : 2021-07-16 15:13
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import { render } from '@';

export const openDrawer = ({
  onOk,
  onClose,
  content,
  okText = '确定',
  cancelText = '取消',
  okButtonProps,
  cancelButtonProps,
  ...props
} = {}) => {
  const { destroy } = render({
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
        await onClose?.();
        this.visible = false;
      }
    },
    render(h) {
      return (
        <a-drawer
          wrapClassName="d-drawer"
          visible={this.visible}
          placement="right"
          afterVisibleChange={destroy}
          width="500"
          onClose={this.handleClose}
          attrs={props}
        >
          <div class="d-drawer-content">{typeof content === 'function' ? content(h) : content}</div>
          <div class="d-drawer-footer">
            <a-space size="middle">
              <d-button type="default" onClick={this.handleClose} attrs={cancelButtonProps}>
                {cancelText}
              </d-button>
              <d-button onClick={this.handleOk} attrs={okButtonProps}>
                {okText}
              </d-button>
            </a-space>
          </div>
        </a-drawer>
      );
    }
  });

  return destroy;
};
