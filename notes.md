### Database Schemas

```ts
  interface MediaContent {
    mediaType: String, key: String,
  }
```

```ts
 interface Post {
  id: { type: String, required: true },
  user: { type: String, ref: "User" },
  textContent: { type: String, ref: String, max: 300, trim: true },
  mediaContent: [MediaContent],
  createdAt: { type: Date, default: new Date().toIsoString() },
  updatedAt: { type: Date, default: new Date().toIsoString() },
 }
```

```ts
 interface UserProfile {
  id: { type: String,  required: true },
  userId: { type: String, ref: "User" },
  followers: [{
    user: SchemaId, ref: "User",
  }],
  following: [{
    user: SchemaId, ref: "User",
  }],
 }
```

```ts
  interface BlockedUsers {
    id: { type: String, required },
    userId: { type: String, required },
    data: [{
      user: SchemaId, ref: "User",
    }],
  }
```

```ts
 interface User {
  id: { type: String,  required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  profilePhoto: {
    type: String, default: "", // use a 
  },
  profile: {
    type: String, ref: "UserProfile",
  },
  blockedUsers: {
    type: String, ref: "BlockedUser",
  }
 }
```

```ts
 interface Chat {
   id: { type: String, required: true },
   latestMessage: { type: SchemaId, ref: "Message" },
   isGroupChat: { type: Boolean, default: false },
   groupAdmins: [{
      type: String, ref: "User",
   }];
 }
```

```ts
  interface Message {
   id: { type: String, required: true },
   sender: { type: SchemaId, ref: "User" },
   recepient: { type: SchemaId, ref: "User" },
   textContent: { type: String, required: true, trim: true },
   mediaContent: [MediaContent],
   createdAt: { type: Date, default: new Date().toIsoString() },
   updatedAt: { type: Date, default: new Date().toIsoString() },
   seen: {
    value: { type: Boolean, default: false },
    at: { type: Date }
   }
  }
```
