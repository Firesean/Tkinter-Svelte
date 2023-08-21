<script>
  import ContactUsInputfield from "./contact-us-inputfield.svelte";
</script>


<form class="pl-4 pr-4 md:pl-10 md:pr-10 mt-[2rem] md:mt-[5rem] min-w-[200px]">
  <h1 class="font-bold whitespace-nowrap">Contact Us</h1>
  <ContactUsInputfield title="name" isRequired=true/>
  <ContactUsInputfield title="email" isRequired=true fieldType="email"/>
  <ContactUsInputfield title="phone" isRequired=true fieldType="phone"/>

  <div class="text-right">
    <button class="bg-violet-600 text-white pl-4 pr-4 xs:pl-7 xs:pr-7 p-2 w-[10rem] xs:w-auto rounded-md mt-4 text-[1rem] md:text-lg" type="submit">Send Message</button>
  </div>
</form>