const sentence = "hello there from lighthouse labs";

let ms = 1000;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    i === sentence.length - 1 ? console.log(sentence[i]) : process.stdout.write(sentence[i]);
  }, ms += 50);
}