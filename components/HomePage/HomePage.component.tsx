import { SalesReport } from "@store/components/SalesReport";
import { HomePageProps } from "./HomePage.d";
import styles from './HomePage.module.scss';
import { adminPlugins } from "./Homepage.util";

export const HomePageComponent = ({}: HomePageProps) => {
    return <div className={styles.homePage}>
        {adminPlugins.homepage.render({})}
        <SalesReport />
    </div>;
}
