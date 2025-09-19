import useUsers from "../hooks/use-users";


export default function UserList() {
    const {users, isLoadingUsers} = useUsers();

    if (isLoadingUsers) {
        return <div>Carregando todos os usuários...</div>
    }

    return (
        <ul>
            {users.map(user => <li key={user.username}>Nome: {user.name}  / Username: {user.username} </li>)}
        </ul>
    )
}