import { useEffect } from "react";
import { Container } from "./styles";

export function Transaction() {

    useEffect(() => {
        fetch("http://localhost:3000/api/transactions")
            .then(response => response.json())
            .then(data => console.log(data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Componetes</td>
                        <td className="retirada">-R$2.500.00</td>
                        <td>Desenvolvimento</td>
                        <td>20/06/2022</td>
                    </tr>
                    <tr>
                        <td>Pojeto Oria</td>
                        <td className="deposito">R$ 45.000.00</td>
                        <td>Desenvolvimento</td>
                        <td>20/06/2022</td>
                    </tr>

                </tbody>
            </table>

        </Container>
    );
}