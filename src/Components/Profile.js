import React, { Component } from 'react';
import styled from "styled-components";
import Pic from "../Images/Pic.jpg"

class Profile extends Component {
    state = {
        articles: [],
    }

    render() {

        return (
            <Style>
                <div id="profileBox">

                    <div id="row">
                        <div id="about">
                            <h1 id="name">Kristin Henno</h1>
                            <div id="under"></div>
                            <p id="location">Santa Barbara, CA</p>
                            <p id="bodyText">Kristin Henno has a background in web development and content creation.  With a degree from University of California, Irvine and NCAA student-athlete All American Academic Honors, she is adept at handling a wide range of responsibilities and thrives under pressure. Kristin has professional experience at Impact, SEE International, PGA TOUR, and the Tiger Woods Foundation.
</p>
                        </div>
                        <div id="pic"><img id="khimg" src={Pic} /></div>
                    </div>
                </div>
            </Style>
        );
    }

}

const Style = styled.section`
#under{
    width: 75%;
    border-top: 1px black solid;
    margin-bottom: 2.5vh;
  }




#name{
    font-family: 'Gentium Basic', serif;
    font-weight: 700;
    font-size: 3vmax;
    margin: 0;

}
#bodyText{
    line-height: 2;
    font-family:  'Quicksand';
    font-weight: 500;
    font-size: 1.3vmax;
}
#profileBox{
min-height: 100vh;
}

#row{
    display: flex;
    padding: 0 18%;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#about{
   width: 45%;
   margin-right: 5%;
}

#pic{
    width: 50%;
}

#khimg{
    width: 100%;
    padding: 0 10%;
}

@media only screen and (min-width: 0px) and (max-width: 600px) { 
    #row{
         display: block;
        // justify-content: center;
        // align-items: center;
        min-height: 100vh;
        margin-bottom: 14vh;
        padding: 12vh 18%;    }

    #about{
        width: 100%;
     
     }
     
     #pic{
         width: 100%;
        
        
     }

     #khimg{
        width: 100%;
        padding:3vh 0 ;
    }

    #bodyText{
        line-height: 2;
        font-family:  'Quicksand';
        font-weight: 500;
        font-size: 2vmax;
    }

    #location{
        font-weight: 600;
        font-family:  'Quicksand';
        font-size: 2.1vmax;
    }

  }
`;

export default Profile;