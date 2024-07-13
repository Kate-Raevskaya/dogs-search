export type ApiDog = {
  name: string
  id: number
  image?: { url: string }
}

export type Dog = {
  breed: string
  id: number
  url: string
}

export type DogDescription = {
  bred_for: string
  height: { metric: string }
  id: number
  life_span: string
  name: string
  origin: string
  temperament: string
  weight: { metric: string }
  reference_image_id: string
}

export type DogImage = {
  id: string
  url: string
}
