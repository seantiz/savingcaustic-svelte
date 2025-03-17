<script lang="ts">
    /*  Removed onMount() because that would only run once on each page load, and we're using adapter-static so the Sveltekit router is unlikely to ever unmount the page route.

    You already bound the button's click listener to call testSend() which is perfect.

    I moved everything from onMount() to testSend()
    */
    import { sendMessage, addMessageListener } from "$lib/websocket";
    import { writable } from "svelte/store";
    import LinkButton from "$lib/components/alfa/LinkButton.svelte";

    const lastMessage = writable<string>("No messages yet");

    function testSend() {
        sendMessage("ping");
        /* At the risk of stating something you may already know
        (stop me if ever you know this but it's just to save time getting into the habit)
        Just remember almost everything in JS is an object.

        Get used to the pattern "function returns object" () => {}

        Everything inside of {} is object's payload - here it's our lastMessage store's setter.
        p.s. in Svelte 4 stores are one way to observe events, in Svelte 5
        the trend is to use "signals" instead of stores */

        addMessageListener((msg) => {
            lastMessage.set(msg);
        });
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
</p>
<hr />
<button on:click={testSend}>Send Test Message</button>
<p>Last received message: {$lastMessage}</p>
<hr />
<LinkButton page="api-ref" label="test api endpoints" />
