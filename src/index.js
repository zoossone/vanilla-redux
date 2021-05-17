import {createStore} from "redux";

const plus = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(count, action);
  
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1; // 리턴하는것이 곧 데이터이다.
  }
  return count;
} // state는 이곳에서만 modify - 다른 어떤 함수에서도 할 수 없음

const countStore = createStore(countModifier); // store는 데이터를 저장하는 곳이다. 크리에이트 스토어애는 반드시 함수가 들어간다

countStore.dispatch({ type: "ADD" }); // reducer(countModifier) 밖에서 메세지(action 객체)를 보내준다.
countStore.dispatch({ type: "ADD" }); // data의 모든 관리는 reducer 안에서만 이루어지므로 밖에서는 객체를 보내줘서 관리해준다. 이것이 redux가 해주는 일.
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState()); // return된 data(state)를 보여줌