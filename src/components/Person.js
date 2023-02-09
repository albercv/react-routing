import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Person = () => {
    const { personName = "Nombre", surname = "Apellido" } = useParams();
    const navigateVar = useNavigate();

    const [emptyValue, setEmptyValue] = useState(false);

    const sendPerson = (e) => {
        e.preventDefault();
        setEmptyValue(false)
        console.log("SEND PERSON")
        let tempName = e.target.personName.value;
        let tempSurname = e.target.surname.value;
        let url = `/person/${tempName}/${tempSurname}`;

        if (!tempName || !tempSurname) {
          return setEmptyValue(true)
        }

        navigateVar(url)

    }

    return (
        <div>
            <h1>
                Hola! {personName} {surname}
            </h1>
            <form onSubmit={sendPerson}>
                <input type="text" name="personName" className='formField'/>
                <input type="text" name="surname" className='formField'/>
                {emptyValue && (<h6 className='alert formField'>Algún dato es incorrecto</h6>)}
                <input type="submit" name='sendPerson' value='sendPerson' className='formField'/>
            </form>
        </div>
    )
}
