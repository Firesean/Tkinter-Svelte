<script>
    import {getContext} from "svelte";
    let addAlert = getContext('addAlert');

    async function test(){
        let response = await $addAlert({
            title: "How are you today?",
            message: "I hope you are doing well!",
            actions: [
                {label: "Bad", value : false},
                {label: "Good", classes: "primary", value:true}],
        });

        if (response === true){
            await $addAlert({
                title: "Good to hear!",
                message: "Have a nice day!",
            });
        }
        else {
            await $addAlert({
                title: "Oh no!",
                message: "I hope you feel better soon!",
            });
        }
    }
</script>

<button on:click={test}>Test It</button>