<script>
  import ContactUsInputfield from "./contact-us-inputfield.svelte";
  let name = '';
  let email = '';
  let phone = '';

  async function submitData(e) {
    e.preventDefault(); // to prevent the form from refreshing the page

    try {
      const response = await fetch('/submit', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone }) 
      });
      
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse.status); 
      } else {
        console.log('Response status is not OK');
      }
    } catch (err) {
      console.error('Fetch error: ', err);
    }
  }
</script>


<form action="?/submit" method="POST" class="pl-4 pr-4 md:pl-10 md:pr-10 mt-[2rem] md:mt-[5rem] min-w-[200px]" on:submit={submitData}>
  <h1 class="font-bold whitespace-nowrap">Contact Us</h1>
  <ContactUsInputfield bind:value={name} title="name" isRequired=true/>
  <ContactUsInputfield bind:value={email} title="email" isRequired=true fieldType="email"/>
  <ContactUsInputfield bind:value={phone} title="phone" isRequired=true fieldType="phone"/>

  <div class="text-right">
    <button class="bg-violet-600 text-white pl-4 pr-4 xs:pl-7 xs:pr-7 p-2 w-[10rem] xs:w-auto rounded-md mt-4 text-[1rem] md:text-lg" type="submit">Send Message</button>
  </div>
</form> 