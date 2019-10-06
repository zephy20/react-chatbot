import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setChatWindow } from "../../actions";
import styles from "./Header.module.scss";
import CloseIcon from "../../assets/icons/CloseIcon";

const Header = ({ opened, toggleChatWindow }) => {
  let { header, closeIcon } = styles;
  return (
    <div className={header}>
      <h2>React ChatBot</h2>
      <div className={closeIcon} onClick={() => toggleChatWindow(!opened)}>
        <CloseIcon />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  opened: state.opened
});

const mapDispatchToProps = dispatch => ({
  toggleChatWindow: opened => dispatch(setChatWindow(opened))
});

Header.propTypes = {
  opened: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
