import React, { useState } from 'react'
import './pagination.css'

const Pagination = () => {
  const [activePagination, setActivePagination] = useState(false)

  return (
    <div className="pagination">
      <button
        onClick={() => setActivePagination('#1')}
        className={activePagination === '#1' ? '#1' : 'false'}
      >
        1
      </button>
      <button
        onClick={() => setActivePagination(false)}
        className={activePagination === true ? '2' : 'false'}
        id="2"
      >
        2
      </button>
      <button
        onClick={() => setActivePagination(true)}
        className={activePagination === true ? 'activePagination' : ''}
      >
        3
      </button>
    </div>
  )
}

export default Pagination
