import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDoList = (tasks) => {
    return (
        <div className="to-do-list">
            <div className="to-do-list-headers">
                <h3 className="completed-header">Complete</h3>
                <h3 className="title-header">Task</h3>
                <h3 className="date-header">Date</h3>
            </div>
            <ToDoItem tasks={tasks} />
        </div>
    )
}