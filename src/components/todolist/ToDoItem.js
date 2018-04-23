import React from 'react'

export const ToDoItem = ( tasks ) => (
    <div className="to-do-item">
        <p className="to-do-checkbox"><input type="checkbox"  name="checkbox" checked={tasks.tasks.completed}/></p>
        <p className="to-do-title">{tasks.tasks.item}</p>
        <p className="to-do-date">{tasks.tasks.date}</p>
    </div>
)