import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './store/counterSlice';

function App() {
  const dispatch= useDispatch();
  const count=useSelector((state)=>{
    return state.counter.value
  })
  console.log(count);

  return (
    <div className="App bg-info">
      COUNT- {count};
      {/* <button onClick={()=> dispatch(increment())}></button> */}
      <button className="btn btn-primary" type="submit" onClick={()=> dispatch(increment())}>Button</button>
    </div>
  )
}

export default App

/*
Arrow function
syntax->   (para1,para2)=> _____
            (state)
*/

