import React from 'react'
import styles from '../AlbumsListItem/AlbumsListItem.module.css'
import { Link } from 'react-router-dom'

const PhotoOfAlbum = (props) => {
    return (
        <div className={styles.wrapper}>
            <Link to={`/albums/${props.id}`}>{props.name}</Link>
            <ul>
                <li>{props.title}</li>
                <li>{props.thumbnailUrl}</li>
            </ul>
        </div>
    )
}

export default PhotoOfAlbum