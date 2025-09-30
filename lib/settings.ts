import { ISettingContainer } from "@common/lib/setting/types";
import { services } from "@core/lib/api";

export const layoutSettings:ISettingContainer = {
    "Layout": {
        "Site": {
            "theme.maxSiteWidth": {
                displayName: "Max Width",
                type: "string",
                defaultValue: "100%",
                description: "Maximum width of the site layout."
            }
        },
        "Header": {
            "layout.header.showBrandLink": {
                displayName: "Show Brand Link",
                type: "boolean",
                defaultValue: true,
                description: "Show a link to the brand's homepage in the header."
            },
            "layout.header.showStoreMenu": {
                displayName: "Show Store Menu",
                type: "boolean",
                defaultValue: true,
                description: "Show the store menu in the header."
            },
            "layout.header.showShopLink": {
                displayName: "Show Shop Link",
                type: "boolean",
                defaultValue: false,
                description: "Show a link to the shop in the header."
            },
            "layout.header.showTopMenu": {
                displayName: "Show Top Menu",
                type: "boolean",
                defaultValue: true,
                description: "Show the top menu in the header."
            },
            "layout.header.topBanner": {
                displayName: "Top Banner",
                type: "select",
                defaultValue: "",
                description: "Select a banner to display at the top of the page.",
                options: async () => services().banner.search({}).then(banners => [
                    { value: '', label: 'None' },
                    ...banners.map(banner => ({ value: banner.id, label: banner.name }))
                ])
            }
        }
    }
}