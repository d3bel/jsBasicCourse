function easterBattle(input) {
    let index = 0;
    let playerOne = Number(input[index++]);
    let playerTwo = Number(input[index++]);
    let command = input[index++];
    let isWinner = false;
        while(command !== "End of battle"){
            let currPosition = command;
            switch(currPosition){
                case "one": playerTwo--; break;
                case "two": playerOne--; break;
            } if(playerOne === 0){
                console.log(`Player one is out of eggs. Player two has ${playerTwo} eggs left.`);
                isWinner = true;
                break;
            } else if(playerTwo === 0){
                console.log(`Player two is out of eggs. Player one has ${playerOne} eggs left.`);
                isWinner = true;
                break;
            }
            command = input[index++];
        } if(!isWinner){
            console.log(`Player one has ${playerOne} eggs left.`);
            console.log(`Player two has ${playerTwo} eggs left.`);
        }
}
easterBattle(["5","4","one","two","one","two","two","End of battle"]);
easterBattle(["2","6","one","two","two"]);
easterBattle(["6","3","one","two","two","one","one"]);

// На Великден семейството на Деси се събира и тя решава да организира "битка" между
// великденски яйца.
// Правилата на "битката" са следните:
//  Участват двама играчи
//  Всеки от тях започва с определен брой яйца
//  При получаване на команда "one" -> първият играч печели => яйцата на втория
// намаляват с едно
//  При получаване на команда "two" -> вторият играч печели => яйцата на първия
// намаляват с едно
//  Играта приключва, ако някой от играчите остане без яйца или до получаване на команда
// "End of battle"
// Вход
// Първоначално се четат два реда:
// 1. Брой яйца, които има първият играч - цяло число в интервала [1 … 99]
// 2. Брой яйца, които има вторият играч - цяло число в интервала [1 … 99]
// След това до получаване на команда "End of battle" се четe многократно един ред:
// 3. Победител - текст - "one" или "two"
// Изход
// Ако първият играч остане без яйца:
//  "Player one is out of eggs. Player two has {брой останали яйца на втория играч} eggs left."
// Ако вторият играч остане без яйца:
//  "Player two is out of eggs. Player one has {брой останали яйца на първия играч} eggs left."
// При команда "End of battle" да се отпечатат два реда:
//  "Player one has {брой останали яйца на първия играч} eggs left."
//  "Player two has {брой останали яйца на втория играч} eggs left."