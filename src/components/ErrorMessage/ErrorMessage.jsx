import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ text }) => {
  return (
    <div className={s.errorWrapper}>
      <p>{text}</p>
    </div>
  );
};

export default ErrorMessage;
