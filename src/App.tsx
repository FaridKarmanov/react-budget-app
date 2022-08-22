import React from "react";
import { Expenses } from "./components/Expenses/Expenses";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./styles";

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <Expenses />
      <Form />
    </Wrapper>
  );
};
