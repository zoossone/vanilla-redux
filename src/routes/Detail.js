import React from "react";
import { connect } from "react-redux";

function Detail({toDo}) {
    return <>
        <h1>{toDo?.text}</h1>
        <h2>CreatedAt: {toDo?.id}</h2>
    </>
}

const mapStateToProps = (state, ownProps) => {
    const { match:
        { params:
            {id} } // 구조분해할당때 괄호에 안 넣으면 그냥 params가 대체된다.
    } = ownProps;
    
    return {
        toDo: state.find(todo => todo.id === parseInt(id))
    }
}

export default connect(mapStateToProps)(Detail);