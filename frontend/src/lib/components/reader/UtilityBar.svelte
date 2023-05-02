<script>
  let font_size_setting = "small";

  function setFontSize(size) {
    font_size_setting = size;
    console.log(font_size_setting);
  }
</script>

<div
  class="tab bg-gray-800 rounded-box bg-opacity-80 fixed bottom-0 w-full"
>
  <div class="tab"><b>FONT SIZE</b></div>
  <button
    class="tab tab-lifted text-primary"
    class:tab-active={font_size_setting == "small"}
    on:click={() => setFontSize("small")}>Small</button
  >
  <button
    class="tab tab-lifted text-primary"
    class:tab-active={font_size_setting == "medium"}
    on:click={() => setFontSize("medium")}>Medium</button
  >
  <button
    class="tab tab-lifted text-primary"
    class:tab-active={font_size_setting == "large"}
    on:click={() => setFontSize("large")}>Large</button
  >
</div>
