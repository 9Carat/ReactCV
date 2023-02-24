import React from "react"
import Portrait from './images/portrait.jpg';

export const Home = () => {
    return (
       <div className="home">
        <img className="image" src={Portrait} alt="portrait of myself"/>
        <h3 className="about-me" >Hello and welcome to my CV!</h3>
        <p className="about-me">
            I would describe myself as a positive and relaxed person who enjoys a good sense of humour and those close to me would probably describe me as someone who is organized and enjots structure in their daily life <br></br>
            I am a calm person who likes to take on new challenges and enjoys problem solving. In my spare time I do a lot of training, cardio, outdoor activities and hanging out with friends. <br></br>
            I enjoy working on a team but I also like to have my own responsibilities as this has been a constant feature of my studies at university.
        </p>
       </div>
 )
}