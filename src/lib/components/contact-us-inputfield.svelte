<script>
    export let title;
    export let isRequired = false;
    export let fieldType = "text";
    let email = "";
    let phone = "";
    let name = "";
      
    let emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    let phoneRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    let errors = {email: "",
                phone: "",
            };
  
    function validateEmail(){
      if(!emailRegex.test(email)){
        errors.email = "Please enter a valid email address - example@email.com";
      } else {
        errors.email = "";
      }
    }

    function validatePhone(){
      if(!phoneRegex.test(phone)){
        errors.phone = "Please enter a valid phone number - e.g., +1 800 123 1234";
      } else {
        errors.phone = "";
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
    {#if fieldType === "email"}
       <input id={title} class="contact-us-input" bind:value={email} on:blur={validateEmail} required={isRequired}/>
        <p class="error">{errors.email}</p>
    {:else if fieldType === "phone"}
        <input id={title} class="contact-us-input" bind:value={phone} on:blur={validatePhone} required={isRequired}/>
        <p class="error">{errors.phone}</p>
    {:else}
        <input id={title} class="contact-us-input" required={isRequired}/>
    {/if}
</div>