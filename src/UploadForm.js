import React from 'react';
import axios from 'axios';

import './css/Error.css';

const SERVER_ADDR = 'https://0fd974ee.ngrok.io'

class UploadForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            file: null,
            selected_radio: '1',
            upscale: true,
            denoise: false,
            noise_level: '0',
            selected_option: '1'
        };

        this.updateState = this.updateState.bind(this);
        this.validate = this.validate.bind(this);

        this.onFileChange = this.onFileChange.bind(this);
        this.onRadioClick = this.onRadioClick.bind(this);
        this.onCheckboxClick = this.onCheckboxClick.bind(this);
        this.onNoiseRangeMove = this.onNoiseRangeMove.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
    }

    updateState(key, new_val) {
        let state_copy = Object.assign({}, this.state);
        state_copy[key] = new_val;
        this.setState(state_copy);
    }

    validate(e) {
        e.preventDefault();

        let formdata = new FormData();
        for (const [key, value] of Object.entries(this.state)) {
            formdata.append(key, value);
        }

        if (!(this.state.upscale || this.state.denoise))
            return;

        this.props.enableDimmer();
        axios.post(SERVER_ADDR + '/upload_data', formdata, {timeout: 180000, headers: { 'Content-Type': 'multipart/form-data' } })
            .then((response) => {
                this.props.disableDimmer();
                this.props.onUploaded(response.data);
            })
            .catch((err) => console.log(err));
    }

    onFileChange(e) {
        this.updateState('file', e.target.files[0]);
    }

    onRadioClick(e) {
        this.updateState('selected_radio', e.target.value);
    }

    onCheckboxClick(e) {
        this.updateState(e.target.id, e.target.checked);
    }

    onNoiseRangeMove(e) {
        let value = Math.trunc(e.target.value / 25).toString();
        this.updateState(e.target.id, value);
    }

    onSelectChange(e) {
        this.updateState('selected_option', e.target.value);
    }

    render() {
        return (
            <form onSubmit={ this.validate }>
                <h2>Upload your picture</h2>

                <div className="form-group">
                    <label htmlFor="file_upload">File upload</label>
                    <input
                        type="file"
                        id="file_upload"
                        className="form-control-file"
                        accept="image/jpeg"
                        onChange={ this.onFileChange }
                        required />
                </div>

                <h2>Adjust its parameters</h2>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            id="upscale"
                            className="custom-control-input" 
                            onClick = { this.onCheckboxClick } 
                            defaultChecked />
                        <label className="custom-control-label" htmlFor="upscale">Upscale</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            id="denoise"
                            className="custom-control-input" 
                            onClick = { this.onCheckboxClick } />
                        <label className="custom-control-label" htmlFor="denoise">Denoise</label>
                    </div>
                    <span className="error">{ !(this.state.upscale || this.state.denoise) ? 'At least one of these checkboxes has to be selected': '' }</span>
                </div>

                <div className="form-group">
                    <label htmlFor="noise_level">Noise level</label>
                    <input
                        type="range"
                        id="noise_level"
                        defaultValue="0"
                        min="0"
                        max="75"
                        step="25"
                        className="custom-range" 
                        onInput={ this.onNoiseRangeMove } />
                    <span>{ parseInt(this.state.noise_level) + 1 }</span>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-radio">
                        <input
                            type="radio"
                            id="sample_radio1"
                            name="sample_radio"
                            value="1"
                            className="custom-control-input"
                            onClick={ this.onRadioClick }
                            defaultChecked />
                        <label className="custom-control-label" htmlFor="sample_radio1">Sample radio 1</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input
                            type="radio"
                            id="sample_radio2"
                            name="sample_radio"
                            value="2"
                            onClick={ this.onRadioClick }
                            className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="sample_radio2">Sample radio 2</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="sample_select">Sample select</label>
                    <select
                        id="sample_select"
                        className="custom-select"
                        onChange={ this.onSelectChange }>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </div>

                <button className="btn btn-primary mb-3" type="submit">Submit</button>
            </form>
        );
    }
}

export default UploadForm;
