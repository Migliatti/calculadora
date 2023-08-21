import { useState } from "react";
import Visor from "../Visor";
import Teclado from "../Teclado";

const Calculadora = () => {
  const [atualCalculo, setAtualCalculo] = useState<number>();
  return (
    <div>
      <Visor atualCalculo={atualCalculo} />
      <Teclado />
    </div>
  );
};

export default Calculadora;
