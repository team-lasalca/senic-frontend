import React from 'react';

import './css/Logo.css';
import './css/Page.css';

import UploadCard from './UploadCard';

class App extends React.Component {
  render() {
    return (
      <div className="page">
            <div className="text-center">
                <h1 className="logo">SENIC</h1>
            </div>
            <UploadCard />
      </div>
    );
  }
}

export default App;
