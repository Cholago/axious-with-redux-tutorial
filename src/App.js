import React from 'react';
import * as Api from './api'
import axios from "axios"


const getUsers = () => {

  axios.get(`http://192.168.43.62/mdko/index.php/test`,)
    .then(res => {
      console.log('Recieved data', res);
      //console.log('Actual data data', res.data)
    })
    .catch(error => console.log(error));
}

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 ml-auto mr-auto">
          <h1 className="text-center">Hello react axious app</h1>
          <button className="btn btn-primary btn-sm text-center" onClick={getUsers}>Get data</button>
        </div>
      </div>
    </div>
  );
}

export default App;
