import Index from "./tanstack-query/Index";

function App() {
  return (
    <>
      <h1>Menangani <span lang="en">Global State</span> yang Datang dari <span lang="en">Server</span></h1>
      <Index />
      <h2>Referensi</h2>
      <div className="footnotes">
        <ul>
          <li><a href="https://tanstack.com/query/latest/docs/react/overview">Dokumentasi resmi Tanstack Query</a></li>
          <li><a href="https://tkdodo.eu/blog/practical-react-query#treat-the-query-key-like-a-dependency-array" lang="en">Practical React Query</a></li>
          <li><a href="https://tkdodo.eu/blog/react-query-as-a-state-manager">Tanstack Query sebagai <span lang="en">asynchronous state manager</span></a></li>
          <li><a href="https://tanstack.com/query/v4/docs/react/guides/important-defaults">Perilaku <span lang="en">default</span> Tanstack Query</a></li>
        </ul>
      </div>
    </>
  );
}

export default App;
