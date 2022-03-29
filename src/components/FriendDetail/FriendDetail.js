import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    } , []);

    return (
        <div>
            <h2 className='text-3xl'>This is Detail about Bondhu: {friendId}</h2>
            <h3 className='text-2xl'>Name: {friend.name}</h3>
            <h4 className=''>Email: {friend.email}</h4>
            <h6 className=''>Website: {friend.website}</h6>
            <p><small>City: {friend.address?.city}</small></p>
            <p><small>Lat: {friend.address?.geo?.lat}</small></p>
        </div>
    );
};

export default FriendDetail;