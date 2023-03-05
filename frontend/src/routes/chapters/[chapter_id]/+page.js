import { IndividualChapterQueryStore } from "$houdini";
import { parseDocument, DomUtils } from "htmlparser2";

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
    blocking: true // This is important to make sure the page doesn't load until the query is done
  });

  console.log("do something with", result);

  // Clean up Strapi GraphQL result to a single chapter data
  const processed_result = result.data.chapters.data[0];

  // Isolate the text content out for furhter processing

  return {
    chapter_data: processed_result
   }

};
