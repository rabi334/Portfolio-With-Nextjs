import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../lib/apiClient";

const fetchPortfolio = async () => {
  const res = await apiClient.get("/portal-portfolios/get-skills");
  return res.data;
};

export const useProfile = () =>
  useQuery({
    queryKey: ["portfolio"],
    queryFn: fetchPortfolio,
  });
