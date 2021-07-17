import { renderComponent } from '@';

export const openModal = ({ onOk, content, ...props } = {}) => {
  const { destroy } = renderComponent({
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
        <a-modal
          v-model={this.visible}
          onOk={this.handleOk}
          afterClose={destroy}
          confirmLoading={this.vuex_loading}
          attrs={props}
        >
          {typeof content === 'function' ? content(h) : content}
        </a-modal>
      );
    }
  });

  return destroy;
};

export * from './drawer';
