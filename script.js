const OPENAI_API_KEY = "your api key";
const input = document.querySelector("input");
const submitButton = document.querySelector("#submit_button");

const getImages = async () => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': "application/json"  
        },
        body: JSON.stringify({
            "prompt": input.value,
            "n": 4,
            "size": "1024x1024"
        })
    };

    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', options);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

submitButton.addEventListener('click', getImages);
