import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import 'bootstrap/dist/css/bootstrap.css';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
export default function App({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          {/* <ToastContainer /> */}
        </QueryClientProvider>
      </NextUIProvider>
      {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" /> */}
    </>)
}
