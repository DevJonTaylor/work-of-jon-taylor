import { CardHeader, DarkCard, CardImage, CardBody, CardText } from "../Cards";
import { RepoAndPages } from "../GitHub";

function Projects() {
  return (
    <div>
      <section className="center-content">
        <DarkCard sm={10} md={6}>
          <CardImage png="horiseon.desktop" alt="Desktop version of Horiseon project."/>
          <CardHeader>
            Horiseon Code Refactor
          </CardHeader>
          <CardBody>
            <CardText>A project where I refactor the code semantically.</CardText>
            <CardText>
              This was a unique challenge because I have never worked with semantic HTML before.
              After refactoring the code it was so neat to realize how everything connects from an
              accessibility stand point.  When I worked at Apple I do a ton of work with screen readers this
              really opened up my eyes a bit more to see how third party factors really come into play.
            </CardText>
            <CardText>
              <RepoAndPages repoName="refactor-horiseon-octo" />
            </CardText>
          </CardBody>
        </DarkCard>
      </section>
      <section className="row justify-content-between">
        <DarkCard sm={10} md={5} className="px-0">
          <CardImage png="password.desktop" alt="Desktop version of the password generator." />
          <CardHeader>Password Generator</CardHeader>
          <CardBody>
            <CardText>I utilized Object Orientated Programming for this project.</CardText>
            <CardText>
              Taking ES6 ideas, the code for this project was done with less than 120 lines of code.
              I learned a bit about JSDoc and successfully created a password generator.  I ran into one
              problem where the password was not always including all of the requested characters.  I was
              able to solve this by using a proper shuffle after ensuring all of the requested characters
              were included.
            </CardText>
            <CardText><RepoAndPages repoName="password-randomizy" /></CardText>
          </CardBody>
        </DarkCard>
        <DarkCard sm={10} md={5} className="px-0">
          <CardImage png="code.quiz.desktop" alt="Desktop version of the Code Quiz." />
          <CardHeader>Code Quiz</CardHeader>
          <CardBody>
            <CardText>
              I learned about state management in this project.  I used objects to manage the quiz, timer
              saving the score to the localStorage so you can set this up in a device and share it.
            </CardText>
            <CardText>
              I ran into a small challenge where I did not document properly as I took breaks and came back
              not knowing what was what?!  So as I restarted this projected I learned to utilize TODO and
              documentation before I created the methods actual code so I knew what was what.
            </CardText>
            <CardText><RepoAndPages repoName="furry-octo-waddle" /></CardText>
          </CardBody>
        </DarkCard>
        <DarkCard sm={10} md={5} className="px-0">
          <CardImage png="work.day.scheduler.desktop" alt="Desktop version of the Work Day Scheduler." />
          <CardHeader>Work Day Scheduler</CardHeader>
          <CardBody>
            <CardText>
              Ensuring user interaction for confirmation and objects to ensuring everything is working
              properly.  I successfully created a basic day planner.
            </CardText>
            <CardText>
              I got a small taste of TypeScript definitions here and loved it.  I applied them to the JSDoc and
              really allows for great understanding of the code itself.  While applying a object based environment
              I had so much fun here!
            </CardText>
            <CardText><RepoAndPages repoName="cuddly-planner" /></CardText>
          </CardBody>
        </DarkCard>
        <DarkCard sm={10} md={5} className="px-0">
          <CardImage png="weather.dashboard.desktop" alt="Desktop version of the weather dashboard." />
          <CardHeader>Weather Dashboard</CardHeader>
          <CardBody>
            <CardText>
              A weather dashboard that uses OpenWeatherApi and MapBox as a service to provide a six day
              forecast.
            </CardText>
            <CardText>
              Kicking it off I implemented a View object that also acts as a Model object.  I did this with
              two different objects.  I did this with the MapBox object that acted as the auto-complete for
              the user.  Once a location was selected this did two things.  First it added a location to
              the history.  This model/view/controller object recorded and managed the history as well as sent
              the view to the DOM.  When the object was added to a string the toString kicked in and it
              provided the HTML needed to create the buttons for the history.
              This was a new concept for me as I had never utilized the toString and it was really neat.
              However a bit confusing took everything was happening inside one object.  I did the same thing for
              the object that handled the weather data that came in.  In the future I will be utilizing data in
              the Model object, the HTML in the view model, and controller will work with events and communication.
              The project was successful and loads of fun learning these new concepts!
            </CardText>
            <CardText><RepoAndPages repoName="jon-weather-forecast" /></CardText>
          </CardBody>
        </DarkCard>
      </section>
      <section className="center-content">
        <DarkCard sm={10} md={6}>
          <CardImage png="goat.scale.desktop" alt="Desktop version of G.O.A.T. Scale."/>
          <CardHeader>
            Horiseon Code Refactor
          </CardHeader>
          <CardBody>
            <CardText>
              A group project that uses ESPN and Giphy API to bring check stats and you
              check to see if the player you selected is better than the computer.
            </CardText>
            <CardText>
              I was in charge of bringing in the ESPN data which I used models to receive and provide data.
              I then created objects to control what the data did and views to display the data.  This was
              so much fun being able to collaborate with others and build something neat!  A challenge here
              would easily be the vague documentation available on ESPN's API.  So I created TypeScript
              definitions that allowed me to define what to expect from each endpoint.  This also allowed me
              the ability to see what data is available and what data is not available from each endpoint.
            </CardText>
            <CardText>
              Some points I would change would be better documentation on my end.  I feel as though I
              should have created a better documentation for each object.  I might go back later and create a
              repo just for these as it really ended up being more of an Software Development Kit(SDK).
            </CardText>
            <CardText>
              <RepoAndPages repoName="wing-map" />
            </CardText>
          </CardBody>
        </DarkCard>
      </section>
    </div>
  );
}

export { Projects }