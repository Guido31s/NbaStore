
import image1 from "../Footer/instagram.png"
import image2 from "../Footer/twitter.png"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="bg-light">
            <a href="https://www.instagram.com/nba/" target="_blank"><img className="footerImg" src={image1} /></a>
            <a href="https://twitter.com/NBA" target="_blank"><img className="footerImg" src={image2} /></a>
            <p>Copyright 2021, Derechos Reservados</p>
        </footer>
    )
}

export default Footer
