import { easeInOut, motion } from "framer-motion"
import Robot from "./Robot"
import SocialIcons from "./SocialIcons";

const Header = () => {
return (
<div className="bg-[#17181a] min-h-screen  ">
    <div className=" justify-between  flex-col-reverse md:flex-row  mx-auto text-center md:text-start container flex   items-center  px-2 py-25  ">
    <motion.div 
    initial ={{ x  : -200 , opacity : 0  }}
    whileInView={{x : 0 , opacity : 1 }}
    transition={{ease : easeInOut , duration : 1}}
    className="w-full text-white px-20 md:max-w-[600px]">
        <p className="text-lg md:text-xl text-gray-300">Hello, it's me</p>
        <h1 className="font-bold text-4xl md:text-6xl  bg-gradient-to-r from-[#69c0ef] via-[#8a2be2] to-[#ff0080] text-transparent bg-clip-text mt-2">
            Bassant Yasser
        </h1>
        <div className="mt-4 text-2xl md:text-3xl font-medium">
            And I am a{" "}
            <span className="text-[#69c0ef] font-semibold">
            FrontEnd Developer
            </span>
        </div>
        <p className="mt-5 text-base md:text-lg text-gray-400 leading-relaxed">
            Passionate web designer focused on creating engaging and
            user-centered digital experiences.
        </p>
        <SocialIcons/>
        </motion.div>
        <div className="w-full  h-full ">
            <Robot/>
        </div>
    </div>
</div>
)
}

export default Header
