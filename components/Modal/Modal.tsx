import React from "react";
import { Modal, ModalBody } from "reactstrap";

const Modals = (props: any) => {
  const { isOpens, setIsOpen, children } = props;
  return (
    <div>
      <Modal
        centered
        fullscreen="sm"
        size="lg"
        isOpen={isOpens}
        toggle={() => setIsOpen(false)}
      >
        <ModalBody>{children}</ModalBody>
      </Modal>
    </div>
  );
};

export default Modals;
