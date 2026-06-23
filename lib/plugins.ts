import { RendererRegistry } from "@core/lib/plugins/renderer";

export const adminPlugins = {
    homepage: RendererRegistry.get<any>("admin.homepage"),
}
