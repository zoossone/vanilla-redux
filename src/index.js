

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

/**
 * 
 * 지금 하는 방식은 dataless입니다.
 * 만약 바닐라 자바스크립트 방식으로 데이터를 저장하고 싶다면 array를 하나 만들어서 그 안에 todo들을 집어 넣어서 저장해주는 방식을 채택할 수 있겠죠.
 * 새로운 데이터를 배열에 추가하고 빼면 빼주고 저장하면 로컬에 저장해주고 이게 얼마나 많은 함수를 필요로 할지 모릅니다.
 * 리덕스는 이런 행동들을 좀 더 멋지게 작동하게 해줍니다.
*/



const createTodo = (toDo) => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  createTodo(toDo);
}

form.addEventListener("submit", onSubmit); // submit을 하면 enter키도 먹는다 짱 신기