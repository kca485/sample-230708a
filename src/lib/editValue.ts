import supabase from "./supabaseClient";

async function editValue({ id, value }: { id: number; value: string }) {
  const res = await supabase.from("random").update({ value }).eq("id", id);
  console.log(res, id, value);
}

export default editValue;
