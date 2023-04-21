<script>
    import { howler_queue } from '$lib/stores';

</script>


<div>
    <h3>Playing</h3>
    <p>Track Title</p>
    <div class="spinning_record"></div>
</div>

<style>
    .spinning_record {
        width: 100px;
        height: 100px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        animation: spin 2s linear infinite;
        position: absolute;
        float: left;
    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
    
</style>