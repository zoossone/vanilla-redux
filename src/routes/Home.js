import React, {useState} from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Todo from "../components/Todo";

function Home({toDos, addToDo}) {
    const [text, setText] = useState("");
    const onChange = e => {
        setText(e.target.value);
    };
    const onSubmit = e => {
        e.preventDefault();
        setText("");
        addToDo(text);
    }
    return (<>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange}/>
            <button>Add</button>
        </form>
        <ul>{toDos.map(todo => <Todo {...todo} key={todo.id}/>)}</ul>
    </>)
}

const mapStateToProps = (state) => { // 현재의 스테이트를 첫번째 인자로 받아오고, 두번째 인자로 react-router에서 Home에게 준 props다.
    return { toDos: state};
} // 여기에서 무엇을 리턴하든간에 Home 컴포는트에 prop으로 전달해준다. mapStateToProps()는 그런 메소드이다. 그리고 pure Object를 반드시 리턴해주어야 한다.
// 위의 메소드는 redux-react ? react-router로부터 뭔가를 가지고 오고 싶다는 뜻이다.
// mapStateToProps()는 기본적으로 Redux state로부터 Home(component)에 props로 전달한다는 뜻이다.

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: text => dispatch(actionCreators.addToDo(text))
    }
}

// redux들을 home 컴포넌트와 연결시켜준다.
// connect는 dispatch와 getState중 하나를 골라야 하는데 지금의 경우에는 둘 다 필요하다. action객체를 보내주기도 하고 store의 상태를 받아오기도 해야하니까
export default connect(mapStateToProps, mapDispatchToProps)(Home);