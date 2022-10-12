import "./App.css";
import AuthProvider from "./providers/provider";
import RoutesMain from "./routes";

function App() {
  return (
    <>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
}

export default App;
