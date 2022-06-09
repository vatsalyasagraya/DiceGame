var num1=Math.floor(Math.random()*6)+1;

var randomdiceimage1="dice"+num1+".png";

var ran_image1="images/"+randomdiceimage1;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",ran_image1);

var num2=Math.floor(Math.random()*6)+1;

var randomdiceimage2="dice"+num2+".png";

var ran_image2="images/"+randomdiceimage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",ran_image2);

if(num1>num2){
    document.querySelector("h1").innerHTML="Player1 Won!!";
}
else if(num2>num1){
    document.querySelector("h1").innerHTML="Player2 Won!!";
}
else{
    document.querySelector("h1").innerHTML="It's a tie!!";
}