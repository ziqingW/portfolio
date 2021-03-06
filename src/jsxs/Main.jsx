import React from 'react';
import Menu from './Menu.jsx';
import { Showcase } from './Showcase.jsx';

export class Main extends React.Component {
  render () {
    return(
      <div className="main-back">
        <Menu />
        <Showcase imgs={[
          {source: "hooks.png",
              name: "Reminder (by React-Hooks)",
              link: "/app/hooks",
            alt: "Reminder-cover"},
            {source: "lamp.png",
                name: "Lab Animal Management Platform",
                link: "/app/lamp",
              alt: "LAMP-cover"},
            {source: "trivia.png",
                name: "Trivia Game",
                link: "/app/trivia",
              alt: "Trivia Game-cover"},
              {source: "eog.png",
                  name: "Houston Probe Visualization",
                  link: "/app/eog",
                alt: "EOG Assessment-cover"},
          {source: "climate.png",
            name: "Climate Monitor",
            link: "/app/climate",
          alt: "Climate-cover"},
          {source: "klotski.png",
            name: "Japanese Klotski Puzzle",
            link: "/app/klotski",
          alt: "Klotiski game-cover"},
          {source: "yingyang.png",
          name: "Ask Yingyang",
          link: "/app/yingyang",
        alt: "Yingyang-cover"},
          // {source: "reviewer.png",
          //   name: "What Diners Say",
          //   link: "/app/reviewer",
          // alt: "Reviewer-cover"},
          {source: "chatter.png",
            name: "Chatter",
            link: "/app/chatter",
          alt: "Chatter-cover"},
            {source: "contacts.png",
            name: "React-Contacts",
            link: "/app/react_contact",
          alt: "Contacts-cover"},
          // {source: "weather.png",
          //   name: "Weather Report",
          //   link: "/app/weather",
          // alt: "Weather-cover"},
          //   {source: "blog.png",
          //   name: "Kotaku Forum",
          //   link: "/app/forum",
          // alt: "Forum-cover"},
          //   {source: "tornado.png",
          //   name: "Tornado Showcase",
          //   link: "/app/tornado",
          // alt: "Tornado-cover"},
          //   {source: "recipes.png",
          //   name: "Mama's Recipe Book",
          //   link: "/app/recipes",
          // alt: "Recipes-cover"},
          {source:"tictactoe.png",
            name:"Tic Tac Toe",
            link: "/app/tictactoe",
          alt: "Tictactoe-cover"},
            {source: "blackjack.png",
          name: "Blackjack",
          link: "/app/blackjack",
        alt: "Blackjack-cover"},
        {source:"simonicon.png",
            name:"Simon Game",
            link: "/app/simon",
          alt: "Simon game-cover"}
            ]}/>
      </div>
    );
  }
}
