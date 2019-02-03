import React, { Component } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "-20px"
  }
};

Modal.setAppElement("#root");

class CVDownloadModel extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-light font-weight-bold"
          onClick={this.openModal}
        >
          Download CV
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-header modal-header-color">
            <h5 className="modal-title text-white">Download CV</h5>
            <button
              type="button"
              className="close text-white"
              onClick={this.closeModal}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input
              type="button"
              onClick={this.props.onDownload}
              className="btn btn-primary font-weight-bold mr-5"
              value="Download CV"
            />
            <input
              type="button"
              className="btn btn-primary font-weight-bold"
              value="Genarate CV"
            />
          </div>
          <div className="modal-footer">
            <p className="text-danger">
              * Genarate CV will create .pdf file based on current details that
              you can see in web page.
            </p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CVDownloadModel;
