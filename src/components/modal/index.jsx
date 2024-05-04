import React from "react";
import { Modal } from "antd";
import AppButton from "../button/button";

const CustomModal = ({
  modalTItle,
  isModalOpen = false,
  closable = false,
  footer,
  ModalContent,
}) => {
  return (
    <>
      <Modal
        title={modalTItle}
        open={isModalOpen}
        closable={closable}
        footer={footer}
      >
        {ModalContent}
      </Modal>
    </>
  );
};
export default CustomModal;
