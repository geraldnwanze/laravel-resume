import { Container } from "../../components/container";
import { Heading } from "../../components/heading";
import { Paper } from "../../components/paper";
import { Role } from "../../components/role";
import { Skills } from "../../components/skills";
import { Social } from "../../components/social";
import { Title } from "../../components/title";
import { ProfileData } from "../../data/profile";
import { SkillsData } from "../../data/skills";

function Resume()
{
    return (
        <Container>
            <Paper>
                <Title name={ProfileData.name} />
                <Role color='text-primary' role={ProfileData.role} />
                <Social social={ProfileData.socials} />
                <hr />
                <p>{ (ProfileData.description) }</p>
                <hr />
                <Skills skills={SkillsData} />
                <Heading color='bg-primary' heading='Project Experience' />
            </Paper>
        </Container>
    )
}

export default Resume;