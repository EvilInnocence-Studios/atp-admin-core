import { useSetting } from "@common/lib/setting/services";
import { ConfigProvider, theme } from "antd";
import { BrowserRouter } from "react-router-dom";
import { LoggedIn } from "../uac/components/LoggedIn";
import { LoginForm } from "../uac/components/LoginForm";
import styles from "./App.module.scss";
import { Dashboard } from "./components/Dashboard";

const App = () => {
  const title = useSetting("adminAppName");

  return <>
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
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
    </ConfigProvider>
  </>;
}

export default App;
