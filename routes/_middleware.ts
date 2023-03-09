import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 580,
  site: "zteste",
  domains: ["zteste.deco.site"],
});