import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
export default function App({ Component, pageProps }) {
  return <NextUIProvider>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />

    </QueryClientProvider>
  </NextUIProvider>
}
