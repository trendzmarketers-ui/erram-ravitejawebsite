import { RouterProvider } from "react-router";
import { router } from "./routes.tsx";

export default function App() {
  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: "#FFFFFF", scrollBehavior: "smooth" }}>
      <RouterProvider router={router} />
    </div>
  );
}