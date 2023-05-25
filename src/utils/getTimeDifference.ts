// 날짜 차이를 계산해주는 함수
export default function getTimeDifference (createdTimeData) {
  const nowTime = new Date();
  const createdTime = createdTimeData.replace("T", " ");
  const dateCreatedTime = new Date(createdTime.toString());
  // 초 (밀리초)
  const seconds = 1;
  // 분
  const minute = seconds * 60;
  // 시
  const hour = minute * 60;
  // 일
  const day = hour * 24;
  // 달
  const month = day * 30;
  //년
  const year = month * 12;

  var elapsedTime = Math.trunc((nowTime.getTime() - dateCreatedTime.getTime()) / 1000);
  var elapsedText = "";
  if (elapsedTime < seconds) {
    elapsedText = "방금 전";
  } else if (elapsedTime < minute) {
    elapsedText = elapsedTime + "s";
  } else if (elapsedTime < hour) {
    elapsedText = Math.trunc(elapsedTime / minute) + "m";
  } else if (elapsedTime < day) {
    elapsedText = Math.trunc(elapsedTime / hour) + "h";
  } else if (elapsedTime < month) {
    elapsedText = Math.trunc(elapsedTime / day) + "d";
  } else if (elapsedTime < year) {
    elapsedText = Math.trunc(elapsedTime / month) + "m";
  }
  return elapsedText;
};
