import addTodo from "@/app/actions/addTodo";
import deleteTodo from "@/app/actions/deleteTodo";
import { supabase } from "@/lib/supabaseClient";

export default async function TodoList() {
  const { data } = await supabase.from("todos").select("todo, id");

  return (
    <div className="min-h-screen bg-[#1E1E3F] text-white font-sans flex items-center justify-center p-4">
      <div className="max-w-md mx-auto">
        <form action={addTodo} className="flex items-center gap-2 mb-6">
          <input
            name="text"
            type="text"
            placeholder="Add Item"
            required
            className="flex-1 bg-[#2C2C54] text-white placeholder-gray-400 rounded-full px-4 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
          >
            +
          </button>
        </form>

        <h2 className="uppercase text-sm text-gray-400 mb-2">To Do</h2>
        <ul className="space-y-3">
          {data?.map((todo) => (
            <li
              key={todo.id}
              className="bg-[#2C2C54] p-4 rounded-lg flex justify-between items-center"
            >
              <p className="font-medium text-white">{todo.todo}</p>
              <form action={deleteTodo}>
                <input type="hidden" name="id" value={todo.id} />
                <button className="text-red-400 hover:text-red-500 text-sm ml-3">
                  Delete
                </button>
              </form>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
