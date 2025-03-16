<script lang="ts">
  import { controlStore } from "$lib/stores/controls"; // Import the shared store

  export let id: string; // Unique ID for each knob or slider
  export let steps: string | undefined = undefined; // steps is now a string by default

  let numSteps: number | 0; //just something..
  let value: number; // Declare value before using it
  $: {
    if (!(id in $controlStore)) {
      $controlStore[id] = 64; // Ensure a default value is always set in the store
    }
    value = $controlStore[id]; // Now safely retrieve it
  }

   // Convert string steps to numeric value and store in _steps
   $: {
    if (steps !== undefined) {
      numSteps = Number(steps); // Convert steps to number and store it privately
    }
  }

  function calcKnobRotation(val: number) {
  let rotation = val * 2 - 128; // Normalized rotation

  if (numSteps > 0) {
    // Quantize the rotation to steps
    const stepSize = 127 / (numSteps - 1); // Interval per step
    const quantizedVal = Math.round(val / stepSize) * stepSize; // Quantize the value based on step size
    rotation = quantizedVal * 2 - 128; // Map it back to a rotation angle
  }

  return `transform: rotate(${rotation}deg);`;
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
