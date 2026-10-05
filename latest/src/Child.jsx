import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Child() {

  const [res, setRes] = useState({})
  const [inp, setInp] = useState(1)

  async function getAPI() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${inp}`
    )

    console.log(data)
    setRes(data)
  }

  useEffect(() => {
    getAPI()
  }, [inp])

  return (
    <div>
      <p>child component</p>

      <p>{res.title}</p>

      <input
        type="text"
        onChange={(e) => setInp(e.target.value)}
      />
    </div>
  )
}

export default Child