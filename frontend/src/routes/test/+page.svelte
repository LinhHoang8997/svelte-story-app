<script>
  import split from "voca/split";
  import indexOf from "voca/index_of";
  import includes from "voca/includes";
  import trim from "voca/trim";

  let test_string = trim(
    "[[ character :popover: explanation about this character ]] and [[ character-b :popover: explanation about this character ]]"
  );

  let filter_reg_expression = /\[\[|\]\]/g;

  let result = split(test_string, filter_reg_expression);
  result.map((chunk) => {
    if (includes(chunk, ":popover:")) {
      let subject = trim(split(chunk, ":popover:")[0]);
      let popover_content = trim(split(chunk, ":popover:")[1]);
    } else {
    //   console.log('no popover content found');
    }
  });

  $: console.log(result);
</script>

<h1 class="text-primary text-xl">Testing String</h1>
<p class="text-primary text-sm">{test_string}</p>

<p class="text-primary text-lg">Result of trim:</p>
<p class="text-primary text-sm">{result}</p>
