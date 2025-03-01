import { Modal } from "react-native";

type Props = {
  children: React.ReactNode;
  visible: boolean;
  transparent?: boolean;
  onClose: () => void;
  animationType?: "slide" | "none" | "fade";
};

const CustomModal = ({
  children,
  visible,
  transparent = true,
  onClose,
  animationType = "slide",
}: Props) => {
  return (
    <Modal
      visible={visible}
      transparent={transparent}
      onRequestClose={onClose}
      animationType={animationType}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
