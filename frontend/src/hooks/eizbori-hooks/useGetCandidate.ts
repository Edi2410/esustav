import { useQuery } from "react-query";
import { useAxios } from "hooks";
import { message } from "antd";

export const useGetCandidate = (team: number | undefined) => {
  const axios = useAxios();

  const fetchCadidacyData = async () => {
    try {
      const { data } = await axios.get(`eizbori/candidate/?team=${team}`);
      return data;
    } catch (error) {
      throw new Error("Greška kod dohvaćanja podataka o kandidatima");
    }
  };

  return useQuery(["candidate_data", team], fetchCadidacyData, {
    onError: (error) => message.error(String(error)),
    enabled: team ? true : false,
    staleTime: Infinity,
  });
};
