import React from "react";

import { ReactNotifyAlert } from "react-notify-alert";
import "react-notify-alert/dist/index.css";

function Alert({ isOpen, title, infoText, handleAction }) {
  return (
    <ReactNotifyAlert
      isOpen={isOpen}
      type={"confirm" || "fail" || "success"}
      title={title}
      titleClassName={null}
      infoText={infoText}
      infoClassName={null}
      titleImage={null}
      requestAllowBtnText={"확인"}
      requestAllowBtnClassName={null}
      requestCancelBtnText={"취소"}
      requestCancelBtnClassName={null}
      onActionHandle={handleAction}
    />
  );
}

export default Alert;
