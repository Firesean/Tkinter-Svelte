<script>
    import PreflectLogo from "$lib/components/preflect-logo.svelte";
  import SidenavBlock from "$lib/components/sidenav-block.svelte";
    import SideNavBlock from "$lib/components/sidenav-block.svelte";

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

<div class="sticky top-0 min-w-[65px] max-w-[65px] h-screen bg-white overflow-x-hidden">
    <div class="relative left-3">
        <PreflectLogo />
    </div>
    <ul>
        <li>
            <!-- Calculator -->
            <SideNavBlock 
            svgPathing="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"
            link="../calculator"
            rotation="0"/>
        </li>
        <li>
            <!-- Contact Us -->
            <SideNavBlock
            svgPathing="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            link="../"
            rotation="0"/>
        </li>
        <!-- <li>
            <SideNavBlock 
            svgPathing="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
            link="#"
            rotation="0"
            func={test}/>
        </li> -->
        <li>
            <SideNavBlock
            svgPathing="M0 0h24v24H0z M4 5h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1zM4 11h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1zM4 17h10c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z"
            link="../todo-list"
            rotation="0"
            scale=.75
            />
        </li>

        <li>
            <SideNavBlock 
            svgPathing="M 0 0 L 8 0 L 8 8 L 0 8 L 0 0 M 1 2 L 3 2 L 3 4 L 1 4 L 1 2 M 5 2 L 7 2 L 7 4 L 5 4 L 5 2 M 3 4 L 5 4 L 5 5 L 6 5 L 6 8 L 5 8 L 5 7 L 3 7 L 3 8 L 2 8 L 2 6 L 2 5 L 3 5 L 3 4"
            link="../minecraft"
            rotaiton="0"
            scale=2.1
            />
        </li>
    </ul>
</div>
