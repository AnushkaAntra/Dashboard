import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import './chat-bot-kit/Chatbot.css';
import './chat-bot-kit/Chatbot_darkmode.css'
import ActionProvider from "./chat-bot-kit/ActionProvider";
import MessageParser from "./chat-bot-kit/MessageParser";
import config from "./chat-bot-kit/config";

const Chart = () => {
  const data = [
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical scripter", students: 700 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 1000 },
  ];
  const pdata = [
    {
      name: "MongoDb",
      student: 11,
      fees: 120,
    },
    {
      name: "Javascript",
      student: 15,
      fees: 12,
    },
    {
      name: "PHP",
      student: 5,
      fees: 10,
    },
    {
      name: "Java",
      student: 10,
      fees: 5,
    },
    {
      name: "C#",
      student: 9,
      fees: 4,
    },
    {
      name: "C++",
      student: 10,
      fees: 8,
    },
  ];
  return (
    <div>
      <div className="flex p-1 w-full justify-between">
        <div className="flex p-1 w-1/2 m-2 my-1 place-items-center justify-center bg-lightestPrimary dark:bg-darkestPrimary dark:bg-opacity-70">
          <ResponsiveContainer width="100%" aspect={3}>
            <LineChart data={pdata} margin={{ right: 300 }}>
              <CartesianGrid />
              <XAxis dataKey="name" interval={"preserveStartEnd"} />
              <YAxis></YAxis>
              <Legend />
              <Tooltip />
              <Line dataKey="student" stroke="black" activeDot={{ r: 8 }} />
              <Line dataKey="fees" stroke="red" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex p-1 w-1/2 m-2 my-1 place-items-center justify-center bg-lightestPrimary dark:bg-darkestPrimary dark:bg-opacity-70">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
      <div className="flex p-1 w-full justify-between">
        <div className="flex p-1 w-1/3 m-2 my-1 place-items-center justify-center bg-lightestPrimary dark:bg-darkestPrimary dark:bg-opacity-70">
          <BarChart width={150} height={150} data={data}>
            <Bar dataKey="students" fill="green" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </BarChart>
        </div>
        <div className="flex p-1 w-1/3 m-2 my-1 place-items-center justify-center bg-lightestPrimary dark:bg-darkestPrimary dark:bg-opacity-70">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              dataKey="students"
              outerRadius={100}
              fill="green"
            />
          </PieChart>
        </div>
        <div className="flex p-1 w-1/3 m-2 my-1 place-items-center justify-center bg-lightestPrimary dark:bg-darkestPrimary dark:bg-opacity-70">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZio-5HWYz6N9hdOX12u6_RGbUU--cBxEVXq0jjUZshw&s"
            alt="geo_chart"
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
