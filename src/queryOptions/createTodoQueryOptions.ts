import { queryOptions } from "@tanstack/react-query";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const getTodos = async (id: number): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  return response.json();
};

export default function createTodoQueryOptions(id: number) {
  return queryOptions({
    queryKey: ["todos", id], // remember to add the id to the query key otherwise it will be cached for all ids
    queryFn: () => getTodos(id),
  });
}
