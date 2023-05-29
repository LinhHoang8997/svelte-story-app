import { getAllCharactersStore } from "$houdini";

/* @type { import('./$houdini').PageLoad } */
export async function load(event) {
  const getAllCharacters = new getAllCharactersStore();

  const result = await getAllCharacters.fetch({
    event,
    blocking: true, // This is important to make sure the page doesn't load until the query is done
  });

  if (result.data) {
    console.log("> Character data loaded successfully from Strapi");
  }

  // Clean up Strapi GraphQL result to a single chapter data
  const processed_result = result.data.characters.data;

  // const main_characters_data = processed_result.filter(
  //   character => character.attributes.faction == "golden_palanquin"
  // );

  // const other_characters_data = processed_result.filter(
  //   character => character.attributes.faction !== "golden_palanquin"
  // );

  // Isolate the text content out for furhter processing

  return {
    all_characters: processed_result,
  };
}
