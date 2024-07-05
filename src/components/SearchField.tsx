import { useState } from "react"

export const SearchField = () => {
  let [inputValue, setInputValue] = useState("")

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter a breed"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      ></input>
    </div>
  )
}
