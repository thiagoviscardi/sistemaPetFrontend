import { useEffect, useState } from 'react'
import Form from '../../components/Form/Form'
import Grid from '../../components/Grid/Grid'
import axios from 'axios'
import {toast, ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useSelector, useDispatch } from 'react-redux';


export default function User() {
  const dispatch = useDispatch();
  
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)
  
  const count = useSelector(state => state.counter.count);
  const rg = useSelector(state => state.rg.rg);
  // const { rg } = useSelector(
  //   (state: rootState) => state.student
  // )

  const getUsers = async ()=> {
    try {
      const res = await axios.get("http://localhost:3002/")
      setUsers(res.data.sort((a:any, b:any) => (a.nome > b.nome ? 1 : -1)))
    } catch(error: any) {
      toast.error(error)
    }
  }

  // useEffect(()=> {
  //     const count = useSelector(state => state.rg = '000111001');
  //   console.log(rg, 'rg')
  // }, [])

  useEffect(()=> {
    getUsers()
  }, [setUsers])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Cadastro de usuarios</div>
      <div>
      <h1>Counter: {count}</h1>
      <h1>RG: {rg}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RG', rg:'897978897' })}>RG</button>
    </div>
      {/* <ToastContainer /> */}
            <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
            <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
      <div>
        <h1>Usuarios</h1>  
        <div>
        </div>
      </div>      
    </main>
  )
}
