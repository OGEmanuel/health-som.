import { createBrowserRouter, RouterProvider } from "react-router";
import QueryProvider from "./lib/query-provider";
import Login from "./auth/login";

const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="App">
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </div>
  );
}

export default App;
