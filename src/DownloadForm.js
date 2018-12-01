import React from 'react';

import './css/Picture.css';

class DownloadForm extends React.Component {
    render() {
        return (
            <div>
                <h2>Your picture has been processed!</h2>
                <img className="picture" src="https://media.timeout.com/images/104692494/image.jpg" alt="Processed picture" />
                <br />
                <button type="button" className="btn btn-primary mt-4" onClick={ this.props.onMainMenu }>Back to Main Menu</button>
            </div>
        );
    }
}

export default DownloadForm;