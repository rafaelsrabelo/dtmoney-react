import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  },[]);

  return (
    <Container>
      <table>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
        <tr>
          <td>Desenvolvimento de site</td>
          <td className="deposit">R$ 12.000</td>
          <td>Desenvolvimento</td>
          <td>30/11/21</td>
        </tr>
        <tr>
          <td>Aluguel Apartamento</td>
          <td className="withdraw">-R$ 1.200</td>
          <td>Casa</td>
          <td>30/11/21</td>
        </tr>
      </table>
    </Container>
  );
}
