<script>
  import { parseDocument, DomUtils } from "htmlparser2";

  export let chapter_data;

  const html_chapter_content = parseDocument(
    chapter_data.attributes.content
  );

  const only_p_tags = DomUtils.getElementsByTagName(
    "p",
    html_chapter_content,
    true
  );
  let p_tags_text = only_p_tags.map((p_tag) => DomUtils.textContent(p_tag));

//   let text = [
//     "Dr. Kal'tsit was not just a brilliant scientist and medic, but also a capable commander in the world of Terra. Her sharp mind and strategic acumen had earned her the respect of her colleagues and the loyalty of the local militia under her command.",
//     " ",
//     "One day, as she and her team were working on a treatment for the incurable Oripathy, they received news that marauders were attacking a nearby town, leaving death and destruction in their wake.",
//     " ",
//     "Dr. Kal'tsit knew that she couldn't stand idly by while innocent lives were threatened. Without hesitation, she called upon the local militia to mobilize and join her in the fight against the marauders.",
//     " ",
//     "Using her tactical skills and experience, Dr. Kal'tsit led the militia into battle, deploying them in strategic locations to maximize their effectiveness. Her calm leadership and quick thinking helped to turn the tide of the battle, and after a fierce struggle, the marauders were defeated and the town was saved.",
//     "As the smoke cleared and the people of the town emerged from hiding, Dr. Kal'tsit felt a deep sense of satisfaction. She knew that her scientific and medical work was important, but being able to directly help those in need was just as rewarding.",
//     " ",
//     "And so, with renewed determination, Dr. Kal'tsit returned to her laboratory, ready to continue the fight against the Oripathy and any other threats that may arise in the tumultuous world of Terra. For she knew that her skills as a commander and a healer were both needed in equal measure, and that she was uniquely qualified to provide both.",
//   ];
  // Write a funciton that removes elements from an array that are empty strings or only contain whitespace
  function removeEmptyElements(array) {
    return array.filter(function (el) {
      return el != null && el.trim();
    });
  }

  p_tags_text = removeEmptyElements(p_tags_text);

  // Return data of interactive elements from special bracketed p_tags_text inside of the content returned from Strapi

  console.log("Here is the p_tags_text: ", p_tags_text);
</script>

<div>Testing text stuff</div>
