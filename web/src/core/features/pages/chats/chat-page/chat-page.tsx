// "use client"

import type { Chat, Message } from "@/interfaces/chat.types";
import { MainTag } from "@/components/atoms";
import { Fetcher } from "@/lib/fetch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials, getProfileURLFromInitials } from "@/lib/utils";

interface Props {
  params: Promise<{ id: string }>;
}



// const messageCard = () => {
//   return (
//     <div>
//       <div>

//       </div>
//     </div>
//   )
// }

export default async function ChatPage(props: Props) {
  const { id } = await props.params;

  const {
    data: { messages, chat },
  } = await Fetcher<{
    messages: Message[];
    chat: Chat;
  }>(`/api/chats/${id}`);

  console.log(messages, 'yo')

  const getPhoto = () => {
    return chat.profileImg.url || getProfileURLFromInitials(chat.name);
  }

  return (
    <MainTag className="w-full h-[95vh] p-3 overflow-y-auto">
      <div className="bg-app-blue-500 flex items-center gap-2 p-4">
        <Avatar>
          <AvatarImage src={getPhoto()} alt={chat.name} />
          <AvatarFallback>
            {getInitials(chat.name)}
          </AvatarFallback>
        </Avatar>
        {/* <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div> */}
        <div>
          <h2 className="text-lg font-bold">{chat.name}</h2>
          <p className="">{ }</p>
        </div>
      </div>

    </MainTag>
  );
}
