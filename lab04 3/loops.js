names = new Array();
var i =0;
do{
    next =window.prompt("Enter the Next Name","");
    if(next>" ")
         names[i]=next;
    i=i+1;
}while(i<10);
document.write("<h2>"+(names.length)+" names entered.</h2>");

document.write("<ol>");
  for(i=0;i<names.sort().length;i++)
  {
      document.write("<li>"+names[i]+"</li>");
  }
  document.write("</ol>");

  // the loop will still run 10 times if you keep cancelling, each time the loop runs it will ask for the name 
//  when cancel button is clicked over and over again it will continue to ask up to 10 times
//it will display a message saying 0 names

// the program will terminate 