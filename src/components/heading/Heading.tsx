import { ReactElement } from "react";
import "../../assets/heading.css";

function Heading({ classes, children }: HeadingTypes): ReactElement
{
    return (
        <div className={'heading ' + classes}>{children}</div>
    )
}

interface HeadingTypes {
    classes: string;
    children: string;
}

export default Heading;