import React from 'react';
import { Footer } from './Footer.jsx';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;
export class Showcase extends React.Component {

  scrollToTop = () => {
      scroll.scrollToTop({duration: 500});
  }

  render () {
    return (
        <div className="showcase-back">
          <div className="showcase-imgs-wrap">
          <div className="showcase-imgs">
          {this.props.imgs.map( img => {
            return (
              <div key={img.name} className="showcase-single-img">
                <Link to={img.link}><img src={require("../images/" + img.source)} alt={img.alt}/></Link>
                <h3>{img.name}</h3>
              </div>
            );
          })}
          </div>
          <div className="back-to-top"><a onClick={this.scrollToTop}><p><span className="arrow">&#8679;</span>Back to Top</p></a></div>
          </div>
          <Footer />
        </div>
    );
  }
}
