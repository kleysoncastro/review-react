import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


interface Transaction {

    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}

export function Transaction() {

    const [transaction, setTransaction] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransaction(response.data.transactions));
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
                    {
                        transaction.map(trans => {
                            return (
                                <tr key={trans.id}>
                                    <td>{trans.title}</td>
                                    <td className={trans.type}>{new Intl.NumberFormat('pt-BR', {
                                        style: "currency",
                                        currency: "BRL"
                                    }).format(trans.amount)}</td>
                                    <td>{trans.category}</td>
                                    <td>
                                        {new Intl.DateTimeFormat('pt-BR').format(trans.amount)}
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

        </Container>
    );
}