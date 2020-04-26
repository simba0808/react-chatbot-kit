import React, { useEffect, useState } from "react";
import { ConditionallyRender } from "react-util-kit";

import ChatBotMessageAvatar from "./ChatBotMessageAvatar/ChatBotMessageAvatar";
import Loader from "../Loader/Loader";

import "./ChatBotMessage.css";
import { callIfExists } from "../Chat/chatUtils";

const ChatBotMessage = ({
  message,
  withAvatar,
  loading,
  messages,
  customComponents,
  setState,
  customStyles,
  delay,
  id,
}) => {
  const [show, toggleShow] = useState(false);
  useEffect(() => {
    const disableLoading = (messages, setState) => {
      let defaultDisableTime = 750;
      if (delay) defaultDisableTime += delay;
      setTimeout(() => {
        const message = messages.find((message) => message.id === id);
        message.loading = false;

        setState((state) => ({ ...state, messages: messages }));
      }, defaultDisableTime);
    };

    disableLoading(messages, setState);
  }, [delay, id, messages, setState]);

  useEffect(() => {
    if (delay) {
      setTimeout(() => toggleShow(true), delay);
    } else {
      toggleShow(true);
    }
  }, [delay]);

  const chatBoxCustomStyles = {};
  const arrowCustomStyles = {};
  if (customStyles) {
    chatBoxCustomStyles.backgroundColor = customStyles.backgroundColor;
    arrowCustomStyles.borderRightColor = customStyles.backgroundColor;
  }

  return (
    <ConditionallyRender
      ifTrue={show}
      show={
        <div className="chat-bot-message-container">
          <ConditionallyRender
            ifTrue={withAvatar}
            show={
              <ConditionallyRender
                ifTrue={customComponents.botAvatar}
                show={callIfExists(customComponents.botAvatar)}
                elseShow={<ChatBotMessageAvatar />}
              />
            }
          />

          <ConditionallyRender
            ifTrue={customComponents.botChatMessage}
            show={callIfExists(customComponents.botChatMessage, {
              message,
              loader: <Loader />,
            })}
            elseShow={
              <div className="chat-bot-message" style={chatBoxCustomStyles}>
                <ConditionallyRender
                  ifTrue={loading}
                  show={<Loader />}
                  elseShow={<span>{message}</span>}
                />
                <ConditionallyRender
                  ifTrue={withAvatar}
                  show={
                    <div
                      className="chat-bot-message-arrow"
                      style={arrowCustomStyles}
                    ></div>
                  }
                />
              </div>
            }
          />
        </div>
      }
    />
  );
};

export default ChatBotMessage;