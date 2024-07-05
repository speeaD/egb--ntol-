import styles from './Navbar.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion"



const menuVar = {
    initial: {
        height: 0,
    },
    animate: {
        height: "100vh",
        transition: {
            duration: 0.5,
            ease: [0.12, 0, 0.39, 0]
        }
    },
    exit: {
        height: 0,
        transition: {
            duration: 0.5,
            ease: [0.12, 0, 0.39, 0]
        }
    }

}

const containVar = {
    initial: {
        transition: {
            staggerChildren: 0.9
        }  
    },
    open: {
        transition: {
            deleyChildren: 0.5,
            staggerChildren: 0.09
        }
    }
}

const Navbar = () => {
    let [show, setShow] = useState(false)


    return(
        <section className={styles.contain}>
        <nav className={styles.nav}>
            <Link to='/' className={styles.logo}>egbọ́ntolú</Link>
            <div className={styles.menu} onClick={() => setShow(show => !show)} >
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
        </nav>
        <AnimatePresence>
        {
           show && (
        <motion.div className={styles.navbar}
            variants={menuVar}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div className={styles.navcontainer} 
                variants={menuVar}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <motion.div className={styles.overflow}
                   variants={containVar}
                   initial="initial"
                   animate="open"
                >
                <Link to='/' onClick={() => setShow(show => !show)} className={styles.bar}>Home</Link>
                <Link to='/aboutme' onClick={() => setShow(show => !show)}  className={styles.bar}>About me</Link>
                <Link to='/records' onClick={() => setShow(show => !show)}  className={styles.bar}>Records</Link>
                <Link to='/whyme' onClick={() => setShow(show => !show)}  className={styles.bar}>Why me</Link>
                </motion.div>
                
            </motion.div>
            </motion.div>
            )
        } 
        </AnimatePresence>
        </section>
    )
}

export default Navbar;