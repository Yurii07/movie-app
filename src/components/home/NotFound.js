import React from 'react';
import './NotFound.css'

export const NotFound = () => {
        return (
            <div className="container">
                <div className="boo-wrapper">
                    <div className="boo">
                        <div className="face"></div>
                    </div>
                    <div className="shadow"></div>

                    <div className="text-center">
                        <h1>Oops!</h1>
                        <p>
                            Film not found.
                        </p>
                    </div>
                </div>
            </div>
        );
}

export default NotFound;