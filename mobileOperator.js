function mobileOperator(input){
    const constractLenght = input[0];
    const contractType = input[1];
    const addInternet = input[2];
    const monthsCount = Number(input[3]);

    let total = 0;

    switch (addInternet){
        case "yes":
        if (constractLenght === "one"){
            switch(contractType) {
                case "Small": total = 9.98 + 5.5; break;
                case "Middle": total = 18.99 + 4.35; break;
                case "Large": total = 25.98 + 4.35; break;
                case "ExtraLarge": total = 35.99 + 3.85; break;                
            }
        } else {
            switch(contractType){
                case "Small": total = (8.58 + 5.5) * 0.9625; break;
                case "Middle": total = (17.09 + 4.35) * 0.9625; break;
                case "Large": total = (23.59 + 4.35) * 0.9625; break;
                case "ExtraLarge": total = (31.79 + 3.85) * 0.9625; break;                
            }
        } break;
        case "no":
            if (constractLenght === "one"){
                switch(contractType) {
                    case "Small": total = 9.98; break;
                    case "Middle": total = 18.99; break;
                    case "Large": total = 25.98; break;
                    case "ExtraLarge": total = 35.99; break;                
                }
            } else {
                switch(contractType){
                    case "Small": total = 8.58 * 0.9625; break;
                    case "Middle": total = 17.09 * 0.9625; break;
                    case "Large": total = 23.59 * 0.9625; break;
                    case "ExtraLarge": total = 31.79 * 0.9625; break;  
            }             
    
        }
    } const totalCost = total * monthsCount;
    console.log(`${totalCost.toFixed(2)} lv.`)
}
mobileOperator(["one",
"Small",
"yes",
"10"])



// Мобилен оператор предлага договори с различна месечна такса в зависимост от срока - 1 или 2 години. 
//  Да се напише програма, която изчислява дължимата сума, която трябва да се плати за определен брой месеци.
//          срок / тип               	Small	       Middle	        Large	    ExtraLarge
//          1 година(one)           	9.98 лв.    	18.99 лв.   	25.98 лв.   	35.99 лв.
//          2 години(two)	            8.58 лв.     	17.09 лв.   	23.59 лв.	    31.79 лв.
// Условия:
// •	при добавен мобилен интернет, към таксата за един месец се добавя:
// o	при такса по-малка или равна на 10.00 лв.  5.50 лв.
// o	при такса по-малка или равна на 30.00 лв.  4.35 лв.
// o	при такса по-голяма от 30.00 лв.  3.85 лв.
// •	ако договорът e за две години, общата сума се намалява с 3.75%
// Вход
// От конзолата се четат 3 реда:
// 1.	Срок на договор – текст – "one", или "two"
// 2.	Тип на договор – текст – "Small",  "Middle", "Large"или "ExtraLarge"
// 3.	Добавен мобилен интернет – текст – "yes" или "no"
// 4.	Брой месеци за плащане - цяло число в интервала [1 … 24]
// Изход
// На конзолата се отпечатва 1 ред:
// •	Цената, която заплаща клиентът, форматирана до втория знак след десетичната запетая, в следния формат:  "{цената} lv."

