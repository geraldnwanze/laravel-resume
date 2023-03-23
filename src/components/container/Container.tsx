import { ReactNode } from "react";
import "../../assets/container.css";

function Container({children}: ContainerTypes)
{
    return (
        <div className='container'>{children}</div>
    )
}

interface ContainerTypes{
    children: ReactNode;
}

export default Container;