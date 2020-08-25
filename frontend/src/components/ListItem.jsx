import React from 'react'

const ListItem = ({ text }) => {
    return (
        <div className="list-item">
            <span className="red"></span>
            <p>{ text }</p>
        </div>
    )
}

export default ListItem
