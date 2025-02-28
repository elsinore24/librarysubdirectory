import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DSHVnxlh.js","_app/immutable/chunks/DQIBoYTc.js","_app/immutable/chunks/DM8dauRH.js","_app/immutable/chunks/lBltZnr1.js","_app/immutable/chunks/BosuxZz1.js"];
export const stylesheets = ["_app/immutable/assets/0.Cbyu0ymt.css"];
export const fonts = [];
