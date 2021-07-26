
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithub, faMailchimp } from '@fortawesome/free-brands-svg-icons'
import './Contact.css'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {

    return (
        <section className="section" style={{ background: "rgb(22, 135, 167)" }} id="contact">
            <h1 className="title">Let’s work together...</h1>
            <span className="sub-title">contact me at</span>

            <div className="container">
                <a className="img-link linkedin" target="_blank" href="https://www.linkedin.com/in/janseverino/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className="img-link github" target="_blank" href="https://github.com/janseverino">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className="img-link mail" target="_blank" href="https://github.com/janseverino">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>

            </div>

        </section>
    )
}