/* eslint-disable react/no-unescaped-entities */
import styles from './Aboutme.module.css'
import image from '../../../assets/image.jpg'
import { motion } from "framer-motion"


const nameVar = {
    initial:{
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 2,
            ease: [0.12, 0, 0.39, 0]
        }
    }
}

const pictureVar = {
    initial:{
        x: -900,
    },
    animate: {
        x: 0,
        transition: {
            duration: 1.5,
            ease: [0.12, 0, 0.39, 0]
        }
    }
}

const textVar = {
    initial:{
        x: 1200,
    },
    animate: {
        x: 0,
        transition: {
            duration: 2,
            ease: [0.12, 0, 0.39, 0]
        }
    }
}

const About = () => {
    return (
        <section className={styles.allow}>
            <motion.div className={styles.meet}
                variants={nameVar}
                initial="initial"
                animate="animate"
            >
                <span className={styles.diff}>meet </span> egbọ́ntolú
                </motion.div>
            <div className={styles.aboutme}>
                <motion.div className={styles.imagecontains}
                    variants={pictureVar}
                    initial="initial"
                    animate="animate"
                >
                    <img src={image} className={styles.imgs} />
                </motion.div>
                <motion.div className={styles.info}
                        variants={textVar}
                        initial="initial"
                        animate="animate"
                >
                    <h2>ABOUT ME</h2>
                    
                    <div className={styles.desc}>
                        <p>Hey everyone, I'm <span className={styles.diff}>Olubunmi Toluwalase Emmanuel, aka Egbontolu</span> . Currently navigating my way through the challenges of third-year Mathematics, I've discovered a passion not just for numbers but for crafting brands and businesses that thrive. I specialize in designing systems that simplify complexity and boost success—because life's complicated enough as it is!

                        </p>

                        <p>One of my proudest moments was leading the charge for the Prodigy Cup, rallying 16 departments for a showdown that showcased our faculty and others outside our domain’s talent. </p>

                        <p>Beyond academics, I've immersed myself in product management, brand strategy, and digital content—skills that fuel my drive to create meaningful change.</p>

                        <p> Why am I running for ULSSA's General Secretary? Picture this. A faculty where every student feels seen, heard, and valued. I'm committed to closing the gap between students, their representatives, and faculty heads, fostering a community where diverse interests thrive. </p>

                        <p>From dynamic workshops to vibrant events, I envision a place where we excel not only in our studies but also in exploring passions that ignite our curiosity.Approachable and empathetic? Absolutely. I thrive on bringing order to chaos. And when I'm not diving into serious stuff, you might catch me jamming on an instrument—though I'll be the first to admit, I'm far from being the next Mozart lol.</p>

                        <p>That said, let's team up to build a faculty where innovation meets heart, and where every voice counts towards our shared success.</p>
 

                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About;