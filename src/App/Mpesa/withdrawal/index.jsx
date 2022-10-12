import { useContext, useState } from "react";
import mpesaContext from "../../context";
function Withdrawal() {
  const { amount, setAmount } = useContext(mpesaContext);
  const [w, setW] = useState("");

  function handleWithdrawal() {
    if (amount < w) {
      alert("insufficient funds");
    } else if (w < 5) {
      alert("you cannot withdraw less than 5 shilings");
    } else {
      setAmount((amount) => parseInt(amount) - parseInt(w));
      alert("withdrawal sucessfull");
      setW("");
    }
  }
  const divs = "items-center mx-auto";
  return (
    <>
      <div className="sm:col-span-1 w-3/4 text-blue-400 mt-6 rounded-md shadow-md  m-auto border-2 border-solid border-slate-100 p-4  p-auto">
        <div className={divs}>
          <label className="flex flex-col p-4 p-auto">
            <span className="text-xl p-4 items-center">Withdrawal</span>
            <input
              onChange={(e) => setW(e.target.value)}
              className="border-2 border-solid border-slate-400 rounded shadow-md"
              type="Number"
              value={w}
              name="deposit"
            />
          </label>
        </div>

        <div className={divs}>
          <input
            onClick={handleWithdrawal}
            className="bg-blue-400 rounded-md shadow-md text-center text-white w-28 m-auto p-2 hover:bg-blue-700 p-auto"
            type="submit"
            value="Withdraw"
          />
        </div>
      </div>
    </>
  );
}

export default Withdrawal;
