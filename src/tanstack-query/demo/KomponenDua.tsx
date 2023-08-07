import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import fetchValues, { Data } from "../../lib/fetchValues";
import editValue from "../../lib/editValue";

function KomponenDua() {
  // Untuk mengambil data dari server, kita bisa menggunakan useQuery
  // Error dan loading state sudah disediakan oleh useQuery
  const {
    data: values,
    isLoading,
    error: valuesError,
  } = useQuery({
    queryKey: ["values"], // queryKey ini berfungsi sebagai identitas query
    queryFn: fetchValues, // queryFn adalah fungsi yang akan dijalankan untuk mengambil data. Bisa menggunakan fetch, axios, dsb.
  });

  const queryClient = useQueryClient();

  // Untuk mengubah data di server, kita bisa menggunakan useMutation
  const {
    mutate: mutateValue,
    error: valueMutationError,
  } = useMutation({
    mutationFn: editValue,

    // ada beberapa handler yang bisa digunakan untuk memanipulasi state query
    onMutate: async (newValue) => {
      console.log("onMutate");
      console.log("new value:", newValue);

      const previousValues = queryClient.getQueryData<Data[]>(["values"]);

      return { previousValues };
    },
    onError: (err, newValue, context) => {
      console.log("onError");
      console.log("err:", err);
      console.log("new value:", newValue);
      console.log("previous value:", context?.previousValues);
    },
    onSuccess: () => {
      console.log("onSuccess");
      queryClient.invalidateQueries({ queryKey: ["values"] });
    },
  });

  if (valuesError instanceof Error) {
    alert("Gagal mengambil data");
  }

  if(valueMutationError instanceof Error) {
    alert("Gagal mengubah data");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!values) {
      return;
    }

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const id = values[0].id;

    // Kita bisa mengirimkan argumen ke mutationFn saat mengubah data
    mutateValue({
      id: id,
      value: formData.get("value") as string,
    });

    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="komponen-dua">
      <p>Komponen 2</p>
      {isLoading ? (
        <p>Memuat...</p>
      ) : (
        <span>Tes data: {values && values[0].value}</span>
      )}
      <form action="post" onSubmit={handleSubmit}>
        <label htmlFor="value">Ganti:</label>
        <input name="value" />
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}

export default KomponenDua;
