import Axios from "axios";

interface AxiosParkingResponse {
  total_count: number;
  results: Parking[];
}

const URL =
  "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records";

export const fetchParkings = async () => {
  try {
    const response = await Axios.get<AxiosParkingResponse>(URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};
