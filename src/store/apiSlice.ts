import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { transformDogApiData } from "../helpers/data-transform"
import type { Dog, DogDescription, DogImage } from "../types/dog-types"

export const apiSlice = createApi({
  reducerPath: "dog",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.thedogapi.com/v1" }),
  endpoints: builder => ({
    getAllDogs: builder.query<Dog[], void>({
      query: () => ({
        url: "/breeds",
        headers: { "x-api-key": import.meta.env.VITE_DOG_API_KEY },
      }),
      transformResponse: transformDogApiData,
    }),
    getDogById: builder.query<DogDescription, string | undefined>({
      query: id => ({
        url: `/breeds/${id}`,
        headers: { "x-api-key": import.meta.env.VITE_DOG_API_KEY },
      }),
    }),
    getDogImagesById: builder.query<DogImage[], string | undefined>({
      query: id => ({
        url: `/images/search?limit=3&breed_ids=${id}`,
        headers: { "x-api-key": import.meta.env.VITE_DOG_API_KEY },
      }),
    }),
    getDogsByBreed: builder.query<Dog[], string>({
      query: breedQuery => ({
        url: `/breeds/search?q=${breedQuery}`,
        headers: { "x-api-key": import.meta.env.VITE_DOG_API_KEY },
      }),
      transformResponse: transformDogApiData,
    }),
  }),
})

export const {
  useGetAllDogsQuery,
  useGetDogByIdQuery,
  useGetDogImagesByIdQuery,
  useGetDogsByBreedQuery,
} = apiSlice
