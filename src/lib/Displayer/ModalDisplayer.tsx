import { useState } from "react";
import { ComponentDisplayer } from "../../ComponentDisplayer";
import { Button, Modal } from "../components";

export const ModalDisplayer = (): React.ReactNode => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>Modal</ComponentDisplayer.Title>
      <ComponentDisplayer.Content>
        <Button onClick={openModal}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={closeModal} title="Modal">
          <div></div>
        </Modal>
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
