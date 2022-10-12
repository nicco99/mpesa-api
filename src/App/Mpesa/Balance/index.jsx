import { useContext } from "react";
import mpesaContext from "../../context";
function Balance() {
  const { amount} = useContext(mpesaContext);
  return (
    <>
      <div className="sm:col-span-1 text-2xl h-44 w-3/4 text-blue-400 mt-6 rounded-md shadow-md  m-auto border-2 border-solid border-slate-100 p-4  p-auto">
        <div>
          <h1 className="items-center" id="deposit">
            Balance
          </h1>
        </div>
        <div>
          <h1>{amount}</h1>
        </div>
      </div>
    </>
  );
}

export default Balance;
