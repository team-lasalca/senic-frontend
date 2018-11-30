import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './css/Page.css';
import './css/Animations.css';

import Logo from './Logo';
import UploadCard from './UploadCard';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transition_stage: 'none'
        };

        this.onUploaded = this.onUploaded.bind(this);
    }

    componentDidMount() {
        this.setState({
            transition_stage: "logo-enter",
        });
    }

    onUploaded() {
        this.setState({
            current_state: this.state.current_state,
            transition_stage: "state-exit",
            next_state: "Loading"
        });
    }

    render() {
        return (
            <div className="page">
                    <CSSTransition
                        in={ this.state.transition_stage === 'logo-enter' }
                        classNames="logo"
                        timeout={ 1000 }
                        onEntered={ () => {
                            this.setState({
                                current_state: 'Upload',
                                transition_stage: 'state-enter'
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
                                transition_stage: "state-enter" 
                            });
                        } }
                        unmountOnExit>
                        <UploadCard onUploaded={ this.onUploaded }/>
                    </CSSTransition>
            </div>
        );
    }
}

export default App;
