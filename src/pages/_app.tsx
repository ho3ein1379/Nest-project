import "@/styles/globals.css"
import "@/styles/icons.css";

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from "next/app";
import {Layouts} from "@/components";
import {Lato, Quicksand} from "next/font/google";
import {HydrationBoundary, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ToastContainer} from "react-toastify";
import {useState} from "react";
import {ModalContextProvider} from "@/store/ModalContext";
import {AuthContextProvider} from "@/store/AuthContext";

const quickSand = Quicksand({
    subsets: ["latin"]
});

const lato = Lato({
    weight: ["100", "300"],
    subsets: ["latin"],
    variable: "--font-lato"
})

export default function App({ Component, pageProps }: AppProps) {

    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchIntervalInBackground: false,
                retry: 0,
                staleTime: 60 * 1000
            }
        }
    }));

  return (
      <>
          <style jsx global>{`
              html {
                  font-family: ${quickSand.style.fontFamily}, sans-serif;
                  --font-lato: ${lato.style.fontFamily}, sans-serif;
              }
          `}
          </style>

          <QueryClientProvider client={queryClient}>
                  <HydrationBoundary state={pageProps.dehydratedState}>
                      <AuthContextProvider>
                          <ModalContextProvider>
                                  <div id={"portal"}></div>
                                  <Layouts>
                                      <Component {...pageProps} />
                                      <ToastContainer autoClose={false} hideProgressBar={false} closeOnClick={true} draggable={false} theme={"light"} position="top-right"/>
                                  </Layouts>
                          </ModalContextProvider>
                      </AuthContextProvider>
                  </HydrationBoundary>
          </QueryClientProvider>
      </>
  );
}
