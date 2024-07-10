import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient } from "@tanstack/react-query";
import { useAuthStore } from "./store/auth/authStore";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";

const queryClient = new QueryClient();

export const Router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => {
    return <NotFoundPage />;
  },
  context: {
    authContext: {
      isAuthenticated: undefined!,
    },
    queryClient,
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof Router;
  }
}

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return (
    <>
      <RouterProvider
        router={Router}
        defaultPreload="intent"
        context={{
          authContext: {
            isAuthenticated,
          },
        }}
      />
    </>
  );
}

export default App;
