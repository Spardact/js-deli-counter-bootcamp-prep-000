var katzDeli = [];
var giveANumber = 0

 function welcomeCustomer(katzDeli) {
   giveANumber++ //giveANumber=giveANumber+1
  katzDeli.push(`${giveANumber}`);
  return(`Welcome, You are number ${giveANumber}.`);
}


 function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}


 function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
  i+27
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}

 var line = [];

 function currentLine(katzDeli) {
  for (let i = 0; i < katzDeli.length; i++) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}