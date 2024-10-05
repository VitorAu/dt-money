import { useContext } from "react";
import { Header } from "../../components/header/index";
import { SearchForm } from "../../components/searchForm";
import { Summary } from "../../components/summary";
import { TransactionsContext } from "../../contexts/transactionsContext";
import {
  PriceHightlight,
  TransactionsContainer,
  TransactionTable,
} from "./styes";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHightlight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHightlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </div>
  );
}
