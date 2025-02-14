import React, { useEffect, useState } from 'react'
import styles from "./UsersList.module.css"
import UsersListItem from '../UsersListItem/UsersListItem';
import axios from 'axios';

const UsersList = () => {
    const [isLoading, setIsLoading] = useState([false]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data);
            })
            .finally(() => {
                setIsLoading(false);
            })

    }, []);

    if(isLoading) {
        return (
            <div>
                Loading....
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            {users.map(item => (
                <UsersListItem key={item.id} {...item}/>
            ))}

        </div>
    )
}

export default UsersList