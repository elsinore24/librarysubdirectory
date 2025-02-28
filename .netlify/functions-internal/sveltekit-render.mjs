import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["_redirects","default-clue.png","favicon.png","images/clues/poisoned-page.png","sounds/.gitkeep"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BBsEUJSS.js",app:"_app/immutable/entry/app.BsAnNVHw.js",imports:["_app/immutable/entry/start.BBsEUJSS.js","_app/immutable/chunks/BX_CGlBR.js","_app/immutable/chunks/DQIBoYTc.js","_app/immutable/chunks/BRiskQ2-.js","_app/immutable/entry/app.BsAnNVHw.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DQIBoYTc.js","_app/immutable/chunks/DM8dauRH.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/rooms/library"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
