import { parseDocument, DomUtils } from "htmlparser2";

function removeEmptyElements(array) {
    return array.filter(function (el) {
      return el != null && el.trim();
    });
  }

export function filterParagraphData(chapter_data) {
  let html_chapter_content = parseDocument(chapter_data.attributes.content);
//   console.log(html_chapter_content)

  let only_p_tags = DomUtils.getElementsByTagName(
    "p",
    html_chapter_content,
    true
  );

  let p_tags_text = only_p_tags.map((p_tag) => DomUtils.textContent(p_tag));

  // Write a funciton that removes elements from an array that are empty strings or only contain whitespace
  let p_tags_text_cleaned = removeEmptyElements(p_tags_text);
//   console.log("p_tags_text", p_tags_text_cleaned);

  return p_tags_text_cleaned;
}
