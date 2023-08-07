import KomponenSatu from "./KomponenSatu";
import KomponenDua from "./KomponenDua";

function Index() {
  return (
    <>
      <h3>Demo</h3>
      <p>
        Masing-masing komponen ini mempunyai useQuery.
        Bisa buka <span lang="en">network tab</span> untuk melihat jumlah koneksi ke <span lang="en">server</span>.
        Bisa juga klik ikon bunga di pojok kiri bawah untuk membuka React Query Devtools.
      </p>
      <KomponenSatu />
      <KomponenDua />
    </>
  );
}

export default Index;
