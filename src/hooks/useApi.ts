/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseQueryResult,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { AxiosRequestConfig, Method } from "axios";
import axiosInstance from "@services/api/axiosInstance";

const fetchData = async <T, D = unknown>({
  url,
  method,
  data,
  options,
}: {
  url: string;
  method: Method;
  data?: D;
  options?: AxiosRequestConfig;
}): Promise<T> => {
  const response = await axiosInstance.request<T>({
    url,
    method,
    data,
    ...options,
  });
  return response.data;
};

const useFetch = <T = unknown, D = unknown>({
  url,
  data,
  queryOptions,
  axiosConfig,
}: {
  url: string;
  token?: string;
  data?: D;
  queryOptions?: UseQueryOptions<T, Error>;
  axiosConfig?: AxiosRequestConfig;
}): UseQueryResult<T, Error> => {
  const response = useQuery<T, Error>({
    queryKey: queryOptions?.queryKey || [url],
    queryFn: () =>
      fetchData<T, D>({
        url,
        data,
        method: "GET",
        options: axiosConfig,
      }),
    staleTime: 1000 * 60 * 5, // specifies the duration (in milliseconds) for which the fetched data is considered fresh
    ...queryOptions,
  });
  return response;
};

const useMutate = <T = unknown, D = unknown>({
  url,
  method,
  mutationOptions,
  axiosConfig,
}: {
  url: string;
  method: Exclude<Method, "GET">;
  mutationOptions?: UseMutationOptions<T, Error, any>;
  axiosConfig?: AxiosRequestConfig;
}): UseMutationResult<T, Error, unknown> => {
  return useMutation<T, Error, any>({
    mutationFn: (data: D) =>
      fetchData<T>({
        url,
        method,
        data,
        options: axiosConfig,
      }),
    ...mutationOptions,
  });
};

export { useFetch, useMutate };
