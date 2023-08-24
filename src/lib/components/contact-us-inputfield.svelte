<script>
  export let title;
  export let isRequired = false;
  export let fieldType = "text";
  let value = "";

  let emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  let phoneRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  let errors = "";


  function validate(){
      if(fieldType === "email" && !emailRegex.test(value)){
          errors = "Please enter a valid email address - example@email.com";
      } else if (fieldType === "phone" && !phoneRegex.test(value)){
          errors = "Please enter a valid phone number - e.g., +1 800 123 1234";
      } else {
          errors = "";
      }
  }

  function toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
  }
</script>

<div class="pt-2 pb-2">
  <label for={title} class="text-sm font-semibold pt-2 pb-2">
      {toTitleCase(title)}{#if isRequired}<span class="isRequired">*</span>{/if}
  </label>
  <br>
  <input id={title} class="contact-us-input" bind:value={value} on:blur={validate} required={isRequired}/>
  <p class="error">{errors}</p>
</div>