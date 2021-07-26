import './Footer.css'
export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p> © {year} Jan C. Severino Santana. Made with <a class="footer" href="https://reactjs.org/">ReactJS</a> + CSS </p>
        </footer>
    )
}