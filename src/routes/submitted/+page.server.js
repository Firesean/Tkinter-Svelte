export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email');
        console.log("test" + email);
        return {success: true};
    }
}