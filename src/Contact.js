import React, { Component } from 'react';
import styled from "styled-components";
import Github from "./Github.png";
import LinkedIn from "./LinkedIn.png";
import Mail from "./Mail.png";
import Vimeo from "./Vimeo.png";
import Pic2 from "./Pic2.png";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class Contact extends Component {
  state = {
    articles: [],
  }

  render() {

    return (
      <Style>
        <div id="profileBox">
          <div id="contactTitle">Contact</div>
          <div id="under"></div>
          <div id="contactBox">
            <div id="row">


              <div id="box1">
                <img id="git" src={Github} />
                <a className="contactlink" target="_blank" href="https://github.com/kristinhenno">
                  github.com/kristinhenno
 </a>
              </div>


              <div id="box2">
                <img id="git" src={Mail} />
                <a className="contactlink" target="_blank" href="mailto:kristinhenno@gmail.com">
                  kristinhenno@gmail.com
 </a>
              </div>

            </div>
            <div id="row">

              <div id="box3">

                <img id="git" src={LinkedIn} />
                <a className="contactlink" target="_blank" href="https://linkedin.com/in/kristinhenno/">
                  linkedin.com/in/kristinhenno
 </a>
              </div>

              <div id="box4">
                <img id="git" src={Vimeo} />
                <a className="contactlink" target="_blank" href="https://vimeo.com/user31544661">
                  vimeo.com/user31544661
 </a>
              </div>

              {isMobile ?
                <div id="contactPicBox">
                  <img id="contactPic" src={Pic2} />
                </div> : <div></div>}

            </div>

          </div>
        </div>
      </Style>
    );
  }

}

const Style = styled.section`
.contactlink{
text-decoration: none;
color: black;
font-family: 'Quicksand';
margin: 2vh;
font-size: 1.5vmax;
}

#git{
  width: 10%;
  align-self: center;
}

#box1{
  display: flex;
  width: 50%;
}
#box2{
  display: flex;
  width: 50%;
}
#box3{
  display: flex;
  width: 50%;
}

#box4{
  display: flex;
  width: 50%;
}

#row{
  display: flex;
  padding: 6vh 18%;
  // justify-content: center;
  // align-items: center;
 min- height: 100vh;
}

#under{
  width: 18%;
  border-top: 1px black solid;
  margin-left: 18%;
  margin-bottom: 7vh;
}

#profileBox{
min-height: 100vh;
background-color: white;
}

#contactTitle{
  font-family: 'Gentium Basic', serif;
font-weight: 700;
font-size: 3vmax;
margin: 0;
padding: 14vh 18% 1vh;
}

#contactPicBox{
display:none;
}

#contactPic{
  display:none;
}

@media only screen and (min-width: 0px) and (max-width: 600px) {

  #profileBox{
    padding-bottom: 5vh;
   min-height: auto;
  }
  #row{
    display: block;
    padding: 0;
  }

  #contactTitle{
    padding: 8vh 18% 1vh;
  }

  #contactBox{
    padding: 0 18%;
  }

  #under{

    margin-bottom: 2vh;

  }

  #contactPicBox{
    padding: 7vh 0 4vh 0;
    display:block;
  }

  #contactPic{
    width: 100%;
    display:block;
  }
}
`;

export default Contact;