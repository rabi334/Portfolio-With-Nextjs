"use client";
import Image from "next/image";
import AboutImage from "../hero-image.png";

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
export default function About() {
  const { data, isLoading, error } = useProfile();
  const projects = data?.data ?? [];
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading portfolio</p>;
  const thisYear = new Date().getFullYear();
  return (
    <div
      className="bg-black text-white  py-20 items-center text-center"
      id="about"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold mb-8">About ME</h1>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <Image
            src={AboutImage}
            alt="hero image"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-2">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/10">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/10">
                  React JS & Next JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-8/12"
                  ></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/10">
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-3/12"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-between text-center ">
              <div>
                <h3 className="text-green-700 font-bold text-2xl ">
                  {thisYear - 2024}
                </h3>
                <p>Years Expriance</p>
              </div>
              <div>
                <h3 className="text-green-700 font-bold text-2xl ">
                  {data.count}
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="text-green-700 font-bold text-2xl ">
                  {data.count}
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
