import React from 'react'
import PropTypes from 'prop-types'

export const ToDoRow = ({ date, item, completed }) => (
    <tr>
        <td>
            {date}
        </td>
        <td>
            {item}
        </td>
        <td>
            {completed}
        </td>
    </tr>
)