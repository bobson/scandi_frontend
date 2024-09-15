import { Component, ReactNode } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { toggleModal } from "../store/modalSlice";
import { RootState } from "../store";
import { connect } from "react-redux";

interface ModalProps {
  toggleModal: () => void;
  isModalOpen: boolean;
  children: ReactNode;
}

class Modal extends Component<ModalProps> {
  state = { open: this.props.isModalOpen };

  componentDidUpdate(prevProps: Readonly<ModalProps>): void {
    if (prevProps.isModalOpen !== this.props.isModalOpen) {
      this.setState({ open: this.props.isModalOpen });
    }
  }

  render() {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.props.toggleModal}
        className="relative z-10 overflow-scroll;"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 top-20 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen">
          <div className="flex items-sart justify-end mt-20 sm:mr-10">
            <DialogPanel
              transition
              className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all  data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            >
              {this.props.children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  isModalOpen: state.modal.isModalOpen,
});

const ModalStateToProp = connect(mapStateToProps, {
  toggleModal,
})(Modal);

export default ModalStateToProp;
