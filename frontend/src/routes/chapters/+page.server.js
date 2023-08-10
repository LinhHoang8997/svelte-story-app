import { getAllChapterTitlesStore } from "$houdini";

export const load = async (event) => {
  const getAllChapterTitles = new getAllChapterTitlesStore();

  const result = await getAllChapterTitles.fetch({
    event,
    blocking: true, // This is important to make sure the page doesn't load until the query is done
  });

  if (result.data) {
    console.log("> Character data loaded successfully from Strapi");
  }

    return {
      titles_data: result
    }
  }