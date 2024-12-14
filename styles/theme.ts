import { ThemeConfig, theme as antTheme } from "antd";
import globals from "./globals.module.scss";

export const theme:ThemeConfig = {
    algorithm: antTheme.darkAlgorithm,
    token: {
        colorPrimary: globals.brandPrimary,
        colorBorder: globals.brandBorder,
        colorBgBase: globals.brandBg,
        colorText: globals.brandText,
    },
    components: {
        Layout: {
            headerBg: globals.brandBgLight,
            headerPadding: "0",
            siderBg: globals.brandBgLight,                        
        }
    }
};