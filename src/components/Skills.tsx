import SkillsCard from "./SkillsCard";
import Title from "./Title";

const Skills = () => {
const skillsData = {
  "Markup & Styling": [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "SASS", level: 80 },
    { name: "PugJS", level: 70 },
  ],
  "Frontend Frameworks": [
    { name: "React", level: 85 },
    { name: "Material-UI", level: 75 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Bootstrap", level: 70 },
  ],
  "Programming Languages": [
    { name: "C", level: 98 },
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 75 },
    { name: "Java", level: 70 },
    
  ],
  "Other ": [
    { name: "OpenGL", level: 60 },
    { name: "GitHub", level: 80 },
  ],
};


return (
    <div id="Skills" className=" min-h-screen bg-[#17181a] gap-10 flex-col flex items-center justify-center md:p-20">
    <Title head1="My" head2="Skills" />
        <div className=" text-white container grid-cols-1 px-10  md:mx-auto grid md:grid-cols-4  gap-8 items-center justify-center ">
            {Object.entries(skillsData) .map(([category, skillsArray]) => (
                    <SkillsCard
                    key={category}
                    category={category}
                    skills={skillsArray}
                    />
                ))}
        </div>
    </div>
)
}

export default Skills
