function validateInput(marks){
  let isOk = true;
  marks.each(function(){
    if(isNaN($(this).val())){
      isOk = false;
    }
  });
  return isOk;
};

function averageCalc(marks){
  var sum = 0;
  var nbMarks = marks.length;
  marks.each(function(){
    sum += parseInt($(this).val());
  });
  return (sum/nbMarks).toFixed(2);
};

function displayAppreciation(average){
  var appreciation;
  if (average == 20) {
    appreciation = 'Excellent';
  } else if (average >= 16) {
    appreciation = 'Très bien';
  } else if (average >= 13){
    appreciation = 'Bien';
  } else if (average >= 10) {
    appreciation = 'Moyen';
  } else {
    appreciation = 'Mauvais';
  };
  $('#appreciation').html(appreciation);
  $('#moyenne').html(`Votre moyenne est : ${average}`);
};

$('button').click(function(){
  var marks = $('input');
  if (!validateInput(marks)){
    return false;
  };
  let average = averageCalc(marks);
  displayAppreciation(average);
});

// $(function(){
//   $('#moyenne').click(function(){
//     var note1 = $('#note1').val();
//     var note2 = $('#note2').val();
//     var note3 = $('#note3').val();
//     var note4 = $('#note4').val();
//     var note5 = $('#note5').val();
//
//     if(note1 == "" && note2 == "" && note3 == "" && note4 == "" && note5 == ""){
//       alert('Veuillez saisir vos notes');
//     }
//     else if(note1 == "" || note2 == "" || note3 == "" || note4 == "" || note5 == ""){
//       alert('Veuillez renseigner tous les champs');
//     }
//
//     if(isNaN(note1) ||isNaN(note2) ||isNaN(note3) ||isNaN(note4) ||isNaN(note5)){
//       alert('Les notes saisies doivent être des nombres');
//     }
//     else{
//       let pourcentage = ((parseInt(note1) + parseInt(note2) + parseInt(note3) + parseInt(note4) + parseInt(note5))/5);
//       if(pourcentage >= 0 && pourcentage < 10){
//         $('#resultat').val(pourcentage + ' En dessous de la moyenne');
//       }
//       if(pourcentage >= 10 && pourcentage < 13){
//         $('#resultat').val(pourcentage + ' Moyen');
//       }
//       if(pourcentage >= 13 && pourcentage < 16){
//         $('#resultat').val(pourcentage + ' Bien');
//       }
//       if(parseInt(pourcentage) >= 16 && parseInt(pourcentage) <= 20){
//         $('#resultat').val(pourcentage + ' Très bien');
//       }
//       if(parseInt(pourcentage) == 20){
//         $('#resultat').val(pourcentage + ' Excellent');
//       }
//     }
//
//   });
// });
