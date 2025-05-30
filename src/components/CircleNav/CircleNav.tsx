import { useState } from 'react';
import classes from './CircleNav.module.scss';

export const CircleNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className={`${classes.circleMenu} ${isOpen ? classes.open : ''}`} onClick={toggleMenu}>
            <button className={classes.menuToggle}>☰</button>
            <div className={classes.menuItem}>🏠</div>
            <div className={classes.menuItem}>💼</div>
            <div className={classes.menuItem}>📧</div>
            <div className={classes.menuItem}>⚙️</div>
        </div>
    )
};