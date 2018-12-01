import React from 'react';

import './css/Card.css';

import DownloadForm from './DownloadForm';

class DownloadCard extends React.Component {
    render() {
        return (
            <div className="card download">
                <div className="card-body">
                    <DownloadForm onMainMenu={ this.props.onMainMenu } />
                </div>
            </div>
        );
    }
}

export default DownloadCard;