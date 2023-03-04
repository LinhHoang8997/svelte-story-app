import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/AllChapterTitles'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class AllChapterTitlesStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "AllChapterTitlesStore",
			variables: false,
		})
	}
}

export async function load_AllChapterTitles(params) {
	await initClient()

	const store = new AllChapterTitlesStore()

	await store.fetch(params)

	return {
		AllChapterTitles: store,
	}
}
