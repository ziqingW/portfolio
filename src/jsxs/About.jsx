import React from 'react';
import Menu from './Menu.jsx';
import { Footer } from './Footer.jsx';


export class About extends React.Component {
  render () {
    return (
      <div className="main-back">
        <Menu />
        <div className="showcase-back">
          <div className="contents-wrap">
          <h1>About Me</h1>
          <p className="contents-p">
          Hi, I'm Ziqing Wang. I'm a full-stack developer living in Houston, TX. I came from China originally where I obtained my PhD degree of Cellular Biology from Chinese Academy of Sciences in 2009. Upon graduation, I began to work as a biology researcher in universities. After many years in the lab, I started to look for new challenges in my life. The passion inside me for science and technology has never faded, which made me the decision that web development would be my next endeavor.</p>
          <p className="contents-p">I have have been studying and developing web applications for two years. Most of the time I teach myself by learning from online tutorials or books. In February 2018, I joined the coding bootcamp DigitalCrafts in Houston which greatly broadened my knowledge and enhanced my coding skills. So far, I have developed dozens of web applications including Single-Page-App, Express-React app, and Python-tornado web app.</p>
          <div className="contents-p contents-skill">
          <p>Skills:</p>
          <ul>
            <li>Front-end: JavaScript, CSS, HTML, jQuery, React.js, Redux, React Router</li>
            <li>Back-end: Python, Tornado, Node.js, Express, Nunjucks, Jinja2, Socket.io</li>
            <li>Database: PostgreSQL</li>
          </ul>
          </div>
        </div>
          <Footer />
        </div>
      </div>
    );
  }
}
