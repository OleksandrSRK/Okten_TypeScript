let strNum_1: string | null = prompt("Enter first number:");
let strNum_2: string | null = prompt("Enter second number:");

if (strNum_1 != null && strNum_2 != null) {

    let num_1: number = +strNum_1;
    let num_2: number = +strNum_2;

    if (num_1 > num_2) {
        console.log(num_1);
    } else if (num_1 === num_2) {
        console.log("num_1 === num_2");
    } else if (num_1 < num_2) {
        console.log(num_2);
    }
}