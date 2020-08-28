import React from 'react';
import PostList from './containers/PostList';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 ml-auto mr-auto">
          <h1 className="text-center">Hello react axios app</h1>
          <PostList />
        </div>
      </div>
    </div>
  );
}

export default App;
