"use client";

import { useQuery } from "@tanstack/react-query";
import { FoodData } from "@/shared/entities";

interface ApiResult<Result extends ApiBaseResult | ApiBaseResult[]> {
  count: number;
  next?: string;
  previous?: string;
  results: Result;
}

interface ApiBaseResult {
  name: string;
  image: string;
}

export interface ApiCategoryResult extends ApiBaseResult {
  id?: string;
  sort: number; //sort order
  url: string;
}

export interface ApiFoodResult extends ApiBaseResult {
  id: string;
  calories: number;
  carbohydrates: number;
  fat_total: number;
  protein: number;
  sodium: number;
  iron: number;
  calcium: number;
}

export interface ApiReplacementsResult extends ApiBaseResult {
  replacements: string[];
}

export interface ApiNotificationRequest {
  mobile: string;
  message: NotificationFoodData;
}

export interface ApiNotificationsResult extends ApiBaseResult {
  mobile: string;
  message: NotificationFoodData;
  url: string;
}

interface NotificationFoodData {
  food1: FoodData;
  food2: FoodData;
  food3: FoodData;
}

const API_BASE_URL = process.env.API_BASE_URL ?? "";

enum ApiEndpoints {
  Categories = "categories",
  Foods = "foods",
  Replacements = "replacements",
  Notifications = "notifications",
}

const getCategories = async () => {
  const req = new Request(`${API_BASE_URL}/${ApiEndpoints.Categories}/`);
  const res = await fetch(req);
  const { results } = (await res.json()) as ApiResult<ApiCategoryResult>;
  results.id = extractCategoryId(results.url);
  return results;
};

const extractCategoryId = (url: string) => {
  const arr = url.split("/");
  return arr[arr.length - 1];
};

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    refetchOnReconnect: true,
  });
};

const getFoodList = async () => {
  const req = new Request(`${API_BASE_URL}/${ApiEndpoints.Foods}/`);
  const res = await fetch(req);
  const { results } = (await res.json()) as ApiResult<ApiFoodResult[]>;
  return results;
};

export const useFoodListQuery = () => {
  return useQuery({
    queryKey: ["foodList"],
    queryFn: getFoodList,
    refetchOnReconnect: true,
  });
};

const getFood = async (id: string) => {
  const req = new Request(`${API_BASE_URL}/${ApiEndpoints.Foods}/${id}/`);
  const res = await fetch(req);
  const { results } = (await res.json()) as ApiResult<ApiFoodResult>;
  return results;
};

export const useFoodItemQuery = (id: string) => {
  return useQuery({
    queryKey: ["foodItem", id],
    queryFn: () => getFood(id),
    refetchOnReconnect: true,
  });
};

const getFoodReplacements = async (id: string) => {
  const req = new Request(
    `${API_BASE_URL}/${ApiEndpoints.Foods}/${id}/${ApiEndpoints.Replacements}`,
  );
  const res = await fetch(req);
  const { results } = (await res.json()) as ApiResult<ApiReplacementsResult>;
  return results;
};

export const useFoodReplacementsQuery = (id: string) => {
  return useQuery({
    queryKey: ["replacements", id],
    queryFn: () => getFoodReplacements(id),
    refetchOnReconnect: true,
  });
};

const getNotificationMessage = async (notificationId: string) => {
  const req = new Request(
    `${API_BASE_URL}/${ApiEndpoints.Notifications}/${notificationId}/`,
  );
  const res = await fetch(req);
  const { results } = (await res.json()) as ApiResult<ApiNotificationsResult>;
  return results.message;
};

export const useNotificationQuery = (notificationId: string) => {
  return useQuery({
    queryKey: ["replacements", notificationId],
    queryFn: () => getNotificationMessage(notificationId),
    refetchOnReconnect: true,
  });
};

export const registerNewNotification = async (
  mobile: string,
  foodData: NotificationFoodData,
) => {
  const body: ApiNotificationRequest = { mobile, message: foodData };
  const req = new Request(`${API_BASE_URL}/${ApiEndpoints.Notifications}/`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  await fetch(req).then((response) => {
    if (!response.ok)
      throw new Error(
        `Something went wrong when fetching from the API. Status code is ${response.status}`,
      );
  });
};
