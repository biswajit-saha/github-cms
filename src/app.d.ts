// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		token: string;
		user:
			| {
					login?: string;
					name?: string;
					avatar_url?: string;
			  }
			| '';
	}

	// interface PageData {}
	// interface Platform {}
	// interface PrivateEnv {}
	// interface PublicEnv {}
}
