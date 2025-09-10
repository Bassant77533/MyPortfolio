import { FaExternalLinkAlt } from "react-icons/fa"

type projectcardProps = {
    title : string , 
    desc : string , 
    link : string , 
    img : string , 
    technologies: string [] , 
}
const ProjectCard = ({title , desc , link , img , technologies } : projectcardProps) => {
return (
    <div className="group relative   flex-col md:w-[600px]  w-[400px] mx-auto  rounded-2xl overflow-hidden">
            <img  className="w-full  h-full" src={img} alt="Academia" />
            <div className=" opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center-safe absolute bottom-[21%] top-1 right-1 left-1 z-100  bg-black/80 text-blue-100 rounded " >
                <div className="mb-6 p-4"><strong>{title}</strong> {desc} </div>
                <ul className="mb-6 flex gap-5 justify-center">
                    {technologies.map((el,id)=><li key={id} className="bg-black/50 hover:bg-black/70 py-2 px-6 rounded ">  {el}   </li> )}
                </ul>
                <a href={link } target="_blank" className="flex  items-center gap-3 justify-center cursor-pointer hover:text-blue-300">see a demo <FaExternalLinkAlt /> </a>
            </div>
    </div>
)
}

export default ProjectCard
