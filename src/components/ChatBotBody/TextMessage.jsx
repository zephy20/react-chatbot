import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  renderMessageOnce,
  handleUserInput,
  disableInput
} from "../../actions";
import styles from "./ChatBotBody.module.scss";
import Loading from "../Loading";
import BotAvatar from "../../assets/icons/BotAvatar";
import UserAvatar from "../../assets/icons/UserAvatar";

function TextMessage(props) {
  const [loading, setLoading] = useState(true);
  const [render, setRender] = useState(false);
  let { delay } = props;

  let { message, user, isFirst, id, rendered, options } = props.content;

  useEffect(() => {
    if (rendered) setLoading(false);
    if (!user && !rendered) {
      let renderTimer = setTimeout(() => {
        setRender(true);
      }, delay);
      return () => {
        clearTimeout(renderTimer);
      };
    } else setRender(true);
  }, [rendered, user, delay]);

  useEffect(() => {
    let { renderMessageOnce, disableInput } = props;
    disableInput(true);
    if (render) {
      let loadMessageTimer = setTimeout(() => {
        setLoading(false);
        if (options) {
          disableInput(true);
        } else disableInput(false);
      }, 1000);

      renderMessageOnce(id);

      return () => {
        clearTimeout(loadMessageTimer);
      };
    }
  }, [render, id, props, options]);

  let { handleUserInput } = props;

  return (
    <div
      className={styles.textMessageContainer}
      style={{
        justifyContent: user ? "flex-end" : "flex-start"
      }}
    >
      {render &&
        (options ? (
          <React.Fragment>
            <div className={styles.optionList}>
              {options &&
                options.map((option, i) => (
                  <div
                    key={i}
                    className={`${styles.optionItemContainer} `}
                    onClick={() => handleUserInput("option")}
                  >
                    <span className={styles.optionItem}>{option}</span>
                  </div>
                ))}
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {isFirst && (
              <div
                className={styles.avatarContainer}
                style={{ order: user ? "1" : "0" }}
              >
                {user ? <UserAvatar /> : <BotAvatar />}
              </div>
            )}
            <div
              style={{
                color: user ? "black" : "#fff",
                background: user ? "#fff" : "blue",
                margin: isFirst ? "10px 0" : "10px",
                maxWidth: !options && "50%"
              }}
              className={styles.bubble}
            >
              {loading ? <Loading /> : message}
            </div>
          </React.Fragment>
        ))}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  renderMessageOnce: id => dispatch(renderMessageOnce(id)),
  handleUserInput: input => dispatch(handleUserInput(input)),
  disableInput: status => dispatch(disableInput(status))
});

export default connect(
  null,
  mapDispatchToProps
)(TextMessage);
