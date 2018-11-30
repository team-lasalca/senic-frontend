import React from 'react';

import './css/Logo.css';
import './css/Animations.css';

class Logo extends React.Component {
    render() {
        return (
            <div className="logo-enter text-center">
                <h1 className="animated fadeIn logo">SENIC</h1>
            </div>
        );
    }
}

export default Logo;