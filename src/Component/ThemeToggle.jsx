import React, { useContext } from "react";
import { ThemeContext } from '../Context/ThemeContext'

function ThemeToggle() {
    const { dark, toggle } = React.useContext(ThemeContext);
    return (
        <>
            <button onClick={toggle}>{dark ? 'Login' : 'Sign up'}</button>
        </>
    )
}

export default ThemeToggle;