import Title from "./Title"

export const About = () => {
  return (
    <div id="About" className='  md:px-20 bg-[#17181a] min-h-screen'>
        <div className=' container px-3 py-3 flex items-center flex-wrap justify-center mx-auto'>
            <div className='w-full md:w-1/2 '> 
                <img className='h-[400px] w-[400px] mx-auto md:w-full md:h-full' src="../../public/assets/About.png" alt="" />
            </div>
            <div className= 'hover:text-white text-gray-400 transition-transform duration-400 ease-in-out hover:scale-105 hover:bg-white/10  w-full text-center md:text-start md:w-1/2 bg-white/5 p-10 md:rounded-3xl " '>
                <Title head1="About" head2="Me"/>
                <p className='text-base md:text-lg md:leading-8   '>
                I’m a frontend developer who loves turning ideas into interactive, user-friendly experiences. My focus is on building modern web applications that balance clean design with strong functionality.
                I enjoy working across the full spectrum of frontend development — from crafting sleek interfaces and smooth user flows to making sure everything runs efficiently behind the scenes. I’m always curious about new technologies and best practices, and I like challenging myself to push projects further with each build.
                For me, coding isn’t just about writing lines of code — it’s about creating products that people enjoy using and that solve real problems.
                </p>
                <button className="cursor-pointer mt-6 px-8 py-3 bg-blue-400 hover:bg-[#69c0ef] text-white rounded-full"><a href="../../public/assets/Bassant yasser resume.pdf" download={true}>Download CV</a> </button>
            </div>
        </div>
    </div>
  )
}
