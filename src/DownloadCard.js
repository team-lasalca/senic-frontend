import React from 'react';

import './css/Card.css';

import DownloadForm from './DownloadForm';

class DownloadCard extends React.Component {
    render() {
        return (
            <div className="card download">
                <div className="card-body">
                    <DownloadForm
                        onMainMenu={ this.props.onMainMenu }
                        enableDimmer={ this.props.enableDimmer }
                        disableDimmer={ this.props.disableDimmer }
                        image_path={ this.props.image_path } />
                </div>
            </div>
        );
    }
}

export default DownloadCard;