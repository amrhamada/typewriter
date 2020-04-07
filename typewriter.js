const sentence = "hello there from lighthouse labs";

  
let timeout = 0;
for (const char of sentence+'\n') {
  setTimeout(() => {
  process.stdout.write(char)}, timeout);
  timeout += 100;
}

