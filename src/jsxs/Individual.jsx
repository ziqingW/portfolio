import React from 'react';
import Menu from './Menu.jsx';
import { Footer } from './Footer.jsx';
const clone = require('clone');

let contents = {
  blackjack : {des: "This Single-Page-App was created with jQuery. Just like what Blackjack should be, it's simple and fun.",
    title: "Blackjack",
  pros : ["Simple to design", "No requirement for other library support"],
  cons : ["The logic behind the game was relatively complicated", "Double values of Ace was the key but also a Bug's hotbed for the program", "Too many functions and variables", "Debugging was exhausting. For example, I never got blackjack during the coding so I had no idea if there would be any issue of it in real-time run"],
  language: ["jQuery"],
  published : "GitHub Page",
img_source : "blackjack.png",
link : "http://blackjack.bukarle.com/",
source : "https://github.com/ziqingW/blackjack2"},


  tictactoe : {
    des: "This is one of the Single-Page-App I had created at my earlier coding time during studying the online course from freeCodeCamp. I did it on CodePen.io with jQuery. You can select to play it first or second. For the fun, I intentionally designed the AI a little bit 'random', so you can still win the game sometimes.",
    title: "Tic Tac Toe",
    pros : ["It was fun to write the program", "As one of my early achievements in coding, it gave me great confidence", "My friends liked it"],
    cons : ["Too many functions and variables", "Styling with CSS was annoying", "If the AI was completely random, game would be too easy and boring. However, if the AI followed the unique correct strategy, fun would be ruined. So how to catch the balance between them was a headache to me"],
    language: ["jQuery"],
    published : "GitHub Page",
  img_source : "tictactoe.png",
  link : "https://ziqingw.github.io/TicTacToe/",
source : "https://github.com/ziqingW/TicTacToe"},

    simon : {
      des : "It is another homework during my earlier coding time while studying from freeCodeCamp. I did it on CodePen.io with jQuery. You can select normal mode or crazy mode to play the game. In normal mode you can repeat the try until you hit the buttons correctly, while in crazy mode you only have one chance.",
      title: "Simon Game",
      pros: ["CSS part was fun"],
      cons : ["There was an issue with the sounds playing which always popped as explosion", "I tried hard to save them but not working after all, so I had to turn them off", "It was very sad"],
      language: ["jQuery"],
      published : "GitHub Page",
    img_source : "simonicon.png",
    link : "https://ziqingw.github.io/Simon/",
  source : "https://github.com/ziqingW/Simon"},

    chatter : {
      des : "I created this app with Express and Socket.io. It's working like an online chat room. Different people can join in one same room and communicate with each other. You can send public or private messages to the other users, or receive the messages from them.",
      pros : ["It was functionally useful as an real life app", "As my first time using Socket.io it was fun"],
      title: "Chatter",
      cons : ["It was not easy to debug, I had to insert a lot of console.log() into the program", "It was very tricky to select and get the attribute value of the particular user for private chat by jQuery, which took me most of the time in trying it"],
      language: ["Node.js", "Express", "Socket.io","jQuery"],
      published : "Heroku",
    img_source : "chatter.png",
  link: "https://mini-chatter.herokuapp.com/",
source : "https://github.com/ziqingW/chatter"},

    reviewer : {
      des : "A yelp-like website for you to search and read the reviews of restaurants in current list. After signing up and logging in as a user, you can leave comments for current restaurants or add new bussiness into the list.",
      title: "What Diners Say",
      pros : ["Making this helped me manage the cross-talking between database and Express", "By fetching data from database, I could render different pages from one same template .html"],
      cons : ["Creating sample of database was annoying"],
      language: ["Node.js", "Express", "nunjucks", "PostgreSQL", "jQuery"],
      published : "Heroku",
    img_source : "reviewer.png",
    link : "http://whatdinersay.bukarle.com/",
    source : "https://github.com/ziqingW/restaurant_reviewer"
    },

    react_contact : {
      des : "This is a Single-Page-App I made with React. You can search, edit, delete or add contacts with it. The contact list is stored in local storage, and you can check it later with the updated info. This is the first project of React in DigitalCrafts' course. It had been almost one year before I used React again for coding, so I needed to update my knowledge and skills in earnest. This project was a greating training for me.",
      pros: ["I had gained a refreshment for React by making it", "For the very first time, I began to try React router"],
      title: "React-Contacts",
      cons: ["I hadn't learnt React Redux when I was making this app, the interactions of states and props among sibling or parent-children components were like a hell to me", "React router was very difficult to understand in the beginning", "The index.js file was way too big"],
      language: ["React", "React Router"],
      published : "Heroku",
    img_source : "contacts.png",
    link : "https://re-contacts.herokuapp.com/",
    source : "https://github.com/ziqingW/react_contacts"
    },

    recipes : {
      des : "This is one of the React apps I made when studying from freeCodeCamp one year ago. The React library behind it is already out of date, and some methods are deprecated. Although it is old somehow, it is well functional still. You can add, edit or delete recipe from it. The updated results are stored in local storage, so that you can visit it again later.",
      pros : ["Like the 'Tic Tac Toe', this is the one of those I showed mostly to my friends", "It's my favorite React app, even after I can build much larger and more complicated apps using Redux and React router"],
      title: "Mama's Recipe Book",
      cons : ["None, I enjoyed every seconds of making it"],
      language: ["React"],
      published : "CodePen",
    img_source : "recipes.png",
    link : "https://codepen.io/redtaq/full/JZbKEr/",
    source : "https://codepen.io/redtaq/pen/JZbKEr"
    },

    yingyang : {
      des : "This is the work for the assigned individual project by DigitalCrafts. It is a fortunetelling game utilizing the philosophy of 'Ying & Yang' from the ancient Chinese. You can ask any questions, then as the old way you will toss three coins for six times. Based on the coin-toss results, you will get two different symbols. One for the current status of the question, and the other one for the future. You will find out the hidden answers by yourself from the hints of the symbols.",
      pros : ["I applied Redux and React router on this project. Both worked smoothly and stably", "It's the first time I combined Node.js with React in one app, it feels good"],
      title: "Ask Yingyang",
      cons : ["The API returning the critical data required for this project was not supported by React-build, so I had to import it in backend then made requests from Express instead of directly using it at React frontend", "I had huge problems when deploying it to Heroku", "After enormous attempts I still couldn't make both Express_API and React_UI working together if I include them in one package", "Eventually I overcame it by deploying two separate packages to heroku"],
      language: ["React", "React router", "Redux", "Node.js", "Express", "PostgreSQL"],
      published : "Heroku",
    img_source : "yingyang.png",
    link : "https://askyingyang.herokuapp.com/",
    source : "https://github.com/ziqingW/iching_react_ui"
    },

    // weather : {
    //   des : "Weather Report is a simple app powered by Python Tornado and API from 'Openweathermap'. You can check the current weather condition of the searched city, or, list the historical queried results of the same city.",
    //   title: "Weather Report",
    //   pros : ["I designed multiple handlers for different scenarios to optimize API requests so as to improve efficiency", "If it's a search for new city, the API request will be called", "If the interval of query for the same city is less than 2 hours, the app will ask database for the latest result instead of making API request", "If the interval is longer than 2 hours, the API will be called and the latest results will be saved in database"],
    //   cons : ["Different conditions made the coding and debugging tiring", "Dealing with time zone and time format in database was depressing"],
    //   language: ["Python", "Tornado", "PostgreSQL", "Jinja2"],
    //   published : "Heroku",
    // img_source : "weather.png",
    // link: "https://miniweather.herokuapp.com/",
    // source : "https://github.com/ziqingW/weather-API"
    // },

    // forum : {
    //   des : "It is a forum-like website powered by Python Tornado. Basically you can write new posts or comment on other posts in differnt categories.",
    //   pros : ["It was my first time to use Python to build a real website (most likely)", "First time to use database in a dynamic app"],
    //   title: "Kotaku Forum",
    //   cons : ["As an early work for website project, the login system was lame", "Some designs of it were clumsy, especially, the 'slug' part"],
    //   language: ["Python", "Tornado", "PostgreSQL", "Jinja2"],
    //   published : "Heroku",
    // img_source : "blog.png",
    // link : "https://tornado-blog.herokuapp.com/",
    // source : "https://github.com/ziqingW/tornado-blog"
    // },

    // tornado : {
    //   des : "It is a showcase of my several small Single-Page-Apps in one bundle app powered by Python Tornado. In it you can find 'Tic Tac Toe', 'Simon', 'Mini-Wiki' those built by html/jQuery and 'Timezone Converter' which is built by Python. Also you can send messages directly to my mailbox from the app.",
    //   pros: ["It was my first web app using Python, very excited", "UI were responsible for different devices", "It was amazing to send mails onsite"],
    //   title: "Tornado Showcase",
    //   cons : ["I hadn't learnt redirection or other directives for page management when making this app, so the navigation for different pages was clumsy"],
    //   language: ["Python", "Tornado", "Jinja2"],
    //   published : "Heroku",
    // img_source : "tornado.png",
    // link : "https://dc-tornado-ziqing.herokuapp.com/",
    // source : "https://github.com/ziqingW/tornado-exercise"
    // },

    climate : {
      des : "This is the group project assigned by DigitalCrafts. <a href='https://github.com/lloydXmas' rel='noopener noreferrer' target='_blank'>Noel Honeybourne</a>, <a href='https://github.com/Zengeol' rel='noopener noreferrer' target='_blank'>Claudia Ling</a> and me made it as a team. The goal of this app is to collect temperature and humidity data from sensors placed in Noel's house, and display them in charts. You can check the temp/humidity in different room or on different date.",
      title: "Climate Monitor",
      pros: ["My duty as a team member was to write both backend program for Tornado server and frontend methods for html components interactions, plus some css work", "It was my first time to collaborate with others through Github", "And the teamwork was fruitful in the end, which was the best part of the project"],
      cons : ["As the first time to do group work through Github, the process was painful", "People might discard your work as it conflicted with his/hers", "Mistakes frequently popped up when trying to push or pull repo from remote"],
      language: ["Python", "Tornado", "Jinja2", "PostgreSQL", "jQuery"],
      published : "Heroku",
    img_source : "climate.png",
    link : "https://cli-monitor.herokuapp.com/",
    source : "https://github.com/ziqingW/climate-control-system-monitor"
    }
};

export class Individual extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      slug : null,
      contents : null,
      pros : null,
      cons : null,
      language : null,
      published : null,
      img_source: "",
      link: "",
      source : ""
    };
  }

  componentDidMount() {
    let slug = this.props.match.params.slug;
    let individualContent = clone(contents[slug]);
    this.setState({
      slug : slug,
      contents : individualContent['des'],
      title : individualContent['title'],
      pros : individualContent['pros'],
      cons : individualContent['cons'],
      languages : individualContent['language'],
      published : individualContent['published'],
      img_source : individualContent['img_source'],
      link : individualContent['link'],
      source : individualContent['source']
    });
  }

  componentDidUpdate(prevProps) {
    let slug = this.props.match.params.slug;
    let pre_slug = prevProps.match.params.slug;
    if (slug !== pre_slug) {
      let individualContent = clone(contents[slug]);
      this.setState({
        slug : slug,
        contents : individualContent['des'],
        title : individualContent['title'],
        pros : individualContent['pros'],
        cons : individualContent['cons'],
        languages : individualContent['language'],
        published : individualContent['published'],
        img_source : individualContent['img_source'],
        link : individualContent['link'],
        source : individualContent['source']
      });
    }
  }

  render () {
    return(
      <div className="main-back">
        <Menu />
        <div className="showcase-back">
          <div className="contents-wrap">
            <h1>{this.state.title}</h1>
            <p className="contents-p" dangerouslySetInnerHTML={{__html: this.state.contents}} />
            <div className="individual-gain-pain">
              <ul>
                <h3>Gains:</h3>
                {this.state.pros ? this.state.pros.map( pro => {
                  return(
                    <li key={pro}><p>{pro}</p></li>
                  );
                })
              : null}
              </ul>
              <ul>
                <h3>Pains:</h3>
                {this.state.cons ? this.state.cons.map( con => {
                  return(
                    <li key={con}><p>{con}</p></li>
                  );
                })
                : null}
              </ul>
              </div>
              <div className="individual-lower-panel">
                <div>
                  <ul>
                    <h3>Major techs:</h3>
                    <div>
                      {this.state.languages ? this.state.languages.map( language => {
                        return(
                          <li key={language}><p>{language}</p></li>
                        );
                      })
                    : null}
                    </div>
                  </ul>
                  <h3>Published on <a href={this.state.link} target="_blank" rel="noopener noreferrer">{this.state.published }</a> / <a href={this.state.source} target="_blank" rel="noopener noreferrer">Source {this.state.slug === "recipes" ? "(CodePen)" : "(GitHub)"}</a></h3>
              </div>
                {this.state.img_source ? (<a href={this.state.link} target="_blank" rel="noopener noreferrer"><img src={require("../images/" + this.state.img_source)} alt={this.state.slug}/></a>)
              : null}
          </div>
        </div>
          <Footer />
        </div>
    </div>
    );
  }
}
