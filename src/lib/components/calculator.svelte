<script>
  import CalculatorButton from "./calculator_button.svelte";
  import DoubleItButton from "./double-it-button.svelte";
  let inputValue = "";
  const maxNumbers = 10;

  function handleInput(event){
    const newValue = event.target.value;
    console.log(inputValue);
    if (newValue.length <= maxNumbers){
        inputValue = newValue;
    }
    else{
        return inputValue;
    }
  }

</script>
<div class='grid grid-cols-4 gap-2'>
    <input type="number" class='w-screen h-30 col-span-4 px-12 py-auto text-[4rem]' value={inputValue} on:input={handleInput}/>
    <CalculatorButton value=1/>
    <CalculatorButton value=2/>
    <CalculatorButton value=3/>
    <CalculatorButton value="+"/>
    <CalculatorButton value=4/>
    <CalculatorButton value=5/>
    <CalculatorButton value=6/>
    <CalculatorButton value="-"/>
    <CalculatorButton value=7/>
    <CalculatorButton value=8/>
    <CalculatorButton value=9/>
    <CalculatorButton value="*"/>
    <CalculatorButton value=0/>
    <DoubleItButton/>
    <CalculatorButton value="="/>
    <CalculatorButton value="/"/>

</div>

