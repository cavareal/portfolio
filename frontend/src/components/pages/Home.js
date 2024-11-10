import React from 'react';
import Header from "../molecules/Header.js";
import './Home.css';
import Hello from "../molecules/Hello.js";
import Project from "../molecules/Project.js";
import YourComponent from "../molecules/Project.js";
import ScrollAnimation from "../molecules/project2.js";
import Test2 from "../molecules/test2.js";
import Layers from "../molecules/LayersSection.js";
import Head from "../molecules/Head.js";
import HorizontalScroll from "../molecules/horizontalMayers.js";

function Home (){


    return (
        <div>
            <Head/>
            <Header/>
            {/*<Hello/>*/}
            {/*<Test2/>*/}
            <Layers/>
            {/*<HorizontalScroll/>*/}
            {/*<YourComponent/>*/}
            {/*<ScrollAnimation/>*/}
        </div>
    )
}

export default Home;