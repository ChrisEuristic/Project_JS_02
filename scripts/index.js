//자바스크립트 렌더링 제어

const domAdd = () => {
  console.log("domAdd");
  const btn1 = document.createElement("button");
  btn1.innerHTML = "버튼1";
  btn1.id = "bt1";
  btn1.className = "btc";
  document.getElementById("content").append(btn1);

  const btn2 = document.createElement("button");
  btn2.innerHTML = "버튼2";
  btn2.id = "bt2";
  btn2.className = "btc";
  document.getElementById("content").append(btn2);

  const btn3 = document.createElement("button");
  btn3.innerHTML = "버튼3";
  btn3.id = "bt3";
  btn3.className = "btc";
  document.getElementById("content").append(btn3);
};

const domRead = () => {
  const btc = document.querySelectorAll(".btc");
  console.log(btc);

  //for 순회
  console.log("** for **");
  for(let i=0; i<btc.length; i++){
    console.log(btc[i]);
  }

  //for ... in 순회
  console.log("** for in **");
  for(let k in btc) {
    console.log(btc[k]);
  }

  //forEach 순회
  //foreach(콜백함수)
  console.log("** foreach **");
  btc.forEach((item) => console.log(item));

  //for...of 순회
  //공부더하자
  console.log("** for of **");
  for(let [k, item] of btc.entries()){
    console.log(k, item);
    if(k == 1) break;
  }
};

const btnClick = (div0, bt0) => {
  bt0.addEventListener("click", () => {
    div0.innerHTML = `${bt0.innerHTML}버튼 클릭`;
  });
};

// DOM 요소 수정 함수
const domUpdate = () => {
  const div1 = document.querySelector("#div1");
  //div1.innerHTML = "요소를 수정하고 있습니다.";

  const btArray = document.querySelectorAll(".btc");
  
  const bt1 = document.querySelector("#bt1");
  const bt2 = document.querySelector("#bt2");
  const bt3 = document.querySelector("#bt3");

  btnClick(div1, bt1);
  btnClick(div1, bt2);
  btnClick(div1, bt3);

  for(let item of btArray){
    item.innerHTML = `${item.innerHTML}`;
  }

  // bt1.addEventListener("click", () => {
  //   console.log(bt1.innerHTML);
  //   div1.innerHTML = `<h1>${bt1.innerHTML}</h1>`;
  // });
};

document.addEventListener("DOMContentLoaded", () => {   // DOM 문서가 모두 로드가 되면 해당 함수를 실행한다.
  // DOM 요소 생성
  domAdd();

  // DOM 요소 접근
  domRead();

  // DOM 요소 변경
  domUpdate();
});