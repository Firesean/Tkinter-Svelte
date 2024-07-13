<script>
  async function processData() {
    try {
      const data = { data: 'Hello from Svelte!' };
      const response = await fetch('http://localhost:5000/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      console.log(result.message);
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
