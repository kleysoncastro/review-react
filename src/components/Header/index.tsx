import { Container, Content } from "./styles"
import logoImg from "../../assets/logo.svg"

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}
export function Header(props: HeaderProps) {


    return (
        <Container>
            <Content>
                <img src={logoImg} alt="money" />
                <button type="button"
                    onClick={props.onOpenNewTransactionModal}>Nova Transação</button>

            </Content>
        </Container>
    )
}