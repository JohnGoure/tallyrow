import React from 'react'

export const ToDoItem = ( tasks ) => (
    <div className="to-do-item">
        <h3> {tasks.tasks.completed ? "complete" : "incomplete"} {tasks.tasks.item} {tasks.tasks.date}</h3>
    </div>
)