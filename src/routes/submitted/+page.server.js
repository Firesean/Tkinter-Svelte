export const actions = {
    default: async ({ request }) => {
        let name, email, phone;
        console.log("Request received");
        const formData = await request.formData();
        try {
            name = formData.get("name");
            email = formData.get("email");
            phone = formData.get("phone");
            console.log(name, email, phone);
        } catch (error) {
            console.error("Error parsing through the form data : ", error);
            return { success: false };
        }

        if (!name || !email || !phone) {
            console.error("Invalid data: ", data);
            return { success: false};
        }
        // Can Save Data to a DB here
        return { success: true}; // , data : {name, email, phone} };
    }
}