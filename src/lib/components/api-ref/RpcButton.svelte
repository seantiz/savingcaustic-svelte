<script lang="ts">
    import { rpcPostUri } from "$lib/rpc";

    export let uri: string;
    export let label: string;
</script>

<button class="rpcButton" on:click={() => rpcPostUri(uri)}>
    {label}
</button>

<style>
    .rpcButton {
        margin: 0.2rem;
        font-size: 1.2rem;
        font-family: Courier;
        text-transform: uppercase;
        padding:0.5rem;
        padding-top:0.8rem;
        background-color:#ccd;
        color:#555;
    }
</style>
