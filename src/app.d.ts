import type { IStaticMethods } from 'preline/dist';

declare global {
	// noinspection JSUnusedGlobalSymbols
	interface Window {
		HSStaticMethods: IStaticMethods;
	}

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
