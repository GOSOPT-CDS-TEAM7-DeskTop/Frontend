import { atom } from "recoil";

export const userDataAtom = atom({
  key: "userData",
  default: {userImage : "아무거나", nickname : "아무거나", account : "아무거나", following : 0},
});