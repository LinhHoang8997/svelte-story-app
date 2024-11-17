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
  console.log(chapter_id);

  const result = await GetIndividualChapter.fetch({
    event,
    variables: { chapter_id: chapter_id },
    blocking: true, // This is important to make sure the page doesn't load until the query is done
  });

  if (result.data) {
    console.log("> Indv. chapter data loaded successfully from Strapi");
  }

  // Clean up Strapi GraphQL r result.data.chaptersesult to a single chapter data
  const processed_result = result.data.chapters[0];
  if (!processed_result) {
    console.log("> Chapter data is empty");
  } else {
    console.log("> Chapter data is not empty: ", processed_result);
  }

  // Isolate the text content out for further processing
  const content = filterParagraphData(processed_result);

  return {
    chapter_data: processed_result,
    content: content,
  };
}
