import type { ApiDog, Dog } from "../types/dog-types"

export function transformDogApiData(dogs: ApiDog[]): Dog[] {
  return dogs.map((dog): Dog => {
    return { id: dog.id, url: dog.image?.url || "", breed: dog.name }
  })
}
