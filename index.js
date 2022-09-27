const userInfo = require("./information");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `I'm ${userInfo.myName} from ${userInfo.campus} campus.`,
    e: "Oo",
    T: " U",
  })
);
