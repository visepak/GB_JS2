// let str = `One: 'Hi Mary.' Two: 'Oh, hi.'
// One: 'How are you doing?'
// Two: 'I'm doing alright. How about you?'
//     One: 'Not too bad. The weather is great isn't it?'
//     Two: 'Yes. It's absolutely beautiful today.'
// One: 'I wish it was like this more frequently.'
// Two: 'Me too.'
// One: 'So where are you going now?'
// Two: 'I'm going to meet a friend of mine at the department store.'
// One: 'Going to do a little shopping?'
// Two: 'Yeah, I have to buy some presents for my parents.'
// One: 'What's the occasion?'
//     Two: 'It's their anniversary.'
// One: 'That's great. Well, you better get going. You don't want to be late.'
// Two: 'I'll see you next time.'
// One: 'Sure. Bye.'`;
//
// let regexp1 = new RegExp(/(\s)'/g);
// let str1 = str.replace(regexp1, '$1"');
// console.log(str1);


// let regexp2 = new RegExp(/'(\s)/g);
// let str2 = str1.replace(regexp2, '"$1');
// console.log(str2);

let fiboMember = +prompt("введите номер члена");

let getFibo = n => {
    if(n < 3) {
        return 1;
    } else {
        return getFibo(n-1) + getFibo(n-2);
    }
}
console.log(getFibo(fiboMember));