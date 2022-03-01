const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    // padStart() -> String 값에서만 실행됨 ---> String으로 감싸줘야함 
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval() 1초 뒤에 실행되기 때문에 한번만 바로 실행되는 ()써서 getClock 함수를 먼저 실행해준다. 
// 실행되자마자 시간이 표시되길 바라니까 해줘야 한다.
// 안해주면 초기 설정인 00:00:00 먼저 나오고 1초 뒤에 시간이 표시된다.
getClock(); 
setInterval(getClock, 1000);