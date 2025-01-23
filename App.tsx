import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";
import { Dashboard } from "./components/Dashboard";
import { theme } from "@styles/theme";
import { LoggedIn } from "../uac/components/LoggedIn";
import { LoginForm } from "../uac/components/LoginForm";

const App = () => 
<ConfigProvider theme={theme}>
  <BrowserRouter>
    <div className={styles.app}>
      <LoggedIn yes>
        <Dashboard />
      </LoggedIn>
      <LoggedIn no>
        <LoginForm />
      </LoggedIn>
    </div>
  </BrowserRouter>
</ConfigProvider>;

export default App
