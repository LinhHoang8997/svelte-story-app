import { IndividualChapterQueryStore } from "$houdini";
import { json } from '@sveltejs/kit'

function getSlug({ params }) {
  return params.chapter_id
}


/* @type { import('./$houdini').PageLoad } */
export async function load(event) {
  const IndividualChapterQuery = new IndividualChapterQueryStore();
  const chapter_id = getSlug(event);

  const result = await IndividualChapterQuery.fetch({
    event,
    variables: { chapter_id: chapter_id },
  });

  console.log("do something with", result);

  return { IndividualChapterQuery }
  
};
