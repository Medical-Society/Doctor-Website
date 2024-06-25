interface IProps {
  name: string
}

const ChatCard = ({name}: IProps) => {
  return (
    <div className="flex items-center p-3 border-b border-gray-200 w-full">
        <h1 className="text-lg font-bold">{name}</h1>
    </div>
  )
}

export default ChatCard