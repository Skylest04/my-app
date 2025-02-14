import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PhotoOfAlbum from '../../components/PhotoOfAlbum/PhotoOfAlbum';

const Photos = () => {
    const { id } = useParams();

    const [photosData, setPhotosData] = useState([]);

    useEffect(() => {
        const GetPhotosData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);

            const data = await res.json();
            setPhotosData(data)
        }

        GetPhotosData();
    }, []);

    const filterPhotos = photosData.filter((photo) => photo.albumId === Number(id));

    return (
        <div>
            {filterPhotos.map((item) => (
                <PhotoOfAlbum
                    {...item}
                />
            ))}
        </div>
    )
}

export default Photos