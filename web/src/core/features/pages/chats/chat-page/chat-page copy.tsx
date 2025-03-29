import { MainTag } from "@/components/atoms";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { MoreVerticalIcon, Phone, PhoneCallIcon, VideoIcon } from "lucide-react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ChatPage(props: Props) {
  const { id } = await props.params;

  return (
    <MainTag className="w-full flex flex-col justify-between p-4 ">
      <div className="cursor-pointer flex justify-between items-center  border-b">
        <div className="flex items-center gap-2">
          <Avatar className="w-10 h-10 rounded-full">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="w-10 h-10  rounded-full"
            />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col leading-tight">
            <h4 className="font-semibold text-app-text-dark-500">Van</h4>
            <p className="text-sm text-app-text-dark-300 truncate">
              <span>Online</span> &minus; <span>Last Seen </span>
              <span>2:30pm</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-app-blue-500">
          <Phone />
          <VideoIcon />
          <MoreVerticalIcon />
        </div>
      </div>

      <div className="flex flex-col">
        {/* Send */}
        <div className="flex-1">
          <div className="flex flex-col items-start">
            <div className="bg-gray-200 text-app-text-dark-500 py-2 px-4 rounded-lg">
              Hey There!
            </div>
            <span className="text-xs text-gray-400">Today, 8.30pm</span>
          </div>

          {/* Receive */}

          <div className="flex flex-col items-end">
            <div className="bg-app-blue-500 text-white py-2 px-4 rounded-lg">Hello!</div>
            <span className="text-xs text-gray-400 mt-1">Today, 8.33pm</span>
          </div>
        </div>

        <div className="flex items-center">
          <Input placeholder="Type your message here..." />
          <Button>Send</Button>
        </div>
      </div>
    </MainTag>
  );
}
