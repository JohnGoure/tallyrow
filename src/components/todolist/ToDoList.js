import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDoList = (tasks) => {
    return (
        <div className="to-do-list">
        <ToDoItem tasks={tasks} /></div>
    )
}