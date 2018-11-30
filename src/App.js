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
    }

    componentDidMount() {
        this.setState({
            current_state: 'Upload',
            transition_stage: 'state-enter'
        });
    }

    render() {
        return (
            <div className="page">
                    <Logo />
                    <CSSTransition
                        in={ this.state.transition_stage === "state-enter" }
                        classNames="statechange"
                        timeout={ 1000 }
                        onExited={ () => {  // state change from "state-enter" to "state-exit"
                            this.setState({
                                current_state: this.state.next_state,
                                transition_stage: "state-enter" 
                            });
                        } }
                        unmountOnExit>
                        <UploadCard />
                    </CSSTransition>
            </div>
        );
    }
}

export default App;
