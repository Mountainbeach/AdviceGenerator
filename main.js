const advice_quote = document.querySelector(".advice-quote");
const advice_id = document.querySelector(".advice-id");


async function generateAdvice(){
    var response = await fetch("https://api.adviceslip.com/advice" , {cache: 'no-cache'} );
    var data = await response.json();
    console.log(data.slip.id);
    advice_id.innerHTML = data.slip.id;
    advice_quote.innerHTML = data.slip.advice;
    return
}

