import React from 'react';
import * as Api from './api'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 ml-auto mr-auto">
          <h1 className="text-center">Hello react axios app</h1>
          <button className="btn btn-primary btn-sm text-center" onClick={Api.getUsers}>Get data</button>
        </div>
      </div>
    </div>
  );
}

export default App;
