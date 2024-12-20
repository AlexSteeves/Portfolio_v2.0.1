import { projects } from "./projectData";
import { motion } from "framer-motion";
import "./Projects.scss";
export default function Index() {
  return (
    <div className="w-full h-full bg-[#F2F2F2] py-12 lg:py-24">
      <div
        id="projects"
        className={`max-w-[1400px] mx-auto grid p-4 gap-4 grid-container`}
      >
        {projects.map((project, index) => (
          <Project key={index} projectData={project} />
        ))}
      </div>
    </div>
  );
}

function Project({ projectData }) {
  return (
    <a href={projectData.link} target="_blank" className="h-full">
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.2 }}
        className="h-full"
      >
        <div className="flex flex-col gap-4 w-full h-full bg-[#E9E9E9] text-[#13481F] p-4 md:p-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-white">
          <span className=" font-[600] font-serif uppercase text wrap md:whitespace-nowrap text-[1.33rem]">
            {projectData.title}
          </span>

          <span className="font-[300] text-balance">
            {projectData.description}
          </span>

          <div className="flex flex-col gap-2">
            <p className="font-semibold">TECHNOLOGIES USED:</p>
            <ul
              className="grid list-disc list-inside gap-1"
              style={{
                display: "grid",
                gap: "0.5rem",
                gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
                maxWidth: "80%",
              }}
            >
              {projectData.skills.map((skill) => (
                <li className="font-normal whitespace-nowrap" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </a>
  );
}
