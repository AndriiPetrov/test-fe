import React from 'react';


const Form = ({title, inputTitle, submit}) => {
    return(
        <form onSubmit={submit}>
            <p>
                <label>Title<input type="text" name="title" onChange={inputTitle}/></label>
            </p>
            <p><input type="submit" value="Submit"/></p>
        </form>
    )
}

export default Form;