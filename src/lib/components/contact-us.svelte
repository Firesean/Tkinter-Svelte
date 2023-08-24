<script>
  import ContactUsInputfield from "./contact-us-inputfield.svelte";
  let name = '';
  let email = '';
  let phone = '';

  const submitForm = async () => {
      const res = await fetch('./submitted', { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({name, email, phone})
      });
      console.log(res);
      const data = await res.json();
      if(data.success) {
          console.log("Information Sent");
      } else {
          console.log('Failed to post data');
      }
  }
</script>


<form action="./submitted" method="POST" class="pl-4 pr-4 md:pl-10 md:pr-10 mt-[2rem] md:mt-[5rem] min-w-[200px]" on:submit={submitForm}>
  <h1 class="font-bold whitespace-nowrap">Contact Us</h1>
  <ContactUsInputfield bind:value={name} title="name" isRequired=true/>
  <ContactUsInputfield bind:value={email} title="email" isRequired=true fieldType="email"/>
  <ContactUsInputfield bind:value={phone} title="phone" isRequired=true fieldType="phone"/>
  <div class="text-right">
    <button class="bg-violet-600 text-white pl-4 pr-4 xs:pl-7 xs:pr-7 p-2 w-[10rem] xs:w-auto rounded-md mt-4 text-[1rem] md:text-lg" type="submit">Send Message</button>
  </div>
</form>