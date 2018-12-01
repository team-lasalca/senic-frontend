import React from 'react';

import './css/Card.css';

import UploadForm from './UploadForm';

class UploadCard extends React.Component {
    render() {
        return (
            <div className="card upload">
                <div className="card-body">
                    <UploadForm onUploaded={ this.props.onUploaded } enableDimmer={ this.props.enableDimmer } disableDimmer={ this.props.disableDimmer }  />
                </div>
            </div>
        );
    }
}

export default UploadCard;