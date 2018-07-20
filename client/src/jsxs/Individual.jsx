import React from 'react';
import { Menu } from './Menu.jsx';
import { Footer } from './Footer.jsx';
const clone = require('clone');

let contents = {
  blackjack : {des: "This Single-Page-App was created with JQuery. Basically, I made several Objects as Game, Player, Dealer, Deck and Card with bunches of related functions. After the page was load, these Objects would be generated and interacted with each other, then started the game.",
    title: "Blackjack",
  pros : ["Simple to design", "No requirement for other library support"],
  cons : ["The logic behind the game was relatively complicated", "Double values of Ace was the key and Bug's hotbed of the program", "Too many functions and variables", "Debugging was exhausting"],
  language: ["JQuery"],
  published : "GitHub Page"},

  tictactoe : {
    des: "This is one of the Single-Page-App I created at my earlier coding time during studying the online course from freeCodeCamp. I did it on CodePen.io with JQuery. You can select to play it first or second. For the fun, I intentionally designed the AI a little bit 'random', so you can still win the game sometimes.",
    title: "Tic Tac Toe",
    pros : ["It was fun to write the program", "As one of my early achievements in coding, it gave me great confidence", "My friends liked it"],
    cons : ["Too many functions and variables", "Styling with CSS was annoying"],
    language: ["JQuery"],
    published : "GitHub Page and CodePen"},

    simon : {
      des : "It is another homework during my earlier coding time while studying from freeCodeCamp. I did it on CodePen.io with JQuery. You can select normal mode or crazy mode to play the game. In normal mode you can repeat the try until you hit the buttons correctly, while in crazy mode you only have one chance.",
      title: "Simon Game",
      pros: ["CSS work was fun"],
      cons : ["There was an issue with the playing sounds which always popped as explosion, so I had to turn them off"],
      language: ["JQuery"],
      published : "GitHub Page and CodePen"},

    chatter : {
      des : "I created this app with express and socket.io. It's working like an online chat room. Different people can join in one same room and communicate with each other. You can send and receive public message or private message to or from other users.",
      pros : ["It was functionally useful as an app", "As my first time using socket.io it was fun"],
      title: "Chatter",
      cons : ["It was not easy to debug, I had to insert a lot of console.log() into the program", "It was very tricky to select and get the attribute value of the particular user for private chat by JQuery, which took me most of the time in doing it"],
      language: ["node.js", "express", "socket.io","JQuery"],
      published : "Heroku"},

    reviewer : {
      des : "A yelp-like website for you to search and read the reviews of restaurants in current list. After signing up and logging in as a user, you can leave comments for current restaurants or add new bussiness to the list.",
      title: "What Diners Say",
      pros : ["Making this helped me manage the cross-talk between database and express", "By fetching data from database, I could render the template html page with different data"],
      cons : ["Creating sample database was annoying"],
      language: ["node.js", "express", "nunjucks", "PostgreSQL", "JQuery"],
      published : "Heroku"
    },

    react_contact : {
      des : "This is a Single-Page-App I made with React. You can search, edit, delete or add contacts with it. The contact list is stored in local storage, and you can check it later with the updated results. This is the first project for React in DigitalCrafts course. It had been almost one year before I use React again for coding, so I needed to update my knowledge and skills in earnest. This project was a greating training for me.",
      pros: ["I had gained a refresh of React by making it", "For the very first time, I got touch with React router"],
      title: "React-Contacts",
      cons: ["I hadn't learnt React Redux when I was making this App, the interactions of states and props among sibling or parent-children components were like a hell to me", "React router was pretty difficult in the beginning", "The index.js file was too big"],
      language: ["React", "React Router"],
      published : "Heroku"
    },

    recipes : {
      des : "This is one of the React Apps I made when studying from freeCodeCamp one year ago. The React library behind it was already out of date, and some methods were deprecated. Although it is old somehow, it is well functional. You can add, edit or delete recipe from it. The updated results are stored in local storage, then you can visit it again later.",
      pros : ["Like the 'Tic Tac Toe', this is the one of those I showed mostly to my friends", "It's my favorite React App, even after I can build much larger and more complicated Apps using Redux and React router"],
      title: "Mama's Recipe Book",
      cons : ["None, I enjoyed every seconds making it"],
      language: ["React"],
      published : "CodePen"
    },

    yingyang : {
      des : "This is the work for the assigned individual project by DigitalCrafts. It is a fun fortunetelling game using the philosophy of 'Ying & Yang' from the ancient Chinese. You can ask any questions, then as following the old way you will toss three coins for six times. Based on the coin-toss results, you will get two different symbols. One for current status of the question, the other one for the future. You will find out the hidden answer by yourself from the hints of the symbols.",
      pros : ["I applied Redux and React router on this project. Both worked smoothly and stably", "It's the first time I combined node.js with React in one App, it feels good"],
      title: "Ask Yingyang",
      cons : ["Some library was not supported by React-build, so I had to import it in backend then made calls from React instead of directly using at frontend", "I had huge problem when deploying it to Heroku", "After enormous attempts I still couldn't make both express_API and React_UI working together if I include them in one package", "Eventually I overcame it by deploying two separate packages to heroku"],
      language: ["React", "React router", "Redux", "node.js", "express", "PostgreSQL"],
      published : "Heroku"
    },

    weather : {
      des : "Weather Report is a simple App powered by Python Tornado and API from 'Openweathermap'. You can search the queried city's current weather condition or check the historical queried results of it.",
      title: "Weather Report",
      pros : ["I designed multiple handlers for different scenarios to save memory", "If it's a search for new city, the API will be called", "If the interval of query for the same city is less than 2 hours, the App will ask database for the latest result instead of making API request", "If the interval is longer than 2 hours, the API will be called and the results will be saved in database"],
      cons : ["Different conditions made the coding and debugging tiring", "Dealing with time zone and time format in database was depressing"],
      language: ["Python", "Tornado", "PostgreSQL", "jinja2"],
      published : "Heroku"
    },

    forum : {
      des : "It is a forum-like website powered by Python Tornado. Basically you can write new posts or comment on other posts in differnt categories.",
      pros : ["It was my first time to use Python to build a real website (most likely)", "First time to use database in dynamic App"],
      title: "Kotaku Forum",
      cons : ["As an early work for website project, the login system was bad", "Some designs of it were clumsy, like the 'slug' part"],
      language: ["Python", "Tornado", "PostgreSQL", "jinja2"],
      published : "Heroku"
    },

    tornado : {
      des : "It is a showcase of my several small Single-Page-Apps in one bundle App powered by Python Tornado. You can find 'Tic Tac Toe', 'Simon', 'Timezone Converter' which is built by Python and 'Mini-Wiki' in it. Also you can send messages directly to my mailbox from the App.",
      pros: ["It was my first web App using Python, very excited", "Responsible for different devices", "It was amazing to send mails onsite"],
      title: "Tornado Showcase",
      cons : ["I hadn't learnt redirection or other directives for page management when making this App, so the navigation within it was clumsy"],
      language: ["Python", "Tornado", "jinja2"],
      published : "Heroku"
    },

    climate : {
      des : "This is the group project assigned by DigitalCrafts. <a href='https://github.com/lloydXmas'>Noel Honeybourne</a>, <a href='https://github.com/Zengeol'>Claudia Ling</a> and me made it as a team. The goal of this App is to collect temperature and humidity data from sensors placed in Noel's house, and display them as charts. You can check the temp/humidity in different room or on different date.",
      title: "Climate Monitor",
      pros: ["My duty in team was to write the files for Tornado server, js files for components interactions on page and some css work", "It was my first time to collaborate with others through Github", "And it was working well eventually, that was the best part"],
      cons : ["As the first time to do group work through Github, the process was painful", "People might discard your work as it conflicted with his/hers", "Mistakes frequently popped up when trying to push or pull from remote"],
      language: ["Python", "Tornado", "jinja2", "PostgreSQL", "JQuery"],
      published : "Heroku"
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
      published : null
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
      published : individualContent['published']
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
        published : individualContent['published']
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
              <ul>
                <h4>Main techs:</h4>
                  {this.state.languages ? this.state.languages.map( language => {
                    return(
                      <li key={language}><p>{language}</p></li>
                    );
                  })
                : null}
              </ul>
              <h4>Published on <span>{this.state.published}</span></h4>
          </div>
          <Footer />

        </div>
    </div>

    );
  }
}
