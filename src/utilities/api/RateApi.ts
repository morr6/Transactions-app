import axios from "axios";

const url: string = "https://api.exchangeratesapi.io/latest/";

export const plnRate = () => {
  const fetchApi = (): Promise<any> => {
    return axios.get(url).then((res: any) => res);
  };

  return {
    fetchApi,
  };
};

export const getPlnRate = plnRate();
