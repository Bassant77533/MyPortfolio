
import SocialIcons from "./SocialIcons"
import Title from "./Title"
import { FiMail } from "react-icons/fi";
import ContactForm from "./ContactForm";

const Contact = () => {
return (
    <div id="Contact" className=" flex justify-center items-center min-h-screen md:px-20 bg-[#17181a] ">
        <div className=" py-20 container text-center md:text-start  flex flex-col md:flex-row   justify-between gap-10  items-center">
            <div className="w-full md:w-1/2 ">
                <Title head1="Get In" head2="Touch"/>
                <div className="text-white flex flex-col gap-10 md:gap-40">
                <p className="text-gray-400 text-xl mb-3 flex-1 md:w-[550px]">Interested in working together or have a question? Use the form below to get in touch — I’d be happy to hear from you.</p>
                <div>
                <div className="md:justify-start justify-center hover:text-blue-400 flex gap-2 items-center text-lg">
                  <span className="leading-none flex items-center">
                    <FiMail />
                  </span>
                  <a 
                    href="mailto:bassant.ansary77@gmail.com" 
                    className="leading-none"
                  >
                    bassant.ansary77@gmail.com
                  </a>
                </div>
                    <SocialIcons/>
                </div>
                </div>
            </div>
            <div className=" w-full md:w-1/2">
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}

export default Contact
