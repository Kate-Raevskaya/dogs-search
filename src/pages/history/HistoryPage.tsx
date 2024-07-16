import type React from "react"
import { useNavigate } from "react-router-dom"

import { clearHistory, removeHistoryNote } from "../../store/historySlice"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import type { HistoryNote } from "../../types/history-types"
import "./HistoryPage.scss"

type Props = { historyNote: HistoryNote }

const Note = ({ historyNote }: Props) => {
  let { id, timestamp, query } = historyNote

  let dispatch = useAppDispatch()
  let navigate = useNavigate()

  function handleDelete(e: React.MouseEvent) {
    e.stopPropagation()
    dispatch(removeHistoryNote(id))
  }

  function handleSearch() {
    navigate(`/search?breed=${query}`)
  }

  return (
    <div onClick={handleSearch} className="history-note">
      <div className="delete-note" onClick={handleDelete}>
        Delete
      </div>
      <div className="note-time">{timestamp}</div>
      <div className="note-query">{query}</div>
    </div>
  )
}

const HistoryPage = () => {
  let dispatch = useAppDispatch()
  let history = useAppSelector(state => state.history)

  function handleDelete() {
    dispatch(clearHistory())
  }

  return (
    <div className="history">
      <h2 className="history-header">History</h2>
      {history.length === 0 ? (
        <p>You don't have a history yet</p>
      ) : (
        <>
          <div className="clear-history" onClick={handleDelete}>
            Delete all
          </div>
          <div className="history-container">
            <ul className="history-list">
              {history.map(historyNote => {
                return (
                  <li key={historyNote.id}>
                    <Note historyNote={historyNote} />
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default HistoryPage
