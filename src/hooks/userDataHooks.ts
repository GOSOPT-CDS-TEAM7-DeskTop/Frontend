import { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userDataAtom } from "../atoms/atom";
import { useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";

interface User {
    code: number;
    message: string;
    data: UserData;
  }
  
interface UserData {
    userImage: string;
    nickname: string;
    account: string;
    following: number;
  }


const userDataHooks = () => {
    const userData = useRecoilValue(userDataAtom);
    const setUserData= useSetRecoilState(userDataAtom);

    const getUserData = async () => {
        try {
          const res = await axios.get<User>("https://team7.collab-pinterest.p-e.kr/user");
          setUserData(res.data.data);
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() => {
        getUserData();
      }, []);

  return { userData };
};

export default userDataHooks;