import "../../assets/title.css";

function Title({name}: TitleTypes)
{
    return (
        <div className="title">{name}</div>
    )
}

interface TitleTypes{
    name: string;
}

export default Title;