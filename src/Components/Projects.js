import React, { Component } from 'react';
import styled from "styled-components";
import LCH from "../Images/LCH.png";
import DLH from "../Images/DLH.png";
import HomeGrid from "../Images/HomeGrid.png";
import open from "../Images/open.png";
import Hero from "../Images/Hero.png";
import See from "../Images/See.png";
import Rory from "../Images/Rory.png";

class Projects extends Component {
  state = {
    articles: [],
  }

  render() {

    return (
      <Style>
        <div id="projectsBox">
          <div id="projectsTitle">Projects</div>
          <div id="under"></div>
          <div id="row">

            <div id="box1">
              <a className="link" href="https://player.vimeo.com/video/269102296" target="_blank">
                <img className="open" src={open} />
                <img className="image" id="homeGrid" src={Hero} />
                <div class="middle">
                  <div className="text">Tiger Woods Foundation</div>
                  <div className="text2">Hero World Challenge Sizzle Reel</div>
                </div>
              </a>
            </div>

            <div id="box2">
              <a className="link" href="https://laurenchristinehenno.com" target="_blank">
                <img className="open" src={open} />
                <img className="image" id="homeGrid" src={LCH} />
                <div class="middle">
                  <div className="text">Lauren Christine Henno</div>
                  <div className="text2">Node, JavaScript, HTML</div>
                </div>
              </a>
            </div>
          </div>
          <div id="row">
            <div id="box3">
              <a className="link" href="https://player.vimeo.com/video/260993344" target="_blank">
                <img className="open" src={open} />
                <img className="image" id="lch" src={Rory} />
                <div class="middle">
                  <div className="text">60s with Rory McIlroy</div>
                  <div className="text2">Shot, interviewed, edited</div>
                </div>
              </a>
            </div>




            <div id="box3">
              <a className="link" href="http://homegridpage.com" target="_blank">
                <img className="open" src={open} />
                <img id="dlh" className="image" src={HomeGrid} />
                <div class="middle">
                  <div className="text">HomeGrid</div>
                  <div className="text2">React.js, mongoDB</div>
                </div>
              </a>
            </div>



          </div>

          <div id="row">
            <div id="box3">
              <a className="link" href="https://player.vimeo.com/video/331532618" target="_blank">
                <img className="open" src={open} />
                <img className="image" id="lch" src={See} />
                <div class="middle">
                  <div className="text">SEE Internationl</div>
                  <div className="text2">Advertisement at SB Film Festival</div>
                </div>
              </a>
            </div>




            <div id="box3">
              <a className="link" href="https://debralynnhennodesign.com" target="_blank">
                <img className="open" src={open} />
                <img id="dlh" className="image last" src={DLH} />
                <div class="middle">
                  <div className="text">DLH Design</div>
                  <div className="text2">JavaScript, HTML</div>
                </div>
              </a>
            </div>



          </div>
        </div>
      </Style>
    );
  }

}

const Style = styled.section`

.last{
  padding-bottom: 14vh;
}

.link{
text-decoration: none;
color:black
}

#box1:hover{
  cursor: pointer;
}

#box2:hover{
  cursor: pointer;
}

#box3:hover{
  cursor: pointer;
}


.text{
  font-family: 'Quicksand';
  font-weight: 800;
margin-bottom: 1vh;
font-size: 1.3vmax;
}


.text2{
  font-family: 'Quicksand';
  font-weight: 700;
margin-bottom: 1vh;
font-size: 1vmax;
}


#box1:hover .image {
  opacity: 0.15;
}

#box1:hover .middle {
  opacity: 1;
   
}

#box2:hover .image {
  opacity: 0.15;
}

#box2:hover .middle {
  opacity: 1;
 
}

#box3:hover .image {
  opacity: 0.15;
}

#box3:hover .middle {
  opacity: 1;
 
}



.open{
position: absolute;
width: 10%;
top:0;
right: 10%;
z-index: 100;
}
.open:hover{
 
    cursor: pointer;
 
  
}
#homeGrid{
width: 90%;

}

#lch{
  width: 90%;
}

#dlh{
  width: 90%;
}

#box1{
  position: relative;
width: 50%;
}

#box2{
  position: relative;
  width: 50%;
  }

  #box3{
    position: relative;
    width: 50%;
    margin-top: 5vh;

    }
    
#projectsBox{
min-height: 100vh;
background-color: #f2f7f2;
}

#projectsTitle{
  font-family: 'Gentium Basic', serif;
font-weight: 700;
font-size: 3vmax;
margin: 0;
padding: 14vh 18% 1vh;
}

#under{
  width: 18%;
  border-top: 1px black solid;
  margin-left: 18%;
  margin-bottom: 4vh;
}

#row{
  display: flex;
  padding: 0 18%;
  // justify-content: center;
  // align-items: center;

}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 40%;
  left: 44%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;

}

.image {
  opacity: 1;
  // display: block;
  // width: 100%;
  // height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}


@media only screen and (min-width: 0px) and (max-width: 600px) { 

  #projectsTitle {
    font-family: 'Gentium Basic',serif;
    font-weight: 700;
    font-size: 3vmax;
    margin: 0;
    padding: 8vh 18% 1vh;
}

#row{
  display:block;
}

#box2{
  margin-top: 5vh;
  position: relative;
  width: 100%;
}

#box1{
  
    position: relative;
    width: 100%;

}

#box3{

  
    position: relative;
    width: 100%;


}

.middle {
  transition: .5s ease;
  opacity: 1;
  position: absolute;
  top: 40%;
  left: 44%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;

}

.image{
  opacity: 0.4;
}

#homeGrid{
  width: 100%;
}

#lch{
  width: 100%;
}

#dlh{
  width: 100%;
  // padding-bottom: 7vh;
}

.last{
  padding-bottom: 7vh;
}

.text {
  font-family: 'Quicksand';
  font-weight: 800;
  margin-bottom: 1vh;
  font-size: 2vmax;
  margin-top: 5vh;
  /* margin-right: -1%; */
}

.text2 {
  font-family: 'Quicksand';
  font-weight: 700;
  margin-bottom: 1vh;
  font-size: 1.2vmax;
}
}
`;

export default Projects;