export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			ENV: 'dev' | 'stg' | 'prod';
		}
	}
}
