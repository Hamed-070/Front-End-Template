import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import latpop from '../Images/laptop.jpg';
import hanger from '../Images/hanger.jpg';
import store from '../Images/store.jpg';

export default function Projects({ style }) {
  const projects = [
    {
      img: store,
      title: "Store Project",
      desc: "Responsive e-commerce template with modern UI",
    },
    {
      img: latpop,
      title: "Laptop Project",
      desc: "Clean and minimal tech product showcase",
    },
    {
      img: hanger,
      title: "Hanger Project",
      desc: "Stylish fashion portfolio with interactive elements",
    },
  ];

  const {ref , inView} = useInView({
    triggerOnce: true , 
    threshold: 0.5,
  }) ;


  return (
    <section className={`${style} justify-center`} ref={ref} >
        <div className="container mx-auto px-6">
            {/* Titles */}
            <div className="text-center mb-16">
              <motion.h2
                  initial={{ opacity: 0, y: -50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 2 , type: "spring" }}
                  className="text-5xl font-bold text-black mb-4"
                  >
                  Our Works 🏆
              </motion.h2>
              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1.5, delay: 1 , type: "spring"}}
                  className="text-gray-400 max-w-2xl mx-auto text-lg"
                  >
                  A showcase of our latest projects — from e-commerce to fashion
                  and tech, we deliver clean and modern designs that speak for
                  themselves.
              </motion.p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-3 gap-10">
            {projects.map((project, i) => (
                <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1.5 , type: "spring"}}
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
                >
                <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center px-4">
                    <h3 className="text-white text-2xl font-semibold mb-2">
                    {project.title}
                    </h3>
                    <p className="text-gray-300">{project.desc}</p>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
    </section>
  );
}
