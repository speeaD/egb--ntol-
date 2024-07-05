import styles from './Records.module.css'
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

const Records = () => {
    return(
        <section className={styles.records}>
         <motion.div className={styles.track}
             variants={nameVar}
             initial="initial"
             animate="animate"
         > <span className={styles.diff}>egbọ́ntolú&#39;s</span>  track records</motion.div>
         <div className={styles.words} >
                <motion.img src={image} className={styles.imgscontain}
                     variants={pictureVar}
                     initial="initial"
                     animate="animate"
                />
                <motion.div className={styles.tracks}
                     variants={textVar}
                     initial="initial"
                     animate="animate"
                >
                    <h2>A highlight of few of my records</h2>
                    <div className={styles.listing}>
                    <p className={styles.long}>Here are a few things that should convince you that I am the best fit for the role of General Secretary for the Faculty of Science student body [ULSSA].</p>
                        
                        <li>Lead strategist, ADCOM</li>
                        <li>Co-founder, 22eleven</li>
                        <li>Digital influencer Tecno.</li>
                        <li>Digital content strategist, Nestcoin.</li>
                        <li>Brand strategist, CityScape.</li>
                        <li>Creative lead, Monarch Fashion.</li>
                        <li>Brand strategist, Zena Beauty.</li>
                        <li>Brand Advisor, Vouge Maestro</li>
                        <li>Let’s Chat Campus Influencer.</li>
                        <li>Wema Hackaholics PR team member</li>
                        <li>Sports secretary for my department.</li>
                        <li>Marketing Assistant SokoSQ.</li>
                        <li>Head of the planning committee, Unilag Prodigy Cup.</li>
                        <li>Product Manager Forty Capital.</li>
                        <li>Member of the ULSSA sports committee 2024.</li>
                        <li>Convener Bookish community.</li>
                        <li>Convener, The Hive community.</li>
                        <li>  Volunteer at Krypotian UNILAG (blockchain community)</li>
                        <li>QS year 3 head coach, HOD cup winner 2024</li>

                    
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Records;