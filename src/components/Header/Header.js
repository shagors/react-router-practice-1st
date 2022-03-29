import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1 className='text-4xl'>Welcome To My React Route</h1>
            <nav className='text-xl flex justify-center p-3'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/posts">Post</CustomLink>
                <CustomLink to="/about">About</CustomLink>
          </nav>
        </div>
    );
};

export default Header;