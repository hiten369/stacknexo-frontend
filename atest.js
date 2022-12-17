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

// let s="i";

// console.log(str.indexOf(s));
// console.log(str.indexOf(s)+s.length);

// let obj=[{
//     a:1,
//     b:"a"
// },{
//     a:2,
//     b:"b"
// },{
//     a:3,
//     b:"c"
// },{
//     a:4,
//     b:"d"
// },];

// let findIndex=obj.findIndex(x=>x.a===4);
// console.log(findIndex);

// let h="hiten";
// h=h.slice(0,-1);
// h=h.slice(0,-1);
// h=h.slice(-1);
// console.log(h);
// let t=`The image, content, and videos fall under fair use. The <span id="l9lFZzdq6jxAslEdgKC9zHTCHwL4sXsP" class="gr0am0 gr0am0-engagem-ht">images</span> <span id="jzpYnjrl2D9X1u7PXHv4SZjZ2EOZnxR0" class="gr0am0 gr0am1-correct-ht"></span><span id="60n3VMUZXrvDR0Z7PRQb3ftOmWPMxv8C" class="gr0am0 gr0am0-clarity-ht">is given</span> proper
// credit, <span id="Mw7HcjdAr04hV1HRUTpNynSkP1Gtz60H" class="gr0am0 gr0am0-correct-ht"><span id="qqBUwDLGNZ3y5bk9VCblQb5ceiZok2n1" class="gr0am0 gr0am0-correct-ht">and ,</span></span> the videos are YouTube <span id="qySyO2RKwKVginqdcoSNHvkaCDxwuUxh" class="gr0am0 gr0am0-correct-ht">embxed</span>.`;
// let t1=`<span id="l9lFZzdq6jxAslEdgKC9zHTCHwL4sXsP" class="gr0am0 gr0am0-engagem-ht">`;
// let t2=`<span id="jzpYnjrl2D9X1u7PXHv4SZjZ2EOZnxR0" class="gr0am0 gr0am1-correct-ht">`;
// let t3=`<span id="60n3VMUZXrvDR0Z7PRQb3ftOmWPMxv8C" class="gr0am0 gr0am0-clarity-ht">`;
// let t4=`<span id="Mw7HcjdAr04hV1HRUTpNynSkP1Gtz60H" class="gr0am0 gr0am0-correct-ht">`;
// let t5=`<span id="qqBUwDLGNZ3y5bk9VCblQb5ceiZok2n1" class="gr0am0 gr0am0-correct-ht">`;
// let t6=`<span id="qySyO2RKwKVginqdcoSNHvkaCDxwuUxh" class="gr0am0 gr0am0-correct-ht">`;
// console.log(t.indexOf(t6));
// console.log(t.indexOf(t6)+t6.length);
// console.log(t.slice((t.indexOf(t6)+t6.length), ));

const getWordIndex = (n, string, needle) => {
    let counter = n;
    let nThIndex = 0;
    let flag=false;

    if (counter > 0) {
        if (counter === 1) {
            nThIndex = string.indexOf(needle);
        }
        else {
            while (counter--) {
                if(nThIndex===0 && !flag)
                {
                    nThIndex = string.indexOf(needle, nThIndex + 0);
                }
                else
                {
                    nThIndex = string.indexOf(needle, nThIndex + needle.length);
                }
                flag=true;
            };
        }
    }
    return nThIndex;
};

let str1 = `The image, content, and videos fall under fair use. The <span id="v0YRxeejnY7c5HYRbiWHALBYeR8ERc5x" class="gr0am0 gr0am0-engagem-ht"><b>images</b></span> <span id="N5gu0UFaM8cxKCHBTvNsaQkW0YfcpH7l" class="gr0am0 gr0am1-correct-ht"></span><span id="LRXZEOIAKJz5PyJCv9UlF5szBir2MK8c" class="gr0am0 gr0am0-clarity-ht"><b>is</b> <b>given</b></span> <b>proper</b>
<b>credit</b><b>,</b> <span id="sysAYH2PzND0xYGIm7RnsPU6hklzorkk" class="gr0am0 gr0am0-correct-ht"><span id="h86HEr54bl8kTWJrXc7JIm4P3btwUOXz" class="gr0am0 gr0am0-correct-ht"><b>and</b> ,</span></span> <b>the</b> <b>videos</b> <b>are</b> <b>YouTube</b> <span id="JOzOI9BaSwVYFP5g0NUiPTLCcNAHvbkS" class="gr0am0 gr0am0-correct-ht"><b>embxed</b></span>.`;
let wordIndex = getWordIndex(2, str1, "The");
// let str1="a hound is a the hello is hello world hello hello";
// let str1="a hello is hello world hello hello";
// let wordIndex = getWordIndex(2, str1, "hello");
console.log(wordIndex);

/* 

1. get the span tag's whole outertext.
2. get the initial and end index of tag length span.
3. if the word's index falls within it, than after the index of word if that span text contains that word then add it to index.

*/