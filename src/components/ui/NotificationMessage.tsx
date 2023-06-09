import { FiCheckCircle } from "react-icons/fi";
interface NotificationMessageProps {
  response: boolean;
}

export const NotificationMessage = ({ response }: NotificationMessageProps) => {
  return (
    <div className={`notification ${response ? "is-success" : ""}`}>
      <div className="notification__wrap">
        <span className="notification__icon">
          <FiCheckCircle />
        </span>
        <span className="notification__message">Successfully submitted</span>
      </div>
    </div>
  );
};
