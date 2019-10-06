import {
  SET_CHAT_WINDOW,
  HANDLE_USER_INPUT,
  RENDER_MESSAGE_ONCE,
  HANDLE_DISABLE_INPUT
} from "../actions/types";

let initialState = {
  opened: false,
  disableInput: true,
  messages: [
    {
      id: 1,
      type: "text",
      isFirst: true,
      message: "Hi there!"
    },
    {
      id: 2,
      type: "text",
      message: "May I ask your name?"
    }
  ]
};
const chatWindow = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHAT_WINDOW:
      return {
        ...state,
        opened: !state.opened
      };

    case HANDLE_USER_INPUT:
      let updatedMessages = handleMessages(action.data, state);

      return {
        ...state,
        messages: updatedMessages
      };

    case HANDLE_DISABLE_INPUT:
      return {
        ...state,
        disableInput: action.disableInput
      };

    case RENDER_MESSAGE_ONCE:
      let renderedMessages = renderMessageOnce(action.id, state);
      return {
        ...state,
        messages: renderedMessages
      };

    default:
      return state;
  }
};

const renderMessageOnce = (id, state) => {
  let msgs = [...state.messages];
  let renderMessageIndex = msgs.findIndex(elem => elem.id === id);

  msgs[renderMessageIndex]["rendered"] = true;

  return msgs;
};

const handleMessages = (userInput, state) => {
  let msgs = [...state.messages];

  if (msgs.length === 2) {
    let messages = [
      ...state.messages,
      {
        id: msgs.length + 1,
        type: "text",
        user: true,
        isFirst: true,
        message: userInput,
        rendered: true
      },
      {
        id: msgs.length + 2,
        type: "text",
        isFirst: true,
        message: "Nice to meet you!",
        delay: 1000
      },
      {
        id: msgs.length + 3,
        type: "text",
        message: "Please rate me!",
        delay: 2000
      },
      {
        id: msgs.length + 4,
        type: "text",
        options: ["Amazing!", "Good", "Average", "Boring"],
        delay: 3000
      }
    ];
    return messages;
  }

  if (userInput === "option") {
    let updatedMsgs = msgs.filter(item => {
      if (!("options" in item) === true) return item;
      return null;
    });

    return [
      ...updatedMsgs,
      {
        id: updatedMsgs.length + 1,
        type: "text",
        message: "Thanks for the feedback!",
        rendered: true,
        delay: 1000
      }
    ];
  }

  return [
    ...state.messages,
    {
      id: msgs.length + 1,
      type: "text",
      user: true,
      isFirst: true,
      message: userInput,
      rendered: true
    }
  ];
};

export default chatWindow;
