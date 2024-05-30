
/*// first attemp after learrning

// var input = "{[()]}"; // variable initialize kiya
function isBalanced(input){

var add = []; // arr add kiya hai

for (var i = 0; i < input.length; i++) {
  // ek loop bnaya input ke jismei woh alg alg krega
  //console.log(input[i]) // sb al alg  ek row me agaye
  var x = input[i];
  if (x == "{" || x == "[" || x == "(") {
    //agr
    add.push(x); // toh add ke ander  push krdo "add" inn teeno ko krdo ,oupt mei ajyngy 1 {, 2 { [, 3 { [ (
    // console.log(add)
  }

  // top condition  iss liye bnyngy agr match nh krte to return mei not balanced ana chaiye

  if (add.length == 0) {
    return "Not Balanced";
  }

  var check; // var declare kiya
  switch (
    x // switch ke andr x declare kiya  sare line wise ek row mei bracket agaye {[()]}
  ) {
    case ")": //case mei yeh ) closing bracket
      check = add.pop(); // check ke ander add declare kra =  add se remove kiya last bracket ko
      if (check == "{" || check == "[") return "Not Balanced";
      break;
      case "}":
          check = add.pop();
          if (check == "[" || check == "(") return "Not Balanced";
          break;
          case "]":
              check = add.pop();
              if (check == "{" || check == "(") return "Not Balanced";
              break;
  }
}
if(add.length){
return "Not Balanced"
}else{
    return "Balanced"

}
}

console.log(isBalanced("{[()]}"));
console.log(isBalanced("{[()]}}"));*/


// Second attempt after learning

// var input = "{[()]}"; // Ek variable 'input' ke sath initialize kiya
function isBalanced(input) {

    var add = []; // Ek array 'add' banaya jo add ka kaam karega

    for (var i = 0; i < input.length; i++) {
        // Loop banaya jo input string ke har character ko process karega
        var x = input[i]; // Har character ko 'x' mein store kiya

        if (x == "{" || x == "[" || x == "(") {
            // Agar character opening bracket hai, to usay add mein daal do
            add.push(x);
        }

        // Top-level condition:
        // Yahan check karte hain agar add khali hai jab closing bracket aati hai
        // Agar add khali hai, to brackets balanced nahi hain
        if (add.length == 0) {
            return "Not Balanced"; // add khali hai to "Not Balanced" return karo
        }

        var check; // Ek variable 'check' declare kiya jo add ke top element ko store karega

        switch (x) {
            case ")": // Agar character closing parenthesis hai
                check = add.pop(); // add se top element nikaal lo
                if (check == "{" || check == "[") return "Not Balanced"; // Agar match nahi karta to "Not Balanced" return karo
                break;
            case "}": // Agar character closing curly brace hai
                check = add.pop(); // add se top element nikaal lo
                if (check == "[" || check == "(") return "Not Balanced"; // Agar match nahi karta to "Not Balanced" return karo
                break;
            case "]": // Agar character closing square bracket hai
                check = add.pop(); // add se top element nikaal lo
                if (check == "{" || check == "(") return "Not Balanced"; // Agar match nahi karta to "Not Balanced" return karo
                break;
        }
    }

    // Loop ke baad check karte hain agar add khali hai
    // Agar add khali hai, to sab opening brackets match ho chuki hain
    if (add.length) {
        return "Not Balanced"; // Agar add mein kuch bacha hai, to "Not Balanced" return karo
    } else {
        return "Balanced"; // Agar add khali hai, to "Balanced" return karo
    }
}

// Test cases
console.log(isBalanced("{[()]}")); // Expected output: "Balanced"
console.log(isBalanced("{[()]}}")); // Expected output: "Not Balanced"
