import type { ApiDog, Dog } from "../types/dog-types"

export function transformDogApiData(dogs: ApiDog[]) {
  return dogs.map((dog): Dog => {
    return { id: dog.id, url: dog.image?.url || "", breed: dog.name }
  })
}
