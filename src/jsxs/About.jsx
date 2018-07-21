import React from 'react';
import { Menu } from './Menu.jsx';
import { Footer } from './Footer.jsx';


export class About extends React.Component {
  render () {
    return (
      <div className="main-back">
        <Menu />
        <div className="showcase-back">
          <div className="contents-wrap">
          <h1>About Me</h1>
          <p className="contents-p">Hi there! My name is Ziqing Wang. I have been studying and developing web applications for two years. To be a full-stack developer is my career goal and I am keeping working on it. I am familiar with Front-end languages as Javascript, CSS, ReactJS, JQuery, and also good at Node.js, PostgreSQL and Python. Learning and trying is the source of my enthusiasm. I love science and technology, enjoy every time applying the new tech to my projects.</p>
          <p className="contents-p">In February 2018, I joined the coding bootcamp DigitalCrafts in Houston which greatly broadened my knowledge and enhanced my coding skills. By far, I have developed dozens of web applications including Single-Page-App, Express-React app and Python-tornado web app.</p>
        </div>
          <Footer />
        </div>
      </div>
    );
  }
}
