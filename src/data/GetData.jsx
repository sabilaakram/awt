import { useQuery } from "@tanstack/react-query";
import { getStrapiURL, fetchStrapiData } from "../lib/utils";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

const fetchData = async (endpoint) => {
  const response = await axios.get(`${baseUrl}${endpoint}`);

  return response.data.data;
};

const fetchStrapi = async (endpoint, params = {}) => {
  const url = getStrapiURL(endpoint);
  return await fetchStrapiData(url, params);
};

const useStrapiQueryHandler = (queryKey, endpoint, params = {}) => {
  const { data, error, isPending } = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchStrapi(endpoint, params),
  });

  return { data, isPending, error };
};

const useQueryHandler = (queryKey, endpoint) => {
  const { data, isPending, error } = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchData(endpoint),
  });

  return { data, isPending, error };
};

//Strapi api
export const GetHeaderData = () => {
  const params = {
    populate: {
      Image: {
        fields: ["url", "alternativeText", "name"],
      },
    },
  };

  return useStrapiQueryHandler("header", "/api/homepages", params);
};

export const BusinessUnitDataBySlug = (slug) => {
  const params = {
    populate: {
      Partners: {
        populate: {
          Partner: {
            populate: {
              Title: true,
              Description: true,
              Image: {
                fields: ["name", "url", "alternativeText"],
              },
            },
          },
        },
      },
      Services: {
        populate: {
          Service: {
            populate: {
              Title: true,
              Description: true,
              Image: {
                fields: ["name", "url", "alternativeText"],
              },
            },
          },
        },
      },
      CardImage: { fields: ["name", "url", "alternativeText"] },
      BannerImage: { fields: ["name", "url", "alternativeText"] },
      Image1: { fields: ["name", "url", "alternativeText"] },
      Image2: { fields: ["name", "url", "alternativeText"] },
      contact: { populate: true },
    },
  };

  return useStrapiQueryHandler(
    `${slug}`,
    `/api/business-units/${slug}`,
    params
  );
};

export const BusinessUnitsData = () => {
  const params = {
    populate: {
      CardImage: { fields: ["name", "url", "alternativeText"] },
    },
  };
  return useStrapiQueryHandler("business-units", "/api/business-units", params);
};

export const GetGalleryItems = () => {
  const params = {
    populate: {
      cover: { ields: ["name", "url", "alternativeText"] },
    },
  };
  return useStrapiQueryHandler("gallery-items", "/api/galleries", params);
};

export const GetGalleryItemsBySlug = (slug) => {
  const params = {
    populate: {
      cover: { fields: ["name", "url", "alternativeText"] },
      GalleryItems: { fields: ["name", "url", "alternativeText"] },
    },
  };
  return useStrapiQueryHandler("gallery", `/api/galleries/${slug}`, params);
};

//Dashboard apis
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

export function useBusinessUnit() {
  return useQueryHandler("business-unit", "/company_service");
}

export function useBusinessUnitById(id) {
  return useQuery({
    queryKey: ["unit", id],
    queryFn: () => fetchData(`/company_service/${id}`),
  });
}
