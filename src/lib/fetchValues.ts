import supabase from "./supabaseClient";

export interface Data {
  id: number;
  value: string;
}

async function fetchValues(): Promise<Data[]| null> {
  const { data } = await supabase
  .from('random')
  .select()

  return data;
}

export default fetchValues;
