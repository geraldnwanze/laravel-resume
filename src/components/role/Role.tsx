import { ReactNode } from "react";
import "../../assets/role.css";

function Role({color, children}: RoleTypes)
{
    return (
        <div className={ 'role ' + color }>{children}</div>
    )
}

interface RoleTypes{
    color: string,
    children: ReactNode
}

export default Role;