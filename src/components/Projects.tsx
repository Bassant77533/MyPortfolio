import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import Title from "./Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const cards = [
    {
      id: 1,
      title: "Academia Courses Website",
      desc: "– A responsive web platform designed for showcasing and managing online courses with a clean and structured layout.",
      img: "../../public/assets/Academia.png",
      technologies: ["React", "HTML", "CSS", "Bootstrap"],
      link: "https://bassant77533.github.io/academia/",
    },
    {
      id: 2,
      title: "Portfolio Website",
      desc: "– A responsive personal portfolio platform designed to highlight projects, skills, and achievements with a modern and professional layout.",
      img: "../../public/assets/Portfolio.png",
      technologies: ["HTML", "CSS", "Bootstrap"],
      link: "https://bassant77533.github.io/portfolio/",
    },
    {
      id: 3,
      title: "Foodie Website",
      desc: "– A responsive web platform featuring taste tests, curated good food choices, and smart investment insights for food enthusiasts, all presented in a clean and interactive layout.",
      img: "../../public/assets/Foodie.png",
      technologies: ["HTML", "CSS", "Bootstrap"],
      link: "https://bassant77533.github.io/Foodie/",
    },
    {
      id: 4,
      title: "Estate Website",
      desc: "– A responsive real estate platform designed for browsing properties, exploring listings, and showcasing investments with a clean and modern layout.",
      img: "../../public/assets/Estate2.png",
      technologies: ["React", "HTML", "Tailwind"],
      link: "",
    },
    {
      id: 5,
      title: "E-Commerce Website",
      desc: "– A responsive shopping platform built for displaying products, managing categories, and providing a smooth and user-friendly buying experience.",
      img: "../../public/assets/Ecommerce.png",
      technologies: ["React", "HTML", "CSS", "Bootstrap"],
      link: "https://bassant77533.github.io/E-Commerce/",
    },
    {
      id: 6,
      title: "RcipieFork Website",
      desc: "– A responsive web application that allows users to search for recipes, explore categories, and discover meals with an organized and user-friendly layout.",
      img: "../../public/assets/recipiefork.png",
      technologies: ["React", "HTML", "CSS", "Material UI"],
      link: "https://bassant77533.github.io/RecipieFork/",
    },
  ];

   return (
    <div id="Projects" className="md:py-20 min-h-screen bg-[#17181a] text-center flex items-center flex-col justify-center  ">
      <Title head1="My" head2="Projects" />
      <div className="container mx-auto  ">
        <Swiper
            modules={[Autoplay, Navigation, Pagination,EffectCoverflow]}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            className="rounded-2xl   mt-10 "
            breakpoints={{
            1200: { 
              slidesPerView: 3, 
            },
          }}
          effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              scale: 0.8, // smaller slides scale
              slideShadows: false,
            }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <ProjectCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Projects;
