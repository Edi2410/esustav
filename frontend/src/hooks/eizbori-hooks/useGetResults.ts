import { useQuery } from "react-query";
import { useAxios } from "hooks";
import { message } from "antd";

export const useGetResults = () => {
  const axios = useAxios();

  const fetchResults = async () => {
    try {
      const { data } = await axios.get(`eizbori/votes/results`);
      return data;
    } catch (error) {
      throw new Error("Greška kod dohvaćanja rezultata izbora");
    }
  };

  return useQuery("results_list", fetchResults, {
    onError: (error) => message.error(String(error)),
    staleTime: Infinity,
  });
};
