export {};

// WRITE
// const data = "I <3 JS!";
// await Bun.write("output.txt", data);

// READ
const file = await Bun.file("output.txt");
console.log(await file.text());
console.log(file.size, " bytes");
console.log(await file.stream());
console.log(await file.arrayBuffer());
