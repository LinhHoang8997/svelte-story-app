import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/APIChapterTitles'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class APIChapterTitlesStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "APIChapterTitlesStore",
			variables: false,
		})
	}
}

export async function load_APIChapterTitles(params) {
	await initClient()

	const store = new APIChapterTitlesStore()

	await store.fetch(params)

	return {
		APIChapterTitles: store,
	}
}
