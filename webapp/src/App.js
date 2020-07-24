import React from 'react';
import ReactDOM from 'react-dom'
import Header from '../src/component/layout/Header'
import About from '../src/component/layout/About'
import Solutions from '../src/component/layout/Solutions'
import Cases from '../src/component/layout/Cases'
import Blog from '../src/component/layout/Blog'
import Teams from '../src/component/layout/Teams'
import Contact from '../src/component/layout/Contact'
import Footer from '../src/component/layout/Footer'
import Style from '../src/css/style.css'
import Utilities from '../src/css/utilities.css'
import Lightbox from '../src/css/lightbox.min.css'










function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Solutions />
      <Cases />
      <Blog />
      <Teams />
      <Footer />
    </div>
  );
}

export default App;
