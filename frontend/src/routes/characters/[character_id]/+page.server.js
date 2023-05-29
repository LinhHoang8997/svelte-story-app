import { GetIndividualCharacterStore } from "$houdini";

function getSlug({ params }) {
  return params.character_id;
}


/* @type { import('./$houdini').PageLoad } */
export async function load(event) {
  const GetIndividualCharacter = new GetIndividualCharacterStore();
  const character_id = getSlug(event);

  const result = await GetIndividualCharacter.fetch({
    event,
    variables: { character_id: character_id },
    blocking: true // This is important to make sure the page doesn't load until the query is done
  });

  if (result.data) {
    console.log("> Chapter data loaded successfully from Strapi");
  }

  // Clean up Strapi GraphQL result to a single chapter data
  const processed_result = result.data.characters.data[0];

  // Isolate the text content out for furhter processing

  return {
    character_data: processed_result
   }

};
