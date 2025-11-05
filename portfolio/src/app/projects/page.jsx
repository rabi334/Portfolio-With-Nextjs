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
