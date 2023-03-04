import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/X'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class XStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "XStore",
			variables: false,
		})
	}
}

export async function load_X(params) {
	await initClient()

	const store = new XStore()

	await store.fetch(params)

	return {
		X: store,
	}
}
