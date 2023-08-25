<script>
  import ContactUsInputfield from "./contact-us-inputfield.svelte";
  let name = '';
  let email = '';
  let phone = '';

  const submitForm = async (event) => {
    event.preventDefault();
    console.log("Sending Data");
    console.log(name);
    console.log(email);
    console.log(phone);

    try {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);

      const response = await fetch('../submitted', { 
          method: 'POST',
          body: formData
      });
      console.log(response);
      if(response.ok) {
        const data = await response.json();
        if (data.success && data.redirectUrl) {
          window.location.href = data.redirectUrl;
        }
      } 
      else {
          console.log("Error: " + response.status);
      };
  } catch(e) {
      console.log('Fetch failed', e);
  }
};
</script>


<form action="../submitted" method="POST" class="pl-4 pr-4 md:pl-10 md:pr-10 mt-[2rem] md:mt-[5rem] min-w-[200px]" on:submit={submitForm}>
  <h1 class="font-bold whitespace-nowrap">Contact Us</h1>
  
  <ContactUsInputfield bind:value={name} title="name" isRequired=true/>
  <ContactUsInputfield bind:value={email} title="email" isRequired=true fieldType="email"/>
  <ContactUsInputfield bind:value={phone} title="phone" isRequired=true fieldType="phone"/>
  
  <div class="text-right">
    <button class="bg-violet-600 text-white pl-4 pr-4 xs:pl-7 xs:pr-7 p-2 w-[10rem] xs:w-auto rounded-md mt-4 text-[1rem] md:text-lg" type="submit">Send Message</button>
  </div>
</form>