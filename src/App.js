import React from 'react';

import './css/Page.css';

import Logo from './Logo';
import UploadCard from './UploadCard';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transition_stage: 'none'
        };
    }

    componentDidMount() {
        this.setState({
            current_state: "Upload",
            transition_stage: "state-enter",
        });
    }

    render() {
        return (
            <div className="page">
                    <Logo />
                    <UploadCard />
            </div>
        );
    }
}

export default App;
