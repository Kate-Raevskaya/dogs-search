import { useState } from "react"

type Props = {
  onSubmit: (value: string) => void
  initialValue: string
}

export const SearchField = ({ onSubmit, initialValue }: Props) => {
  let [inputValue, setInputValue] = useState(initialValue)

  function handleSubmitInput(e) {
    e.preventDefault()
    onSubmit(inputValue)
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmitInput}>
        <input
          type="text"
          placeholder="Enter a breed"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}
