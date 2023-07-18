import React, { useState, useEffect } from "react"
import Image from "next/image"
import Layout from "../components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faLinkedin, faBitcoin } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

const Home = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const [flash, setFlash] = useState(0);

    const text = "I Like To Build Cool Stuff..."

    const words = text.split(" ");

    useEffect(() => {
        if (index === words.length) {
            setIsEnd(true);
            return;
        }

        if (subIndex === words[index].length + 1 && index !== words.length - 1 && !reverse ) {
          setReverse(true);
          return;
        }

        if (subIndex === 0 && reverse) {
          setReverse(false);
          setIndex((prev) => prev + 1);
          return;
        }

        const timeout = setTimeout(() => {
          setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, 100);

        return () => clearTimeout(timeout);
      }, [subIndex, index, reverse]);

    useEffect(() => {
        if (isEnd && flash < 10) {
            const timeout = setTimeout(() => {
                setBlink((prev) => !prev);
                setFlash((prev) => prev + 1);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [isEnd, blink]);

    const content = {
        description: [
            "Hello World! I'm Michael O'Sullivan. I lead and innovate in the tech space, particularly where it intersects with media. I use technologies like blockchain and cryptocurrency, and I'm pretty handy with Python programming too.",
            "I specialise in product management and front-end web development, and I love using data to drive decisions and innovations. If you're interested in what I can bring to your team, feel free to reach out."
        ],
        socialMediaLinks: {
            linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/",
            facebook: "https://www.facebook.com/YOUR_FACEBOOK_USERNAME/",
            twitter: "https://twitter.com/YOUR_TWITTER_USERNAME/"
        },
        bitcoinSign: "Bitcoin Welcome ",
        learn: "Learn more about me >"
    }

    return (
        <Layout>
            <div className="">
                <div className="row whitebk">
                    <div className=" col-12 col-lg-6 col-md-12">
                        <h1>
                            {`${words.slice(0, index).join(" ")} ${words[index].slice(0, subIndex)}${isEnd ? "." : ""}${blink ? "|" : " "}`}
                        </h1>
                        {content.description.map((paragraph, index) => (
                            <p className="fp" key={index}>{paragraph}</p>
                        ))}
                        <p className="my-3">
                            <Link href="/about"><a>{content.learn}</a></Link>
                        </p>
                        <div className="row mb-2">
                            <div className="col-md-12">
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
                                    <div className="bitcoin-sign">
                                        {content.bitcoinSign}
                                        <FontAwesomeIcon icon={faBitcoin} size="1x" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                    <div className="col-12 col-md-12 col-lg-5">
                        <div className="imageContainer">
                            <Image
                                src="/eos.png"
                                alt="Projects and Clients"
                                width={1500}
                                height={1500}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                /* rest of the styles */
                .bitcoin-sign {
                    display: flex;
                    align-items: center;
                    color: #f7931a;
                    font-size: 16px;
                    font-weight:bold;
                    margin-left: 20px;
                }
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
                    color: #f7931a; /* Bitcoin's color */
                    font-size: 16px;
                    font-weight:bold;
                }
                .inlineIcons {
                    display: flex;
                    justify-content: space-between; /* Adjusts the space between the children elements, you can change as per your need */
                }
                .animate-character {
                    font-size: 120px;
                    color: #333333; /* dark grey */
                    overflow: hidden; /* Ensures the content is not revealed until the animation */
                    border-right: .15em solid orange; /* The typewriter cursor */
                    white-space: nowrap; /* Keeps the content on a single line */
                    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
                    letter-spacing: .15em; /* Adjust as needed */
                    animation: 
                        typing 3.5s steps(40, end),
                        blink-caret .75s step-end infinite;
                }

                /* The typing effect */
                @keyframes typing {
                    0% { width: 0 }
                    100% { width: 100% }
                }

                /* The typewriter cursor effect */
                @keyframes blink-caret {
                    from, to { border-color: transparent }
                    50% { border-color: orange; }
                }
            `}</style>
        </Layout>
    )
}

export default Home;
