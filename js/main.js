var message = ["반갑습니다!", "프로그램은 다운 받았나요??", "얼른 얼른!!", "과제 하기 싫다..", "오늘 하루도 화이팅~!", "수고했어요!", "교수: 아이고 종강이야!", ""]

email.addEventListener("click", () => {
    var rand = Math.floor(Math.random() * (message.length));
    alert(message[rand]);
})