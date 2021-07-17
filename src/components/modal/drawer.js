/*
 * @Author : jaydon
 * @Date   : 2021-07-16 15:13
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import { renderComponent } from '@';

export const openDrawer = ({ onOk, content, ...props } = {}) => {
  const { destroy } = renderComponent({
    data() {
      return {
        visible: true
      };
    },
    methods: {
      async handleOk() {
        await onOk?.();
        this.handleClose();
      },
      handleClose() {
        this.visible = false;
      }
    },
    render(h) {
      return (
        <a-drawer
          wrapClassName="d-drawer"
          visible={this.visible}
          placement="right"
          onOk={this.handleOk}
          afterVisibleChange={destroy}
          width="500"
          onClose={this.handleClose}
          attrs={props}
        >
          <div class="d-drawer-content">{typeof content === 'function' ? content(h) : content}</div>
          <div class="d-drawer-footer">
            <a-space size="middle">
              <d-button type="default" onClick={this.handleClose}>
                取消
              </d-button>
              <d-button onClick={this.handleOk} loading={this.vuex_loading}>
                确定
              </d-button>
            </a-space>
          </div>
        </a-drawer>
      );
    }
  });

  return destroy;
};
