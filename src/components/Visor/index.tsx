import { useEffect } from "react";

const Visor = ({ atualCalculo }: any) => {
  useEffect(() => {
    console.log(atualCalculo);
  }, [atualCalculo]);
  return (
    <div>
      <p>Visor</p>
    </div>
  );
};

export default Visor;
