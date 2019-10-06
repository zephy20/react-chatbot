import React, { Component } from "react";
import styles from "./BotContent.module.scss";
import Header from "../Header";
import ChatBotBody from "../ChatBotBody";
import InputBox from "../InputBox";

export default class ChatBotContent extends Component {
  render() {
    let { botContent, active } = styles;
    let { opened } = this.props;
    return (
      <div>
        <div className={opened ? `${botContent} ${active}` : `${botContent}`}>
          <Header />
          {opened && <ChatBotBody />}
          <InputBox />
        </div>
      </div>
    );
  }
}
