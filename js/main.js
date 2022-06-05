var message = ["반갑습니다!", "프로그램은 다운 받았나요??", "얼른 얼른!!", "과제 하기 싫다..", "오늘 하루도 화이팅~!", "수고했어요!", "교수: 아이고 종강이야!", ""]

let info = document.getElementById("info");
let howToUse = document.getElementById("howToUse");
let release_note = document.getElementById("release_note");

let activeTab = info;

email.addEventListener("click", () => {
    var rand = Math.floor(Math.random() * (message.length - 1));
    alert(message[rand]);
})

let lists = naviList.children

for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("click", async () => {
        const actives = document.getElementsByClassName("active");
        console.log(actives);
        console.log(activeTab);
        
        await actives[0].classList.toggle("active");
        await activeTab.classList.toggle("active");

        if (lists[i].innerText === "공지사항") {
            info.classList.toggle("active");
            activeTab = info;
        } else if (lists[i].innerText === "사용법") {
            howToUse.classList.toggle("active");
            activeTab = howToUse;
        } else if (lists[i].innerText === "릴리즈 노트") {
            release_note.classList.toggle("active");
            activeTab = release_note;
        }
    });
}

