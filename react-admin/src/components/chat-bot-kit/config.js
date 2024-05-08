import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "./Avatar";

const config = {
  botName: "EnviroScope Driver",
  initialMessages: [
    createChatBotMessage(`Welcome to EnviroScope!`),
  ],
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
  },
};

export default config;
