import website from "../../assets/website.png"
import './Projects.css'

export default function Projects() {

    return (
        <section className="section" style={{ background: "rgb(246, 245, 245)", color: "#276678" }} id="projects">
            <h1>Here are some projects made by me!</h1>
            <p>Just an idea how to I code</p>
            <div style={{ display: "flex" }}>
                <a className="project-link" target="_blank" href="https://github.com/janseverino/personal-page">
                    <img width="350px" src={website} alt="Personal Web Site"></img>
                    <div>
                        <span>{'< This Page Code />'} </span>
                    </div>
                </a>

            </div>
        </section>
    )
}