import { ReactNode } from "react";
import "../../assets/title.css";

function Title({children}: TitleTypes)
{
    return (
        <div className="title">{children}</div>
    )
}

interface TitleTypes{
    children: ReactNode;
}

export default Title;