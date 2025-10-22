import React from 'react';
import { NavLink } from 'react-router';
import Button from '../Button/Button';

function Navbar() {
    return (
        <div className='flex justify-evenly'>
            <div>
                <NavLink>Book Vibe</NavLink>
            </div>
            <div>
                <NavLink>Home</NavLink>
                <NavLink>Listed Books</NavLink>
                <NavLink>Page to Read</NavLink>
            </div>
            <div>
                <NavLink>
                    <Button name={'Sign In'} />
                    <Button name={'Sign UP'} />
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
