import React from 'react';
import ReactDOM from 'react-dom';

const appRoot = document.getElementById('root');
const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.className = 'my-modal';
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

class Parent extends React.Component {
  state = { show: false };
  openModal = this.openModal.bind(this);
  closeModal = this.closeModal.bind(this);

  closeModal() {
    this.setState({ show: false });
  }

  openModal() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open</button>
        <div onClick={this.closeModal}>
          <Modal>
            {this.state.show ? <Child/> : null}
          </Modal>
        </div>
      </div>
    );
  }
}

function Child() {
  return (
    <div>
      This is my modal. There are many like it, but this one is mine. My modal is my best friend. It is my life. I must master it as I master my life. My modal, without me, is useless.
      <button>Close</button>
    </div>
  );
}

ReactDOM.render(<Parent />, appRoot);