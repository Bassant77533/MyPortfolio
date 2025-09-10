import { motion } from "framer-motion"


type skillscardprops = {
   skills : { name : string , level : number} [] 
   category : string 
}
const SkillsCard = ({ category, skills}:skillscardprops) => {

  return (
     <div className="group h-full text-gray-500 hover:text-gray-200 hover:scale-105 transform transition-all duration-300 ease-in-out py-10 px-6 bg-black/30 rounded-2xl shadow-lg backdrop-blur-md">
                <p className="group-hover:text-white text-center text-xl font-semibold text-gray-400 mb-6 tracking-wide">
                   {category}
                </p>
                <ul className="flex flex-col gap-10  px-2 py-2">
                    {skills.map((skill) => (
                    <li key={skill.name}>
                        {/* Skill name + level */}
                        <p className="flex justify-between  font-medium mb-2">
                        {skill.name} 
                        </p>
                        {/* Progress bar */}
                        <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, amount: 0.5 }} // triggers when 50% of the bar is visible
                            transition={{ duration: 0.5, ease: "linear" }}
                            className="h-full bg-gradient-to-r from-blue-400 to-blue-300 rounded-full transition-all duration-500"
                            
                        ></motion.div>
                        </div>
                    </li>
                    ))}
                </ul>
            </div> 
  )
}

export default SkillsCard
