import React, { useState } from 'react'
import styles from './Form.module.css'
import Input from '../../components/ui/Input/Input'

const Form = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");

    const [formData, setFormData] = useState({
        formName: "",
        formEmail: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    const handleChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
        console.log(formData);
        
    }

    return (
        <div>
            <h3>Form</h3>

            <form action="" className={styles.form} onSubmit={handleSubmit}>
                <Input
                    labelText={"name"}
                    type={'text'}
                    id={'name'}
                    placeholder={'write your name'} 
                    // value={name}
                    // onChange={(event) => {
                    //     console.log(event.target)}}
                    onChange={handleChange}
                    name={"formName"}
                />

                <Input
                    labelText={"mail"}
                    type={'email'}
                    id={'email'}
                    placeholder={'write your mail'}
                    // value={email}
                    // onChange={(event) => setEmail(event.target.value)} 
                    onChange={handleChange}
                    name={"formEmail"}
                />

                {/* {email.length > 3 && email.includes("@") && 
                    <Input 
                        labelText={"Доп поле"}
                        type={"number"}
                        id={"number"}
                        placeholder={"test"}
                    />
                } */}
                <button>send</button>
            </form>
        </div>
    )
}

export default Form