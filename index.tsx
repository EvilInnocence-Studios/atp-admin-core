import { IModule } from "@core/lib/module";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HomePage } from "./components/HomePage";

export const module:IModule = {
    name: "admin",
    menus: {
        admin: [{
            key: "",
            label: "Dashboard",
            icon: <FontAwesomeIcon icon={faDashboard} />,
        }],
    },
    routes: {
        admin: [
            {path: "/", component: HomePage},
        ]
    }
}