import React from 'react';
import Form from './Form';

const Home = ({title, inputTitle, onSubmit}) =>(
    <div>
        Home
        <Form title={title} inputTitle={inputTitle} submit={onSubmit}/>
    </div>
)
export default Home;