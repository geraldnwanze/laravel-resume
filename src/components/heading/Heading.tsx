import { ReactElement } from "react";
import "../../assets/heading.css";

function Heading({ color, heading }: HeadingTypes): ReactElement
{
    return (
        <div className={'heading ' + color}>{heading}</div>
    )
}

interface HeadingTypes {
    color: string;
    heading: string;
}

export default Heading;