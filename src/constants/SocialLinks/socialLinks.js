import React from "react"
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa"
import "./_socialLinks.scss"

const RRSS_LINKS = [
  {
    id: 1,
    icon: <FaLinkedinIn className="social-icon"></FaLinkedinIn>,
    url: "https://www.linkedin.com/in/federico-tanco/",
  },
  /*  {
    id: 2,
    icon: <FaFacebookF className="social-icon"></FaFacebookF>,
    url: "https://www.facebook.com/fede.tanco.3",
  }, */
  /* {
    id: 3,
    icon: <FaTwitter className="social-icon"></FaTwitter>,
    url: "https://twitter.com/bitlogicos",
  }, */
  /* {
    id: 4,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/bitlogic.io/",
  }, */
  {
    id: 5,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/fedetanco22",
  },
]

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className="Footer__Social">
      {RRSS_LINKS.map(({ id, icon, url }) => (
        <li className="Footer__Social__Item" key={id}>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={`Footer__Social__Link ${styleClass ? styleClass : ""}`}
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
export default SocialLinks
