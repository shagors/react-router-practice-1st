import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} = props.friend;
    const navigate = useNavigate();
    const showFriendDetail = () => {
        navigate('/friend/' + id);
    }
    return (
        <div>
            <h2 className='text-2xl'>Name: {name}</h2>
            <button className='rounded bg-indigo-500 p-2' onClick={showFriendDetail}>{username} : {id}</button>
        </div>
    );
};

export default Friend;