import { getAllChapterTitlesStore } from "$houdini";

export const load = async ({ locals: { getSession } }) => {
  const getAllChapterTitles = new getAllChapterTitlesStore();

  const result = await getAllChapterTitles.fetch({
    event,
    blocking: true, // This is important to make sure the page doesn't load until the query is done
  });

  if (result.data) {
    console.log("> Chapter data loaded successfully from Strapi");
    console.log("We have the following chapters: ", result.data);
  }

    return {
      session: await getSession(),
      titles_data: result
    }
  }