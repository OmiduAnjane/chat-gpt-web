
const apiKey = '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';

async function generateText() {

  const prompt = 'Hello, my name is';

  const model = 'text-davinci-002';

  const url = 'https://api.openai.com/v1/engines/' + model + '/completions';

  const data = {

    prompt: prompt,

    max_tokens: 50,

    n: 1,

    stop: '\n'

  };

  const response = await fetch(url, {

    method: 'POST',

    headers: {

      'Content-Type': 'application/json',

      'Authorization': 'Bearer ' + apiKey

    },

    body: JSON.stringify(data)

  });

  const result = await response.json();

  const text = result.choices[0].text;

  const output = document.getElementById('output');

  output.innerHTML = text;

}

