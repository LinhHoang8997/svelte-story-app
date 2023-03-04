import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/KalChapter'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class KalChapterStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "KalChapterStore",
			variables: false,
		})
	}
}

export async function load_KalChapter(params) {
	await initClient()

	const store = new KalChapterStore()

	await store.fetch(params)

	return {
		KalChapter: store,
	}
}
