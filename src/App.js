import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import "bulma/css/bulma.css";

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistans</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title="alexa" handle="@alexa20" image={AlexaImage} />
                        </div>

                        <div className="column is-4">
                            <ProfileCard title="cortana" handle="@cortana55" image={CortanaImage} />
                        </div>

                        <div className="column is-4">
                            <ProfileCard title="siri" handle="@siri023" image={SiriImage} />
                        </div>
                    </div>
                </section>
            </div>
            

        </div>
    );
}

export default App;