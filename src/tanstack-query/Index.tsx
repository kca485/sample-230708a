import { default as Demo } from "./demo/Index";

function Index() {
  return (
    <>
      <h2 id="tanstack-query">
        Tanstack Query
      </h2>
      <p>
        Aku pakai Tanstack Query karena lebih familiar dengan itu.
        Tapi harusnya untuk SWR cukup mirip konsep dan cara pakainya.
      </p>
      <pre>
        <code className="language-js">
          {`function Komponen() {
  // Untuk mengambil data dari server, kita bisa menggunakan useQuery.
  // Error dan loading state sudah disediakan oleh useQuery
  const {
    data,
    isLoading: isValuesLoading,
    error: valuesError,
  } = useQuery({
    queryKey: ["values"], // queryKey ini berfungsi sebagai identitas query
    queryFn: fetchValues, // queryFn adalah fungsi yang akan dijalankan untuk mengambil data. Bisa menggunakan fetch, axios, dsb.
  });

  const queryClient = useQueryClient();

  // Untuk mengubah data di server, kita bisa menggunakan useMutation
  const {
    mutate: mutateValue,
    isLoading: isValueMutationLoading,
    error: valueMutationError,
  } = useMutation({
    mutationFn: editValue, // mutationFn adalah fungsi yang akan dijalankan untuk mengubah data. Bisa menggunakan fetch, axios, dsb.
    onSuccess: () => {
      // Jika berhasil mengubah data, kita bisa menginvalidasi query / memperbarui cache
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
    if (!data) {
      return;
    }

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const id = data[0].id;

    // Kita bisa mengirimkan argumen ke mutationFn saat mengubah data
    mutateValue({
      id: id,
      value: formData.get("value") as string,
    });

    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="komponen-satu">
      <p>Komponen 1</p>
      {isValuesLoading || isValueMutationLoading ? (
        <p>Memuat...</p>
      ) : (
        <span>Tes data: {data && data[0].value}</span>
      )}
      <form action="post" onSubmit={handleSubmit}>
        <label htmlFor="value">Ganti:</label>
        <input name="value" />
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}`}
        </code>
      </pre>
      <p>
        Mengurangi logika <span lang="en">client state</span> yang perlu dikelola
        dan lebih fokus pada interaksi CRUD dengan <span lang="en">server</span>.
      </p>
      <Demo />
    </>
  );
}

export default Index;
