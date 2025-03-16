<script lang="ts">
  import { controlStore } from "$lib/stores/controls"; // Import the shared store

  export let id: string; // Unique ID for each knob or slider

  // Get the value from the store
  
  //old solution
  //$: value = $controlStore[id] ?? 64; // Default to 64 if undefined (?? to allow 0 as valid)

  //new
  let value: number; // Declare value before using it
  $: {
    if (!(id in $controlStore)) {
      $controlStore[id] = 64; // Ensure a default value is always set in the store
    }
    value = $controlStore[id]; // Now safely retrieve it
  }

  function calcKnobRotation(val: number) {
    const rotationAngle = val * 2 - 128;
    return `transform: rotate(${rotationAngle}deg);`;
  }
</script>

<div class="control knobBG">
  <img
    class="t_knob knob"
    draggable="false"
    alt="knob"
    src="/fe/dark/knob_fg.png"
    style={calcKnobRotation(value)}
    {id}
  />
</div>

<style>
  .knobBG {
    display: inline-block;
    margin: 4px;
    border: 1px solid #ccc;
    background-image: url("/fe/dark/knob_bg.png");
    background-size: 100px;
  }

  .knob {
    padding:0px;
    width:100px;
    height:100px;
  }
</style>
