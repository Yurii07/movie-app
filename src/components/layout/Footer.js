import React from 'react';

export const Footer = () => {
    return (
        <div className="footer mt-auto py-2 text-center text-light" style={ {background: "#6E234F", position: "fixed",bottom: 0, width: "100%"}}>
            <div className="container">
                <i className="fab fa-react"/>
                <span className="text-light ">Footer content .</span>
            </div>
        </div>
    )
};

export default Footer;