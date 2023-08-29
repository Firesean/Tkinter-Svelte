<script>
    import { onMount } from 'svelte';

    let name, email, phone;

    // This code will run only on the client side
    onMount(() => { // Can Pull from Database instead
        const urlParams = new URLSearchParams(window.location.search);
        name = urlParams.get('name').replace(/"/g, '');
        email = urlParams.get('email').replace(/"/g, '');
        phone = urlParams.get('phone').replace(/"/g, '');
    });
</script>

<div class="flex flex-col w-screen text-center bg-gray-100 min-w-[300px]">
    <div class="flex flex-col items-center pb-12 pt-4 pl-4 pr-4">
        <p class="text-[2rem] border-b-2 border-b-gray-400">Thank you {name}</p> 
        <p class="text-[1.5rem] mt-8">Will Be In Contact!</p>
    </div>
    <!-- Add top margin (mt-10 as example) -->
    <div class="flex flex-grow mt-[-1rem]">
        <div class="flex flex-col items-center border-r-2 border-r-gray-400 w-1/2">
            <svg class="mt-auto w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"> <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/> <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/> </svg>
            <p class="mt-4 mb-auto">{phone}</p>
        </div>
        <div class="flex flex-col items-center border-l-2 border-l-gray-400 w-1/2">
            <svg class="mt-auto w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"> <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/> </svg>
            <p class="mt-4 mb-auto">{email}</p>
        </div>
    </div>
</div>