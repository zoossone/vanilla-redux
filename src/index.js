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
const addToDo = (text) => { // 코드를 효율적으로 보기 위해 오직 액션만을 리턴해주는 함수를 만들고 보통 이것은 리듀서 위에 있다.
  return {
    type: ADD_TODO,
    text
  }
}

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}
// 리듀서는 항상 두가지 전달인자를 받아야 합니다.
// 현재 상태와 action 객체이죠
const reducer = (state = [], action) => { // 첫 state가 없다면 빈 array를 할당해줍니다.
  switch (action.type) {
    case ADD_TODO:
      return [...state, {text: action.text, id: Date.now()}]; // NEVER MUTATE STATE - store를 수정할 수 있는 유일한 방법은 action을 보내는것 뿐이다. 그니까 새로운 Object를 리턴해 줘야 한다.
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
}

const store = createStore(reducer);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  // console.log(e.target.parentNode.id); // 우리는 클릭한 녀석의 부모 노드를 보고싶다. 왜냐하면 지울 녀석의 id를 알고싶거든
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id))
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = ""; // store가 바뀔때마다 항상 모든걸 다 그려줘서 계속 리스트가 겹쳐서 덮힌다. 그래서 한 번 싹 비워준다.
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
}

store.subscribe(() => console.log(store.getState()));

store.subscribe(paintToDos);



const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
}

form.addEventListener("submit", onSubmit); // submit을 하면 enter키도 먹는다 짱 신기