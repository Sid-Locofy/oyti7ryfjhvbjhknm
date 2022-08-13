import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { GroupComponent } from "./GroupComponent";
import styles from "./css/FrameComponent.module.css";

export const FrameComponent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/frame-2446");
  }, [navigate]);

  return (
    <div className={styles.frameDiv}>
      <button className={styles.frameButton} onClick={onFrameButtonClick} />
      <GroupComponent />
    </div>
  );
};
