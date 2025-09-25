import { motion } from "framer-motion"
import banner from '../Images/programmer.jpg'
import banner2 from '../Images/programmer-2.jpg'
import { useInView } from "react-intersection-observer";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";


export default function AboutUs ({style}){

    const [bg , setBg] = useState(banner) ; 

    function handelChangeBgImage () {

        bg === banner ? setBg(banner2) : setBg(banner) ; 

    }

    const {ref , inView} = useInView({
        triggerOnce: true , 
        threshold: 0.3,
    }) ; 

    return(
        <section className={style} ref={ref}>

            <div className="flex flex-col justify-start items-start w-1/4 gap-5">

                <motion.h1 
                initial={{ opacity: 0 , x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 2 }}
                className="font-bold text-8xl text-yellow-400">Our Team</motion.h1>
                <motion.p
                initial={{ opacity: 0 , x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.5 , delay: 1.5 }}
                className="pl-3 text-xl font-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Odit neque praesentium voluptatibus, nesciunt consequuntur 
                    quis esse unde molestiae repellat eveniet 
                    reiciendis velit delectus architecto itaque eligendi maxime ullam deserunt maiores!
                </motion.p>

            </div>
            
            <div className="h-3/4 w-2/4 relative  cursor-pointer">

                <motion.img 
                    initial={{ opacity: 0 , x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    whileHover={{ scaleX: 1.1, scaleY: 1.02, borderRadius: "0.75rem"  , borderRadius: "0.75rem"}}
                    transition={{ duration: 1.5  , delay: 1.5 , type: "spring" , whileHover: { duration: 0.3 } }}
                    src={bg} alt="banner" className="h-full w-full object-cover hover:rounded-lg bg-cover rounded-lg shadow-lg " 
                />

                <div className="absolute p-5 w-full inset-0 bg-black bg-opacity-0 opacity-0 hover:opacity-100 hover:bg-opacity-20  rounded-lg  flex flex-row transition-opacity duration-300 items-center justify-between ">
                    
                    
                    <FaArrowLeft onClick={handelChangeBgImage} className="text-white text-4xl opacity-30 hover:opacity-100 transition-opacity duration-300 " />
                    <FaArrowRight onClick={handelChangeBgImage} className="text-white text-4xl opacity-30 hover:opacity-100 transition-opacity duration-300" />


                </div>



            </div>

        </section>  
    )
}






