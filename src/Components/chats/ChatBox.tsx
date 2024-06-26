import Cookies from "js-cookie";
import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useCustomQuery from "../../hooks/useCustomQuery";
import { IMessage } from "../../interfaces";
import { sendMessage, socket } from "../../services/socket";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const ChatBox = () => {
  const { id } = useParams<{ id: string }>();
  const token = Cookies.get("token");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { doctor } = useSelector((state: RootState) => state.auth);

  const { isLoading, data, error } = useCustomQuery({
    queryKey: [`chats-${id}`],
    url: `chats/${id ?? ""}`,
    config: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");

  useEffect(() => {
    socket.on("listen message", (msg: IMessage) => {
      console.log("listen message:", msg);
      setMessages((prev) => [
        ...prev,
        msg,
      ]);
    });

    // Cleanup listener on component unmount
    return () => {
      socket.off("listen message");
    };
  }, [data]);

  useEffect(() => {
    if (data?.data?.messages) {
      setMessages(data.data.messages);
    }
  }, [data]);

  useEffect(() => {
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (inputMessage.trim() === "" || !id || !doctor) return;
    sendMessage(inputMessage, id);
    setInputMessage("");
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading messages.</p>;
  console.log("id: ", id);

  return (
    <div className="w-full h-full flex flex-col relative">
      <div className="flex-grow overflow-y-auto pb-16 p-3">
        {!id && (
          <div className="flex items-center justify-center text-3xl text-violet-600">
            Select a chat to start messaging
          </div>
        )}
        {id && messages.length === 0 && (
          <div className="flex items-center justify-center text-3xl text-violet-600">
            No messages
          </div>
        )}
        {id &&
          messages.map((message) => (
            <div
              className={`flex gap-2.5 mb-4 ${
                message.userId === doctor?._id ? "justify-end" : ""
              }`}
              key={message._id}
            >
              <div className="grid">
                <h5
                  className={`text-gray-900 text-sm font-semibold leading-snug pb-1 ${
                    message.userId === doctor?._id ? "text-right" : ""
                  }`}
                >
                  {message.userId === doctor?._id
                    ? "You"
                    : data?.data?.patient?.patientName}
                </h5>
                <div className="w-max grid">
                  <div
                    className={`max-w-96 px-3.5 py-2 rounded justify-start items-center gap-3 inline-flex ${
                      message.userId === doctor?._id
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    <h5 className="text-sm font-normal leading-snug">
                      {message.text}
                    </h5>
                  </div>
                  <div className="justify-end items-center inline-flex mb-2.5">
                    <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
                      {new Date(message.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div ref={messagesEndRef} />
      </div>
      {id && (
        <form className="absolute bottom-0 w-full bg-white px-4 py-3 border-t border-gray-200 flex items-center gap-2">
          <div className="flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <g id="User Circle">
                <path
                  id="icon"
                  d="M6.05 17.6C6.05 15.3218 8.26619 13.475 11 13.475C13.7338 13.475 15.95 15.3218 15.95 17.6M13.475 8.525C13.475 9.89191 12.3669 11 11 11C9.6331 11 8.525 9.89191 8.525 8.525C8.525 7.1581 9.6331 6.05 11 6.05C12.3669 6.05 13.475 7.1581 13.475 8.525ZM19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11Z"
                  stroke="#4F46E5"
                  strokeWidth="1.6"
                />
              </g>
            </svg>
            <input
              className="grow shrink basis-0 text-black text-xs font-medium leading-4 focus:outline-none"
              placeholder="Type here..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              className="bg-indigo-600 rounded-2xl px-5 py-2 flex items-center justify-center cursor-pointer"
              onClick={handleSend}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.8955 4.10482C20.0553 4.21665 20.1541 4.39421 20.1541 4.58591V19.4133C20.1541 19.605 20.0553 19.7826 19.8955 19.8944C19.7357 20.0062 19.5345 20.0348 19.3521 19.9704L4.52477 14.6268C4.33842 14.5603 4.205 14.3964 4.1731 14.2019C4.14119 14.0074 4.21664 13.8114 4.37642 13.6996L8.99942 10.4034L4.37642 7.10722C4.21664 6.9954 4.14119 6.79943 4.1731 6.60495C4.205 6.41046 4.33842 6.24652 4.52477 6.18003L19.3521 0.836406C19.5345 0.771966 19.7357 0.800496 19.8955 0.912319Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ChatBox;
