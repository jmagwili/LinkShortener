import React, { useState } from 'react'

export const LinkForm = ({submitForm}) => {
    const [value,setValue] = useState('')

    const changeHandler = (e) => {
        setValue(e.target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        submitForm(value)
        setValue('')
    }

    return(
        <form onSubmit={submitHandler}>
            <input
                type='url'
                placeholder='Paste URL here'
                onChange={changeHandler}
                value={value}
                required
            />
            <button type='submit'>Submit</button>
        </form>
    )
}