import { DarkCard, CardHeader, CardText } from "../Cards";
import {NavLink} from "react-router-dom";

function About() {
  return (
    <section className="row space-around">
      <DarkCard grid="10" md="3">
        <CardHeader>Who am I?</CardHeader>
        <CardText>I am a family first coding gamer with music where it fits.  That summarizes me!</CardText>
        <CardText>Wait you want to know more because this is the about me section?</CardText>
        <CardText>Well ok lets see.  When I am not hanging with the family and sometimes even together we
          play video games ranging anything from Undertale races to Halo, Fortnite, Speedrunners, Pokemon, Minecraft.
          Pretty much anything that comes to mind.</CardText>
      </DarkCard>
      <DarkCard sm="10" md="4">
        <CardHeader>Coding Skills?</CardHeader>
        <CardText>Vanilla JavaScript is my one of my favorites!  I prefer TypeScript the restrictions forces
          you to check arguments even when you forget!  Less errors and unit testing finishes the crazy.</CardText>
        <CardText>Frontend tools: React (Which is what I made this in), Vue, jQuery, GSAP 3, SCSS</CardText>
        <CardText>Backend tools: PHP, Unix/Headless Linux, Apache2, Redis, SQL, noSQL (Couch, Mongo, Firebase
          "I know that really this more frontend")</CardText>
        <CardText>I am always up for learning something new!</CardText>
      </DarkCard>
      <DarkCard sm="10" md="3">
        <CardHeader>Projects?</CardHeader>
        <CardText>Some of things I have created.</CardText>
        <ul>
          <li>Weather App</li>
          <li>Code Quiz</li>
          <li>G.O.A.T. Scale</li>
        </ul>
        <NavLink to="/projects">Check Them Out Here!</NavLink>
      </DarkCard>
    </section>
  );
}

export { About }