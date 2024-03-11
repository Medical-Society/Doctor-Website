import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/axios.config";
import { AxiosRequestConfig } from "axios";

interface IAuthQuery {
    queryKey: string[];
    url: string;
    config?: AxiosRequestConfig;
}


const useCustomQuery = ({queryKey, url, config}: IAuthQuery) => {
    return useQuery({
        queryKey,
        queryFn: async () => {
          const {data} = await axiosInstance.get(url, config);
          return data;
        }
      })
}

export default useCustomQuery;