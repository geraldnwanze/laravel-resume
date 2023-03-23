import { ReactNode } from "react"
import '../../assets/paper.css';

function Paper({children}: PaperTypes)
{
    return (
        <div className='paper'>{children}</div>
    )
}

interface PaperTypes{
    children: ReactNode;
}

export default Paper;