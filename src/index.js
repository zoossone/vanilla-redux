import {createStore} from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

/**
 * 
 * 지금 하는 방식은 dataless입니다.
 * 만약 바닐라 자바스크립트 방식으로 데이터를 저장하고 싶다면 array를 하나 만들어서 그 안에 todo들을 집어 넣어서 저장해주는 방식을 채택할 수 있겠죠.
 * 새로운 데이터를 배열에 추가하고 빼면 빼주고 저장하면 로컬에 저장해주고 이게 얼마나 많은 함수를 필요로 할지 모릅니다.
 * 리덕스는 이런 행동들을 좀 더 멋지게 작동하게 해줍니다.
*/

// 리듀서는 항상 두가지 전달인자를 받아야 합니다.
// 현재 상태와 action 객체이죠
const reducer = (state = [], action) => { // 첫 state가 없다면 빈 array를 할당해줍니다.
  switch (action.type) {
    case ADD_TODO:
      return []; // NEVER MUTATE STATE
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
}

const store = createStore(reducer);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({type: ADD_TODO, text: toDo});
}

form.addEventListener("submit", onSubmit); // submit을 하면 enter키도 먹는다 짱 신기