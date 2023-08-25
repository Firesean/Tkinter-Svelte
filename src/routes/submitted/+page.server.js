export const actions = {
    default: async ({ request }) => {
        let name, email, phone;
        console.log("Request received");
        // console.log(request);
        const formData = await request.formData();
        console.log(formData);
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
            return { success: false, redirectUrl: "../" };
        }
        // const { name, email, phone } = data;
        // console.log("Received data: ", name, email, phone);
        return { success: true, redirectUrl: "../submitted"}; // , data : {name, email, phone} };
    }
}