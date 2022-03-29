import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} = props.friend;
    const navigate = useNavigate();
    const showFriendDetail = () => {
        navigate('/friend/' + id);
    }
    return (
        <div>
            <h2 className='text-2xl'>Name: {name}</h2>
            <Link to={'/friend/' + id}>Show Detail</Link>
            <button className='rounded bg-indigo-500 p-2' onClick={showFriendDetail}>{username} : {id}</button>
        </div>
    );
};

export default Friend;