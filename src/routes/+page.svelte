<script lang="ts">
    import { sendMessage, addMessageListener } from "$lib/websocket";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import LinkButton from "$lib/components/alfa/LinkButton.svelte";

    const lastMessage = writable<string>("No messages yet");

    onMount(() => {
        return addMessageListener((msg) => lastMessage.set(msg));
    });

    function testSend() {
        sendMessage("ping");
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
    documentation
</p>
<hr />
<button on:click={testSend}>Send Test Message</button>
<p>Last received message: {$lastMessage}</p>
<hr/>
<LinkButton page="api-ref" label="test api endpoints"/>
