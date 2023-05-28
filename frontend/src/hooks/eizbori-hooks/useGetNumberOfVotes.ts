import { useQuery } from "react-query";
import { useAxios } from "hooks";
import { message } from "antd";

export const useGetNumberOfVotes = (team: number | undefined) => {
  const axios = useAxios();

  const fetchNumberOfVotes = async () => {
    try {
      const { data } = await axios.get(`eizbori/votes/number/?team=${team}`);
      return data;
    } catch (error) {
      throw new Error("Greška kod dohvaćanja podataka o broju mogućih glasova po korisniku");
    }
  };

  return useQuery(["number_of_votes_per_team", team], fetchNumberOfVotes, {
    onError: (error) => message.error(String(error)),
    enabled: team ? true : false,
    staleTime: Infinity,
  });
};
