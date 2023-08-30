<script>
  import CalculatorButton from "./calculator-button.svelte";
  import DoubleItButton from "./double-it-button.svelte";
  let inputValue = "";
  const maxNumbers = 18;

  function handleInput(event){
    const newValue = event.target.value.toString();
    // console.log(inputValue);
    if (newValue.length >= maxNumbers){
        inputValue = newValue.substring(0, maxNumbers);
    }
  }

  async function handleDouble(event) {
    console.log("Attempting to post : " + inputValue);
    let data = { number: parseFloat(inputValue) };
    const response = await fetch('../calculator/double-it', {
        method: 'POST',
        headers: {
            // 'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        console.error("Error in response: ", response.statusText);
        return;
    }

    const responseData = await response.json();
    const dataArray = JSON.parse(responseData.data);
    const dataObject = JSON.parse(dataArray[0]);
    const result = dataObject;

    if (result && result.success) {
        console.log("Response from post : ", result.doubledTo);
        inputValue = result.doubledTo;
    } else {
        console.error("Error in response data: ", dataObject);
    }
};

  function handleButtonClick(event) {
    const value = event.detail;
    if (value === 'x2') {
        handleDouble(event);
    } else if (value === 'C') {
        inputValue = '';
    } else if (value === '←') {
        inputValue = inputValue.slice(0, -1);
    } else if (value === '=') {
        try {
            inputValue = eval(inputValue).toString();
        } catch (error) {
            inputValue = 'Error';
        }
    } else {
        inputValue += value;
    }
}
</script>

<div class='grid grid-cols-4 gap-2 w-screen'>
  <input class='w-full h-24 col-span-4 px-12 py-auto text-[4rem] border-2 border-black' 
  bind:value={inputValue} on:input={handleInput} 
  on:keydown={(event) => { if (event.key === 'Enter') handleButtonClick({ detail: '=' }) }}/>
    <CalculatorButton value="C" on:click={handleButtonClick} />
    <CalculatorButton value="←" on:click={handleButtonClick} />
    <CalculatorButton value="/" on:click={handleButtonClick} />
    <CalculatorButton value=7 on:click={handleButtonClick} />
    <CalculatorButton value=8 on:click={handleButtonClick} />
    <CalculatorButton value=9 on:click={handleButtonClick} />
    <CalculatorButton value="*" on:click={handleButtonClick} />
    <CalculatorButton value=4 on:click={handleButtonClick} />
    <CalculatorButton value=5 on:click={handleButtonClick} />
    <CalculatorButton value=6 on:click={handleButtonClick} />
    <CalculatorButton value="-" on:click={handleButtonClick} />
    <CalculatorButton value=1 on:click={handleButtonClick} />
    <CalculatorButton value=2 on:click={handleButtonClick} />
    <CalculatorButton value=3 on:click={handleButtonClick} />
    <CalculatorButton value="+" on:click={handleButtonClick} />
    <CalculatorButton value=0 on:click={handleButtonClick} />
    <CalculatorButton value="=" on:click={handleButtonClick} />
    <DoubleItButton on:click={handleButtonClick}/>
</div>