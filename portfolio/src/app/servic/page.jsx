"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../lib/apiClient";

const fetchPortfolio = async () => {
  const res = await apiClient.get("/portal-portfolios/get-skills");
  return res.data;
};
const useProfile = () =>
  useQuery({
    queryKey: ["portfolio"],
    queryFn: fetchPortfolio,
  });

const Service = () => {
  const { data, isLoading, error } = useProfile();
  console.log(data);
  const skills = data?.data ?? [];
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading portfolio</p>;

  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="font-bold text-3xl mb-8 text-center">My Service</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {skill.order}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500"
              >
                {skill.name}
              </h3>
              <p className="mt-2 text-gray-300">{skill.proficiency}</p>
              <Link
                href="/servic"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
