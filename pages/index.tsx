import type { NextPage } from 'next'
import {Runtime} from "inspector";
import FitnessClassCarousel from "../src/components/FitnessClassCarousel";
const Home: NextPage = (props) => {
    const loggingTag = `[Home]`;
    console.info(`${loggingTag} props`, props);
    //temporary
    // @ts-ignore
    const {classes} : {classes: FitnessClass[]} = props;
  return (
    <div>
        <div>
            <h1>Latest Balanced Classes</h1>
            <h3>A blend of aerobic, strength, and mobility</h3>
        </div>
        {/*classes*/}
        <FitnessClassCarousel classes={classes}/>
    </div>
  )
}
export async function getStaticProps() {
    const loggingTag = `[getStaticProps]`;
    const res = await fetch(`http://localhost:3001/api/classes`),
        classes = await res.json();
    console.info(`${loggingTag} classes`, classes);
    return {
        props:{
            classes
        }
    }
}
export default Home
