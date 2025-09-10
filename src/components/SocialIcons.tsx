 import { FaFacebook,FaGithub ,FaInstagram , FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
   <ul className="flex gap-4 mt-6 text-2xl cursor-pointer justify-center md:justify-normal">
               <li className="hover:text-[#1877F2]"><a href="" target="_blank"><FaFacebook /></a></li>
               <li className="hover:text-[#E4405F]"><a href=""><FaInstagram /></a></li>
               <li className="hover:text-[#373535]"><a href="https://github.com/Bassant77533" target="_blank"><FaGithub /></a></li>
               <li className="hover:text-[#0A66C2]"><a href="https://linkedin.com/in/bassant-ansary-212b42305" target="_blank"><FaLinkedin /></a></li>
    </ul>
  )
}

export default SocialIcons
