import React from 'react';

class UploadForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            file_data: null,
            selected_radio: '1',
            sample_checkbox1: false,
            sample_checkbox2: false,
            sample_range1: '50',
            sample_range2: '50',
            selected_option: '1'
        };

        this.updateState = this.updateState.bind(this);

        this.onFileChange = this.onFileChange.bind(this);
        this.onRadioClick = this.onRadioClick.bind(this);
        this.onCheckboxClick = this.onCheckboxClick.bind(this);
        this.onRangeMove = this.onRangeMove.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
    }

    updateState(key, new_val) {
        let state_copy = Object.assign({}, this.state);
        state_copy[key] = new_val;
        this.setState(state_copy);
    }

    validate(e) {
        console.log(this.state);
        e.preventDefault();
    }

    onFileChange(e) {
        let file = e.target.files[0];
        let reader = new FileReader();

        reader.onload = (e) => this.updateState('file_data', e.target.result);
        reader.readAsBinaryString(file);
    }

    onRadioClick(e) {
        this.updateState('selected_radio', e.target.value);
    }

    onCheckboxClick(e) {
        this.updateState(e.target.id, e.target.checked);
    }

    onRangeMove(e) {
        this.updateState(e.target.id, e.target.value);
    }

    onSelectChange(e) {
        this.updateState('selected_option', e.target.value);
    }

    render() {
        return (
            <form onSubmit={ (e) => this.validate(e) }>
                <h2>Upload your picture</h2>

                <div className="form-group">
                    <label htmlFor="file_upload">File upload</label>
                    <input
                        type="file"
                        id="file_upload"
                        className="form-control-file"
                        accept="image/png, image/jpeg"
                        onChange={ this.onFileChange }
                        required />
                </div>

                <h2>Adjust its parameters</h2>

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
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            id="sample_checkbox1"
                            className="custom-control-input" 
                            onClick = { this.onCheckboxClick } />
                        <label className="custom-control-label" htmlFor="sample_checkbox1">Sample checkbox 1</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            id="sample_checkbox2"
                            className="custom-control-input" 
                            onClick = { this.onCheckboxClick } />
                        <label className="custom-control-label" htmlFor="sample_checkbox2">Sample checkbox 2</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="sample_range1">Sample range 1</label>
                    <input
                        type="range"
                        id="sample_range1"
                        className="custom-range" 
                        onInput={ this.onRangeMove } />

                    <label htmlFor="sample_range2">Sample range 2</label>
                    <input
                        type="range"
                        id="sample_range2"
                        className="custom-range"
                        onInput={ this.onRangeMove } />
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