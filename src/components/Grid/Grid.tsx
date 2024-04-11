import {FaTrash, FaEdit} from 'react-icons/fa'
import axios from 'axios';
import { toast } from 'react-toastify';
import {Table, Thead, Tr, Th, Td, Tbody} from "./GridStyles"
import dateFormatter from '@/utils/dateFormatter';

const Grid = ({users, setUsers, setOnEdit}: any)=> {
    const handleEdit = (item: any) => {
        setOnEdit(item)
    }
    const handleDelete = async(id: any) => {
        try {
            await axios.delete("http://localhost:3002/" + id)
            .then(({data}) => {
                const newArray = users.filter((user: any) => user.id !== id)
                setUsers(newArray)
                toast.success(data)
            })
        } catch (error) {
            console.error(error)
        }
        setOnEdit(null)
    }
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th onlyWeb>Fone</Th>
                    <Th onlyWeb>Data Nascimento</Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item:any, i:any)=> 
                {
                    const dataFormatada = dateFormatter(item.data_nascimento)
                    return (
                        <Tr key={i}>
                            <Td width="30%">{item.nome}</Td>
                            <Td width="30%">{item.email}</Td>
                            <Td width="20%" onlyWeb>{item.fone}</Td>
                            <Td width="20%" onlyWeb>{dataFormatada}</Td>
                            <Td alignCenter width="5%"><FaEdit onClick={() => handleEdit(item)} /></Td>
                            <Td alignCenter width="5%"><FaTrash onClick={() => handleDelete(item.id)} /></Td>
                        </Tr>
                    )
                })}
            </Tbody>
        </Table>
    )
}

export default Grid