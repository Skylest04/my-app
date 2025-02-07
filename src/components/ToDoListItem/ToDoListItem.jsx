import React from 'react'

const ToDoListItem = (props) => {
    console.log(props)
    return (
        <div key={props.id}>
            <h4>
                {props.title}
            </h4>
            <ul>
                <li>{props.id}</li>
                <li>{props.completed}</li>
            </ul>
        </div>
    )
}

export default ToDoListItem