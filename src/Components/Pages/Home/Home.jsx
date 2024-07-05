import styles from './Home.module.css';
import { Link } from 'react-router-dom'
import image from '../../../assets/flyer.jpg'
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';


let variants = {
  initial: {
    opacity: 0,
    x: -1000
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: [0.12, 0, 0.39, 0]
    }
  }

}

let conVariants = {
  initial: {
    opacity: 0,
    y: -1200
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.12, 0, 0.39, 0]
    }
  }

}

let menuVariant = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2.5,
      ease: [0.12, 0, 0.39, 0]
    }
  }
}

const Home = () => {
  //let text =['Trust', 'Organization', 'Leadership', 'Unity', 'egbọ́ntolú', 'Tolu for General Secetary']
  // let text='egbọ́ntolú'

  let char = ">"

  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <div className={styles.me}>
          <motion.div className={styles.name}
              variants={variants}
              initial="initial"
              animate="animate"
          >VOTE FOR:</motion.div>
          <motion.div className={styles.animate}
            variants={variants}
            initial="initial"
            animate="animate"
          > {" "} {`${char} `}
            <ReactTyped
              strings={['Trust', 'Organization', 'Leadership', 'Unity', 'egbọ́ntolú', 'Tolu as General Secretary']}
              typeSpeed={100}
              loop
              backSpeed={50}
              cursorChar=""
              showCursor={true}
            /></motion.div>
          <motion.div className={styles.lists}
            variants={menuVariant}
            initial="initial"
            animate="animate"
          >
            <Link to='/'>home</Link>
            |
            <Link to='/aboutme'>about-me</Link>
            |
            <Link to='/records'>records</Link>
            |
            <Link to='/whyme'>why-egbọ́ntolú</Link>
          </motion.div>
        </div>
        <motion.div className={styles.box}
            variants={conVariants}
            initial="initial"
            animate="animate"
        >
          <img src={image} className={styles.img} />
        </motion.div>
      </div>
    </section>
  )
}

export default Home;
