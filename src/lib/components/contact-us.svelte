<script>
  import ContactUsInputfield from "./contact-us-inputfield.svelte";
  let name = '';
  let email = '';
  let phone = '';
  let failedSubmission = false;
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const phoneRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  let error = "";
  
  const validate = (fieldType) => {
    if((fieldType === "email" && !emailRegex.test(email)) || (fieldType === "phone" && !phoneRegex.test(phone))) {
        error = "Please enter the form properly";
        return false;
    } 
    else {
        error = "";
        return true;
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();
    console.log("Sending Data");
    console.log(name);
    console.log(email);
    console.log(phone);

    if(!validate("email") || !validate("phone")){
      return false;
    }
    
    try {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);

      const response = await fetch('../submitted', { 
          method: 'POST',
          body: formData
      });

      if(response.ok) {
          window.location.href = response.url + `?name="${name}"&email="${email}"&phone="${phone}"`;
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
    <p class="error">{error}</p>
  </div>
</form>