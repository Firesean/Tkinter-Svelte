<script>
  import { page } from '$app/stores';
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  async function processData() {
    try {
      console.log($page)
      const data = { data: 'Hello from Svelte!' };
      const response = await fetch(`${$page.url.protocol}//${$page.url.hostname}:5000/process`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Error:', error);
    }
  }
</script>

<main>
  <button on:click={processData}>Process Data</button>
</main>

<style>
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
