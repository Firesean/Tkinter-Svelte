export const actions = {
    default: async ({ request }) => {
        const data = await request.json();
        const { name, email, phone } = data;
        console.log("Received data: ", name, email, phone);
        // Do something with the data here...
        return {success: true};
    }
}