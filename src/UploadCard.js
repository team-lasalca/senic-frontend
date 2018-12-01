import React from 'react';

import './css/UploadCard.css';

import UploadForm from './UploadForm';

class UploadCard extends React.Component {
    render() {
        return (
            <div className="card upload">
                <div className="card-body">
                    <UploadForm onUploaded={ this.props.onUploaded } />
                </div>
            </div>
        );
    }
}

export default UploadCard;