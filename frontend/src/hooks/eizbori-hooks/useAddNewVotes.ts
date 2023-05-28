import { useMutation } from "react-query";
import { useAxios } from "hooks";
import { message } from "antd";
import { useQueryClient } from "react-query";
import { VotesType } from "types";

export const useAddNewVotes = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  const addNewVotes = async (VotesData: VotesType) => {
    try {
      const response = await axios.post("eizbori/votes/", VotesData);
      return response.data;
    } catch (error) {
      throw new Error("Greška prilikom unosa glasova");
    }
  };

  return useMutation(addNewVotes, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["results_list"] });
      queryClient.invalidateQueries({ queryKey: ["list_of_users_votes"] });
      message.success("Glasovi su uspiješno uneseni");
    },
    onError: (error) => {
      message.error(String(error));
    },
  });
};
