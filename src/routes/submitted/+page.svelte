<script>
      const submit = async () => {
        const res = await fetch('/submitted', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name}),
        });
        console.log(res);
        const response = await res.json();
        console.log(response.status); // 'success'
      };
</script>

<div>
    <h1>Submitted</h1>
    <p>Thank you, will be in contact!</p>
</div>