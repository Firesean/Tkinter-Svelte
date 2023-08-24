<script>
    export let value;
    export let title;
    export let isRequired = false;
    export let fieldType = "text";
    
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const phoneRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    let error = "";
    
    const validate = () => {
        if(fieldType === "email" && !emailRegex.test(value)) {
            error = "Please enter a valid email address - example@email.com";
        } else if(fieldType === "phone" && !phoneRegex.test(value)) {
            error = "Please enter a valid phone number - e.g., +1 800 123 1234";
        } else {
            error = "";
        }
    };
    
    const toTitleCase = (str) => {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    </script>
    
    <div class="pt-2 pb-2">
        <label for={title} class="text-sm font-semibold pt-2 pb-2">
            {toTitleCase(title)}{#if isRequired}<span class="isRequired">*</span>{/if}
        </label>
        <br>
        <input id={title} 
            {fieldType} 
            class="contact-us-input" 
            bind:value={value} 
            on:blur={validate} 
            required={isRequired}
        />
        <p class="error">{error}</p>
    </div>