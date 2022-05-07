const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const submit = document.getElementById("submit");

function reset_buttons() {
  let buttons = [btn1, btn2, btn3, btn4, btn5];

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].style.backgroundColor == "rgb(124, 135, 152)") {
      buttons[i].style.backgroundColor = "#262e38";
      buttons[i].style.color = "#7c8798";
      return buttons[i].innerHTML;
    }
  }
}

btn1.addEventListener("click", function onClick() {
  reset_buttons();
  btn1.style.backgroundColor = "#7C8798";
  btn1.style.color = "white";
});

btn2.addEventListener("click", function onClick() {
  reset_buttons();
  btn2.style.backgroundColor = "#7C8798";
  btn2.style.color = "white";
});

btn3.addEventListener("click", function onClick() {
  reset_buttons();
  btn3.style.backgroundColor = "#7C8798";
  btn3.style.color = "white";
});

btn4.addEventListener("click", function onClick() {
  reset_buttons();
  btn4.style.backgroundColor = "#7C8798";
  btn4.style.color = "white";
});

btn5.addEventListener("click", function onClick() {
  reset_buttons();
  btn5.style.backgroundColor = "#7C8798";
  btn5.style.color = "white";
});

submit.addEventListener("click", function onClick() {
  let selection = reset_buttons();
  console.log(selection);
  location.href = "thankyou.html";
});
