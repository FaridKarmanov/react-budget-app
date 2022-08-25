import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BudgetContextProvider } from "./contexts/BudgetContext/BudgetContext";
import { GlobalStyles } from "./ui/GlobalStyles";
import { ExpensesContextProvider } from "./contexts/ExpensesContext/ExpensesContext";
import { CurrencyContextProvider } from "./contexts/CurrencyContext/CurrencyContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <CurrencyContextProvider>
      <BudgetContextProvider>
        <ExpensesContextProvider>
          <GlobalStyles />
          <App />
        </ExpensesContextProvider>
      </BudgetContextProvider>
    </CurrencyContextProvider>
  </>
);
