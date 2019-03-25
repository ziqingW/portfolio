import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sizes from 'react-sizes';
import ReactTooltip from 'react-tooltip';
import docx from '../files/Ziqing_Wang_Resume.docx';

class Menu extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
        mobile : false,
        showMenu : true,
        slug : ""
      };
  }

  componentDidMount = () =>{
    let slug = window.location.href.split("app")[1];
      if (this.props.isMobile) {
        this.setState({
          mobile : true,
          showMenu : false,
          slug : slug
        });
      } else {
        this.setState({
          mobile: false,
          showMenu : true
        });
      }
  }

  componentDidUpdate = (prevProps, prevState) => {
    let currentSize = this.props.isMobile;
    let prevSize = prevState.mobile;
    let current_slug = window.location.href.split("app")[1];
    let prev_slug = prevState.slug;
    if (currentSize !== prevSize) {
        if (currentSize) {
          this.setState({
            mobile : true,
            showMenu : false
          });
        } else {
          if (currentSize)
          this.setState({
            mobile: false,
            showMenu : true
          });
        }
      }
  if (current_slug !== prev_slug) {
    this.setState({
      slug : current_slug,
      showMenu: false
    });
  }
  }

  toggleMenu = () => {
    this.setState({
      showMenu : !this.state.showMenu
    });
  }
  render () {
    return(
      <div className="menu-back">
        <div className="mobile-menu-wrap">
          <Link to="/">
            {this.props.isMobile ? ("Ziqing Wang") : (<img className="profile-img" src={require("../images/profile.jpg")} alt="profile"/>)
            }
          </Link>
          <div onClick={this.toggleMenu} className="menu-bars-display">
            <FontAwesomeIcon icon="bars" />
          </div>
        </div>
        <Sidemenus showMenu={this.state.showMenu} mobile={this.state.mobile}/>
      </div>
    );
  }
}

class Sidemenus extends React.Component {
  render () {
    return (
    <div className={this.props.mobile ? (this.props.showMenu ? "show-menu" : "noshow-menu") : null}>
      <div className="mobile-menu">
        <ul className="menu-top">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ul className="menu-bottom">
          <Link to="/"><h3>{this.props.mobile? "PROJECTS" : "Projects"}</h3></Link>
          <li><Link to="/app/eog">Houston Probe Visualization</Link></li>
          <li><Link to="/app/trivia">Trivia Game</Link></li>
          <li><Link to="/app/lamp">LAMP</Link></li>
          <li><Link to="/app/climate">Climate Monitor</Link></li>
          <li><Link to="/app/reviewer">What Diners Say</Link></li>
          <li><Link to="/app/chatter">Chatter</Link></li>
          <li><Link to="/app/react_contact">React-Contacts</Link></li>
          <li><Link to="/app/recipes">Mama's Recipe Book</Link></li>
          <li><Link to="/app/tictactoe">Tic Tac Toe</Link></li>
          <li><Link to="/app/blackjack">Blackjack</Link></li>
          <li><Link to="/app/simon">Simon Game</Link></li>
        </ul>
      </div>
      <div className="menu-icons">
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
  );
  }
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 480,
});

export default Sizes(mapSizesToProps)(Menu);

// <li><Link to="/app/weather">Weather Report</Link></li>
// <li><Link to="/app/forum">Kotaku Forum</Link></li>
// <li><Link to="/app/tornado">Tornado Showcase</Link></li>
// <li><Link to="/app/yingyang">Ask Yingyang</Link></li>
