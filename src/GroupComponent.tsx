import { FunctionComponent } from "react";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Icon } from "@mui/material";
import { Button as AntButton } from "antd";
import { Button as BsButton } from "react-bootstrap";
import styles from "./css/GroupComponent.module.css";

export const GroupComponent: FunctionComponent = () => {
  return (
    <div className={styles.groupDiv}>
      <Button
        className={styles.buttonContainedTextAndIco}
        variant="contained"
        color="primary"
        endIcon={<Icon>arrow_forward_sharp</Icon>}
      >
        Button
      </Button>
      <AntButton
        className={styles.buttonPrimaryTextAntButton}
        type="primary"
        size="middle"
        shape="default"
      >
        Button
      </AntButton>
      <BsButton
        className={styles.buttonDefaultBsButton}
        variant="primary"
        size="lg"
      >
        Button
      </BsButton>
    </div>
  );
};
