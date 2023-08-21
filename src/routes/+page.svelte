<script>
  import BusinessInfo from "$lib/components/business-info.svelte";
  import ContactUs from "$lib/components/contact-us.svelte";

</script>

<!-- Screen < 600px Screen -->
<div class="grid grid-cols-1 md:grid md:grid-cols-2 h-screen">
<!-- 600px Screen -->
<!-- <div class="grid grid-cols-2 h-screen"> Screen > --> 
  <BusinessInfo />
  <ContactUs />
</div>