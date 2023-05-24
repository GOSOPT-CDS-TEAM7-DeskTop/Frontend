import { atom } from "recoil";

export const userDataAtom = atom({
  key: "userData",
  default: {userImage : "userImage", nickname : "nickname", account : "account", following : 0},
});