import { Container } from "../../components/container";
import { Heading } from "../../components/heading";
import { Paper } from "../../components/paper";
import { Role } from "../../components/role";
import { Social } from "../../components/social";
import { Title } from "../../components/title";
import { Profile } from "../../data/profile";

function Resume()
{
    return (
        <Container>
            <Paper>
                <Title>
                    { Profile.name }
                </Title>
                <Role color='text-primary'>
                    { (Profile.role).toUpperCase() }
                </Role>
                <Social social={Profile.socials} />
                <hr />
                <p>{ (Profile.description) }</p>
                <hr />
                <Heading color='bg-primary'>
                    Heading One
                </Heading>
            </Paper>
        </Container>
    )
}

export default Resume;