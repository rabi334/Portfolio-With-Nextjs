"use client";

import Image from "next/image";
import styles from "./Projects.module.css";

import eCommerceStore from "../E-Commerce-Store.png";
import multCity from "../multcity.png";

const projects = [
  {
    id: 1,
    name: "E-Commerce Store",
    technologies: "MERN Stack",
    image: eCommerceStore,
    github: "https://github.com/rabi334/E-Commerce-Store",
  },
  {
    id: 2,
    name: "Multi-City Weather App",
    technologies: "MERN Stack",
    image: multCity,
    github: "https://github.com/rabi334/MultiCityWeather-with-Nextjs",
  },
];

const Projects = () => {
  return (
    <div className={styles.outerDiv} id="project">
      <div className={styles.nextDiv}>
        <h1 className={styles.h1}>Projects</h1>

        <div className={styles.innerDiv}>
          {projects.map((project) => (
            <div key={project.id} className={styles.compDiv}>
              <Image
                src={project.image}
                alt={project.name}
                className={styles.image}
                width={300}
                height={200}
              />

              <h3 className={styles.h3}>{project.name}</h3>
              <p className={styles.p}>{project.technologies}</p>

              <a
                className={styles.a}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

/*
"use client"
import Image from "next/image";
import style from "./Projects.module.css";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../lib/apiClient";

const fetchPortfolio = async () => {
  const res = await apiClient.get("/portal-portfolios/get-projects");
  return res.data;
};
const useProfile = () =>
  useQuery({
    queryKey: ["portfolio"],
    queryFn: fetchPortfolio,
  });


export default function Projects() {
  const { data, isLoading, error } = useProfile();
  const projects = data?.data ?? [];
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading portfolio</p>;
  return (
    <div className={style.outerDiv} id="project">
      <div className={style.nextDiv}>
        <h1 className={style.h1}>Projects</h1>
        <div className={style.innerDiv}>
          {projects.map((project) => (
            <div key={project.id} className={style.compDiv}>
              <Image
                src={project.coverPage}
                alt={project.title}
                className={style.image}
                width={300}
                height={198}
              />
              <h3 className={style.h3}>{project.title}</h3>
              <p className={style.p}>{project.role}</p>
              <a className={style.a} href={[project.link]} target="_blank">
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
*/
