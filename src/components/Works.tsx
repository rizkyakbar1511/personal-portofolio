import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full" options={{ max: 45, scale: 1, speed: 450 }}>
        <div className="relative w-full h-[230px]">
          <img className="object-cover w-full h-full rounded-2xl" src={image} alt={name} />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-gradient-to-r from-black"
              onClick={() => open(source_code_link, "_blank")}
            >
              <img className="object-contain w-1/2 h-1/2" src={github} alt="github" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <p className={`text-[14px] ${tag.color}`} key={tag.name}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="flex w-full">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]" variants={fadeIn("", "", 0.1, 1)}>
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described
          with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different
          technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className="flex flex-wrap mt-20 gap-7">
        {projects.map((project, idx) => (
          <ProjectCard key={`project-${idx}`} index={idx} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
