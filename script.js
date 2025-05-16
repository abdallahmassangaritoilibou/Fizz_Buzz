function fizzBuzz(n) {
    const answer = []; // je prepare un tableau vide pour stocker les résultats
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push("FizzBuzz");// Si le nombre est divisible par 3 et 5, j'ajoute FizzBuzz au tableau
        } else if (i % 3 === 0) {
            answer.push("Fizz");
        } else if (i % 5 === 0) {
            answer.push("Buzz");
        } else {
            answer.push(i);// Si le nombre n'est pas divisible par 3 ou 5, j'ajoute le nombre lui-même au tableau
        }
    }
    return answer;
}

console.log(fizzBuzz(5));


function twoSum(numbers, target) {
    const seen= {};// je crée un objet pour stocker les nombres déjà vus et leurs indices
   for (let i = 0; i < numbers.length; i++) {// je parcours le tableau des nombres je prends le nombre actuel et je calcule son complément par rapport à la cible
        const num = numbers[i];
        const complement = target - num;
        if (complement in seen) {
            return [seen[complement], i];
        }
        seen[num] = i; // je stocke le nombre actuel et son indice dans l'objet
    }
    return[];

}
const numbers = [2, 6, 8, 5];
const target = 9;
const result = twoSum(numbers, target);
console.log(result); 

function isvalid(str){
    const pairs = {// je crée un objet pour stocker les paires de parenthèses
        '(': ')',
        '{': '}',
        '[': ']'
    }

    const stack = [];// je crée un tableau pour stocker les parenthèses ouvertes
    for (let i = 0; i < str.length; i++) {// je parcours les caractères de la chaîne
        const char = str[i];
        if (pairs[char]) {
            stack.push(pairs[char]);
        } else if (stack.length === 0 || stack.pop() !== char) {
            return false;
        }
    }
    return stack.length === 0;
}

const str = "{}()";
const Result = isvalid(str);
console.log(Result);// true 