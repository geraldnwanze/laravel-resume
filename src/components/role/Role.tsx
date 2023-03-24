import "../../assets/role.css";

function Role({color, role}: RoleTypes)
{
    return (
        <div className={ 'role ' + color }>{role}</div>
    )
}

interface RoleTypes{
    color: string,
    role: string
}

export default Role;