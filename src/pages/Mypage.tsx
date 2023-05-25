import UserProfile from "../components/Mypage/UserProfile";
import HeaderBar from "../components/layouts/HeaderBar";
import CategorySection from "../components/Mypage/CategorySection";
import QuestionMark from "../components/common/QuestionMark";
import SaveArticleSection from "../components/Mypage/SaveArticleSection";

function Mypage() {
  return (
    <>
        <HeaderBar/>
        <UserProfile/> 
        <CategorySection/>
        <QuestionMark/>
        <SaveArticleSection/>
     </>

    );
}

export default Mypage;


