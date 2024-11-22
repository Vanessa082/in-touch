import type { DateType, PaginatedResponse } from "./extras.types";

interface User {
  id: string;
  email: string;
  username: string;
  name: string; // this is not unique
  bio: string;
  profilePhoto: string;
  createdAt: DateType;
  updated: DateType;
}

type ProfilePreview = Pick<
  User,
  "id" | "email" | "username" | "name" | "bio" | "profilePhoto"
>;

interface UserProfile {
  id: string;
  userId: string;
  user?: User; // virtual property
  followers: PaginatedResponse<ProfilePreview>;
  following: PaginatedResponse<ProfilePreview>;
  blockedUsers: PaginatedResponse<ProfilePreview>;
}

export type { User, UserProfile, ProfilePreview };
