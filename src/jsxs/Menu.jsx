import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Menu extends React.Component {

  render () {
    return(
      <div className="menu-back">
        <Link to="/"><img className="profile-img" src={require("../images/profile.jpg")} alt="profile"/></Link>
        <ul className="menu-top">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ul className="menu-bottom">
            <Link to="/"><h3>Projects</h3></Link>
            <li><Link to="/app/blackjack">Blackjack</Link></li>
            <li><Link to="/app/tictactoe">Tic Tac Toe</Link></li>
            <li><Link to="/app/simon">Simon Game</Link></li>
            <li><Link to="/app/chatter">Chatter</Link></li>
            <li><Link to="/app/reviewer">What Diners Say</Link></li>
            <li><Link to="/app/react_contact">React-Contacts</Link></li>
            <li><Link to="/app/recipes">Mama's Recipe Book</Link></li>
            <li><Link to="/app/yingyang">Ask Yingyang</Link></li>
            <li><Link to="/app/weather">Weather Report</Link></li>
            <li><Link to="/app/forum">Kotaku Forum</Link></li>
            <li><Link to="/app/tornado">Tornado Showcase</Link></li>
            <li><Link to="/app/climate">Climate Monitor</Link></li>
        </ul>
        <div className="menu-icons">
            <a href="https://github.com/ziqingW" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></a>
            <a href="https://www.linkedin.com/in/ziqing-wang-34549537/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
        </div>
      </div>
    );
  }
}
