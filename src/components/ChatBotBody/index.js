import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./ChatBotBody.module.scss";
import TextMessage from "./TextMessage";

class ChatBotBody extends React.Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    let calcHeight = "112px";
    let { messages } = this.props;
    let { chatBody } = styles;
    return (
      <div
        style={{
          height: `calc(520px - ${calcHeight})`
        }}
        className={chatBody}
      >
        {messages.length > 0 &&
          messages.map((message, i) => (
            <TextMessage
              key={i}
              delay={message["delay"] ? message["delay"] : (i + 1) * 1000}
              content={message}
            />
          ))}
        <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            this.messagesEnd = el;
          }}
        ></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messages };
};

ChatBotBody.propTypes = {
  messages: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(ChatBotBody);
