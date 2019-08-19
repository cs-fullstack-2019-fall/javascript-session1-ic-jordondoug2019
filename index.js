function main()
{
    let userInput= prompt(`Press 1,2,3. Press 'q' to quit`);
    while(userInput!=='q')
    {
        if(userInput==="q")
        {
            break;
        }
      if (userInput==="1")
      {
          alert("challenge goes here");
          console.log("a");
      }

      else if (userInput==="2")
      {
          alert("2");
          console.log ("b");
      }
      else if (userInput==="3")
        {
          alert("Hello World");
          console.log("c");
        }
        userInput= prompt(`Press 1,2,3. Press 'q' to quit`);
    }
}
// - If they press 1, ask them to press a, b, or c in a different function.
// If they press a, alert "A", if they press b, alert "B", if they press c, alert "C".

function alphabet()
{
   let userChoice= prompt("Press 1");
       if (userChoice === "1")
       {
           let userChoice2 = prompt("Press a,b, or c");
       if (userChoice2 === "a")
       {
           alert("A");
       }
       else if (userChoice2 === "b")
       {
           alert("B");
       }
       else if (userChoice2 === "c")
       {
           alert("C")
       }
   }
}
main();

alphabet();
