import styles from './Whyme.module.css';
import  image  from '../../../assets/image.jpg'
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
        x: -1000,
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


const Whyme = () => {
    return (
        <div className={styles.whyme}>
            <motion.div className={styles.vote}
                 variants={nameVar}
                 initial="initial"
                 animate="animate"
            > <span className={styles.diff}>Why</span>  Vote Me?</motion.div>
            <div className={styles.why}>
                <motion.img src={image} className={styles.image}
                   variants={pictureVar}
                   initial="initial"
                   animate="animate"
                ></motion.img>
                    <motion.div className={styles.info}
                         variants={textVar}
                         initial="initial"
                         animate="animate"
                    >
                        <quote>&quot;The important thing is not to stop questioning. Curiosity has its reason for existing.&quot; ~ Albert Einstein.
                        </quote>
                        
                        <p>The world is changing rapidly, and as science students, we are at the forefront of this transformation. Our community should be a place where we can deepen our knowledge in our chosen fields and explore our passions—those interests that sparked our curiosity as kids.
                        </p>
                        
                        <p>As your General Secretary, my goal is to create an environment where your voice is heard and your ideas matter. I envision a faculty where every student feels supported, inspired, and empowered to pursue their dreams. Together with the other executives, I am committed to laying the foundations for this vision to become a reality.
                        </p> 
                        
                       <p>My experience in managing teams and overseeing projects from start to finish has prepared me for this role. I believe in creating an inclusive and engaging community where every student&#39;s potential is realized.
                       </p>
                        
                        <p>Remember T.O.L.U.:

                           <li>Trust: I will be a reliable and transparent leader, ensuring your concerns are addressed.</li>
                           <li>Organization: I will bring structure and efficiency to our projects and initiatives.</li>
                           <li>Leadership: I will lead with empathy and vision, inspiring positive change.</li>
                           <li>Unity: I will foster a sense of community where everyone feels valued and included.</li>
</p>
                        
                        <p>
                            If you&#39;ve read this far, it means you share my vision for our faculty. Let&#39;s work together to build a vibrant and innovative community.
                            
                            <li>VOTE for Trust. </li> 
                            <li>VOTE for Organization.</li>  
                            <li>VOTE for Leadership. </li> 
                            <li>VOTE for Unity.</li> 
                            <li>VOTE Olubunmi Toluwalase Emmanuel for ULSSA General Secretary.</li>

                        </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Whyme;