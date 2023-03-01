<script>
    import { parseISO, format } from 'date-fns';
    export let dateString;
    const date = parseISO(dateString);
</script>

<time datetime={dateString}>{format(date, 'LLLL d, yyyy')}</time>