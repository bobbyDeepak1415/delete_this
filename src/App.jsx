import { useSelector } from 'react-redux'
import './App.css'

function App() {


  const count=useSelector(state=>state.counter.value)

   const dispatch = useDispatch();

  return (
    <>
     <p>{count}</p>
     <button>+</button>
     <button>-</button>
     <button>Add 3</button>
    </>
  )
}

export default App
