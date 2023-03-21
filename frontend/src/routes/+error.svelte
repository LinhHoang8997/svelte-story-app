<script>
  import { page } from "$app/stores";
</script>

<h1>This is a custom error page</h1>
<h2>{$page.status}: {$page.error.message}</h2>
