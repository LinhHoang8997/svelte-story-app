import { IndividualChapterQueryStore } from "$houdini";
import { SoundtracksInBlockQueryStore } from "$houdini";

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

  if (result.data) {
    console.log("> Chapter data loaded successfully from Strapi");
  }

  const SoundtracksInBlockQuery = new SoundtracksInBlockQueryStore();
  const test_result = await SoundtracksInBlockQuery.fetch({
    event,
    variables: { id: "kacchie-writes-a-poem" },
    blocking: true // This is important to make sure the page doesn't load until the query is done
  });

  if (test_result.data) {
    console.log("> Soundtrack data loaded successfully from Strapi");
    console.log(test_result.data.interactiveBlocks.data[0].attributes.soundtracks)
  }



  // Clean up Strapi GraphQL result to a single chapter data
  const processed_result = result.data.chapters.data[0];

  // Isolate the text content out for furhter processing

  return {
    chapter_data: processed_result
   }

};
