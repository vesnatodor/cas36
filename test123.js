// let http = require("http");
// console.log(http);
// const path = require("path");
// const testPath ='C:\Users\HP\Desktop\vezba3323\cas36\text.txt';
// const baseName = path.basename (testPath);
// console.log(baseName);
// const extension =path.extname(testPath);
// console.log(extension);
// const location =path.dirname(testPath);
// console.log(location);
// const pathInfo = path.parse(testPath);
// console.log(pathInfo);
// console.log(pathInfo.ext);
// const os = require("os");
// console.log(os.platform());
// console.log(os.totalmem());
// console.log(os.freemem());
// 
// const fs = require ("fs");
// fs.readFile("text.txt","utf-8", (err, data)=>{
// if (err) {
//           throw err;
// }
// console.log('sadrzaj: ');
// console.log(data);

// }
// )
// const sadrzaj = "Neki novi sadržaj koji će da se upiše";
// const argument = process.argv[2];
// fs.writeFile("text1.txt", sadrzaj +argument, (err)=>{
//           if (err){
//                     throw err;
//           }
//           console.log('ispisan je novi sadrzaj');
// } );
const url = require("url");

const testUrl = new URL("http://127.0.0.1:5500/cas36/index.html?pretraga=marko&druga=markovic");

console.log(testUrl.host);
console.log(testUrl.hostname);
console.log(testUrl.port);
console.log(testUrl.href);
console.log(testUrl.pathname);
console.log(testUrl.search);
testUrl.searchParams.forEach((name, value) => {
    console.log(name);
    console.log(value);
});