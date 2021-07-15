import { newInstance } from '@';

const openModal = ({ onOk, content, ...props } = {}) => {
  const { destroy } = newInstance({
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
        <a-modal v-model={this.visible} attrs={props} onOk={this.handleOk} afterClose={destroy}>
          {typeof content === 'function' ? content(h) : content}
        </a-modal>
      );
    }
  });

  return destroy;
};

export default openModal;
