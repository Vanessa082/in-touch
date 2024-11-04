import { PropsWithChildren } from "react";

export default function ChatsLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full items-start justify-start gap-1">
      <div className="min-h-[95vh] w-full max-w-[500px] flex-1 border">
        Contacts List
      </div>

      <div className="min-h-[95vh] w-full flex-1 border">{children}</div>
    </div>
  );
}
