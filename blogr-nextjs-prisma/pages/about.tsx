import React from "react";
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const About: React.FC = () => {

  return (
    <Layout>
      <Helmet>
        <title>About Me | Technologist</title>
        <meta name="description" content="Technologist with a unique blend of entrepreneurship, political campaigning, and innovation, leveraging technology and strategy to deliver world-class results in every project." />
      </Helmet>
     
      <div className="page megaMargin p-3 whitebk d-flex flex-row">
        <div className="col-md-6">
          <h1>About Me</h1>

          <p>Throughout my career, I have thrived at the intersection of entrepreneurship, political campaigning, and innovation. As a problem-solver deeply rooted in technology and strategy, I amalgamate my diverse skills to deliver world-class results in every project I undertake. </p>

          <p>My entrepreneurial journey has seen the birth and growth of several successful businesses. Each business has provided a wealth of lessons and victories, offering me the financial freedom to invest in groundbreaking technologies and promising individuals who are poised to make substantive differences in our world. </p>

          <p>My extensive experience in political campaigning is characterised by influential roles in digital campaigning for platforms such as the Labour Party, Labour Future, Vote Leave, and Labour Leave. Tasked with innovating traditional outreach methods my team and I pioneered digital techniques like psychometric micro-targeting and audience demographic segmentation. Our data-driven approach, bolstered by efficient data pipeline synchronisation and Machine Learning integration/optimisation, was key to our success.</p>

          <p>Technology has been a catalyst in enhancing my campaigning efforts. Fluent in machine learning and Python engineering, I built programs capable of improving their data learning models over time. Using my aptitude for strategic thinking and problem-solving, I have developed these solutions to inform decisions and improve campaigns in real time. </p>

          <p>My skills also extend to front-end engineering, where I leveraged my extensive knowledge of HTML/CSS, JavaScript, and its various libraries and frameworks, to ensure that the digital face of our campaigns was not only compelling but also technically sound. </p>

          <p>Additionally, my experiences have sharpened my proficiency in product management. With a meticulous focus on detail and a panoramic view of the product's life cycle, I've successfully managed and launched products, often engineering, designing, and fundraising for them myself. </p>

          <p>One of my notable achievements was the successful launch of the Bywire News app, which rapidly climbed the ranks to become the most-downloaded news app in the UK. This accomplishment underlines my ability to seamlessly tie together entrepreneurship, political campaigning, AI and Python engineering, product management, and innovation into my work. </p>

          <p>In summary, I construct innovative, scalable solutions that deliver exceptional results, unified under the overarching aim to revolutionize how societies work and connect.</p>

        </div>
        
        <div className="col-md-6">
          {/* Space for future content */}
        </div>
      </div>
    </Layout>
  );
};

export default About;