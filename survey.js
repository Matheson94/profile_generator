const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name : ', (answer1) => {
  rl.question('Whats an activity you like doing : ', (answer2) => {
    rl.question('What do you listen to while coding :', (answer3) => {
      rl.question('Favorite meal? ', (answer4) => {
        rl.question('Favorite Sport?', (answer5) => {
          rl.question('Whats your superpower?', (answer6) => {
            console.log(
              `Hi, my name is ${answer1}! I love ${answer2}, while listening to ${answer3}! My favorite thing to eat is ${answer4},
                   my favorite sport is ${answer5}, and i have a superpower! It's ${answer6}!`
            );
            rl.close();
          });
        });
      });
    });
  });
});
