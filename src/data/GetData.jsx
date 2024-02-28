import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

const fetchData = async (endpoint) => {
  const response = await axios.get(`${baseUrl}${endpoint}`);

  return response.data.data;
};

const useQueryHandler = (queryKey, endpoint) => {
  const { data, isPending, error } = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchData(endpoint),
  });

  return { data, isPending, error };
};

export function useHeadersData() {
  return useQueryHandler("headersData", "/home");
}

export function useAboutTimelineData() {
  return useQueryHandler("about-timeline", "/aboutus");
}

export function useMdMessage() {
  return useQueryHandler("md-message", "/md");
}

export function useNews() {
  return useQueryHandler("news", "/news");
}

export function useGallery() {
  return useQueryHandler("media", "/gallery");
}

export function useBod() {
  return useQueryHandler("bods", "/bod");
}
