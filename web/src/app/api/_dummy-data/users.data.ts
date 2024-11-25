import type { ProfilePreview } from "@/interfaces/user.types";

const IntouchAdmin = {
  id: "user_1",
  email: "intouch@gmail.com",
  username: "intouch",
  name: "Intouch",
  bio: "Creator of @intouch",
  profileImg: {
    mediaType: "",
    url: "https://github.com/shadcn.png",
  },
} as const;

const UsersData = [
  IntouchAdmin,
  {
    id: "user_2",
    email: "bruno@gmail.com",
    username: "bruno",
    name: "Bruno",
    bio: "forever young",
    profileImg: "",
  },
  {
    id: "user_3",
    email: "maria@gmail.com",
    username: "maria",
    name: "Maria",
    bio: "queen",
    profileImg: "",
  },
  {
    id: "user_4",
    email: "nfor_vini@gmail.com",
    username: "nfor_vini",
    name: "Nfor Vini JR",
    bio: "Real madrid 7",
    profileImg: "",
  },
  {
    id: "user_5",
    email: "ganston_che@gmail.com",
    username: "ganston_che",
    name: "Gaston Che",
    bio: "Lead front end developer at GodmodeHq",
    profileImg: "",
  },
] as const;

export { IntouchAdmin, UsersData };
