import { createStore } from "redux";

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number  = document.querySelector("span");

const ADD = "ADD"; // 오타로 인한 실수를 줄이기 위해서
const MINUS = "MINUS";

number.innerText = 0; // HTML을 보여주기 위한 초기화


/**
 * 보통 리듀서에서는 초기화를 사용한다. state값이 설정되어있지 않으면 initailValue를 넣어줄 수 있다.
 * reducer에서 반환하는 어떤값이든 그게 곧 상태가 된다.
 * 그리고 data의 modify는 오직 리듀서에서만 이뤄진다. 다른 함수에서는 절대 관리할 수 없다.
 * action 객체를 보내줘서 reducer를 동작할 수 있다.
 * 
 */
const reducer = (count = 0, action) => {
  switch(action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(reducer);

const onClick = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onClick); // statre의 변화를 구독해서 따라갈 수 있다.

plus.addEventListener("click", () => { countStore.dispatch({ type: ADD }) }); // 디스패치를 통해 action 객체를 보내줄 수 있다.
minus.addEventListener("click", () => { countStore.dispatch({ type: MINUS }) });