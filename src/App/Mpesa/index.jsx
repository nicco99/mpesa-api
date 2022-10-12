import Balance from "./Balance";
import Deposit from "./Deposit";
import Withdrawal from "./withdrawal";
import mpesaContext from "../context";
import { useState } from "react";

function Mpesa() {
  const [amount, setAmount] = useState(10000);
  return (
    <mpesaContext.Provider value={{ amount: amount, setAmount: setAmount }}>
      <div className="grid sm:grid-cols-3 gap-y-1 w-full">
        <Balance />
        <Deposit />
        <Withdrawal />
      </div>
    </mpesaContext.Provider>
  );
}

export default Mpesa;
