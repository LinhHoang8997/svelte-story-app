<script>
    import { parseISO, format } from 'date-fns';
    export let dateString;
    const date = parseISO(dateString);
</script>

<time  class='text-primary' datetime={dateString}>{format(date, 'LLLL d, yyyy')}</time>