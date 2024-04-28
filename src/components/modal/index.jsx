import React from "react";
import { Modal } from "antd";

const CustomModal = ({
  isModalOpen = false,
  setIsModalOpen,
  haveOk,
  haveCancel,
}) => {
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        // onOk={false}
        // onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default CustomModal;
