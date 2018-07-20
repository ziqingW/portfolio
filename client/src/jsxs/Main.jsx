import React from 'react';
import { Menu } from './Menu.jsx';
import { Showcase } from './Showcase.jsx';

export class Main extends React.Component {
  render () {
    return(
      <div className="main-back">
        <Menu />
        <Showcase imgs={[
            {source: "blackjack.png",
          name: "Blackjack",
          link: "/app/blackjack",
        alt: "Blackjack-cover"},
          {source:"tictactoe.png",
            name:"Tic Tac Toe",
            link: "/app/tictactoe",
          alt: "Tictactoe-cover"},
            {source:"simonicon.png",
            name:"Simon Game",
            link: "/app/simon",
          alt: "Simon game-cover"},
            {source: "chatter.png",
            name: "Chatter",
            link: "/app/chatter",
          alt: "Chatter-cover"},
            {source: "reviewer.png",
            name: "What Diners Say",
            link: "/app/reviewer",
          alt: "Reviewer-cover"},
            {source: "contacts.png",
            name: "React-Contacts",
            link: "/app/react_contact",
          alt: "Contacts-cover"},
            {source: "recipes.png",
            name: "Mama's Recipe Book",
            link: "/app/recipes",
          alt: "Recipes-cover"},
            {source: "yingyang.png",
            name: "Ask Yingyang",
            link: "/app/yingyang",
          alt: "Yingyang-cover"},
            {source: "weather.png",
            name: "Weather Report",
            link: "/app/weather",
          alt: "Weather-cover"},
            {source: "blog.png",
            name: "Kotaku Forum",
            link: "/app/forum",
          alt: "Forum-cover"},
            {source: "tornado.png",
            name: "Tornado Showcase",
            link: "/app/tornado",
          alt: "Tornado-cover"},
            {source: "climate.png",
            name: "Climate Monitor",
            link: "/app/climate",
          alt: "Climate-cover"}
            ]}/>
      </div>
    );
  }
}