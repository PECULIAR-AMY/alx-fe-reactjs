import React from 'react'
const header = {fontSize:"50px", color: "white",backgroundColor: "DodgerBlue", padding: "10px",fontFamily: "Sans-Serif", textAlign: "center"}
function Header() {
    return (
        <>
        <h1 style = {header}>My Favorite Cities</h1>
        </>
    );
}

export default Header;