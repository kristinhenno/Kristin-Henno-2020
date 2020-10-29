import React, { Component } from 'react';
import styled from "styled-components";
import StarRatings from "react-star-ratings";

class Skills extends Component {
  state = {
    skills: [{ name: "WordPress", rating: 5 }, , { name: "JavaScript", rating: 4 }, { name: "CSS", rating: 5 }, { name: "React.js", rating: 4 }, { name: "JSON", rating: 5 }, { name: "mySQL", rating: 3.5 }, { name: "mongoDB", rating: 3.75 }, { name: "HTML", rating: 5 }],
    tools: [{ name: "Postman", rating: 5 }, { name: "Microsoft Office", rating: 5 }, { name: "Git / Git Flow", rating: 4 }, { name: "Google Web Design", rating: 5 }, { name: "Adobe Photoshop", rating: 5 }, { name: "Adobe Premiere", rating: 5 }, { name: "Adobe AfterEffects", rating: 4 }, { name: "Atlassian / Jira", rating: 5 }, { name: "FreshDesk", rating: 5 }, { name: "ZenDesk", rating: 5 }, { name: "VS Code", rating: 4.5 }, { name: "Web Inspector Tools", rating: 5 }, { name: "FileZilla", rating: 5 }, { name: "Heroku", rating: 5 }, { name: "Digital Ocean", rating: 5 }, { name: "Mac", rating: 5 }],
    sortedSkills: [],
    sortedTools: [],
  }



  render() {

    return (
      <Style>
        <div id="skillsBox">
          <div id="skillsTitle">Skills</div>
          <div id="under"></div>
          <div className="skillBox">
            {
              this.state.skills.sort((a, b) => a.rating < b.rating ? 1 : -1).map((array, index) =>
                <div className="skillContainer">
                  <div className="skills">{array.name}</div>
                  <div className="stars">
                    <StarRatings
                      rating={array.rating}
                      starRatedColor="#166311"
                      numberOfStars={5}
                      name="rating"
                      starDimension="2vh"
                      starSpacing="0.7%"
                      className="star"
                      starEmptyColor="white"
                    />
                  </div>
                </div>
              )}
          </div>


          <div id="skillsTitle2">Tools</div>
          <div id="under"></div>

          <div className="toolsBox">
            {this.state.tools.sort((a, b) => a.rating < b.rating ? 1 : -1).map((array, index) =>
              <div className="skillContainer">
                <div className="skills">{array.name}</div>
                <div className="stars">
                  <StarRatings
                    rating={array.rating}
                    starRatedColor="#166311"
                    numberOfStars={5}
                    name="rating"
                    starDimension="2vh"
                    starSpacing="0.7%"
                    className="star"
                    starEmptyColor="white"
                  />
                </div>
              </div>
            )}
          </div>

        </div>


      </Style >
    );
  }

}

const Style = styled.section`
.skillContainer{
display:flex;
height: 5vh; 
}

.star-ratings{
  width: 100%;
}

.skills{
  width: 45%;
  font-family:  'Quicksand';
  font-weight: 500;
  font-size: 1.15vmax;


}
.stars{
  width: 20%;
  width: 40%;
}
#skillsBox{
min-height: 100vh;
background-color:white;
}

#skillsTitle{
  font-family: 'Gentium Basic', serif;
font-weight: 700;
font-size: 3vmax;
margin: 0;
padding: 14vh 18% 1vh;
}
#skillsTitle2{
  font-family: 'Gentium Basic', serif;
font-weight: 700;
font-size: 3vmax;
margin: 0;
padding: 4vh 18% 1vh;
}
#under{
  width: 18%;
  border-top: 1px black solid;
  margin-left: 18%;
  margin-bottom: 4vh;
}
// #row{
//   display: flex;
//   padding: 0 18%;
//   margin-bottom: 3vh;
// }

// #lastRow{
//   padding-bottom: 14vh;
//   display: flex;
//   padding: 0 18%;
//   padding-bottom: 14vh;
// }

.skillBox{

display:flex;
flex-direction: column;
flex-wrap: wrap;
height: 21vh;
width: 100%;
padding: 0 18%;
}

.toolsBox{

  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 58vh;
  width: 100%;
  padding: 0 18%;
  padding-bottom: 14vh;
  }



@media only screen and (min-width: 0px) and (max-width: 600px) { 

  
  #skillDiv{
    display: block;
    // padding:  18%;
    margin-bottom: 0vh;
  }


  .stars{
    width: 50%;
    margin-top: -1%;
  }

  #skillsBox{
  min-height: 100vh;
  background-color:white;
  }
  
  #lastRow{
  padding-bottom: 14vh;
  display: block;
  padding: 0 18%;
 padding-bottom: 7vh;
}
  
#skillsTitle{
  font-family: 'Gentium Basic', serif;
font-weight: 700;
font-size: 3vmax;
margin: 0;
padding: 8vh 18% 1vh;
}
  
.skillBox {
display:block;
  width: 100%;
  padding: 0 18%;
  height: auto;
}
.toolsBox {
  display:block;
    width: 100%;
    padding: 0 18%;
    height: auto;
    padding-bottom: 4vh;
  }

  .skills{
    font-size: 1.5vmax;
  }

`;

export default Skills;