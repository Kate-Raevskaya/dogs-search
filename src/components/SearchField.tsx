import type React from "react"
import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"

import { useDebounce } from "../hooks/useDebounce"
import { useGetDogsByBreedQuery } from "../store/apiSlice"
import "./SearchField.scss"

type Props = {
  onSubmit: (value: string) => void
  initialValue: string
}

export const SearchField = ({ onSubmit, initialValue }: Props) => {
  let [inputValue, setInputValue] = useState(initialValue)
  let [focus, setFocus] = useState<boolean>(false)

  let formRef = useRef<HTMLFormElement>(null)
  let debouncedValue = useDebounce(inputValue, 300)

  let { data: suggestions = [] } = useGetDogsByBreedQuery(debouncedValue)

  function handleSubmitInput(e: React.FormEvent) {
    e.preventDefault()
    if (inputValue === "") {
      return
    }
    onSubmit(inputValue)
  }

  function handleOnChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
    setFocus(true)
  }

  function handleOnFocusInput(e: React.FocusEvent<HTMLInputElement>) {
    if (e.target.value !== "") {
      setFocus(true)
    }
  }

  function clickOut(e: MouseEvent) {
    if (formRef.current && !formRef.current.contains(e.target as Node)) {
      setFocus(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", clickOut)
    return () => {
      document.removeEventListener("click", clickOut)
    }
  })

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmitInput} ref={formRef}>
        <input
          type="text"
          placeholder="Enter a breed"
          value={inputValue}
          onChange={handleOnChangeInput}
          onFocus={handleOnFocusInput}
        />
        <button type="submit">Search</button>
        <div
          className={
            focus && debouncedValue !== ""
              ? "suggestions suggestions-focus"
              : "suggestions"
          }
        >
          {suggestions.length !== 0 ? (
            <div>
              <p>Found by query {debouncedValue}:</p>
              <ul>
                {suggestions.map(s => {
                  return (
                    <li key={s.id}>
                      <NavLink to={`../dogs/${s.id}`}>{s.breed}</NavLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          ) : (
            <p>Nothing found :(</p>
          )}
        </div>
      </form>
    </div>
  )
}
