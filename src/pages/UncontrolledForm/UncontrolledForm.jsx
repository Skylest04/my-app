import React, { useEffect, useRef } from 'react'

const UncontrolledForm = () => {
    const descriptionRef = useRef(null);



    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(descriptionRef.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="description">Описание</label>
                <input type="text" ref={descriptionRef}/>
            </div>
        
            <div>
                <label htmlFor="price"></label> Цена
                <input type="number" />
            </div>

            <button >Отправить</button>
        </form>
    )
}

export default UncontrolledForm