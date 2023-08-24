export async function post(request) {
    const data = JSON.parse(request.body);
  
    console.log("Received Form Submission:");
    console.log(data);

    return {
        status: 200,
        body: {
            message: 'Form submission received!'
        }
    };
}