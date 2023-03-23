import { ReactElement } from "react";
import "../../assets/heading.css";

function Heading({ color, children }: HeadingTypes): ReactElement
{
    return (
        <div className={'heading ' + color}>{children}</div>
    )
}

interface HeadingTypes {
    color: string;
    children: string;
}

export default Heading;