"use server";
import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabaseClient";

export default async function deleteTodo(formData) {
  const id = formData.get("id");

  if (!id) return;

  await supabase.from("todos").delete().eq("id", id);

  revalidatePath("/");
}
