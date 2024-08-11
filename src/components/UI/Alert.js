import { useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Alert = ({ success = true, children }) => {
  const alertRef = useRef(null);
  const onClosehandler = () => {
    alertRef.current.style.display = "none"
  };
  return (
    <div
      ref={alertRef}
      className={`alert alert-${success ? "success" : "danger"}`}
    >
      {children}
      <AiOutlineCloseCircle className="close" onClick={onClosehandler} />
    </div>
  );
};
export default Alert;
