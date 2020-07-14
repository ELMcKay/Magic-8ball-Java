const userName = "Frances"

userName ?
console.log("Hello, " + userName + "!") :
console.log("Hello!")

const userQuestion = "Will I be happy?"

console.log(userName + ` asked: ${userQuestion}`);

randomNumber = Math.floor(Math.random() * 8);

let eightBall = ""

switch (randomNumber) {
  case 0:
    eightBall = 'It is decidedly so';
    break;
  case 1:
    eightBall = 'Reply hazy try again';
    break;
  case 2:
    eightBall = 'Cannot predict now';
    break;
  case 3:
    eightBall = 'Do not count on it';
    break;
  case 4:
    eightBall = 'My sources say no';
    break;
  case 5:
    eightBall ='Outlook not so good';
    break;
  case 6:
    eightBall = 'Signs point to yes';
    break;
  case 7:
    eightBall = 'It is certain';
    break;
  default:
    console.log('Ugh oh!');
};

console.log("The eightball answered: " + eightBall) ;
