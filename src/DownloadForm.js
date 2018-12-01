import React from 'react';

import './css/Picture.css';

const SERVER_ADDR = 'http://127.0.0.1:5000';

class DownloadForm extends React.Component {
    render() {
        return (
            <div>
                <h2>Your picture has been processed!</h2>
                <img className="picture" src={ SERVER_ADDR + '/get_picture/' + this.props.image_path } alt="processed" />
                <br />
                <button type="button" className="btn btn-primary mt-4" onClick={ this.props.onMainMenu }>Back to Main Menu</button>
            </div>
        );
    }
}

export default DownloadForm;