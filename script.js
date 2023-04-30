const terminalText = document.querySelector(".terminal-text");
const terminalInput = document.querySelector(".terminal-input");

terminalInput.addEventListener('keypress', async (event) => {
  if (event.key !== 'Enter') return;

  var output = getMessage(terminalInput.value).messages

  if (output == undefined) output = "Questo comando non esiste!"
  terminalInput.value = null

  await sleep(500)

  output.map(async mess => {
    terminalText.innerHTML += "~ ❯ " + mess + "<br>"
    //await sleep(250) Perchè non funzioni?
  })
  //terminalText.innerHTML += terminalInput.value + "<br>"
})


let commands = [
  {
    cmd: "help",
    messages: ["<span class=\"cmd\">github</span> -> To get my github profile link", "<span class=\"cmd\">discord</span> -> To get my discord link"]
  },
  {
    cmd: "github",
    messages: ["<a href=\"https://github.com/EURedBoy\" target=\"_blank\">RedBoy's GitHub Page</a>"]
  }
]
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const getMessage = (cmd) => commands.filter(command => command.cmd === cmd)[0]
