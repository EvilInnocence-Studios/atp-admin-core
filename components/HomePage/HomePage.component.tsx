import { adminPlugins } from "../../lib/plugins";
import { HomePageProps } from "./HomePage.d";
import styles from './HomePage.module.scss';

export const HomePageComponent = ({}: HomePageProps) => {
    return <div className={styles.homePage}>
        {adminPlugins.homepage.render({})}
    </div>;
}
