import React, { useEffect, useRef } from "react"
import axios from 'axios'
import {toast} from 'react-toastify'
import dateFormatter from "@/utils/dateFormatter"
import { useDispatch } from "react-redux"


const Form = ({onEdit, getUsers, setOnEdit}: any) => {    
    const ref = useRef<any>(null)
    const dispatch = useDispatch();
    const handleSubmit = async(e: any)=> {
        //dispatch({ type: 'RG', rg:'897978897' })}
        e.preventDefault()
        
        const user = ref.current;
        if(
            !user.nome.value ||
            !user.email.value ||
            !user.fone.value ||
            !user.data_nascimento.value
        ) {
            return toast.warn("Preencha todos os campos")
        }
        if(onEdit) {

            await axios.put("http://localhost:3002/" + onEdit.id, {
                nome: user.nome.value,
                email: user.email.value,
                fone: user.fone.value,
                data_nascimento: dateFormatter(user.data_nascimento.value),
            })
            .then(({data}) => toast.success(data))
            .catch(({data}) => toast.error(data))
        } else {
                await axios.post("http://localhost:3002/", {
                    nome: user.nome.value,
                    email: user.email.value,
                    fone: user.fone.value,
                    data_nascimento: dateFormatter(user.data_nascimento.value),
                })
                .then(({data}) => toast.success(data))
                .catch(({data}) => toast.error(data))
        }

        user.nome.value = "",
        user.email.value = "",
        user.fone.value = "",
        user.data_nascimento.value = "",

        setOnEdit(null)
        getUsers()
    }
    useEffect(()=> {
        if(onEdit) {
            const user = ref.current

            user.nome.value = onEdit.nome
            user.email.value = onEdit.email
            user.fone.value = onEdit.fone
            user.data_nascimento.value = dateFormatter(onEdit.data_nascimento)
            console.log(user.data_nascimento.value, 'user.data_nascimento.value')
            
            console.log(dateFormatter(onEdit.data_nascimento), 'onEdit.data_nascimento')
        }
    }, [onEdit])

    return (
        <form ref={ref} onSubmit={handleSubmit}>
            <div>
                <div>Nome</div>
                <input name="nome" />
            </div>
            <div>
                <div>Telefone</div>
                <input name="fone" />
            </div>
            <div>
                <div>Email</div>
                <input onChange={(e)=>dispatch({type: 'RG', rg:e.target.value})} name="email" />
            </div>
            <div>
                <div>Data de nascimento</div>
                <input name="data_nascimento" type="date" />
            </div>
            <button type="submit">Salvar</button>
        </form>
    )
}

export default Form