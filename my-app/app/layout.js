"use client";
import { Inter } from 'next/font/google'
import "./bootstrap-client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "./header/page";
import Login from "./login/page";
import Footer from "./components/footer/footer";
import BootstrapClient from "./bootstrap-client";
import { Provider } from 'react-redux';
// import store from '@/store/store';
import { myStore } from "@/store/store";
import Session from './sessioncheck/sessioncheck';
// import { useSelector } from 'react-redux';

// function CheckKarin() {
//   let some = useSelector(function (store) {
//     return store.productReducer;
//   });

//   return (
//     <div>
//       <h1>{some.products.join("_")}</h1>
//     </div>
//   );
// }
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ✅ Wrap everything inside one Provider */}
        <Provider store={myStore}>
          <Session>
            <Header />
            <BootstrapClient />
            {children}
            <Footer />
          </Session>
        </Provider>
      </body>
    </html>
  );
}
