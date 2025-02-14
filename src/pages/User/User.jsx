import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserListItem from '../../components/UsersListItem/UsersListItem';

const User = () => {
    const { id } = useParams();

    const [userData, setUserData] = useState([])

    useEffect(() => {
        const getUserData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

            const data = await res.json();
            setUserData(data);
        }
        getUserData();
    }, [id])

    return (
        <div>
            <UserListItem
                id={userData.id}
                name={userData.name}
                website={userData.website}
                phone={userData.phone}
            />
        </div>
    )
}

export default User