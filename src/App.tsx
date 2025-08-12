import { useState, Suspense } from "react";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import createTodoQueryOptions from "./queryOptions/createTodoQueryOptions";
import Card from "./components/Card";
import Loading from "./assets/Loading.svg";

function App() {
  const [id, setId] = useState(1);
  //* use useQuery when data might be undefined
  // const { data, isPending, refetch, isError } = useQuery(
  //   createTodoQueryOptions(id)
  // );

  //* use useSuspenseQuery when data is guaranteed to be defined
  // const { data, isPending, refetch, isError } = useSuspenseQuery(
  //   createTodoQueryOptions(id)
  // );

  // if (isError) {
  //   alert("Something went wrong");
  // }

  return (
    <>
      {/* <div>
        {isPending ? <p>Loading...</p> : JSON.stringify(data?.slice(0, 10))}
      </div>*/}

      <div className="flex flex-col justify-center items-center p-4 h-screen">
        <Suspense
          fallback={<img src={Loading} className="w-30 h-30" alt="Loading" />}
        >
          <Card id={id} />
          <button
            className="m-4 p-4 rounded-lg bg-blue-500 text-white cursor-pointer hover:scale-105 transform transition-transform duration-200"
            onClick={() => setId((prev) => prev + 1)}
          >
            Increment ID
          </button>
        </Suspense>
      </div>
    </>
  );
}

export default App;
