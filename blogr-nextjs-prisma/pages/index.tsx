import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"



type Props = {
  feed: PostProps[]
}

const Home: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <main>
        <div className="page megaMargin p-3">
        <h1>Building innovative digital solutions</h1>
        <p>
        With a knack for disrupting industries, Michael O'Sullivan is a game-changing CEO, transforming the media industry via cutting-edge tech at Bywire News. His approach is rooted in strategy and unrivalled digital prowess—championing decentralisation through blockchain and cryptocurrency. Equipped with an impressive track record in programming, marketing innovation, and driving political campaigns, Michael exhibits an exceptional ability to foresee the bigger picture and execute ambitious plans from zero to one.</p><p> Always at the vanguard of innovation, he's a frontrunner in establishing powerful audience networks, leveraging data analytics, and harnessing machine learning. Renowned for his sharp intellect and crusading spirit, Michael is a highly sought-after candidate for pioneering leadership roles in product management and front-end development.
        </p>
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
      `}</style>
    </Layout>
  )
}

export default Home
