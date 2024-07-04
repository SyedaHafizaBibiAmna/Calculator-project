#! /usr/bin/env node

import inquirer from "inquirer";

const answer:{
    "NO1": number,
    "NO2": number,
    "operators": string
}
 = await inquirer.prompt([{
    type : "number",
    name : "NO1",
    message: "write your NO1: "
},{
    type : "number",
    name : "NO2",
    message: "write your NO2: "
},
{
    type : "list",
    name : "operators",
    message: "select your operator ",
    choices: ["+","-","*","/"]
}

])

// RECONSTRUCTION OF FORMULA

const {NO1,NO2,operators} = answer

if (NO1 && NO2 && operators){
    let results : number= 0;

if (operators==="+"){
results= NO1 + NO2
   
}else if(operators ==="-"){
    results = NO1 -NO2
}
else if (operators === "*"){
    results = NO1 * NO2
}
else  if ( operators === "/"){
    results = NO1 /NO2
}
console.log("Your answer is:" + results)

}
else{
    console.log("please enter the valid operator")
}