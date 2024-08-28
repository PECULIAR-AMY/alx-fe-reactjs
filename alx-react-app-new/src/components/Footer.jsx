import React from 'react'

 const footer = { color: "blue", fontSize: "20px", textAlign: "center", }

function Footer() {
    
    return(
    <footer>
       { <p style= {footer}>© 2023 City Lovers</p> }
    </footer>
   );  
 }

export default Footer;