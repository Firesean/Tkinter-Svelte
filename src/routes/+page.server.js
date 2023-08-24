let name = '';

const submitForm = async () => {
    // Mock of sending data to backend
    const res = await fetch('/api/post', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name})
    });
    const data = await res.json();

    // Do your API call or whatever to post the information 
    if(data.success) {
        console.log("Information Sent");
    } else {
        console.log('Failed to post data');
    }
}