import { writable } from 'svelte/store';

export const config = writable();

// const fetchConfig = async () => {
// 	const response = await fetch('http://localhost:5173/api/github/config', {
// 		headers: {
// 			accept: 'application/json'
// 		}
// 	});
// 	config.set(response);
// };

// fetchConfig();
