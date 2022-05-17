const variable = {
    pierre:1,
    feuille:2,
    ciseau:3,
}

function jouer(joueur1,joueur2){
    if (!Object.keys(variable).includes(joueur1) || !Object.keys(variable).includes(joueur2)) {
        return undefined;
    }
    if(variable[joueur1]===variable[joueur2]) return null;
    switch(variable[joueur1]){
        case variable.pierre:
            return variable[joueur2]===variable.feuille?false:true;
        case variable.feuille:
            return variable[joueur2]===variable.ciseau?false:true;
        case variable.ciseau:
            return variable[joueur2]===variable.pierre?false:true;
    }
}

function match(joueur1){
    let scorejoueur1=0;
    let scorejoueur2=0;
    while(scorejoueur2<5&&scorejoueur1<5){
        let joueur2=Object.keys(variable)[getRandomInt()]
        let joueur1Win=jouer(joueur1,joueur2);
        if(joueur1Win===undefined) {
            console.log("Un des input n'est pas valable!")
            return;
        }
        else if(joueur1Win===null) {
            console.log("Match Nul")
        }
        else if(joueur1Win) {
            scorejoueur1++;
            console.log("Joueur1 remporte le match")
        }
        else {
            scorejoueur2++
            console.log("Joueur1 a perdu le match")
        }
    }
    if(scorejoueur1-scorejoueur2<0){
        console.log('Joueur2 remporte le match')
    }
    else console.log('joueur1 gagne la partie')

}
match("pierre")
module.exports={jouer}