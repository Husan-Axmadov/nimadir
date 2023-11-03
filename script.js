let text_number4 = document.createElement("h2");
text_number4.textContent = "24";
text_number4.style.color = "#fff";
text_number4.style.fontSize = "64px";
text_number4.style.marginTop = "46px";
text_number4.style.marginBottom = "3px";
text_number4.style.textAlign = "center";
milliseconds.appendChild(text_number4);

let text_p4 = document.createElement("p");
text_p4.textContent = "Milliseconds";
text_p4.style.color = "#fff";
text_p4.style.fontSize = "16px";
text_p4.style.textAlign = "center";
milliseconds.appendChild(text_p4);

//---Button box
let btn_box = document.createElement("div");
btn_box.style.marginBottom = "55px";
btn_box.style.textAlign = "center";
box2.appendChild(btn_box);

//--START button

let btn_Start = document.createElement("button");
btn_Start.textContent = "Start";
btn_Start.style.width = "185px";
btn_Start.style.height = "61px";
btn_Start.style.borderRadius = "13px";
btn_Start.style.color = "#fff";
btn_Start.style.fontSize = "32px";
btn_Start.style.backgroundColor = "#080F1A";
btn_box.appendChild(btn_Start);

//---Pouse button

let btn_Pause = document.createElement("button");
btn_Pause.textContent = "Pause";
btn_Pause.style.width = "185px";
btn_Pause.style.height = "61px";
btn_Pause.style.borderRadius = "13px";
btn_Pause.style.marginLeft = "40px";
btn_Pause.style.marginRight = "40px";
btn_Pause.style.color = "#fff";
btn_Pause.style.fontSize = "32px";
btn_Pause.style.backgroundColor = "#080F1A";
btn_box.appendChild(btn_Pause);

//---Reset button

let btn_Reset = document.createElement("button");
btn_Reset.textContent = "Reset";
btn_Reset.style.width = "185px";
btn_Reset.style.height = "61px";
btn_Reset.style.borderRadius = "13px";
btn_Reset.style.color = "#fff";
btn_Reset.style.fontSize = "32px";
btn_Reset.style.backgroundColor = "#080F1A";
btn_box.appendChild(btn_Reset);

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let intervalID;

btn_Start.addEventListener("click", () => {
  btn_Start.setAttribute("disabled", true);
  intervalID = setInterval(showMilliseconds, 10);
});

btn_Pause.addEventListener("click", () => {
  btn_Start.removeAttribute("disabled");
  clearInterval(intervalID);
});

btn_Reset.onclick = () => {
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  showMilliseconds();
};

function showMilliseconds() {
  // console.log(milliseconds);
  if (milliseconds == 100) {
    seconds++;
    milliseconds = 0;
  }
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes == 60) {
    hours++;
    minutes = 0;
  }
  text_number4.textContent = milliseconds++;
  text_number3.textContent = seconds;
  text_number2.textContent = minutes;
  text_number.textContent = hours;
}
