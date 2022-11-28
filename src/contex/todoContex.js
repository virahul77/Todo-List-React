import React, { useReducer } from "react"


// const todos = JSON.parse(localStorage.getItem('todoList')) [];
let todos;
if(localStorage.getItem('todoList')){
    todos = JSON.parse(localStorage.getItem('todoList'))
}
else todos = [];
// const todos = [
//     { id:1, number: 1, title: "Let's complete this", date: new Date("9/27/2022") ,completed:false},
//     { id: 2,number: 2, title: "Should sleep at 9pm", date: new Date("9/28/2022") ,completed:false},
//     { id:3, number: 3, title: "Should complete react", date: new Date("10/5/2022") ,completed:false},
// ];


const reducer = (state,action) => {
    if(action.type === 'AddTodo'){
        return [...state, {id:Date.now(),title:action.title,date:new Date(),completed:false}]
    }
    if(action.type === 'Delete'){
        return state.filter(todo => todo.id !== action.id);
    }
    if(action.type === 'toggle') {
        let copy = [...state]
        let todoInd = copy.findIndex(todo => todo.id == action.id);
        copy[todoInd].completed = !copy[todoInd].completed;
        return copy;
    }
    return state;
}

const todoContex = React.createContext({
    todoList : todos,
    dispatch :()=>{}
});

export const TodoCtxProvider = (props)=> {
    const [todoList,dispatch] = useReducer(reducer,todos);
    // console.log(todoList);
    localStorage.setItem('todoList',JSON.stringify(todoList));
    return (
        <todoContex.Provider value={{todoList,dispatch}}>{props.children}</todoContex.Provider>
    )
}

export default todoContex;
