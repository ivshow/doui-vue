/**
 * @Author : vshow
 * @Date   : 2021-08-07 22:31
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import { render } from '@';

export const openModal = ({ onOk, content, onCancel, ...props } = {}) => {
  const vm = render({
    data() {
      return {
        visible: true,
        loading: false
      };
    },
    methods: {
      async handleOk() {
        try {
          this.loading = true;
          await onOk?.();
          this.visible = false;
        } finally {
          this.loading = false;
        }
      },
      async handleCancel() {
        await onCancel?.();
        this.visible = false;
      }
    },
    render(h) {
      return (
        <a-modal
          visible={this.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          afterClose={vm?.destroy}
          confirmLoading={this.loading}
          props={props}
        >
          {typeof content === 'function' ? content(h) : content}
        </a-modal>
      );
    }
  });

  return vm;
};

export * from './drawer';
