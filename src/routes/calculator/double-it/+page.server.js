export const actions = {
    default: async ({ request }) => {
        try {
            console.log("Request received");
            let { number } = await request.json();
            console.log("Received number: ", number);

            if (!number) {
                console.error("Invalid data: ", number);
                return JSON.stringify({ success: false });
            }

            const doubledNumber = number * 2;
            console.log("Doubled number: ", doubledNumber);
            return JSON.stringify({ success: true, doubledTo: doubledNumber });
        } catch (error) {
            console.error("Error handling request: ", error);
            return JSON.stringify({ success: false });
        }
    }
}