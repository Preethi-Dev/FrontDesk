import StoreProvider from "./StoreProvider";
import MainContent from "./components/Main/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Home() {
  return (
    <StoreProvider>
      <main className="flex h-screen overflow-hidden">
        <Sidebar />
        <MainContent />
      </main>
    </StoreProvider>
  );
}
