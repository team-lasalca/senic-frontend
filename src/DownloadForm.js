import React from 'react';
import axios from 'axios';

import './css/Picture.css';

const SERVER_ADDR = 'http://127.0.0.1:5000';

class DownloadForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        this.props.enableDimmer();
        axios.get(SERVER_ADDR + '/get_gps/' + this.props.image_path)
            .then((response) => {
                this.props.disableDimmer();
                let coordinates = response.data.split(' ');
                this.setState({
                    gps: true,
                    coordinates: coordinates
                });
            })
            .catch((err) => {
                this.setState({
                    gps: false,
                    reason: err.response.data
                });
            });
    }

    render() {
        let message;
        if (this.state.gps) {
            const [lat, lon] = this.state.coordinates;
            message = <p>This picture was taken at { Math.abs(lat) + (lat >= 0 ? 'N' : 'S') } { Math.abs(lon) + (lon >= 0 ? 'E' : 'W') }</p>;
        } else if (this.state.reason === 'no_gps')
            message = <p>No GPS data is available for this picture</p>;
        else
            message = <p>Picture was not found</p>;

        return (
            <div>
                <h2>Your picture has been processed!</h2>
                <img className="picture" src={ SERVER_ADDR + '/get_picture/' + this.props.image_path } alt="processed" />
                <br />
                { message }
                <button type="button" className="btn btn-primary mt-4" onClick={ this.props.onMainMenu }>Back to Main Menu</button>
            </div>
        );
    }
}

export default DownloadForm;