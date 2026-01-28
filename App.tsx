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
    <style>
      :root {"{"}
        --primaryColor: #4492ae;
        --secondaryColor: #6c757d;
        --borderColor: #282828;
        --bgColor: #000000;
        --bgLightColor: #212121;
        --textColor: #ababab;
        --warningColor: #f0ad4e;
        --errorColor: #d9534f;
        --successColor: #5cb85c;
        --changedColor: #333300;
        --headerMenuBg: var(--bgColor);
        --contentBg: var(--bgLightColor);
        --pageBg: var(--borderColor);
        --linkColor: #337ab7;
        --altLinkColor: var(--textColor);
        --comicNavBackgroundColor: #ffffff;

        --textSizeDefault: 14px;
        --textSizeSmall: 12px;
        --textSizeLarge: 20px;
        --textSizeXS: 12px;
        --textSizeXL: 24px;
        --defaultFont: Helvetica Neue,Helvetica,Arial,sans-serif;
        --headerFont: Helvetica Neue,Helvetica,Arial,sans-serif;
        --padding: 16px;
        --paddingSmall: 8px;
        --paddingLarge: 24px;
        --paddingXS: 4px;
        --borderRadius: 4px;
        --borderRadiusLarge: 8px;
        --scrollerItemWidth: 168px;
        --scrollerHeight: 450px;
        --cmsWidth: 768px;
        --comicNavIconSize: 64px;
        --comicPageWidth: 1200px;
        --comicArchiveWidth: 768px;
        --comicArcDetailsWidth: 512px;
        --maxSiteWidth: 100%;
      {"}"}
    </style>
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
