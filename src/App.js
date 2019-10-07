import React from 'react';
import Header from './components/Header/Header';
import BlogWrapper from './components/BlogWrapper/BlogWrapper';

function App() {
  const dt = [
    { 'title': 'test' },
    { 'title': 'test2' },
    { 'title': '' }
  ]
  return (
    <div>
      <Header />
      <div id="wrap-page">
        <BlogWrapper dataAPI={dt} />
      </div>
    </div>
  );
}

export default App;
