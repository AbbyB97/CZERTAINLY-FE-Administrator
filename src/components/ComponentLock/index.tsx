import React from "react";
import styles from "./ComponentLock.module.scss";
import cx from "classnames";
import lockIcon from "images/lock-icon.svg";
import errorIcon from "images/exlaimation-icon.png";
import networkErrorIcon from "images/no-connection.png";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  locked?: boolean;
  errored?: boolean;
  lockText?: string;
  networkIssue?: boolean;
}

const ComponentLock = ({
  children,
  locked,
  errored,
  lockText,
  networkIssue,
}: Props) => {
  return (
    <div className={cx(styles.lockComponentMainContainer)}>
      {locked && (
        <div className={styles.lockImageContainerStyle}>
          <img
            src={
              networkIssue ? networkErrorIcon : errored ? errorIcon : lockIcon
            }
            alt="Component is locked"
            width="200px"
            height="200px"
          />
          {!lockText ? (
            <h3 className={styles.lockImageText}>
              {errored
                ? "Something went wrong… you can try to refresh"
                : "You do not have enough permissions"}
            </h3>
          ) : (
            <h3 className={styles.lockImageText}> {lockText}</h3>
          )}
        </div>
      )}

      <div
        className={cx(styles.lockChildrenContainer, {
          [styles.componentLockedStyle]: locked,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default ComponentLock;
