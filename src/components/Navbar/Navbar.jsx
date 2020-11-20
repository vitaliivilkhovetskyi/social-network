import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
            <div className={classes.friends}>Friends</div>
            <div className={classes.friends}>
                <NavLink to="/andrey" activeClassName={classes.activeLink}>Andrey</NavLink>
                <NavLink to="/sasha" activeClassName={classes.activeLink}>Sasha</NavLink>
                <NavLink to="/vasya" activeClassName={classes.activeLink}>Vasya</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;