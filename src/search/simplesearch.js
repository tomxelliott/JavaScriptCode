var text = "Hey Thomas how are Tiptop Tory you doing Thomas? Thomas";

var myName = "Thomas";

var hits =[];

for(var i = 0; i < text.length; i++) {
    if (text[i]=== "T") {
        for (var j = i; j < i + myName.length; j++) {
            hits.push(text[j]);
        }
    }       
}

if (hits.length===0) {
        console.log("your name wasn't found");
    }
    else {
        console.log(hits); 
    }
