import ChatCard from "../Components/chats/ChatCard"

interface IProps {

}

const Chats = ({}: IProps) => {
  return (
    <div className="h-full flex">
        <div className="flex flex-col gap-3 p-3 w-1/4 border-r border-gray-200">
            <ChatCard name="Dr. John Doe"/>
            <ChatCard name="Dr. Jane Doe"/>
            <ChatCard name="Dr. James Doe"/>
            <ChatCard name="Dr. Janet Doe"/>
        </div>
        
    </div>
  )
}

export default Chats