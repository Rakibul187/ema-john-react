import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const About = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>This is secret About!!!!</h1>
            <h3>User Email: {user?.email}</h3>
        </div>
    );
};

export default About;