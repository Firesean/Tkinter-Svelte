export const actions = {
    default: async ({ request }) => {
        console.log("Request received");
        console.log(request.body);
        let data;
        try {
            data = JSON.parse(request.body);
        } catch (error) {
            console.error("Error parsing JSON: ", error);
            return { success: false };
        }

        if (!data || !data.name || !data.email || !data.phone) {
            console.error("Invalid data: ", data);
            return { success: false };
        }

        const { name, email, phone } = data;
        console.log("Received data: ", name, email, phone);
        return { success: true };
    }
}