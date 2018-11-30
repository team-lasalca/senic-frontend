import React from 'react';

import './css/UploadCard.css';

class UploadCard extends React.Component {
    render() {
        return (
            <div className="card upload">
                <div className="card-body">
                    <form>
                        <h2>Upload your picture</h2>

                        <div className="form-group">
                            <label htmlFor="file_upload">File upload</label>
                            <input type="file" id="file_upload" name="file_upload" className="form-control-file" accept="image/png, image/jpeg" />
                        </div>

                        <h2>Adjust its parameters</h2>

                        <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input type="radio" id="sample_radio1" name="sample_radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="sample_radio1">Sample radio 1</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" id="sample_radio2" name="sample_radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="sample_radio2">Sample radio 2</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" id="sample_checkbox1" name="sample_checkbox" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="sample_checkbox1">Sample checkbox 1</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" id="sample_checkbox2" name="sample_checkbox" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="sample_checkbox2">Sample checkbox 2</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="sample_range1">Sample range 1</label>
                            <input type="range" id="sample_range1" className="custom-range" />

                            <label htmlFor="sample_range2">Sample range 2</label>
                            <input type="range" id="sample_range2" className="custom-range" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="sample_select">Sample select</label>
                            <select id="sample_select" className="custom-select">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>

                        <button className="btn btn-primary mb-3" type="button" onClick={ this.props.onUploaded }>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default UploadCard;