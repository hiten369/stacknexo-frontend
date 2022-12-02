// var str = '<span id="123">Name</span>Message';
let str = 'hiten';
// let str = `The image, content, and videos fall under fair use. The images <span id="16MGqdf2bN16ogbyvqq4hoMpKHXmfKTP" class="gr0am0 gr0am1-correct-ht"></span><span id="nU2hfJiWJXS42fZOQFEDBny9gf7ARAR1" class="gr0am0 gr0a<b>is</b>-clarity-ht">is <b>credit</b>/span>
// proper credit, <span id="RG1t0VjwHn4u8DBrZHRYRZCFZAL7gvFB" class="gr0am0 gr0am0-correct-ht"><span id="hjfldWYG8XOEpWscDdAxO1bkxfvCi4pA" class="gr0am0 gr0am0-correct<b>the</b>">and ,</span></span> the videos are YouTube <span id="puBjMyhaMARJsYZ4yCLQLS17Wzw3wo9O" class="gr0am0 gr0am0-correct-ht"><span id="Q8nH4dlWJ7F01eYdXYrAxNSsQH6D4mYp" class="gr0am0 gr0am0-correct-ht">embxed</span></span>.`;

// var result = str.split(/<\/?span>/); // Split by span tags(opening and closing)
// result.shift(); // Remove first empty element
// console.log(result);
// document.write(result);

// console.log(str.startsWith("<span"));
// console.log(str.split("<span")[1].split("</span>")[0]);
// let nc = document.createElement('div');
// nc.setAttribute("id", "hit");
// nc.innerHTML=str;
// let a = document.getElementById("hit").getElementsByTagName("*");
// for(let i of a)
// {
//     console.log(i);
// }

// let replacement="images ";
// replacement=replacement.replace(/\u00A0/, " ");
// console.log(str.indexOf("ite"));
// console.log(str.indexOf(replacement));
// console.log(str.length-str.indexOf("ite")-1);
// let s = str.substring(str.indexOf("ite"), "ite".length+str.indexOf("ite"));
// console.log(s);

let s="i";

// console.log(str.indexOf(s));
// console.log(str.indexOf(s)+s.length);

let obj=[{
    a:1,
    b:"a"
},{
    a:2,
    b:"b"
},{
    a:3,
    b:"c"
},{
    a:4,
    b:"d"
},];

let findIndex=obj.findIndex(x=>x.a===4);
console.log(findIndex);

/* 

1. get the span tag's whole outertext.
2. get the initial and end index of tag length span.
3. if the word's index falls within it, than after the index of word if that span text contains that word then add it to index.

*/