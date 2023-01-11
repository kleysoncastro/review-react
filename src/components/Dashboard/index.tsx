import { Summary } from "../Summary";
import { Transaction } from "../TransactonsTable";
import { Container } from "./styles";
export function Dashboard() {
    return (
        <Container>
            <Summary />
            <Transaction />
        </Container>
    );
}