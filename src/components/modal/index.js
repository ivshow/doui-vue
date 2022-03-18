/**
 * @Author : vshow
 * @Date   : 2021-08-07 22:31
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import { render } from '@';

export const openModal = ({ onOk, content, ...props } = {}) => {
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
      }
    },
    render(h) {
      return (
        <a-modal v-model={this.visible} onOk={this.handleOk} afterClose={vm?.destroy} attrs={props}>
          {typeof content === 'function' ? content(h) : content}
        </a-modal>
      );
    }
  });

  return vm;
};

export * from './drawer';
