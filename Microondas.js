let Pipoca = 10;
let Macarrão = 8;
let Carne = 15;
let Feijao = 12;
let Brigadeiro = 8;

//  Função Microondas
function microondas(opcao, tempo) {
    //O switch vamos vericar as opções e o tempo
    switch(opcao) {
        case "Pipoca" :
            if (tempo < 10)                             // Limitando meu tempo menor do que 10 segundos; Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"
           return `Tempo insuficiente!`;
            else if (tempo >= 10 && tempo <= 19)        // Limitando tempo entre 10 e 19 segundos
            return `${opcao} pronto(a), bom apetite`;
            else if (tempo >= 20 && tempo <= 29)        // Limitando tempo ente 20 e 29 segundos; Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
            return `A comida(${opcao}) queimou!`
            else 
            return `Kabummm`                            // Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”
        break;
            case "Macarrao" :
                if (tempo < 8)                          // Limitando tempo menor do que 8 segundos; Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"
                return `Tempo insuficiente!`;
                else if (tempo >= 8 && tempo <= 15)     // Limitando tempo entre 8 e 15 segundos
                return `${opcao} pronto(a), bom apetite!`;
                else if (tempo >= 16 && tempo <= 23)    // Limitando tempo entre 16 e 23 segundos; Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
                return `A comida queimou!` ;
                else 
                return `Kabummm`                        // Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”
        break;
            case "Carne" :
                if (tempo < 15)                         // Limitando tempo menor do que 15 segundos; Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"
                return `Tempo insuficiente!`;
                else if (tempo >= 15 && tempo <= 29)    // Limitando tempo entre 15 e 29 segundos
                return `${opcao} pronto(a), bom apetite!`;
                else if (tempo >= 30 && tempo <= 44)    // Limitando tempo ente 30 e 44 segundos; Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
                return `A comida(${opcao}) queimou!`;
                else 
                return `Kabummm`                        // Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”
        break;
            case "Feijao" :
                if (tempo < 12)                         // Limitando tempo menor do que 12 segundos; Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"
                return `Tempo insuficiente!`;
                else if (tempo >= 12 && tempo <= 23)    // Limitando tempo entre 12 e 23 segundos
                return `${opcao} pronto(a), bom apetite!`;
                else if (tempo >= 24 && tempo <= 35)    // Limitando meu tempo ente 24 e 35 segundos; Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
                return `A comida(${opcao}) queimou!`;
                else 
                return `Kabummm`                        // Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”
        break;
            case "Brigadeiro" :
                if (tempo < 8)                          // Limitando tempo menor do que 10 segundos; Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"
                return `Tempo insuficiente!`;
                else if (tempo >= 8 && tempo <= 15)     // Limitando tempo entre 10 e 19 segundos
                return `${comidas} pronto(a), bom apetite!`;
                else if (tempo >= 16 && tempo <= 23)    // Limitando tempo ente 20 e 29 segundos; Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
                return `A comida(${comidas}) queimou!`;
                else 
                return `Kabummm`                        // Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”
        break;
            default:
                return `Prato inexistente!`            // Opções de comida que não estejam listados no switch; Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente"
        }
    } 
    // Opção de comida
    console.log((microondas("Miojo",5)));
    console.log((microondas("Pipoca", 10))); 
    console.log((microondas("Macarrao", 10)));
    console.log((microondas("Carne", 30)));
    console.log((microondas("Feijao", 30)));
    console.log((microondas("Brigadeiro", 40)));

