import React from "react";
import useUser from "../hooks/use-user";

export default function UserInfo() {
    const { user, userRequestStatus, getUser } = useUser();

    React.useEffect(() => {
        getUser("laur");
    }, [getUser])

    if (userRequestStatus === 'loading') {
        return <div>Carregando usuário...</div>
    }

    return (
    <ul>
        <li>Nome: {user?.name}</li>
        <li>User Name: {user?.username}</li>
    </ul>
    );
}