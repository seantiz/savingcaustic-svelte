<script lang="ts">
    import { sendMessage } from "$lib/websocket";

    export let data: string;
    export let label: string;
</script>

<button class="wsButton" on:click={() => sendMessage(data)}>
    {label}
</button>

<style>
    .wsButton {
        margin: 0.2rem;
        font-size: 1.2rem;
        font-family: Courier;
        text-transform: uppercase;
        padding:0.5rem;
        padding-top:0.8rem;
        background-color:#ccd;
        color:#c00;
    }
</style>
