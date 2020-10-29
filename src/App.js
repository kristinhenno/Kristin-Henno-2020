import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import React from "react";
import background from "./Background.png";
import Profile from "./Profile";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Hamburger from "./Hamburger.png";



class App extends React.Component {

  state = {
    selected: "",
    vYalue: 0,
    onScreen: true,
    place: 0,
    showNav: false
  }

  handleSetActive = (to) => {
    console.log(to);
  }

  checkNav = () => {
    if (this.state.showNav === false) {
      this.setState({
        showNav: true
      })
    }

    if (this.state.showNav) {
      this.setState({
        showNav: false
      })
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY;
      const place = window.innerHeight + 100;

      if (isTop > place) {
        this.setState({
          onScreen: false,
          vYalue: isTop,
          place: place

        })
      }

      if (isTop < place) {
        this.setState({
          onScreen: true,


        })
      }

      if (isTop === place) {
        this.setState({
          onScreen: true,


        })
      }
    });
  }



  render() {
    console.log(this.state.place);
    console.log(this.state.vYalue);


    return (
      <Style>
        <div data-spy="scroll" data-target="#myScrollspy" data-offset="15">
          <div className="app">
            <div className="section" >
              <div id="home">
                <div id="kristin">
                  <h1 id="title">Kristin Henno</h1>
                  <p id="resume"> &nbsp;Content Creator</p>

                </div>


                <Link activeClass="nothing" to="profile" spy={true} smooth={true} duration={500} >
                  <div className="down"><p className="arrow1">&#8659;</p></div>
                </Link>
              </div>
            </div>

            <div id="myScrollspy">
              <div id="nav" >

                <div id="box" data-spy="affix" data-offset-top={isMobile ? window.innerHeight * 1 : window.innerHeight * 0.8}>
                  <div onClick={() => this.checkNav()} id="hamburgerBox"><img id="hamPic" src={Hamburger} /></div>

                  {((this.state.showNav && isMobile) || (!this.state.showNav && !isMobile)) ? <div>  <Link onClick={() => this.setState({
                    showNav: false
                  })} className={this.state.onScreen ? "navOption active" : "navOption"} activeClass="active" to="profile" spy={true} smooth={true} duration={500} >
                    PROFILE
      </Link>
                    <Link onClick={() => this.setState({
                      showNav: false
                    })} className="navOption" activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
                      PROJECTS
      </Link>

                    <Link onClick={() => this.setState({
                      showNav: false
                    })} className="navOption" activeClass="active" to="skills" spy={true} smooth={true} duration={500}>
                      SKILLS
      </Link>
                    <Link onClick={() => this.setState({
                      showNav: false
                    })} className="navOption" activeClass="active" to="experience" spy={true} smooth={true} duration={500} >
                      EXPERIENCE
      </Link>

                    <Link onClick={() => this.setState({
                      showNav: false
                    })} className="navOption" activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
                      CONTACT
      </Link>
                  </div>

                    : <div></div>}



                </div>
              </div>
            </div>
          </div>

          <Element name="profile" className="element">
            <Profile />
          </Element>
          <Element name="projects" className="element">
            <Projects />
          </Element>

          <Element name="skills" className="element">
            <Skills />
          </Element>

          <Element name="experience" className="element">
            <Experience />
          </Element>
          <Element name="contact" className="element">
            <Contact />
          </Element>
        </div>
      </Style >
    );
  }
}

const Style = styled.section`




#box{
  display: block;
}

.navOption{
  text-decoration: none;
    color: black;
    padding: 27% 0;
    font-size: 1vmax;
    display: block;
    font-weight: 700;
    font-family:  'Quicksand';
    background-color: #f7f3e9;
}
.active{
  color:white;
  background-image: url(./Palms.png);
background-size:cover;
}

@keyframes slide1 {
  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0px, 10px);
  }
}


#nav{
  position: absolute;
  margin-left: 86%;
  // border: 1px solid green;
  border-top: none;
  text-align: center;
  width: 7%;
  text-decoration: none;
  color: black;
}

#nav:hover{
  cursor:pointer;
}
.affix {
  
  top: 20vh;
  z-index: 9999 !important;
  // border: 1px green solid;
  text-align: center;
  text-decoration: none;
  color: black;
  font-size: 1vmax;
  width: 7%;
  margin-left: -0.075%;
  

}

.arrow1 {
  animation: slide1 1s ease-in-out infinite;
  font-size: 3.4vmax;
  margin: 0;
}


.down{
  background-color: #f7f3e9;
  color: black;
  position: absolute;
  bottom: 0;
  margin: 0;

  margin-left: 86%;
  padding: 0.75% 2%;
}

.down: hover{
  cursor: pointer;
}

#title{
  font-family: 'Gentium Basic', serif;
  font-weight: 700;
  font-size: 4em;
  margin: 0; 
  border-bottom: white 1px solid;
  color: white;


}

#resume{
  font-size: 1em;
  font-size: 1.3em;
  margin: 1.2vh 0 0 0;
  font-weight: 700;
  font-family:  'Quicksand';

}

#kristin{
  color: white;
  position: absolute;
  bottom: 30vh;
  right: 20%;
}

#home{
height: 100vh;
background-image: url(./Background.png);
background-size:cover;

}
.section{
  width: 100%;
}

#home{
 height 100vh;
 overflow: hidden;
}

#profile{
  position: relative;
}

#hamburgerBox{
  width: 100%;
  display: none;
}


@media only screen and (min-width: 0px) and (max-width: 600px) { 

  #hamPic{
    width: 8%;
    width: 13%;
    padding: 4%;
  }

  #home{
    height: 100vh;
    background-image: url(./Background.png);
    background-size:cover;
    background-position: 18%;
    
    }

    #kristin {
      color: black;
      position: absolute;
      top: 7vh;
      left: 0%;
      width: 100%;
  }

  #title{
    margin-left: 4%;
    color: black;
    border-bottom: black 1px solid;
    margin-right: 4%;
    font-size: 3.4em;
  }

   #resume {
    font-size: 1em;
    font-size: 1.3em;
    margin: 1.2vh 0 0 0;
    font-weight: 700;
    font-family: 'Quicksand';
    margin-left: 4%;
}


.down{

  width: 100%;
margin-left: 0;
width: 100%;
}
.arrow1{
  font-size: 6.4vmax;
    margin: 0;
    text-align: center;
}
#resume{
  font-size: 1.6em;
}

#nav{
  display: flex;
  width: 100%;
  margin: 0;
}

#box{
  width: 100%;
}

#hamburgerBox{
  width: 100%;
  display: block;
  text-align: right;
  background-color: #f7f3e9;
}

.navOption{
  padding: 1.5vh;
  font-size: 2vmax;
}

.affix {
  
  top: 0vh;
  z-index: 9999 !important;
  // border: 1px green solid;
  text-align: center;
  text-decoration: none;
  color: black;
  font-size: 1vmax;
  width: 7%;
  margin-left: -0.075%;
  

}
}


`

export default App;
