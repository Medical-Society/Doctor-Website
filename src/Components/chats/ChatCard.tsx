interface IProps {
  name: string
}

const ChatCard = ({name}: IProps) => {
  return (
    <div className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-xl transition duration-200 ease-in-out   ">
        <h1 className="text-lg font-bold">{name}</h1>
    </div>
  )
}

export default ChatCard