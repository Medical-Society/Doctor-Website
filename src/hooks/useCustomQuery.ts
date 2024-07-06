import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/axios.config";
import { AxiosRequestConfig } from "axios";

interface IAuthQuery {
    queryKey: string[];
    url: string;
    config?: AxiosRequestConfig;
    pollInterval?: number;
    enabled?: boolean;
}

const useCustomQuery = ({queryKey, url, config, pollInterval, enabled = true}: IAuthQuery) => {
    return useQuery({
        queryKey,
        queryFn: async () => {
          const {data} = await axiosInstance.get(url, config);
          return data;
        },
        refetchInterval: pollInterval,
        enabled,
      })
}

export default useCustomQuery;