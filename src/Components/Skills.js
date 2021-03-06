import React, { Component } from 'react';
import styled from "styled-components";
import Skill from "./Skill";

const skills = [{ name: "Node.js", rating: 5 }, , { name: "JavaScript", rating: 4 }, { name: "CSS", rating: 5 }, { name: "React.js", rating: 4 }, { name: "JSON", rating: 5 }, { name: "mySQL", rating: 3 }, { name: "mongoDB", rating: 3.5 }, { name: "HTML", rating: 5 }];

const sortedSkills = skills.sort((a, b) => a.rating < b.rating ? 1 : -1);

const tools = [{ name: "Postman", rating: 5 }, { name: "Microsoft Office", rating: 5 }, { name: "Git / Git Flow", rating: 4 }, { name: "Google Web Design", rating: 5 }, { name: "Adobe Photoshop", rating: 5 }, { name: "Adobe Premiere", rating: 5 }, { name: "Adobe AfterEffects", rating: 4 }, { name: "Atlassian / Jira", rating: 5 }, { name: "FreshDesk", rating: 5 }, { name: "ZenDesk", rating: 5 }, { name: "VS Code", rating: 4.5 }, { name: "Web Inspector Tools", rating: 5 }, { name: "FileZilla", rating: 5 }, { name: "Heroku", rating: 5 }, { name: "Digital Ocean", rating: 5 }, { name: "Mac", rating: 5 }];

const sortedTools = tools.sort((a, b) => a.rating < b.rating ? 1 : -1);

class Skills extends Component {
  state = {
    skills: sortedSkills,
    tools: sortedTools,
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
            {this.state.skills.map((array, index) =>
              <Skill {...array} />
            )}
          </div>
          <div id="skillsTitle2">Tools</div>
          <div id="under"></div>

          <div className="toolsBox">
            {this.state.tools.map((array, index) =>
              <Skill {...array} />
            )}
          </div>
        </div>

      </Style >
    );
  }

}

const Style = styled.section`

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