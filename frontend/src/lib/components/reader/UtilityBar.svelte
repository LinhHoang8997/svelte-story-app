<script>
  let font_size_setting = "small";

  function setFontSize(size) {
    font_size_setting = size;
    console.log(font_size_setting);
  }
</script>

<div
  class="tab bg-gray-600 bg-opacity-75 fixed bottom-6 w-full flex flex-row align-middle"
>
  <button
    class="tab tab-lifted text-primary"
    class:tab-active={font_size_setting == "small"}
    on:click={() => setFontSize("small")}>Small</button>
  <button
    class="tab tab-lifted text-primary"
    class:tab-active={font_size_setting == "medium"}
    on:click={() =>setFontSize("medium")}>Medium</button
  >
  <button
    class="tab tab-lifted text-primary"
    class:tab-active={font_size_setting == "large"}
    on:click={() =>setFontSize("large")}>Large</button
  >
</div>
