import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import { ThemeContext } from './Themecontext'
//lifecycle hooks - use keyword
  //useState - update
  //useEffect - call when the page is reloaded 
  //useRef - map that variable to some of the html tags 
function App() {
  const [a, setA] = useState('JavaScript')
  const re = useRef(null)

  useEffect(() => {
    console.log('JavaScript Loading')

    if (re.current) {
      re.current.placeholder = 'text'
    }
  }, [])

  function updateA() {
    setA('Java')
    console.log(a)
  }

  const arr = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <p>{a}</p>

      <ThemeContext.Provider>
        < Navbar b={a} />
      </ThemeContext.Provider>

      <p>hello</p>
      <p>{a}</p>

      {arr.map((e) => (
        <p key={e}>{e}</p>
      ))}

      <input
        ref={re}
        type="text"
        onChange={(e) => setA(e.target.value)}
      />

      <button onClick={updateA}>Update</button>
    </>
  )
}

export default App