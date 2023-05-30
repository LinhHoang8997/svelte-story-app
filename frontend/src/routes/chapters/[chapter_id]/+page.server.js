import { GetIndividualChapterStore } from "$houdini";

// Import functions
import { filterParagraphData } from "$lib/functions/filterParagraphData";

function getSlug({ params }) {
  return params.chapter_id;
}

/* @type { import('./$houdini').PageLoad } */
export async function load(event) {
  const GetIndividualChapter = new GetIndividualChapterStore();
  const chapter_id = getSlug(event);

  const result = await GetIndividualChapter.fetch({
    event,
    variables: { chapter_id: chapter_id },
    blocking: true, // This is important to make sure the page doesn't load until the query is done
  });

  if (result.data) {
    console.log("> Chapter data loaded successfully from Strapi");
  }

  // Clean up Strapi GraphQL result to a single chapter data
  const processed_result = result.data.chapters.data[0];

  // Isolate the text content out for furhter processing
  const content = filterParagraphData(processed_result);

  return {
    chapter_data: processed_result,
    content: content,
  };
}
