"use server";
import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabaseClient";

export default async function addTodo(formData) {
  const todoItem = formData.get("text");

  if (!todoItem) return;

  await supabase.from("todos").insert({
    todo: todoItem,
    created_at: new Date().toISOString(),
  });

  revalidatePath("/");
}
