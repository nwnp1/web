let target = document.querySelector("#dynamic"); //dynamic이란 문서 개체 선택

function randomString(){
    let stringArr = ["Learn to HTML", "Learn to CSS",
    "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
    //배열 문자열 중에서 랜덤하게 하나 선택, 소수점을 버리도록 Math.floor라는 메써드 이용
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    //해당 문자열을 이 기준을 이용해서 배열로 분리시켜라
    let selectStringArr = selectString.split("");

    return selectStringArr;

}

//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString()); 
}

//배열값을 이용해 텍스트 한글자씩 출력
function dynamic(randomArr){

    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 80);
    }else{
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active") //toggle메써드로 active라는 클래스가 추가되었다가 삭제되는걸 반복할 수 있게 함
}
setInterval(blink,500);//반복함수를 이용해서 blink함수를 0.5초마다 실행