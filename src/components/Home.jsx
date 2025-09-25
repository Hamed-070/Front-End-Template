import banner from '../Images/main-banner.png'
import { motion } from 'framer-motion'
import { SiFacebook } from "react-icons/si";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineTrendingUp } from "react-icons/md";
import { IoLogoWechat } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import Projects from './Projects';
import Contact from './Contact';
import AboutUs from './AboutUS';


export default function Home(){


    return(
        <div className="w-full h-full  flex flex-col items-center">
           
            {/* Home Page  */}

            <motion.section className="flex flex-col w-full h-screen bg-white gap-2"         
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once:true }}
                >

                {/* Background and Header */}
                <section className="w-full h-5/6 flex flex-col bg-slate-300 bg-cover bg-center  gap-32" style={{ backgroundImage: `url(${banner})` }}>
                    
                    
                    {/* Head  */}
                    <section className='flex flex-row w-full text-white pt-5' >

                        {/* Logo  */}
                        <motion.div className='text-white flex flex-col w-1/6 h-1/6 items-start justify-start pl-10 ' initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration: 1.5 }} >
                        
                            <h1 className='text-red-500 font-sans pl-3 '>Mega</h1>
                            <motion.h1 className='text-4xl text-white font-mono'

                                initial={{ opacity:0 , x: -20 }}
                                animate={{ opacity:1 , x: 0 }}
                                transition={{ duration:1.5 , delay:0.4 , type:"spring" }}

                            >MOG</motion.h1>
                        
                        </motion.div>

                        {/* Links  */}
                        <div className='flex flex-row justify-center pl-12 gap-12 h-2/6 w-4/6 pt-5'>
                            
                            <motion.a  initial={{ y:-10 , opacity:0 }} animate={{ y:0 , opacity:1 }} transition={{ duration:1 , type:"spring" , delay:0.5 }} className='text-lg  text-yellow-300 cursor-pointer'
                                whileHover={{ scale:1.1 , border:1 , color:"yellow" , opacity:0.8 , transition: 0.3 }}
                                
                            >Home</motion.a> 
                            <motion.a  initial={{ y:-10 , opacity:0 }} animate={{ y:0 , opacity:1 }} transition={{ duration:1 , type:"spring" , delay:0.5 }} className='text-lg cursor-pointer ' 
                                whileHover={{ scale:1.1 , border:1 , color:"yellow" , opacity:0.8 , transition: 0.3 }}
                                
                            >Projects</motion.a> 
                            <motion.a  initial={{ y:-10 , opacity:0 }} animate={{ y:0 , opacity:1 }} transition={{ duration:1 , type:"spring" , delay:0.5 }} className='text-lg cursor-pointer ' 
                                whileHover={{ scale:1.1 , border:1 , color:"yellow" , opacity:0.8 , transition: 0.3 }}
                                
                            >About Us</motion.a> 
                            <motion.a  initial={{ y:-10 , opacity:0 }} animate={{ y:0 , opacity:1 }} transition={{ duration:1 , type:"spring" , delay:0.5 }} className='text-lg cursor-pointer ' 
                                whileHover={{ scale:1.1 , border:1 , color:"yellow" , opacity:0.8 , transition: 0.3 }}
                                
                            >Contact</motion.a> 

                        </div>

                        {/* Social Media  */}
                        <motion.div initial={{ x:50 , opacity:0 }} animate={{ x:0 , opacity:1 }} transition={{ duration:1 , type:"spring" , delay:0.5 }} className='w-1/6 pt-5 flex flex-row justify-center gap-5'>

                            <SiFacebook className='text-2xl'  />
                            <TbBrandTwitterFilled className='text-2xl ' />
                            <FaLinkedin className='text-2xl' />

                        </motion.div>



                    </section>


                        <div className='h-5/6  w-3/6 mt-5 flex flex-col justify-start items-start  gap-3 pl-20'>

                            <motion.h1 initial={{ x:-30 , opacity:0 }} animate={{ x:0 , opacity:1 }} transition={{ duration:1  }} className='text-7xl text-white font-extrabold'>
                                An Experienced 
                            </motion.h1>

                            <motion.h1 initial={{ x:-30 , opacity:0 }} animate={{ x:0 , opacity:1 }} transition={{ duration:1  }} className='text-7xl text-white font-extrabold'>
                                Degital Marketing
                            </motion.h1>
                            
                            <motion.h1 initial={{ x:-30 , opacity:0 }} animate={{ x:0 , opacity:1 }} transition={{ duration:1  }} className='text-7xl text-white font-extrabold'>
                                Agency
                            </motion.h1>

                            <motion.p initial={{ opacity:0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='text-gray-300 w-4/6 pt-5'>Lorem ipsum dolor sit , consequatur rem tempora repellat quosdolorum voluptatum laborum, ex accusantium. Susct nisi.</motion.p>
                            
                            <motion.button initial={{ opacity:0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='bg-gradient-to-r from-blue-400 to-indigo-600 h-10 w-32 mt-5 rounded-sm text-white  font-bold hover:scale-110 transition:transform duration-150'>Contact Us</motion.button>
                        
                        </div>
                    


                </section>
                

                {/* Buttom Part  */}
                <section className='flex flex-col items-center justify-center gap-3'>
                    <h2 className='text-slate-400 font-bold'>Our Capabilities</h2>

                    <div className='flex flex-row gap-5 justify-evenly w-full h-1/6 pt-8'>
                        
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <MdOutlineTrendingUp className='text-3xl' />
                            <h1 className='font-medium text-lg'>SEO management</h1>
                        </div>
                        <hr />
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <IoLogoWechat className='text-3xl' />
                            <h1 className='font-medium text-lg'>Social Media Marketing</h1>
                        </div>
                        <hr />
                       <div className='flex flex-row items-center justify-center gap-2'>
                            <MdDesignServices className='text-3xl' />
                            <h1 className='font-medium text-lg'>UI & UX Design</h1>
                        </div>

                        
                    </div>

                </section>

            </motion.section>

            <Projects style={'flex flex-col items-center w-full h-screen  bg-white'}/>
            
            <AboutUs style={"flex flex-row h-screen w-full items-center justify-around gap-4 bg-white"} />

            <Contact  />
            
                
        </div>
    )

}
