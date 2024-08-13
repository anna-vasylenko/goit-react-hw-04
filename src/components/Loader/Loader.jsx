import { ThreeDots } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <ThreeDots
        visible={true}
        height="160"
        width="160"
        color="#9381ff"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default Loader;
