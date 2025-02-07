import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiApache } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiApachehadoop } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiSelenium } from "react-icons/si";
import { SiKalilinux } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { FaSnowflake } from "react-icons/fa";
import { SiAwslambda } from "react-icons/si";

const iconVariants= (duration) => ({
    initial: {y: -10},
    animate:{
        y:[10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },

    },
    
});

const Technologies = () => {
  return (
  <div className="border-b border-neutral-800 pb-24">
    <motion.h2 
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:-100}}
    transition={{duration: 1.5}}
    className="my-20 text-center text-4xl">Technologies</motion.h2>
    <motion.div 
    whileInView={{opacity:1, x:0}}
    initial={{opacity:0, x:-100}}
    transition={{duration: 1.5}}
    className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-7xl" />
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-700" />
        </motion.div>
        <motion.div 
        variants={iconVariants(6.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaAngular className="text-7xl text-red-700" />
        </motion.div>
        <motion.div 
        variants={iconVariants(8)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaSnowflake className="text-7xl " />
        </motion.div>
        <motion.div 
        variants={iconVariants(8)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaAws className="text-7xl " />
        </motion.div>
        <motion.div 
        variants={iconVariants(9.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGitAlt className="text-7xl text-orange-700" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiApache className="text-7xl text-green-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-sky-800" />
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiGooglecloud className="text-7xl " />
        </motion.div>
        <motion.div 
        variants={iconVariants(6.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(7.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiApachehadoop className="text-7xl " />
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiSelenium className="text-7xl text-green-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className="text-7xl text-sky-500" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAwslambda className="text-7xl text-sky-500" />
        </motion.div>
        

    </motion.div>
    </div>
  );
};

export default Technologies;
