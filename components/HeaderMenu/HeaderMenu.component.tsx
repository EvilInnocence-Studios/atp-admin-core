import { Menu } from "antd";
import { HeaderMenuProps } from "./HeaderMenu.d";
import styles from './HeaderMenu.module.scss';
import { AccountMenu } from "@uac/components/AccountMenu";

export const HeaderMenuComponent = ({items, onClick}:HeaderMenuProps) => <>
    <div className={styles.accountMenu}>
        <AccountMenu />
    </div>
    <Menu mode="horizontal" className={styles.menu} items={items} onClick={onClick}/>
</>;
