import React, { Component } from 'react';
import styled from "styled-components";

class Experience extends Component {
  state = {
    articles: [],
  }

  render() {

    return (
      <Style>
        <div id="expBox">
          {/* <h1 id="expTitle">
            Experience
          </h1> */}
          <div id="expTitle">Education</div>
          <div id="under"></div>
          <div id="row">
            <div className="schoolBox">
              <p className="school">University of California, Irvine</p>
              <p className="year">2017</p>
            </div>
            <div className="studied">
              <p className="degrees">Division of Continuing Education</p>
              <ul>
                <li className="accomplishment">Full Stack Web Development</li>
              </ul>
            </div>
          </div>
          <div id="row">
            <div className="schoolBox">
              <p className="school">University of California, Irvine</p>
              <p className="year">2014-2016</p>
            </div>
            <div className="studied">
              <p className="degrees">Public Health</p>
              <ul>
                <li className="accomplishment">Deans List Honors, GPA: 3.8</li>
                <li className="accomplishment">NCAA Academic Honors</li>
              </ul>
            </div>
          </div>
          <div id="row">
            <div className="schoolBox">
              <p className="school">Portland State University</p>
              <p className="year">2012-2014</p>
            </div>
            <div className="studied">
              <p className="degrees">Public Health</p>
              <ul>
                <li className="accomplishment">Deans List Honors</li>
                <li className="accomplishment">NCAA Academic Honors</li>
              </ul>
            </div>
          </div>
          <div id="expTitle2">Professional</div>
          <div id="under"></div>
          <div id="row">
            <div className="schoolBox">
              <p className="school">Impact</p>
              <p className="year">2019-Present</p>
            </div>
            <div className="studied">
              <p className="degrees">Technical Services Engineer</p>
              <ul>
                <li className="accomplishment">Creates technical solutions and plans for client base</li>
                <li className="accomplishment">Assists in integration testing and reviews</li>
                <li className="accomplishment">Provides technical support and guidance in the pre-sales and post-sales process</li>
                <li className="accomplishment">Assists in internal product projects </li>
              </ul>

            </div>
          </div>
          <div id="row">
            <div className="schoolBox">
              <p className="school">Freelance</p>
              <p className="year">2017-Present</p>
            </div>
            <div className="studied">
              <p className="degrees">Content Creator</p>
              <ul>
                <li className="accomplishmentTitle">PGA TOUR</li>
                <ul>
                  <li className="accomplishment">2017-2019</li>

                  <li className="accomplishment"><a className="accomplishment" target="_blank" href="https://kristinhenno.github.io/PGA-AD/">Created animated advertisements with Google Web Designer</a></li>
                  <li className="accomplishment">Built billboard advertisements</li>
                  <li id="last" className="accomplishment">Designed digital advertisements</li>
                </ul>


              </ul>
              <ul>
                <li className="accomplishmentTitle">The Tiger Woods Foundation</li>
                <ul>
                  <li className="accomplishment">2019</li>


                  <li className="accomplishment">Created, shot, edited, and managed Social Media for The Genesis Open</li>
                </ul>


              </ul>
              <ul>
                <li className="accomplishmentTitle">Web Developer</li>
                <ul>
                  <li className="accomplishment">2017-Present</li>
                  <li className="accomplishment">Designs, creates, and mantains portfolio websites</li>
                  <li className="accomplishment"><a className="accomplishment" target="_blank" href="https://laurenchristinehenno.com">Lauren Christine Henno</a></li>
                  <li className="accomplishment"><a className="accomplishment" target="_blank" href="https://debralynnhennodesign.com">DLH Design</a></li>
                </ul>

              </ul>
            </div>
          </div>
          <div id="row">
            <div className="schoolBox">
              <p className="school">SEE International</p>
              <p className="year">2018-2019</p>
            </div>
            <div className="studied">
              <p className="degrees">Digital Marketing Specialist</p>
              <ul>
                <li className="accomplishment">Maintained SEE International's website</li>
                <li className="accomplishment">Designed all digital and print material</li>
                <li className="accomplishment">Conceptualize, develop, and execute social media campaigns</li>
              </ul>
            </div>
          </div>

          <div id="row">
            <div className="schoolBox">
              <p className="school">Tiger Woods Foundation</p>
              <p className="year">2017-2018</p>
            </div>
            <div className="studied">
              <p className="degrees">Digital Marketing Intern</p>
              <ul>
                <li className="accomplishment">Created and designed wesbsite pages</li>
                <li className="accomplishment">Shot and edited media content for digital campaigns and social media</li>
                <li className="accomplishment">Assited in executing social media campaigns</li>
              </ul>
            </div>
          </div>

        </div>
      </Style >
    );
  }

}

const Style = styled.section`

#last{
  margin-bottom: 2vh;
}
}

ul{
  padding-left: 4%;
    margin-left: 0;
}

.degrees{
  font-family: 'Quicksand';
  font-weight: 800;
  margin-bottom: 1vh;
  font-size: 1.1vmax;
}

.accomplishment{
  font-family: 'Quicksand';
  font-weight: 500;
  font-size: 1vmax;
  margin-bottom: 0.5vh;
  text-decoration: none;
  color: black;
}

.accomplishment:hover{
  text-decoration: none;
  color: black;
}
.accomplishmentTitle{
  font-family: 'Quicksand';
  font-weight: 700;
  font-size: 1vmax;
  margin-bottom: 0.5vh;

}

.studied{
  flex-grow: 7;
}

.schoolBox{
  width: 45%;
}

.year{
  font-family: 'Quicksand';
  font-weight: 500;
  font-size: 1vmax;
}

.school{
  font-family: 'Quicksand';
  font-weight: 800;
margin-bottom: 1vh;
font-size: 1.3vmax;
}

#ed{
  font-weight: 800;
  font-family:  'Quicksand';
  font-size: 1.3vmax;
  margin: 7vh 0 1vh 18%;
}

#under{
  width: 18%;
  border-top: 1px black solid;
  margin-left: 18%;
  margin-bottom: 4vh;
}

#expBox{
background-color: #f2f7f2;
min-height: 100vh;
padding-bottom: 14vh;
}
 #expTitle{
font-family: 'Gentium Basic', serif;
font-weight: 700;
font-size: 3vmax;
margin: 0;
padding: 14vh 18% 1vh;
 }

 #expTitle2{
  font-family: 'Gentium Basic', serif;
  font-weight: 700;
  font-size: 3vmax;
  margin: 0;
  padding: 4vh 18% 1vh;
   }

 #row{
  display: flex;
  padding: 0 18%;
  margin-bottom: 5vh;

}
#bottomRow{
  display: flex;
  padding: 0 18%;
  padding-bottom: 14vh;

}

@media only screen and (min-width: 0px) and (max-width: 600px) {

  #bottomRow{
    display: flex;
    padding: 0 18%;
    padding-bottom: 7vh;
  
  }

  #row{
    display: block;
    padding: 0 18%;
    margin-bottom: 5vh;
  
  }

  .degrees{
    font-family: 'Quicksand';
    font-weight: 800;
    margin-bottom: 1.5vh;
    font-size: 1.6vmax;
  }
  
  .accomplishment{
    font-family: 'Quicksand';
    font-weight: 500;
    font-size: 1.6vmax;
    margin-bottom: 0.5vh;
    text-decoration: none;
    color: black;
  }

  .accomplishmentTitle{
    font-family: 'Quicksand';
    font-weight: 700;
    font-size: 1.6vmax;
    margin-bottom: 0.5vh;
  
  }

  #ed{
    font-weight: 800;
    font-family:  'Quicksand';
    font-size: 2vmax;
    margin: 7vh 0 1vh 18%;
  }

  .year{
    font-family: 'Quicksand';
    font-weight: 500;
    font-size: 1.6vmax;
  }
  }
  .school{
    font-family: 'Quicksand';
    font-weight: 800;
  margin-bottom: 1vh;
  font-size: 1.65vmax;
  }

  #bottomRow{
    display: block;
    padding: 0 18%;
    padding-bottom: 7vh;
  
  }

  #expTitle{
    font-family: 'Gentium Basic', serif;
    font-weight: 700;
    font-size: 3vmax;
    margin: 0;
    padding: 8vh 18% 1vh;
     }
    
     #expTitle2{
      font-family: 'Gentium Basic', serif;
      font-weight: 700;
      font-size: 3vmax;
      margin: 0;
      padding: 4vh 18% 1vh;
       }

       #expBox{
     
        padding-bottom: 4vh;
        }
 }


`;

export default Experience;