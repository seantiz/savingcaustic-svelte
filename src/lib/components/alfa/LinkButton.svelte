<script lang="ts">
    export let page: string;
    export let label: string;
</script>

<a class="linkButton" href={page}>{label}</a>

<style>
    .linkButton {
        display: inline-block;
        margin: 0.2rem;
        font-size: 1.5rem;
        font-family: Courier;
        text-transform: uppercase;
        padding:0.5rem;
        padding-top:0.8rem;
        background-color:#ccd;
        color:#C55;
    }
</style>
