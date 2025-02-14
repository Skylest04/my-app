import React from 'react'
import styles from "./UsersListItem.module.css"
import { Link } from 'react-router-dom'

function UserListItem(props) {
    
    return (
        <div className={styles.wrapper}>
            <Link to={`/user/${props.id}`}>{props.name}</Link>
            <ul>
                <li>{props.email}</li>
                <li>{props.phone}</li>
            </ul>
        </div>
    )
}

export default UserListItem