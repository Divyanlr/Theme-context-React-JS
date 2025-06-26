import React, { useState } from "react";

export const ThemeContext = React.createContext();

export function ContextProvider({ children }) {
    const [dark, setDark] = React.useState(false);
    return (
        <>
            <ThemeContext.Provider value={{ dark, toggle: () => setDark((d) => !d) }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}