import React, { useEffect, useState } from 'react'
import AlbumListItem from "../../components/AlbumsListItem/AlbumsListItem"
import { useParams } from 'react-router-dom'

const Album = () => {
    const { id } = useParams();
    const [albumData, setAlbumData] = useState([])

    useEffect(() => {
        const getAlbumData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)

            const data = await res.json();
            setAlbumData(data);
        }
        getAlbumData();
    }, [id])

    return (
        <div>
            <AlbumListItem
                id={albumData.id}
                photo={albumData.thumbnail}
            />
        </div>
    )
}

export default Album