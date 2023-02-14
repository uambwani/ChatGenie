import { useState } from "react";
import send from "./assets/send.svg";
import bot from "./assets/bot.svg";
import user from "./assets/user.svg";
import "./App.css";
import Options from "./components/Options";
import { data } from "./dataModels";

function App() {
  const [option, setOption] = useState({});
  const [prompt, setPrompt] = useState("");

  const selectOption = (option) => {
    setOption(option);
  };

  // DOM manipulation

  const form = document.getElementsByClassName("inputForm")[0];
  console.log(form);

  // const chatContainer = document.querySelector("#chat_container");
  const chatContainer = document.getElementsByClassName("chat_container")[0];

  let loadInterval;

  function loader(element) {
    element.textContent = "";

    loadInterval = setInterval(() => {
      element.textContent += ".";

      if (element.textContent === "....") {
        element.textContent = "";
      }
    }, 333);
  }

  function typeText(element, text) {
    let index = 0;

    let interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  }

  function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
  }

  function chatStripe(isAi, value, uniqueId) {
    return `
        <div class="wrapper ${isAi && "ai"}">
            <div class="chat">
                <div class="profile">
                    <img 
                      src=${isAi ? bot : user} 
                      alt="${isAi ? "bot" : "user"}" 
                    />
                </div>
                <div class="message" id=${uniqueId}>${value}</div>
            </div>
        </div>
    `;
  }

  console.log(option);

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    //user's chat stripe
    chatContainer.innerHTML += chatStripe(false, prompt);

    // form.reset();
    e.target.reset();

    //bot's chat stripe
    const uniqueId = generateUniqueId();
    chatContainer.innerHTML += chatStripe(true, "", uniqueId);

    chatContainer.scrollTop = chatContainer.scrollHeight;

    const messageDiv = document.getElementById(uniqueId);
    loader(messageDiv);

    //fetch data from server -- get bot's response
    const response = await fetch("http://localhost:5005", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    });

    clearInterval(loadInterval);

    messageDiv.innerHTML = "";

    if (response.ok) {
      const data = await response.json();
      const parsedData = data.bot.trim();

      typeText(messageDiv, parsedData);
    } else {
      const error = response.json();
      messageDiv.innerHTML = "Something went wrong..";
      alert(error);
    }
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <div className='app' id='app'>
      {Object.values(option).length !== 0 ? (
        <>
          <div id='chat_container' className='chat_container'></div>

          <form id='inputForm' className='inputForm' onSubmit={handleSubmit}>
            <input
              name='prompt'
              className='inputText'
              rows='1'
              cols='1'
              placeholder='Ask me a question...'
              onChange={handleChange}
              onKeyPress={handleKeypress}
            />
            <button className='inputButton' type='submit'>
              <img src={send} alt='send' />
            </button>
          </form>
        </>
      ) : (
        <Options data={data} selectOption={selectOption} />
      )}
    </div>
  );
}

export default App;
