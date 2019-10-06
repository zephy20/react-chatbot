import {
  SET_CHAT_WINDOW,
  HANDLE_USER_INPUT,
  RENDER_MESSAGE_ONCE,
  HANDLE_DISABLE_INPUT
} from "./types";

export const setChatWindow = status => ({
  type: SET_CHAT_WINDOW,
  opened: status
});

export const handleUserInput = data => ({
  type: HANDLE_USER_INPUT,
  data
});

export const disableInput = status => ({
  type: HANDLE_DISABLE_INPUT,
  disableInput: status
});

export const renderMessageOnce = id => ({
  type: RENDER_MESSAGE_ONCE,
  id
});
