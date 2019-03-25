import React from 'react';
import Menu from './Menu.jsx';
import { Footer } from './Footer.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import docx from '../files/Ziqing_Wang_Resume.docx';
import ReactTooltip from 'react-tooltip';

export class Contact extends React.Component {
  render () {
    return (
      <div className="main-back">
        <Menu />
        <div className="showcase-back">
          <div className="contents-wrap">
            <h1>Contact</h1>
            <div className="contact-p contents-p">
            <p className="contact-name">Ziqing Wang</p>
            <div className="contact-info">
              <h6>You can reach me via the e-mail, phone number or any of the listed sources. Also you are very welcome to check my GitHub page for the codes, or download my Résumé for more information.</h6>
              <p>Houston, TX</p>
              <p>804-687-8474</p>
              <div className="social-icons">
              <div>
              <a data-tip="Email" href="mailto:redtaq@hotmail.com"><FontAwesomeIcon icon={['far', 'envelope']} /></a>
              <ReactTooltip />
              </div>
              <div>
              <a data-tip="GitHub" href="https://github.com/ziqingW" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></a>
              <ReactTooltip />
              </div>
              <div>
              <a data-tip="Linkedin" href="https://www.linkedin.com/in/ziqing-wang-34549537/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
              <ReactTooltip />
              </div>
              <div>
              <a data-tip="Résumé" download="ZiqingWang_Resume" href={docx}><FontAwesomeIcon icon={['far', 'file-alt']} /></a>
              <ReactTooltip />
              </div>
              </div>
            </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>);
    }
  }
