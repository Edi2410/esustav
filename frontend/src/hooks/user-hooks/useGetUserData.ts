import { useQuery } from "react-query";
import { useAxios } from "hooks";

export const useGetUserData = () => {
  const axios = useAxios();

  const fetchUserData = async () => {
    if (sessionStorage.getItem("accessToken") !== null) {
      try {
        const { data } = await axios.get("estudenti/users/auth");
        return data.user_data;
      } catch (error) {
        throw new Error("Podaci o korisniku nisu dohvačeni");
      }
    }
    return null;
  };

  return useQuery("user_data", fetchUserData, {
    onError: (error) => console.log("error", error),
    staleTime: Infinity,
  });
};
