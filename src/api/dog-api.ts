import type { ApiDog } from "../types/dog-types"

export async function getBreedByQuery(query: string): Promise<ApiDog[]> {
  let response = await fetch(
    `https://api.thedogapi.com/v1/breeds/search?q=${query}`,
    {
      headers: {
        "x-api-key": import.meta.env.VITE_DOG_API_KEY,
      },
    },
  )

  if (response.ok) {
    return await response.json()
  } else {
    throw new Error("Something went wrong!")
  }
}
