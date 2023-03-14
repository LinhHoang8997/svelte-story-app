import { parseDocument, DomUtils } from "htmlparser2";
import DOMPurify from "isomorphic-dompurify";
import voca from "voca";

function removeEmptyElements(array) {
  return array.filter(function (el) {
    return el != null && el.trim();
  });
}

function isInteractiveBlock(paragraph) {
  let text_to_check = "interactive_block";
  return voca.includes(paragraph, text_to_check, 0);
}

function extractIdFromInteractiveBlock(paragraph) {
  let id = null;
  let bracket_text = voca.slice(
    paragraph,
    voca.indexOf(paragraph, "(") + 1,
    voca.indexOf(paragraph, ")")
  );

  if (bracket_text) {
    if (voca.includes(bracket_text, "id")) {
      id = voca.split(bracket_text, ":")[1];
      id = voca.trim(id);
    }
  }

  return id;
}

function extractInteractiveBlockContentbyId(id, chapter_data) {
  // Get all the interactive blocks from the chapter data as an array
  let interactive_blocks = chapter_data.attributes.interactive_blocks.data;
  let matched_interactive_block = interactive_blocks.find(
    (interactive_block) =>
      interactive_block.attributes.interactive_block_id === id
  );

  // console.log("matched_interactive_block", matched_interactive_block)

  // Sanitize, Parse, and Split rich text caption into paragraphs
  let rich_text_caption = matched_interactive_block.attributes.rich_text_caption;
  let purified_rich_text_caption = DOMPurify.sanitize(rich_text_caption);
  let parsed_html_rich_text_caption = parseDocument(purified_rich_text_caption);
  let only_p_tags_rich_text_caption = DomUtils.getElementsByTagName(
    "p",
    parsed_html_rich_text_caption,
    true // this is a boolean that determines recursion (or whether to include child elements)
  );
  let p_tags_text_rich_text_caption = only_p_tags_rich_text_caption.map(
    (p_tag) => DomUtils.textContent(p_tag)
  );

  let p_tags_text_rich_text_caption_cleaned = removeEmptyElements(p_tags_text_rich_text_caption);

  let interactive_block_content = {
    id: id,
    title: matched_interactive_block.attributes.title,
    type: matched_interactive_block.attributes.type,
    sounds: matched_interactive_block.attributes.sounds.data,
    images: matched_interactive_block.attributes.images.data,
    rich_text_caption: p_tags_text_rich_text_caption_cleaned,
  };

  return interactive_block_content;
}

export function filterParagraphData(chapter_data) {
  let purified_chapter_content = DOMPurify.sanitize(
    chapter_data.attributes.content
  );
  let parsed_html_chapter_content = parseDocument(purified_chapter_content);

  let only_p_tags = DomUtils.getElementsByTagName(
    "p",
    parsed_html_chapter_content,
    true // this is a boolean that determines recursion (or whether to include child elements)
  );

  let p_tags_text = only_p_tags.map((p_tag) => DomUtils.textContent(p_tag));

  // Write a funciton that removes elements from an array that are empty strings or only contain whitespace
  let p_tags_text_cleaned = removeEmptyElements(p_tags_text);

  // Categorize paragraphs as interactive or regular
  let categorized_paragraphs = p_tags_text_cleaned.map((paragraph) => {
    if (isInteractiveBlock(paragraph)) {
      let id = extractIdFromInteractiveBlock(paragraph);
      let content = extractInteractiveBlockContentbyId(id, chapter_data);
      return { type: "interactive_block", content: content };
    } else {
      return { type: "regular", content: paragraph };
    }
  });

  // console.log("categorized_paragraphs", categorized_paragraphs);
  return categorized_paragraphs;
}
