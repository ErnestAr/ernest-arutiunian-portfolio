import React from 'react'
import Layout from '../components/Layout'
import {header, container, item, ingrey,tab} from '../styles/about.module.css'
import {FaReact} from "@react-icons/all-files/fa/FaReact";
import {SiMaterialUi} from '@react-icons/all-files/si/SiMaterialUi'
import {FiFigma} from '@react-icons/all-files/fi/FiFigma'
import { IconContext } from "react-icons";


export default function About() {
  return (
    <Layout>
        <div className={header}>
          <h2>About</h2>
          <h3 className={ingrey}>Allow me to introduce myself.</h3>
          <p>I started my journey into web development by learning the essential operation of web scraping in python. After a couple of months of learning, I was amazed by what was possible to achieve with even basic knowledge of programming, so I decided to commit fully. I took up a three months Coding Bootcamp at one of the best schools in the area, the University of Toronto, Department of Continuous Studies. The focus of the Bootcamp was the MERN stack, in which I now specialize. I have continued learning to program and worked on several projects by myself and in small teams and decided to pursue coding as full-time employment.</p>
          <h3 className={ingrey}>Languages and software I use</h3>
          <p>MERN stack is the most familiar and enjoyable to work with for me. I'm proficient in React and related to it Gatsby, Material UI. I used libraries such as jQuery.js, Express.js, and Chart.js to name a few. Besides the MongoDB database, which is used in the MERN stack, I'm familiar with MySQL as well. When it comes to Design, I'm well-versed in using Figma and AdobeXD. Other tools I've used include Heroku, Firebase, and Netlify. It's important to me to follow the latest trends in code styling, testing and optimization. </p>
        </div>
    </Layout>
  )
}
