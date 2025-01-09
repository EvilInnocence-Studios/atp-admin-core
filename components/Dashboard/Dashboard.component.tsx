import { config } from "@config";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import { HeaderMenu } from "../HeaderMenu";
import { DashboardProps } from "./Dashboard.d";
import styles from './Dashboard.module.scss';

export const DashboardComponent = ({}: DashboardProps) =>
    <Layout className={styles.dashboard}>
        <Layout.Header className={styles.header}>
            <HeaderMenu />
        </Layout.Header>
        <Layout>
            <Layout.Content className={styles.content}>
                <Routes>
                    {config().routes.map((route, index) => (
                        <Route key={index} path={route.path} Component={route.component} />
                    ))}
                </Routes>
            </Layout.Content>
        </Layout>
    </Layout>;
