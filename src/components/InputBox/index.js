import React, { Component } from "react";
import styles from "./InputBox.module.scss";
import { connect } from "react-redux";
import { handleUserInput } from "../../actions";
import SubmitIcon from "../../assets/icons/SubmitIcon";

class InputBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  handleOnChange = e => {
    this.setState({ input: e.target.value });
  };

  handleKeyPress = e => {
    if (e.key === "Enter" || e.key === "enter") {
      this.submitInput();
    }
  };

  validateInput = () => {
    let { input } = this.state;

    if (!input) return false;

    return true;
  };

  submitInput = () => {
    let { input } = this.state;
    let { handleUserInput, disableInput } = this.props;
    if (this.validateInput() && !disableInput) {
      handleUserInput(input);

      this.setState({ input: "" });
    }
  };

  render() {
    let { input } = this.state;
    let { disableInput } = this.props;

    return (
      <div className={styles.inputContainer}>
        <input
          onKeyPress={this.handleKeyPress}
          className={styles.userInput}
          onChange={this.handleOnChange}
          value={input}
          placeholder="Type message here..."
          disabled={disableInput}
        />

        <div className={styles.submitButton} onClick={this.submitInput}>
          <SubmitIcon fill={disableInput ? "#4a4a4a" : "#000000"} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  disableInput: state.disableInput
});

const mapDispatchToProps = dispatch => ({
  handleUserInput: input => dispatch(handleUserInput(input))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputBox);
