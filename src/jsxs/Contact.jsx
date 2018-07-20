import React from 'react';
import { Menu } from './Menu.jsx';
import { Footer } from './Footer.jsx';

export class Contact extends React.Component {
  render () {
    return (
      <div className="main-back">
        <Menu />
        <div className="showcase-back">
          <div className="contents-wrap">
            <h1>Contact</h1>
            <div className="contact-p contents-p">
            <p>Ziqing Wang</p>
            <div className="contact-info">
            <p>Houston, TX</p>
            <p>804-687-8474</p>
            <p>redtaq@hotmail.com</p>
            <p><a href="https://github.com/ziqingW" target="_blank">https://github.com/ziqingW</a></p> </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>)
    }
  }
