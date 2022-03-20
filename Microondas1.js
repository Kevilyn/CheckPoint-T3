let Pipoca = 10;
let Macarrao = 8;
let Carne = 15;
let Feijao = 12;
let Brigadeiro = 8;

//  Função Microondas
function microondas(opcao, tempo) {
        //O switch vamos vericar as opções e o tempo
    switch(opcao) {
        case "Pipoca" :
            if(tempo >= Pipoca * 2 && tempo < Pipoca * 3){          // Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
                console.log(`A comida (${opcao}) queimou!`)
                return `A comida (${opcao}) queimou!`
            } else if (tempo < Pipoca){                             // Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"
                console.log("Tempo insuficiente!")
                return "Tempo insuficiente"
            }else if (tempo >= Pipoca * 3){                         // Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
                console.log("KABUM!")
                return "KABUM!"
            } else if (tempo = Pipoca){
                console.log(`Prato (${opcao}) pronto, bom apetite!!!`);
                return `Prato (${opcao}) pronto, bom apetite!!!`; 
             }

            break;
        case "Macarrao" :
            if(tempo >= Macarrao * 2 && tempo < Macarrao * 3){      // Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
                console.log (`A comida (${opcao}) queimou!`)
                return `A comida (${opcao}) queimou!`
            } else if (tempo < Macarrao){                          // Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"
                console.log("Tempo insuficiente!")
                return "Tempo insuficiente"
            }else if (tempo >= Macarrao * 3){                      // Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
                console.log("KABUM!")
                return "KABUM!"
            } else if (tempo = Macarrao){
                console.log(`Prato (${opcao}) pronto, bom apetite!!!`);
                return `Prato (${opcao}) pronto, bom apetite!!!`;
            }

            break;
        case "Carne" :
            if(tempo >= Carne * 2 && tempo < Carne * 3){            // Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
                console.log(`A comida (${opcao}) queimou!`)
                return `A comida (${opcao}) queimou!`
            } else if (tempo < Carne){                              // Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"
                console.log("Tempo insuficiente!")
                return "Tempo insuficiente"
            }else if (tempo >= Carne * 3){                          // Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
                console.log("KABUM!")
                return "KABUM!"
            } else if (tempo = Carne){
                console.log(`Prato (${opcao}) pronto, bom apetite!!!`);
                return `Prato (${opcao}) pronto, bom apetite!!!`;
            }
            break;
        case "Feijao" :
            if(tempo >= Feijao * 2 && tempo < Feijao * 3){          // Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
                console.log(`A comida (${opcao}) queimou!`)
                return `A comida (${opcao}) queimou!`
            } else if (tempo < Feijao){                             // Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"
                console.log("Tempo insuficiente!")
                return "Tempo insuficiente"
            }else if (tempo >= Feijao * 3){                         // Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
                console.log("KABUM!")
                return "KABUM!"
            } else if (tempo = Feijao){
                console.log(`Prato (${opcao}) pronto, bom apetite!!!`);
                return `Prato (${opcao}) pronto, bom apetite!!!`;
            }

            break;
        case "Brigadeiro" :
            if(tempo >= Brigadeiro * 2 && tempo < Brigadeiro * 3){  // Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
                console.log(`A comida (${opcao}) queimou!`)
                return `A comida (${opcao}) queimou!`
            } else if (tempo < Brigadeiro){                         // Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"
                console.log("Tempo insuficiente!")
                return "Tempo insuficiente"
            }else if (tempo >= Brigadeiro * 3){                     // Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
                console.log("KABUM!")
                return "KABUM!"
            } else if (tempo = Brigadeiro){
                console.log(`Prato (${opcao}) pronto, bom apetite!!!`);
                return `Prato (${opcao}) pronto, bom apetite!!!`;
            }
            
            break;
        default :
            console.log("Prato inexistente!");                     // Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente"
    }
}




    // Opção de comida
        microondas("Pipoca",10);
        microondas("Macarrao",7);
        microondas("Carne",45);
        microondas("Feijao",30);
        microondas("Brigadeiro",8);
        microondas("Miojo",5);
