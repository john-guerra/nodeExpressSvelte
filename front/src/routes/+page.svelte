<script>
  import { onMount } from "svelte";
  let data = [];

  onMount(async () => {
    console.log("fetching data...");
    const response = await fetch("/api/data");
    data = await response.json();
    console.log("data fetched:", data);
  });
</script>

<h1>Hello Express + Svelte</h1>


{#if data.length > 0}
  <h2>Data from Express API:</h2>
  <ul>
    {#each data as item}
      <li>{item.name} {item.email}</li>
    {/each}
  </ul>
{:else}
  <p>Loading data...</p>
{/if}
