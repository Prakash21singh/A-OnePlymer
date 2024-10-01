import { Outlet } from "react-router-dom";
import { Footer, Header, Navbar } from "./components";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full font-lato relative">
        <span className="w-[60%] h-[400px] absolute -top-[10%] left-1/2 rounded-full -translate-x-1/2  bg-primary blur-[100px] -z-10"></span>
        <span className="w-[200px] h-[200px] -z-10 absolute -top-[5%] left-1/2 rounded-full -translate-x-1/2  bg-secondary blur-[40px]"></span>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
