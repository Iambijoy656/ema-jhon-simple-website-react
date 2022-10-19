import React, { useContext } from 'react';
import { AuthContext } from "../Context/UserContext";

const About = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>This is about page</h1>

        </div>
    );
};

export default About;