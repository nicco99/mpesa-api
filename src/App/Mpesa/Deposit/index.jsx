import { useContext, useState } from "react";
import mpesaContext from "../../context";
function Deposit() {
  const { amount, setAmount } = useContext(mpesaContext);
  const [d, setD] = useState("");
 

  function handleDeposit() {
    if (d > 1) {
      setAmount((amount) => parseInt(amount) + parseInt(d));
      alert("deposit sucessfull");
      setD("")
      
    }
  }

  const divs = "items-center mx-auto";
  return (
    <>
      <div className="sm:col-span-1 w-3/4 text-blue-400 mt-6 rounded-md shadow-md  m-auto border-2 border-solid border-slate-100 p-4  p-auto">
        <div className={divs}>
          <label className="flex flex-col p-4 p-auto">
            <span className="text-xl p-4 items-center">Deposit</span>
            <input
              onChange={(e) =>setD(e.target.value)}
              className="border-2 border-solid border-slate-400 rounded shadow-md"
              type="number"
              value={d}
              name="deposit"
            />
          </label>
        </div>

        <div className={divs}>
          <input
            onClick={handleDeposit}
            className="bg-blue-400 rounded-md shadow-md text-center text-white w-28 m-auto p-2 hover:bg-blue-700 p-auto"
            type="submit"
            value="deposit"
          />
        </div>
      </div>
    </>
  );
}

export default Deposit;
