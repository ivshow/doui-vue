/**
 * @Author : vshow
 * @Date   : 2021-08-07 22:31
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import { _, render } from '@';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

export const openModal = ({ onOk, content, onCancel, ...props } = {}) => {
  const vm = render({
    data() {
      return {
        visible: true,
        confirmLoading: false,
        cancelLoading: false
      };
    },
    methods: {
      async handleOk() {
        try {
          this.confirmLoading = true;
          await onOk?.();
          this.visible = false;
        } finally {
          this.confirmLoading = false;
        }
      },
      async handleCancel(e) {
        try {
          const { className } = e.target;
          const isButton = typeof className === 'string' && e.target.className.includes('cancel-button');

          this.cancelLoading = true;
          await onCancel?.({ isButton });
          this.visible = false;
        } finally {
          this.cancelLoading = false;
        }
      }
    },
    render(h) {
      const baseProps = {
        cancelButtonProps: {
          props: {
            loading: this.cancelLoading
          },
          class: 'cancel-button'
        }
      };

      return (
        <a-config-provider locale={zhCN}>
          <a-modal
            visible={this.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            afterClose={vm?.destroy}
            confirmLoading={this.confirmLoading}
            props={_.merge(baseProps, props)}
          >
            {typeof content === 'function' ? content(h) : content}
          </a-modal>
        </a-config-provider>
      );
    }
  });

  return vm;
};

export * from './drawer';
