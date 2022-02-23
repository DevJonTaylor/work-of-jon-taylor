import {DarkCard, CardHeader, CardText} from "../Cards";

function Contact() {
  return (
    <div>
      <section className="row justify-content-center">
        <DarkCard grid="6">
          <CardHeader>
            How to reach me!
          </CardHeader>
          <CardText>
            <a href="https://www.linkedin.com/in/vue-shell/">LinkedIn Profile</a>
          </CardText>
          <CardText>
            <a href="mailto:jonnytest1101@icloud.com?subject=Lets%20Connect&body=From%20Portfolio%3A">
              Send an Email to jonnytest1101@icloud.com
            </a>
          </CardText>
          <CardText>
            <a href="tel:+15127409784">Call/SMS me (512)740-9784</a>
          </CardText>
        </DarkCard>
      </section>

    </div>
  );
}

export { Contact }