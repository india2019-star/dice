   var name1 = prompt("Enter Player 1 name");
       var name2 = prompt("Enter Player 2 name");
       document.querySelector("#player1").textContent = name1;
       document.querySelector("#player2").textContent = name2;
   function diceresult()
   {
       
        while(n1 === n2)
        {
             var n1 = Math.floor(Math.random() * 6) + 1;
             var n2 = Math.floor(Math.random() * 6) + 1;
        }
         var imageforplayer1 = "dice" + n1 + ".png";
         var imageforplayer2 = "dice" + n2 + ".png";
         document.querySelectorAll("img")[0].setAttribute("src",(imageforplayer1));
         document.querySelectorAll("img")[1].setAttribute("src",(imageforplayer2));
         if(n1 > n2)
         {
             document.querySelector("#result").textContent = name1 + " Wins.";
         }
         else
         {
             document.querySelector("#result").textContent = name2 + " Wins.";
         }
   }
    
   
