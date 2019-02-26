var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length - 1} in line.`;
}

function nowServing(katzDeliLine) {
  
}

function currentLine(katzDeliLine) {
  if(!katzDeliLine.length) {
    return "The line is currently empty.";
  }
  let nums = "The line is currently: ";
  for(let i=0;i<katzDeliLine.length;i++){
    nums += `${i+1}. ${katzDeliLine[i] }`
  }
}