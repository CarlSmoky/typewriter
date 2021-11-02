const sentence = "hello there from lighthouse labs";

let ms = 1000;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {

    if (i === sentence.length - 1) {
      console.log(sentence[i]);

    } else {
      process.stdout.write(sentence[i]);
    }
  }, ms += 50);
}

// setTimeout(() => {
//   // print the char here
// }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.