import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './css/Page.css';
import './css/Animations.css';
import './css/Dimmer.css';

import Logo from './Logo';
import UploadCard from './UploadCard';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transition_stage: 'none',
            dimmer_showing: false
        };

        this.onUploaded = this.onUploaded.bind(this);
        this.enableDimmer = this.enableDimmer.bind(this);
        this.disableDimmer = this.disableDimmer.bind(this);
    }

    componentDidMount() {
        this.setState({
            transition_stage: "logo-enter",
            dimmer_showing: this.state.dimmer_showing
        });
    }

    onUploaded() {
        this.setState({
            current_state: this.state.current_state,
            transition_stage: "state-exit",
            next_state: "Loading",
            dimmer_showing: this.state.dimmer_showing
        });
    }

    enableDimmer() {
        this.setState({
            current_state: this.state.current_state,
            transition_stage: this.state.transition_stage,
            next_state: this.state.next_state,
            dimmer_showing: true
        });
    }

    disableDimmer() {
        this.setState({
            current_state: this.state.current_state,
            transition_stage: this.state.transition_stage,
            next_state: this.state.next_state,
            dimmer_showing: false
        });
    }

    render() {
        return (
            <div className="page">
                    <CSSTransition
                        in={ this.state.dimmer_showing }
                        classNames="dimmeranim"
                        timeout={ 1000 }
                        mountOnEnter
                        unmountOnExit>
                        <div className="dimmer">
                            <i className="spinner fa fa-spinner fa-spin"></i>
                        </div>
                    </CSSTransition>
                    
                    <CSSTransition
                        in={ this.state.transition_stage === 'logo-enter' }
                        classNames="logo"
                        timeout={ 1000 }
                        onEntered={ () => {
                            this.setState({
                                current_state: 'Upload',
                                transition_stage: 'state-enter',
                                dimmer_showing: this.state.dimmer_showing
                            });
                        } }
                        exit={ false }>
                        <Logo />
                    </CSSTransition>
                    
                    <CSSTransition
                        in={ this.state.transition_stage === 'state-enter' }
                        classNames="statechange"
                        timeout={ 1000 }
                        onExited={ () => {  // state change from "state-enter" to "state-exit"
                            this.setState({
                                current_state: this.state.next_state,
                                transition_stage: "state-enter",
                                dimmer_showing: this.state.dimmer_showing
                            });
                        } }
                        unmountOnExit>
                        <UploadCard onUploaded={ this.onUploaded } enableDimmer={ this.enableDimmer } disableDimmer={ this.disableDimmer } />
                    </CSSTransition>
            </div>
        );
    }
}

export default App;
