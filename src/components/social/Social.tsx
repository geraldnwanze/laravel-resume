import "../../assets/social.css";

function Social({social}: SocialTypes)
{
    return (
        <ul className='social'>
            <li><strong>Phone: </strong> <a href={'tel:' + social.phone} target="_blank" rel="noreferrer" key={1}>{social.phone}</a> </li>
            <li><strong>Email: </strong> <a href={'mailto:' + social.email} target="_blank" rel="noreferrer" key={2}>{social.email}</a></li>
            <li><strong>Github: </strong> <a href={social.github} target="_blank" rel="noreferrer" key={3}>{social.github}</a></li>
            <li><strong>Linkedin: </strong> <a href={social.linkedin} target="_blank" rel="noreferrer" key={4}>{social.linkedin}</a></li>
        </ul>
    )
}

interface SocialTypes{
    social: any
}

export default Social;