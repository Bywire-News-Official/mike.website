import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faLinkedin, faBitcoin } from "@fortawesome/free-brands-svg-icons"

type Props = {
  feed: PostProps[]
}

const Home: React.FC<Props> = (props) => {
  const content = {
    title: "Building innovative digital solutions",
    description: [
      "Hi, I'm Michael O'Sullivan. I lead and innovate in the tech space, particularly where it intersects with media. I use technologies like blockchain and cryptocurrency, and I'm pretty handy with Python programming too.",
      "I specialise in product management and front-end web development, and I love using data to drive decisions and innovations. If you're interested in what I can bring to your team, feel free to reach out."
    ],
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/",
      facebook: "https://www.facebook.com/YOUR_FACEBOOK_USERNAME/",
      twitter: "https://twitter.com/YOUR_TWITTER_USERNAME/"
    },
    bitcoinSign: " Pay me in Bitcoin"
  }

  return (
    <Layout>
      <div className="page">
        <main>
        <div className="page megaMargin p-3 whitebk">
        <h1>{content.title}</h1>
        {content.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className="social-media-icons">
          <a href={content.socialMediaLinks.linkedin} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href={content.socialMediaLinks.facebook} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href={content.socialMediaLinks.twitter} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
        <div className="bitcoin-sign">
            <FontAwesomeIcon icon={faBitcoin} size="2x" />
            {content.bitcoinSign}
        </div>
      </div>
        </main>
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
      `}</style>
    </Layout>
  )
}

export default Home
