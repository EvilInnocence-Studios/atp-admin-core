import { useSetting } from "@common/lib/setting/services";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { LoggedIn } from "../uac/components/LoggedIn";
import { LoginForm } from "../uac/components/LoginForm";
import styles from "./App.module.scss";
import { Dashboard } from "./components/Dashboard";
import { useTheme } from "@theming/lib/useTheme";

const App = () => {
  const title = useSetting("adminAppName");
  const theme = useTheme();

  return <ConfigProvider theme={theme}>
    <BrowserRouter>
      <title>{title}</title>
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
}

export default App;
