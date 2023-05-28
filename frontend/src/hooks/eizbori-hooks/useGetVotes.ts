import { useQuery } from "react-query";
import { useAxios } from "hooks";
import { message } from "antd";

export const useGetVotes = () => {
  const axios = useAxios();

  const fetchVotes = async () => {
    try {
      const { data } = await axios.get(`eizbori/votes/isvoted`);
      return data;
    } catch (error) {
      throw new Error("Greška kod dohvaćanja podataka o glasovima");
    }
  };

  return useQuery("list_of_users_votes", fetchVotes, {
    onError: (error) => message.error(String(error)),
    staleTime: Infinity,
  });
};
