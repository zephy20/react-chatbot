import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ChatBotContent from "../../components/ChatBotContent";
import ChatBotIcon from "../../assets/icons/ChatBotIcon";
import { setChatWindow } from "../../actions";
import styles from "./BotContainer.module.scss";
import "../../assets/global/layout.scss";

function ChatbotContainer({ opened, toggleChatWindow, messages }) {
  let { floatButton, active } = styles;

  return (
    <div>
      <div
        className={opened ? `${floatButton} ${active}` : `${floatButton}`}
        onClick={() => toggleChatWindow(!opened)}
      >
        <ChatBotIcon />
      </div>
      <ChatBotContent opened={opened} />
    </div>
  );
}

const mapStateToProps = state => ({
  opened: state.opened,
  messages: state.messages
});

const mapDispatchToProps = dispatch => ({
  toggleChatWindow: opened => dispatch(setChatWindow(opened))
});

ChatbotContainer.propTypes = {
  opened: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatbotContainer);
