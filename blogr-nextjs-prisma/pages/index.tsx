import React from "react"
import Image from "next/image"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faLinkedin, faBitcoin } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"


type Props = {
  feed: PostProps[]
}

const Home: React.FC<Props> = (props) => {
  const content = {
    title: "I like to build cool stuff",
    description: [
      "Hello World! I'm Michael O'Sullivan. I lead and innovate in the tech space, particularly where it intersects with media. I use technologies like blockchain and cryptocurrency, and I'm pretty handy with Python programming too.",
      "I specialise in product management and front-end web development, and I love using data to drive decisions and innovations. If you're interested in what I can bring to your team, feel free to reach out."
    ],
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/",
      facebook: "https://www.facebook.com/YOUR_FACEBOOK_USERNAME/",
      twitter: "https://twitter.com/YOUR_TWITTER_USERNAME/"
    },
    bitcoinSign: "I accept ",
    learn: "Learn more about me >"
  }

  return (
    <Layout>
      <div className="page">
        <div className="row whitebk">
          <div className="col-md-6">
            <h1>{content.title}</h1>
            {content.description.map((paragraph, index) => (
              <p className="fp" key={index}>{paragraph}</p>
            ))}
            <p className="my-3">
              <Link href="/about"><a>{content.learn}</a></Link>
            </p>
            <div className="social-media-icons">
              <a href={content.socialMediaLinks.linkedin} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="1x" />
              </a>
              <a href={content.socialMediaLinks.facebook} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="1x" />
              </a>
              <a href={content.socialMediaLinks.twitter} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="1x" />
              </a>
            </div>
            <div className="bitcoin-sign">
                {content.bitcoinSign}
                <FontAwesomeIcon icon={faBitcoin} size="1x" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="imageContainer">
              <Image
                src="/eos.png"
                alt="Projects and Clients"
                layout='fill'
                objectFit='contain'
                objectPosition='right'
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }

        .social-media-icons {
          display: flex;
          justify-content: flex-start;
          gap: 20px;
          margin-top: 20px;
        }

        .bitcoin-sign {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-top: 20px;
          color: #f7931a; /* Bitcoin's color */
          font-size: 16px;
          font-weight:bold;
        }
        .inlineIcons {
          display: flex;
  justify-content: space-between; /* Adjusts the space between the children elements, you can change as per your need */
        }
        @keyframes typewriter {
          0% { width: 0; }
          100% { width: 100%; }
        }

        .typewriter-text {
          border-right: 2px solid;
          white-space: nowrap;
          overflow: hidden;
          animation: typewriter 4s steps(44) 0s 1 normal both,
                     blinkTextCursor 500ms steps(44) 0s 1 normal both;
        }

        @keyframes blinkTextCursor {
          0% {border-color: transparent;}
          50% {border-color: transparent;}
          100% {border-color: black;}
        }

        .imageContainer {
          position: relative;
          width: 100%;
          height: 500px;
        }
      
      `}</style>
    </Layout>
  )
}

export default Home
