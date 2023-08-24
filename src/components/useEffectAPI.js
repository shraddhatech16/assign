import React, { useState, useEffect } from 'react'
import Loading from './apicall/loading';
import Users from "./apicall/users";

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
             setLoading(false);
            setUsers(await response.json());
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Users users={users}/>
        </>
    )
}

export default UseEffectAPI