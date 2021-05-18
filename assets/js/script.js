/*=============== LANCER LE JEU ===================*/
let buttonEnter = $('#buttonEnter');

buttonEnter.click(function(){
    //Masque la 1ère partie
    $('#firstPage').removeClass('d-block');
    $('#firstPage').addClass('d-none');
    //Affiche la vidéo
    $('#videoPage').removeClass('d-none');
    $('#videoPage').addClass('d-block');
})


/*=============== PASSER LA VIDEO ===================*/
let buttonPasser = $('#buttonPasser');

buttonPasser.click(function(){
    //Affiche la vidéo
    $('#videoPage').removeClass('d-block');
    $('#videoPage').addClass('d-none');
    //Affiche la 2nde partie
    $('#secondPage').removeClass('d-none');
    $('#secondPage').addClass('d-block');
    //Change de Background
    $('.container-fluid').removeClass('bgpart1')
    $('.container-fluid').addClass('bgpart2');

    $('#modal').dialog({height:'auto', width:'auto'});
})


/*============== DECLARER LES VARIABLES =============*/
let shifumi_values = ['renard', 'poule', 'vipere'];
    let machineWin = 0;
    let userWin = 0;

/*============== DRAG&DROP =============*/
$('#renard, #poule, #vipere').draggable({
    revert: 'invalid',
});

let revert = $('#renard, #poule, #vipere').draggable('option', 'revert');


// $('#machineDepot img').hide();

/*============== FONCTION JEU =============*/
$('#choixUtilisateur').droppable({
    drop: function choix(event, ui) { 
        let machineChoice = shifumi_values[Math.floor(Math.random() * shifumi_values.length)];;
        
        // $('#machineDepot .fa').hide();
        // $('#userChoice .fa').hide();
        $('#renardUser3, #pouleUser3, #vipereUser3, #renardMachine3, #pouleMachine3, #vipereMachine3, #renardPoule4, #pouleVipere4, #vipereRenard4, #renardRenard4, #poulePoule4, #vipereVipere4').hide();

        setTimeout(thirdPart, 1000);

        switch (ui.draggable.attr('id')) { 
            case 'renard':
                if (machineChoice == "vipere"){
                    $('#result').text('Perdu');
                    // $('#machineResult').text(machineChoice);
                    $('#renardUser3').show();
                    $('#vipereMachine3').show();
                    $('#vipereRenard4').show();
                    machineWin++;
                } else if (machineChoice == "renard"){
                    $('#result').text('Egalite');
                    // $('#machineResult').text(machineChoice);
                    $('#renardUser3').show();
                    $('#renardMachine3').show();
                    $('#renardRenard4').show();
                } else if (machineChoice == "poule"){
                    $('#result').text('Gagne');
                    // $('#machineResult').text(machineChoice);
                    $('#renardUser3').show();
                    $('#pouleMachine3').show();
                    $('#renardPoule4').show();
                    userWin++;
                }
                break;
            case 'poule':
                if (machineChoice == "vipere"){
                    $('#result').text('Gagne');
                    // $('#machineResult').text(machineChoice);
                    $('#pouleUser3').show();
                    $('#vipereMachine3').show();
                    $('#pouleVipere4').show();
                    userWin++;
                } else if (machineChoice == "renard"){
                    $('#result').text('Perdu');
                    // $('#machineResult').text(machineChoice);
                    $('#pouleUser3').show();
                    $('#renardMachine3').show();
                    $('#renardPoule4').show();
                    machineWin++;
                } else if (machineChoice == "poule"){
                    $('#result').text('Egalite');
                    // $('#machineResult').text(machineChoice); 
                    $('#pouleUser3').show();
                    $('#pouleMachine3').show();
                    $('#poulePoule4').show();
                } break;
            case 'vipere':
                if (machineChoice == "vipere"){
                    $('#result').text('Egalite');
                    // $('#machineResult').text(machineChoice);
                    $('#vipereUser3').show();
                    $('#vipereMachine3').show();
                    $('#vipereVipere4').show();
                } else if (machineChoice == "renard"){
                    $('#result').text('Gagne');
                    // $('#machineResult').text(machineChoice);
                    $('#vipereUser3').show();
                    $('#renardMachine3').show();
                    $('#vipereRenard4').show();
                    userWin++;
                } else if (machineChoice == "poule"){
                    $('#result').text('Perdu');
                    // $('#machineResult').text(machineChoice);
                    $('#vipereUser3').show();
                    $('#pouleMachine3').show();
                    $('#pouleVipere4').show();
                    machineWin++;
                } 
                break; 
        }
        $('.machineCount').text('Perdues : ' + machineWin);
        $('.userCount').text('Gagnees : ' + userWin);

        //setTimeout(machineCount, 3000);
        setTimeout(fourthPart, 3000);
        setTimeout(reset,6500);
        
    }    
});

function reset(){
    $('#renard, #poule, #vipere').css({'top':'0px', 'left':'0px'});
    // $('#renardMachine').hide();
    // $('#pouleMachine').hide();
    // $('#vipereMachine').hide();
    $('#result').text('');
    //Masque la 2nde partie
    $('#fourthPage').removeClass('d-block');
    $('#fourthPage').addClass('d-none');
    // Affiche la 3ème partie
    $('#secondPage').removeClass('d-none');
    $('#secondPage').addClass('d-block');
    //Change de Background
    $('.container-fluid').removeClass('bgpart4')
    $('.container-fluid').addClass('bgpart2');
};
function thirdPart(){
    //Masque la 2nde partie
    $('#secondPage').removeClass('d-block');
    $('#secondPage').addClass('d-none');
    // Affiche la 3ème partie
    $('#thirdPage').removeClass('d-none');
    $('#thirdPage').addClass('d-block');
    //Change de Background
    $('.container-fluid').removeClass('bgpart2')
    $('.container-fluid').addClass('bgpart3');
}  
function fourthPart(){
    //Masque la 2nde partie
    $('#thirdPage').removeClass('d-block');
    $('#thirdPage').addClass('d-none');
    // Affiche la 3ème partie
    $('#fourthPage').removeClass('d-none');
    $('#fourthPage').addClass('d-block');
    //Change de Background
    $('.container-fluid').removeClass('bgpart3')
    $('.container-fluid').addClass('bgpart4');
}  

