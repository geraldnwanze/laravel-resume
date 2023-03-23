import { Container } from "../../components/container";
import { Heading } from "../../components/heading";
import { Paper } from "../../components/paper";

function Resume()
{
    return (
        <Container>
            <Paper>
                Hello world
                <Heading classes='primary'>
                    Heading One
                </Heading>
            </Paper>
        </Container>
    )
}

export default Resume;