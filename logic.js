function logicvariables() {
  
  //Variablen, die definieren, ob ein Fach als P2 gewählt werden kann
  /* Legende
  0: Mathe
  1: Informatik
  2: Chemie
  3: Biologie
  4: Physik
  5: Deutsch
  6: Englisch
  7: Französisch
  8: Latein
  9: Spanisch
  10: Kunst
  11: Musik
  12: Geschichte
  13: Politik Wirtschaft
  */
  sessionStorage.setItem('p2_waehlbar[0]', false)
  sessionStorage.setItem('p2_waehlbar[1]', false)
  sessionStorage.setItem('p2_waehlbar[2]', false)
  sessionStorage.setItem('p2_waehlbar[3]', false)
  sessionStorage.setItem('p2_waehlbar[4]', false)
  sessionStorage.setItem('p2_waehlbar[5]', false)
  sessionStorage.setItem('p2_waehlbar[6]', false)
  sessionStorage.setItem('p2_waehlbar[7]', false)
  sessionStorage.setItem('p2_waehlbar[8]', false)
  sessionStorage.setItem('p2_waehlbar[9]', false)
  sessionStorage.setItem('p2_waehlbar[10]', false)
  sessionStorage.setItem('p2_waehlbar[11]', false)
  sessionStorage.setItem('p2_waehlbar[12]', false)
  sessionStorage.setItem('p2_waehlbar[13]', false)
  
  //Variablen in Bezug auf die Kernfächer
  //Zählvariablen für Kernfächer und Nicht-Kernfächer
  sessionStorage.setItem('kernfaecher', 0)
  sessionStorage.setItem('nicht_kernfaecher', 0)
  //Variable, die beschreibt, ob Nicht-Kernfächer gewählt werden können
  sessionStorage.setItem('w_nk', true)
  
  //Variablen, die definieren, welche Bereiche noch wählbar sind
  /*
  0: A
  1: B
  2: C
  3: Sport
  */
  sessionStorage.setItem("w[0]", true)
  sessionStorage.setItem("w[1]", true)
  sessionStorage.setItem("w[2]", true)
  sessionStorage.setItem("w[3]", false)

  //Variablen zum Zählen der Bereiche A, B, C, der Fremdsprachen und der Naturwissenschaften
  sessionStorage.setItem('A_anzahl', 0)
  sessionStorage.setItem('B_anzahl', 0)
  sessionStorage.setItem('C_anzahl', 0)
  sessionStorage.setItem('counter_fs', 0)
  sessionStorage.setItem('counter_nw', 0)

  //Variablen, die definieren, ob ein Fach wählbar ist
  sessionStorage.setItem('mathe_w', true)
  sessionStorage.setItem('informatik_w', true)
  sessionStorage.setItem('chemie_w', true)
  sessionStorage.setItem('biologie_w', true)
  sessionStorage.setItem('physik_w', true)
  sessionStorage.setItem('deutsch_w', true)
  sessionStorage.setItem('englisch_w', true)
  sessionStorage.setItem('franzoesisch_w', true)
  sessionStorage.setItem('latein_w', true)
  sessionStorage.setItem('spanisch_w', true)
  sessionStorage.setItem('kunst_w', true)
  sessionStorage.setItem('musik_w', true)
  sessionStorage.setItem('geschichte_w', true)
  sessionStorage.setItem('religion_w', true)
  sessionStorage.setItem('erdkunde_w', true)
  sessionStorage.setItem('powi_w', true)
  sessionStorage.setItem('sport_w', true)

  //Variablen, die definieren, welche Grundkurse gewählt wurden
  //Legende für die Extras
  /*
  1: Mathe
  2: Chemie
  3: Englisch
  4: Physik
  5: Biologie
  6: Französisch
  7: Latein
  8: Musik
  9: Informatik
  10: Kunst
  11: Spanisch
  12: Deutsch
  13: Geschichte
  14: PoWi
  15: Religion
  16: Erdkunde
  17: DS
  */
  sessionStorage.setItem('extra1', false)  
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra5', false)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra8', false)
  sessionStorage.setItem('extra9', false)
  sessionStorage.setItem('extra10', false)
  sessionStorage.setItem('extra11', false)
  sessionStorage.setItem('extra12', false)
  sessionStorage.setItem('extra13', false)
  sessionStorage.setItem('extra14', false)
  sessionStorage.setItem('extra15', false)
  sessionStorage.setItem('extra16', false)
  sessionStorage.setItem('extra17', false)
  sessionStorage.setItem('extra18', false)
  sessionStorage.setItem('sport_gk', false)

  sessionStorage.setItem('wish_for_p4_p5', '')
}  
//Kernfächer werden um 1 hochgezählt
function kernfaecher_add(interaction) {
  interaction = parseInt(sessionStorage.getItem('kernfaecher'))
  interaction += 1
  sessionStorage.setItem('kernfaecher', interaction)
  console.log('Kernfächer: ' + sessionStorage.getItem('kernfaecher'))
}
//Nicht-Kernfächer werden um 1 hochgezählt
function nicht_kernfaecher_add(interaction) {
  interaction = parseInt(sessionStorage.getItem('nicht_kernfaecher'))
  interaction += 1
  sessionStorage.setItem('nicht_kernfaecher', interaction)
  console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))
}
function bereich_add(abc, interaction) {
//Fächer im Bereich A, B oder C werden um 1 hochgezählt
interaction = parseInt(sessionStorage.getItem(abc + '_anzahl'))
interaction += 1
sessionStorage.setItem((abc +'_anzahl'), interaction)
console.log( abc + ': ' + sessionStorage.getItem( abc + '_anzahl'))
}
//Das entsprechende Fach wird auf "nicht mehr wählbar gesetzt"
function waehlbarkeit_false(fach_w, interaction) {
  interaction = sessionStorage.getItem(fach_w)
  interaction = false
  sessionStorage.setItem(fach_w, interaction)
  console.log(fach_w + ': ' + sessionStorage.getItem(fach_w))
}
function logicsubjects(i) {
    //Hilfsvariablen
    var interaction = 0
    var help = 0
    //Überprüfung, welches Prüfungsfach gewählt wurde
    switch (sessionStorage.getItem('pfach' + i)) {
      //Wenn Mathe gewählt wurde
        case 'Mathe':
          if (sessionStorage.getItem('w[2]') === 'true' && sessionStorage.getItem('mathe_w') === 'true') {
            //Wenn Mathe als P1 gewählt wurde
            if (i === 1) {
              //Das Profil wird auf mathematisch-naturwissenschaftlich gesetzt
              sessionStorage.setItem('profil', 'mana')
              //Alle Naturwissenschaften werden auf "als P2 wählbar" gesetzt
              sessionStorage.setItem('p2_waehlbar[1]', true)
              sessionStorage.setItem('p2_waehlbar[2]', true)
              sessionStorage.setItem('p2_waehlbar[3]', true)
              sessionStorage.setItem('p2_waehlbar[4]', true)              
            } 
            kernfaecher_add(interaction)
            bereich_add('C', interaction)
            waehlbarkeit_false('mathe_w', interaction)
          } 
          break
        //Wenn Informatik gewählt wurde
        case 'Informatik':
          if (sessionStorage.getItem('w[2]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('informatik_w') == 'true') {
            //Wenn Informatik als P1 gewählt wurde
            if (i === 1) {
              //Das Profil wird auf mathematisch-naturwissenschaftlich gesetzt
              sessionStorage.setItem('profil', 'mana')
              //Physik, Biologie, Chemie und Mathe werden auf "als P2 wählbar" gesetzt
              sessionStorage.setItem('p2_waehlbar[0]', true)
              sessionStorage.setItem('p2_waehlbar[2]', true)
              sessionStorage.setItem('p2_waehlbar[3]', true)
              sessionStorage.setItem('p2_waehlbar[4]', true) 
            }

            nicht_kernfaecher_add(interaction)
            bereich_add('C', interaction)
            waehlbarkeit_false('informatik_w', interaction)
            //Informatik wird auf "nicht mehr wählbar gesetzt"
          }
          break
        //Wenn Chemie gewählt wurde
        case 'Chemie':
          if (sessionStorage.getItem('w[2]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('chemie_w') == 'true') {
            //Wenn Chemie als P1 gewählt wird
            if (i === 1) {
              //Profil wird auf mathematisch-naturwissenschaftlich gesetzt
              sessionStorage.setItem('profil', 'mana')
              //Mathe, Informatik, Biologie und Physik werden auf "als P2 wählbar" gesetzt
              sessionStorage.setItem('p2_waehlbar[0]', true)
              sessionStorage.setItem('p2_waehlbar[1]', true)
              sessionStorage.setItem('p2_waehlbar[3]', true)
              sessionStorage.setItem('p2_waehlbar[4]', true)
            } 

            nicht_kernfaecher_add(interaction)
            bereich_add('C', interaction)
            waehlbarkeit_false('chemie_w', interaction)
            //Chemie wird auf "nicht mehr wählbar" gesetzt
          }
          break
        //Wenn Biologie gewählt wird
        case 'Biologie':
          if (sessionStorage.getItem('w[2]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('biologie_w') == 'true') {
            //Wenn Biologie als P1 gewählt wird
            if (i === 1) {
              //Profil wird auf mathematisch-naturwissenschaftlich gesetzt
              sessionStorage.setItem('profil', 'mana')
              //Mathe, Informatik, Chemie und Physik werden auf "als P2 wählbar" gesetzt
              sessionStorage.setItem('p2_waehlbar[0]', true)
              sessionStorage.setItem('p2_waehlbar[1]', true)
              sessionStorage.setItem('p2_waehlbar[2]', true)
              sessionStorage.setItem('p2_waehlbar[4]', true)  
            }

            nicht_kernfaecher_add(interaction)
            bereich_add('C', interaction)
            waehlbarkeit_false('biologie_w', interaction)
            //Biologie wird auf "nicht mehr wählbar" gesetzt
          }
          break
        //Wenn Physik gewählt wird
        case 'Physik':
          if (sessionStorage.getItem('w[2]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('physik_w') == 'true') {
            //Wenn Physik als P1 gewählt wird
            if (i === 1) {
              //Profil wird auf mathematisch-naturwissenschaftlich gesetzt
              sessionStorage.setItem('profil', 'mana')
              //Mathe, Informatik, Chemie und Biologie werden auf "als P2 wählbar" gesetzt
              sessionStorage.setItem('p2_waehlbar[0]', true)
              sessionStorage.setItem('p2_waehlbar[1]', true)
              sessionStorage.setItem('p2_waehlbar[2]', true)
              sessionStorage.setItem('p2_waehlbar[3]', true)  
            }

            nicht_kernfaecher_add(interaction)
            bereich_add('C', interaction)
            waehlbarkeit_false('physik_w', interaction)
            //Physik wird auf "nicht mehr wählbar" gesetzt
          }      
          break
        //Wenn Deutsch gewählt wird
        case 'Deutsch':
          if (sessionStorage.getItem('w[0]') == 'true' && sessionStorage.getItem('deutsch_w') == 'true') {
            //Wenn Deutsch als P1 gewählt wird
            if (i === 1) {
              //Profil wird auf sprachlich gesetzt
              sessionStorage.setItem('profil', 'spra')
              //Alle Fremdsprachen (Latein, Spanisch, Französisch und Englisch) werden auf "als P2 wählbar" gesetzt
              sessionStorage.setItem('p2_waehlbar[6]', true)
              sessionStorage.setItem('p2_waehlbar[7]', true)
              sessionStorage.setItem('p2_waehlbar[8]', true)
              sessionStorage.setItem('p2_waehlbar[9]', true)
            }
            kernfaecher_add(interaction)
            bereich_add('A', interaction)
            waehlbarkeit_false('deutsch_w', interaction)
            //Deutsch wird auf "nicht mehr wählbar" gesetzt
          }
          break
        //Wenn Englisch gewählt wird
        case 'Englisch':
          if (sessionStorage.getItem('w[0]') == 'true' && sessionStorage.getItem('englisch_w') == 'true') {
            //Wenn Englisch als P1 gewählt wird
            if (i === 1) {
              //Profil wird auf sprachlich gesetzt
              sessionStorage.setItem('profil', 'spra')
              //Deutsch, Französisch, Latein, Spanisch werden aus "als P2 wählbar gesetzt"
              sessionStorage.setItem('p2_waehlbar[5]', true)
              sessionStorage.setItem('p2_waehlbar[7]', true)
              sessionStorage.setItem('p2_waehlbar[8]', true)
              sessionStorage.setItem('p2_waehlbar[9]', true)

              kernfaecher_add(interaction)
            }
          //Wenn Englisch nicht als P1 gewählt wurde
          if (i != 1) {
            //Hilfsvariable help2 wird definiert, welche zeigt, ob bereits eine Fremdsprache gewählt wurde
            var help2 = false
            //Wenn in P1-P5 eine Fremdsprache vorliegt, wird die Hilfsvariable auf false gesetzt
            for(let k = 1; k < i && help2 == false; k++) {
              if (sessionStorage.getItem('pfach' + k) != 'Latein' && sessionStorage.getItem('pfach' + k) != 'Spanisch' && sessionStorage.getItem('pfach' + k) != 'Französisch') {
                help2 = false
              } else {
                //Wenn keine Fremdsprache drinnen ist, wird help2 auf true gesetzt
                help2 = true
              }
            }
            //Wenn eine Fremdsprache bisher gewählt wurde, werden Nicht-Kernfächer um 1 erhöht
            if (help2 == true) {
              nicht_kernfaecher_add(interaction)
            } else {
              //Wenn keine Fremdsprachen gewählt wurden, werden die Kernfächer um 1 erhöht 
              kernfaecher_add(interaction)
            }
          }  
          // Anzahl der Fächer im Bereich A wird um 1 hochgezählt
          bereich_add('A', interaction)

          //Englisch wird auf "nicht mehr wählbar" gesetzt
          waehlbarkeit_false('englisch_w', interaction)
          }
          break 
        //Wenn Französisch gewählt wurde     
        case 'Französisch':
          if (sessionStorage.getItem('w[0]') == 'true' && sessionStorage.getItem('franzoesisch_w') == 'true') {
            //Wenn Französisch als P1 gewählt wurde
            if (i === 1) {
              //Profil wird auf sprachlich gesetzt
              sessionStorage.setItem('profil', 'spra')
              //Deutsch, Englisch, Latein und Spanisch werden auf "als P2 wählbar" gesetzt
              sessionStorage.setItem('p2_waehlbar[5]', true)
              sessionStorage.setItem('p2_waehlbar[6]', true)
              sessionStorage.setItem('p2_waehlbar[8]', true)
              sessionStorage.setItem('p2_waehlbar[9]', true)
              kernfaecher_add(interaction)
            }
          }
          //Wenn Französisch als P2-P5 gewählt wurde
          if (i > 1) {
            //Hilfsvariable help2 drückt aus, ob sich unter den gewählten Kernfächern bereits eine Fremdsprache befindet 
            var help2 = false
            //Alle Prüfungsfächer werden durchgegangen
            for(let k = 1; k < i && help2 == false; k++) {
              //Wenn keine Fremdsprache bereits gewählt wurde, wird help2 auf false gesetzt, ansonsten wird es auf true gesetzt und die Schleife abgebrochen 
              if (sessionStorage.getItem('pfach' + k) != 'Englisch' && sessionStorage.getItem('pfach' + k) != 'Spanisch' && sessionStorage.getItem('pfach' + k) != 'Latein') {
                help2 = false
              } else {
                help2 = true
              }
            }
            //Wenn help2 true ist
            if (help2 == true) {
              //Nicht-Kernfächer werden um 1 erhöht
              nicht_kernfaecher_add(interaction)
            } else {
              //Kernfächer werden um 1 erhöht
              kernfaecher_add(interaction)
            }
          } 
          //Anzahl der Fächer im Bereich A wird um 1 erhöht
          sessionStorage.setItem('latein_w', false)
          sessionStorage.setItem('spanisch_w', false)
          bereich_add('A', interaction)

          //Französisch wird auf "nicht mehr wählbar" gesetzt
          waehlbarkeit_false('franzoesisch_w', interaction)
          break  
        //Wenn Latein gewählt wurde
        case 'Latein':
          if (sessionStorage.getItem('w[0]') == 'true' && sessionStorage.getItem('latein_w') == 'true') {
            //Wenn Latein P1 ist
            if (i === 1) {
              //Profil wird auf sprachlich gesetzt
              sessionStorage.setItem('profil', 'spra')
              //Deutsch, Englisch, Französisch und Spanisch werden auf "als P2 wählbar" gesetzt
              sessionStorage.setItem('p2_waehlbar[5]', true)
              sessionStorage.setItem('p2_waehlbar[6]', true)
              sessionStorage.setItem('p2_waehlbar[7]', true)
              sessionStorage.setItem('p2_waehlbar[9]', true)

              //Kernfächer werden um 1 hochgezählt
              kernfaecher_add(interaction)
            }
            //Wenn Latein P2-P5 ist
            if (i > 1) {
              //Hilfsvariable help2 drückt aus, ob sich unter den gewählten Kernfächern bereits eine Fremdsprache befindet 
              var help2 = false
               //Alle Prüfungsfächer werden durchgegangen
              for(let k = 1; k < i && help2 == false; k++) {
                //Wenn keine Fremdsprache bereits gewählt wurde, wird help2 auf false gesetzt, ansonsten wird es auf true gesetzt und die Schleife abgebrochen 
                if (sessionStorage.getItem('pfach' + k) != 'Englisch' && sessionStorage.getItem('pfach' + k) != 'Spanisch' && sessionStorage.getItem('pfach' + k) != 'Französisch') {
                  help2 = false
                } else {
                  help2 = true
                }
              }
              //Wenn help2 true ist
              if (help2 === true) {
                //Nicht-Kernfächer werden um 1 erhöht
                nicht_kernfaecher_add(interaction)
              } else {              
                //Kernfächer werden um 1 erhöht
                kernfaecher_add(interaction)
              }
            }   
            sessionStorage.setItem('franzoesisch_w', false)
            sessionStorage.setItem('spanisch_w', false)
            //Anzahl der Fächer im Bereich A wird um 1 erhöht 
            bereich_add('A', interaction)
            
            //Latein wird auf "nicht mehr wählbar" gesetzt
            waehlbarkeit_false('latein_w', interaction)
          }
          break
        //Wenn Spanisch gewählt wurde
        case 'Spanisch':
          if (sessionStorage.getItem('w[0]') == 'true' && sessionStorage.getItem('spanisch_w') == 'true') {
            //Wenn Spanisch als P1 gewählt wurde
            if (i === 1) {
              //Profil wird auf sprachlich gesetzt
              sessionStorage.setItem('profil', 'spra')
              //Deutsch, Englisch, Latein und Französisch werden auf "als P2 wählbar" gesetzt
              sessionStorage.setItem('p2_waehlbar[5]', true)
              sessionStorage.setItem('p2_waehlbar[6]', true)
              sessionStorage.setItem('p2_waehlbar[7]', true)
              sessionStorage.setItem('p2_waehlbar[8]', true)
              //Kernfächer werden um 1 erhöht
              kernfaecher_add(interaction)
            }
            //Wenn Spanisch als P2-P5 gewählt wurde
            if (i > 1) {
              //Hilfsvariable help2 drückt aus, ob sich unter den gewählten Kernfächern bereits eine Fremdsprache befindet 
              var help2 = false
              //Alle Prüfungsfächer werden durchgegangen
              for(let k = 1; k < i && help2 == false; k++) {
                //Wenn keine Fremdsprache bereits gewählt wurde, wird help2 auf false gesetzt, ansonsten wird es auf true gesetzt und die Schleife abgebrochen 
                if (sessionStorage.getItem('pfach' + k) != 'Englisch' && sessionStorage.getItem('pfach' + k) != 'Latein' && sessionStorage.getItem('pfach' + k) != 'Französisch') {
                  help2 = false
                } else {
                  help2 = true
                }
              }
              //Wenn help2 true ist
              if (help2 == true) {
                //Nicht-Kernfächer werden um 1 erhöht
                nicht_kernfaecher_add(interaction)
              } else {
                //Kernfächer werden um 1 erhöht
                kernfaecher_add(interaction)
              }
            } 
            sessionStorage.setItem('latein_w', false)
            sessionStorage.setItem('franzoesisch_w', false)
            //Anzahl der Fächer im Bereich A wird um 1 erhöht 
            bereich_add('A', interaction)
           
            //Spanisch wird auf "nicht mehr wählbar" gesetzt
            waehlbarkeit_false('spanisch_w', interaction)
          }
          break
        //Wenn Kunst gewählt wurde
        case 'Kunst':
          if (sessionStorage.getItem('w[0]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('kunst_w') == 'true') {
            //Wenn Kunst als P1 gewählt wurde
            if (i === 1) {
              //Profil wird auf musisch-künstlerisch gesetzt
              sessionStorage.setItem('profil', 'muku')
              //Mathe und Deutsch werden auf "als P2 wählbar" gesetzt
              sessionStorage.setItem('p2_waehlbar[0]', true)
              sessionStorage.setItem('p2_waehlbar[5]', true)
            }
            //Musik ist nicht mehr wählbar
            sessionStorage.setItem('musik_w', false)
            //Nicht-Kernfächer werden um 1 erhöht
            nicht_kernfaecher_add(interaction)

            //Anzahl der Fächer im Bereich A wird um 1 erhöht
            bereich_add('A', interaction)

            //Kunst wird auf "nicht mehr wählbar" gesetzt
            waehlbarkeit_false('kunst_w', interaction)
          }
          break
        //Wenn Musik gewählt wurde
        case 'Musik':
          if (sessionStorage.getItem('w[0]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('musik_w') == 'true') {
            //Wenn Musik als P1 gewählt wurde            
            if (i === 1) {
              //Profil wird auf musisch-künstlerisch gesetzt
              sessionStorage.setItem('profil', 'muku')
              //Mathe und Deutsch werden auf "als P2 wählbar" gesetzt
              sessionStorage.setItem('p2_waehlbar[0]', true)
              sessionStorage.setItem('p2_waehlbar[5]', true)
            }
            //Kunst ist nicht mehr wählbar
            sessionStorage.setItem('kunst_w', false)
            //Nicht-Kernfächer werden um 1 erhöht
            nicht_kernfaecher_add(interaction)

            //Anzahl der Fächer im Bereich A wird um 1 erhöht
            bereich_add('A', interaction)

            //Musik wird auf "nicht mehr wählbar" gesetzt
            waehlbarkeit_false('musik_w', interaction)
          }
          break
        //Wenn Geschichte gewählt wurde
        case 'Geschichte':
          if (sessionStorage.getItem('w[1]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('geschichte_w') == 'true') {
            //Wenn Geschichte als P1 gewählt wurde
            if (i === 1) {
              //Profil wird auf gesellschaftlich gesetzt
              sessionStorage.setItem('profil', 'gese')
              //jegliches Fach wird auf "als P2 wählbar" gesetzt
              for (var index = 0; index < 14; index++) {
                  sessionStorage.setItem('p2_waehlbar[' + index + ']', true)
              }
              //PoWi wird auf P3 gesetzt
              sessionStorage.setItem('pfach3', 'Politik Wirtschaft')
            }
            //Nicht-Kernfächer werden um 1 erhöht
            nicht_kernfaecher_add(interaction)

            //Anzahl der Fächer im Bereich B wird um 1 erhöht 
            bereich_add('B', interaction)

            //Geshcichte wird auf "nicht mehr wählbar" gesetzt
            waehlbarkeit_false('geschichte_w', interaction)
          }
          break
        //Wenn Religion gewählt wurde
        case 'Religion':
          if (sessionStorage.getItem('w[1]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('religion_w') == 'true') {
            //Nicht-Kernfächer werden um 1 erhöht
            nicht_kernfaecher_add(interaction)

            //Anzahl der Fächer im Bereich B wird um 1 erhöht 
            bereich_add('B', interaction)

            //Religion wird auf "nicht mehr wählbar" gesetzt
            waehlbarkeit_false('religion_w', interaction)
          }
          break
        //Wenn Erdkunde gewählt wurde 
        case 'Erdkunde':
          if (sessionStorage.getItem('w[1]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('erdkunde_w') == 'true') {  
            //Nicht-Kernfächer werden um 1 erhöht
            nicht_kernfaecher_add(interaction)

            //Anzahl der Fächer im Bereich B wird um 1 erhöht 
            bereich_add('B', interaction)

            //Erdkunde wird auf "nicht mehr wählbar" gesetzt
            waehlbarkeit_false('erdkunde_w', interaction)
          }
          break
        //Wenn Politik/Wirtschaft gewählt wurde
        case 'Politik Wirtschaft':
          if (sessionStorage.getItem('w[1]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('powi_w') == 'true') {
            //Nicht-Kernfächer werden um 1 erhöht
            nicht_kernfaecher_add(interaction)

            //Anzahl der Fächer im Bereich B wird um 1 erhöht 
            bereich_add('B', interaction)

            //PoWi wird auf "nicht mehr wählbar" gesetzt
            waehlbarkeit_false('powi_w', interaction)
          }
          break
        //Wenn Sport gewählt wurde
        case 'Sport':
          if (sessionStorage.getItem('w[3]') == 'true') {
            if (sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('sport_w') == true) {
              //Nicht-Kernfächer werden um 1 erhöht
              nicht_kernfaecher_add(interaction)
            }
          }
          break
    } 
  //Wenn 3 Nicht-Kernfächer gewählt wurden, können nur noch Kernfächer gewählt werden
  if (sessionStorage.getItem('nicht_kernfaecher') == 3) {
    sessionStorage.setItem('w_nk', false)
  }
  //Wenn alle Bereiche bis zu P4 (eingeschlossen) gewählt wurden, kann Sport als P5 gewählt werden
  if (sessionStorage.getItem('A_anzahl') != 0 && sessionStorage.getItem('B_anzahl') != 0 && sessionStorage.getItem('C_anzahl') != 0 && i == 4) {
    sessionStorage.setItem('w[3]', true)
  }
  //Wenn 3 Fächer aus Bereich A gewählt wurden, kann Bereich A nicht mehr gewählt werden
  if (parseInt(sessionStorage.getItem('A_anzahl')) == 3) {
    sessionStorage.setItem('w[0]', false)
    //Wenn 3 Fächer aus Bereich A gewählt wurden und 1 Fach aus Bereich B gewählt wurde, kann Bereich B ebenfalls nicht mehr gewählt werden
    if (parseInt(sessionStorage.getItem('B_anzahl')) == 1) {
      sessionStorage.setItem('w[1]', false)
    }
    //Wenn 3 Fächer aus Bereich A gewählt wurden und 1 Fach aus Bereich C gewählt wurde, kann Bereich C ebenfalls nicht mehr gewählt werden
    if (parseInt(sessionStorage.getItem('C_anzahl')) == 1) {
      sessionStorage.setItem('w[2]', false)
    }
  }
  //Wenn 3 Fächer aus Bereich B gewählt wurden, kann Bereich B nicht mehr gewählt werden
  if (parseInt(sessionStorage.getItem('B_anzahl')) == 3) {
    sessionStorage.setItem('w[1]', false)
    //Wenn 3 Fächer aus Bereich B gewählt wurden und 1 Fach aus Bereich A gewählt wurde, kann Bereich A ebenfalls nicht mehr gewählt werden
    if (parseInt(sessionStorage.getItem('A_anzahl')) == 1) {
      sessionStorage.setItem('w[0]', false)
    }
    //Wenn 3 Fächer aus Bereich B gewählt wurden und 1 Fach aus Bereich C gewählt wurde, kann Bereich C ebenfalls nicht mehr gewählt werden
    if (parseInt(sessionStorage.getItem('C_anzahl')) == 1) {
      sessionStorage.setItem('w[2]', false)
    }
  }
  //Wenn 3 Fächer aus Bereich C gewählt wurden, kann Bereich C nicht mehr gewählt werden
  if (parseInt(sessionStorage.getItem('C_anzahl')) == 3) {
    sessionStorage.setItem('w[2]', false)
    //Wenn 3 Fächer aus Bereich C gewählt wurden und 1 Fach aus Bereich A gewählt wurde, kann Bereich A ebenfalls nicht mehr gewählt werden
    if (parseInt(sessionStorage.getItem('A_anzahl')) == 1) {
      sessionStorage.setItem('w[0]', false)
    }
    //Wenn 3 Fächer aus Bereich C gewählt wurden und 1 Fach aus Bereich B gewählt wurde, kann Bereich B ebenfalls nicht mehr gewählt werden
    if (parseInt(sessionStorage.getItem('B_anzahl')) == 1) {
      sessionStorage.setItem('w[1]', false)
    }
  }
  //Wenn 2 Fächer aus Bereich A und 2 Fächer aus Bereich B gewählt wurden, kann nur noch Bereich C gewählt werden
  if (parseInt(sessionStorage.getItem('A_anzahl')) == 2 && parseInt(sessionStorage.getItem('B_anzahl')) == 2){
    sessionStorage.setItem('w[0]', false)
    sessionStorage.setItem('w[1]', false)
    sessionStorage.setItem('w[2]', true)
    //sessionStorage.setItem('w_nk', true)
  }
  //Wenn 2 Fächer aus Bereich B und 2 Fächer aus Bereich C gewählt wurden, kann nur noch Bereich A gewählt werden
  if (parseInt(sessionStorage.getItem('B_anzahl')) == 2 && parseInt(sessionStorage.getItem('C_anzahl')) == 2){
    sessionStorage.setItem('w[1]', false)
    sessionStorage.setItem('w[2]', false)
    sessionStorage.setItem('w[0]', true)
    sessionStorage.setItem('w_nk', true)
  }
  //Wenn 2 Fächer aus Bereich A und 2 Fächer aus Bereich C gewählt wurden, kann nur noch Bereich B gewählt werden
  if (parseInt(sessionStorage.getItem('A_anzahl')) == 2 && parseInt(sessionStorage.getItem('C_anzahl')) == 2){
    sessionStorage.setItem('w[0]', false)
    sessionStorage.setItem('w[2]', false)
    sessionStorage.setItem('w[1]', true)
    sessionStorage.setItem('w_nk', true)
    sessionStorage.setItem('geschichte_w', true)
  }
  //Wenn 2 Fächer aus Bereich C und 1 Fach aus Bereich A gewählt wurde und unter diesen Fächern 1 Kernfach ist, können keine Naturwissenschaften mehr gewählt werden
  if (parseInt(sessionStorage.getItem('C_anzahl')) == 2 && parseInt(sessionStorage.getItem('A_anzahl')) == 1 && parseInt(sessionStorage.getItem('kernfaecher')) == 1) {
    sessionStorage.setItem('chemie_w', false)
    sessionStorage.setItem('biologie_w', false)
    sessionStorage.setItem('physik_w', false)
    sessionStorage.setItem('informatik_w', false)
  }
  //Wenn 2 Fächer aus Bereich A und 1 Fach aus Bereich C gewählt wurde und unter diesen Fächern 1 Kernfach ist, können keine Fächer aus Bereich A mehr gewählt werden, die keine Kernfächer sind/sein können
  if (parseInt(sessionStorage.getItem('A_anzahl')) == 2 && parseInt(sessionStorage.getItem('C_anzahl')) == 1 && parseInt(sessionStorage.getItem('kernfaecher')) == 1) {
    sessionStorage.setItem('musik_w', false)
    sessionStorage.setItem('kunst_w', false)
    sessionStorage.setItem('chemie_w', false)
    sessionStorage.setItem('biologie_w', false)
    sessionStorage.setItem('physik_w', false)
    sessionStorage.setItem('informatik_w', false)
    sessionStorage.setItem('w[1]', true)
  }
  //Schleife, die hochzählt, wie viele Naturwissenschaften bereits gewählt wurden
  var nw_for_mu_and_ku = 0
  for (let index = 1; index < 6; index++) {
    if (sessionStorage.getItem('pfach' + index) == 'Biologie' || sessionStorage.getItem('pfach' + index) == 'Physik' || sessionStorage.getItem('pfach' + index) == 'Informatik' || sessionStorage.getItem('pfach' + index) == 'Chemie') {
      nw_for_mu_and_ku++
    }
  }
  //Wenn 2 oder mehr Naturwissenschaften gewählt wurden, sind keine Naturwissenschaften und Musik und Kunst mehr wählbar
  if (nw_for_mu_and_ku >= 2) {
    sessionStorage.setItem('musik_w', false)
    sessionStorage.setItem('kunst_w', false)
    sessionStorage.setItem('biologie_w', false)
    sessionStorage.setItem('physik_w', false)
    sessionStorage.setItem('informatik_w', false)
    sessionStorage.setItem('chemie_w', false)
  }
}
//Funktion, welche prüft, welche Fächer in der nächsten Stufe gewählt werden können (die Stufe, welche überprüft werden muss, wird hier übergeben)
function proof_in_advance(pfach, i) {
  //all_subjects enthält alle Fächer in der Reihenfolge, in der sie auf der Webseite angezeigt werden
  var all_subjects = Array('', 'Mathe', 'Chemie', 'Englisch', 'Physik', 'Biologie', 'Franzoesisch', 'Latein', 'Musik', 'Informatik', 'Kunst', 'Spanisch', 'Deutsch', 'Geschichte', 'Politik Wirtschaft', 'Religion', 'Erdkunde', 'Sport')
  //Alle Fächer des Array werden überprüft
  for (let j = 0; j < 18; j++) {
    switch (all_subjects[j]) {
      //Mathe wird überprüft
      case 'Mathe':
        //Überprüfung, ob Mathe in der nächsten Stufe wählbar ist 
        proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[0]'), sessionStorage.getItem('mathe_w'))
        break;
      //Chemie wird überprüft
      case 'Chemie':
        //Überprüfung, ob Chemie in der nächsten Stufe wählbar ist (Abfrage für Nicht-Kernfächer)
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[2]'), sessionStorage.getItem('chemie_w'))
        break;
      //Englisch wird überprüft
      case 'Englisch':
        var help_fs = false
        for (let index = 1; index < 6; index++) {
          if (sessionStorage.getItem('pfach' + index) == 'Latein' || sessionStorage.getItem('pfach' + index) == 'Spanisch' || sessionStorage.getItem('pfach' + index) == 'Französisch') {
            help_fs = true
          }
        } 
        if (help_fs == true) {
          //Überprüfung, ob Englisch in der nächsten Stufe wählbar ist (Abfrage für Nicht-Kernfächer)
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[6]'), sessionStorage.getItem('englisch_w'))
        } else {
          //Überprüfung, ob Englisch in der nächsten Stufe wählbar ist
          proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[6]'), sessionStorage.getItem('englisch_w'))
        }
      break;
      //Physik wird überprüft
      case 'Physik':
        //Überprüfung, ob Physik in der nächsten Stufe wählbar ist (Abfrage für Nicht-Kernfächer)
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[4]'), sessionStorage.getItem('physik_w'))
        break;
      //Biologie wird überprüft
      case 'Biologie':
        //Überprüfung, ob Biologie in der nächsten Stufe wählbar ist (Abfrage für Nicht-Kernfächer)
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[3]'), sessionStorage.getItem('biologie_w'))
         break;
      //Geschichte wird überprüft
      case 'Geschichte':
        //Überprüfung, ob Geschichte in der nächsten Stufe wählbar ist (Abfrage für Nicht-Kernfächer)
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[1]'), sessionStorage.getItem('p2_waehlbar[12]'), sessionStorage.getItem('geschichte_w'))
        break
      //Französisch wird überprüft
      case 'Franzoesisch':
        var help_fs = false
        for (let index = 1; index < 6; index++) {
          if (sessionStorage.getItem('pfach' + index) == 'Latein' || sessionStorage.getItem('pfach' + index) == 'Spanisch' || sessionStorage.getItem('pfach' + index) == 'Englisch') {
            help_fs = true
          }
        } 
        if (help_fs == true) {
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[7]'), sessionStorage.getItem('franzoesisch_w'))
        } else {
          proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[7]'), sessionStorage.getItem('franzoesisch_w'))
        }
        break;
      //Latein wird überprüft
      case 'Latein':
        var help_fs = false
        for (let index = 1; index < 6; index++) {
          if (sessionStorage.getItem('pfach' + index) == 'Französisch' || sessionStorage.getItem('pfach' + index) == 'Spanisch' || sessionStorage.getItem('pfach' + index) == 'Englisch') {
            help_fs = true
          }
        } 
        if (help_fs == true) {
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[8]'), sessionStorage.getItem('latein_w'))
        } else {
          proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[8]'), sessionStorage.getItem('latein_w'))
        }
        break;
      //Musik wird überprüft
      case 'Musik':
        //Überprüfung, ob Musik in der nächsten Stufe wählbar ist (Abfrage für Nicht-Kernfächer)
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[11]'), sessionStorage.getItem('musik_w'))
        break;
      //Informatik wird überprüft
      case 'Informatik':
        //Überprüfung, ob Informatik in der nächsten Stufe wählbar ist (Abfrage für Nicht-Kernfächer)
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[1]'), sessionStorage.getItem('informatik_w'))
        break;
      //Kunst wird überprüft
      case 'Kunst':
        //Überprüfung, ob Kunst in der nächsten Stufe wählbar ist (Abfrage für Nicht-Kernfächer)
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[10]'), sessionStorage.getItem('kunst_w'))
        break;
      //Politik/Wirtschaft wird überprüft
      case 'Politik Wirtschaft':
        //Überprüfung, ob Politik/Wirtschaft in der nächsten Stufe wählbar ist (Abfrage für Nicht-Kernfächer)
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[1]'), sessionStorage.getItem('p2_waehlbar[13]'), sessionStorage.getItem('powi_w'))
        if (sessionStorage.getItem('profil') == 'gese' && i === 3) {
          document.getElementById("pfach3.14.label").style.opacity = '1'
        }
        break;
      //Spanisch wird überprüft
      case 'Spanisch':
        var help_fs = false
        for (let index = 1; index < 6; index++) {
          if (sessionStorage.getItem('pfach' + index) == 'Französisch' || sessionStorage.getItem('pfach' + index) == 'Latein' || sessionStorage.getItem('pfach' + index) == 'Englisch') {
            help_fs = true
          }
        } 
        if (help_fs === true) {
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[9]'), sessionStorage.getItem('spanisch_w'))
        } else {
          proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[9]'), sessionStorage.getItem('spanisch_w'))
        }
        break;
      //Deutsch wird überprüft 
      case 'Deutsch':
        //Überprüfung, ob Deutsch in der nächsten Stufe wählbar ist
        proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[5]'), sessionStorage.getItem('deutsch_w'))
        break; 
      //Religion wird überprüft       
      case 'Religion':
        //Überprüfung, ob Politik/Wirtschaft in der nächsten Stufe wählbar ist (Abfrage für Nicht-Kernfächer)
        //Wenn Bereich B, Religion als Fach und Nicht-Kernfächer wählbar sind, wird die Anklickbarkeit und Sichtbarkeit des Buttons geändert
        if (sessionStorage.getItem('w[1]') === 'true' && sessionStorage.getItem('w_nk') === 'true' && sessionStorage.getItem('religion_w') === 'true') {
          //Wenn Religion P1, P2 oder P3 wäre
          if (i <= 3) {
            //Religion wird durchsichtiger
            document.getElementById(pfach + j + ".label").style.opacity = '0.5'
            //Der Knopf für Religion wird deaktiviert
            var a = toString(pfach + j)
            a = pfach + j
            document.getElementById(a).disabled = true
            break
          }
          //Religion bleibt sichtbar
          document.getElementById(pfach + j + ".label").style.opacity = '1'
        } else {
          //Religion wird durchsichtiger
          document.getElementById(pfach + j + ".label").style.opacity = '0.5'
          //Der Knopf für Religion wird deaktiviert
          var a = toString(pfach + j)
          a = pfach + j
          document.getElementById(a).disabled = true
        }
        break;
      //Erdkunde wird überprüft
      case 'Erdkunde':
        //Überprüfung, ob Politik/Wirtschaft in der nächsten Stufe wählbar ist (Abfrage für Nicht-Kernfächer)
        if (sessionStorage.getItem('w[1]') === 'true' && sessionStorage.getItem('w_nk') === 'true' && sessionStorage.getItem('erdkunde_w') === 'true') {
          //Wenn Erdkunde P1, P2 oder P3 wäre
          if (i <= 3) {
            //Erdkunde wird durchsichtiger
            document.getElementById(pfach + j + ".label").style.opacity = '0.5'
            //Der Knopf für Erdkunde wird deaktiviert
            var a = toString(pfach + j)
            a = pfach + j
            document.getElementById(a).disabled = true
            break
          }
          //Erdkunde wird durchsichtiger
          document.getElementById(pfach + j + ".label").style.opacity = '1'
        } else {
          document.getElementById(pfach + j + ".label").style.opacity = '0.5'
          //Der Knopf für Erdkunde wird deaktiviert
          var a = toString(pfach + j)
          console.log(a)
          a = pfach + j
          document.getElementById(a).disabled = true
        }
        break;
      //Sport wird überprüft 
      case 'Sport':
        //Überprüfung, ob Politik/Wirtschaft in der nächsten Stufe wählbar ist (Abfrage für Nicht-Kernfächer)
        if (sessionStorage.getItem('w[3]') != 'true') {
          //Sport wird durchsichtiger
          document.getElementById(pfach + j + ".label").style.opacity = '0.5'
          //Der Knopf für Sport wird deaktiviert          
          var a = toString(pfach + j)
          a = pfach + j
          document.getElementById(a).disabled = true
        } else {
          //WEnn Nicht-Kernfächer und Sport wählbar sind, verändert sich die Durchsichtigkeit nicht, ansonsten wird der Knopf durchsichtiger und wird deaktiviert
          if (sessionStorage.getItem('w_nk') === 'true' && sessionStorage.getItem('sport_w') === 'true') {
            document.getElementById(pfach + j + ".label").style.opacity = '1'
          } else {
            document.getElementById(pfach + j + ".label").style.opacity = '0.5'
            var a = toString(pfach + j)
            a = pfach + j
            document.getElementById(a).disabled = true
          }
        }
        break; 
    }
  }
}
//Prüfung, ob ein Fach in der nächsten Stufe wählbar ist (Kernfach)
function proof_in_advance_visibility (pfach, i, j, bereich, waehlbar, fachvariable){
  //Wenn der Bereich des Fachs und das Fach selbst wählbar ist, wird der Inhalt der Bedingung ausgeführt
  if (bereich === 'true' && fachvariable === 'true') {
    //Wenn ein Fach nicht als P2 wählbar ist
    if (i === 2 && waehlbar === 'false') {
      //Button des Fachs wird durchsichtiger
      document.getElementById(pfach + j + ".label").style.opacity = '0.5'
      //Button des Fachs wird deaktiviert
      var a = toString(pfach + j)
      a = pfach + j
      document.getElementById(a).disabled = true
    } else {
      //Wenn ein Fach P3 wäre und das Profil gesellschaftlich ist
      if (i === 3 && sessionStorage.getItem('profil') == 'gese') {
        //Button des Fachs wird durchsichtiger
        document.getElementById(pfach + j + ".label").style.opacity = '0.5'
      } else {
        //Button des Fachs bleibt gleich sichtbar
        document.getElementById(pfach + j + ".label").style.opacity = '1'
      }
    }
  } else {
    //Button des Fachs wird durchsichtiger
    document.getElementById(pfach + j + ".label").style.opacity = '0.5'
    //Button des Fachs wird deaktiviert
    var a = toString(pfach + j)
    a = pfach + j
    document.getElementById(a).disabled = true

  }
}
//Prüfung, ob ein Fach in der nächsten Stufe wählbar ist (Nicht-Kernfach)
function proof_in_advance_visibility_w_nk (pfach, i, j, bereich, waehlbar, fachvariable){
  //Wenn der Bereich des Fachs, Nicht-Kernfächer und das Fach selbst wählbar ist, wird der Inhalt der Bedingung ausgeführt
  if (bereich === 'true' && sessionStorage.getItem('w_nk') === 'true' && fachvariable === 'true') {
    //Wenn ein Fach nicht als P2 wählbar ist
    if (i === 2 && waehlbar === 'false') {
      //Button des Fachs wird durchsichtiger
      document.getElementById(pfach + j + ".label").style.opacity = '0.5'
      //Button des Fachs wird deaktiviert
      var a = toString(pfach + j)
      a = pfach + j
      document.getElementById(a).disabled = true
    } else {
      //Wenn ein Fach P3 wäre und das Profil gesellschaftlich ist
      if (i === 3 && sessionStorage.getItem('profil') == 'gese') {
        //Button des Fachs wird durchsichtiger
        document.getElementById(pfach + j + ".label").style.opacity = '0.5'
      } else {
        //Button des Fachs bleibt gleich sichtbar
        document.getElementById(pfach + j + ".label").style.opacity = '1'
      }
    }
  } else {
    //Button des Fachs wird durchsichtiger
    document.getElementById(pfach + j + ".label").style.opacity = '0.5'
    //Button des Fachs wird deaktiviert
    var a = toString(pfach + j)
    a = pfach + j
    document.getElementById(a).disabled = true
  }
}
//Funktionen für die Grundkurse je nach gewähltem Profil
function mana(){
  for (var j = 1; j < 6; j++) {
    //Pflichtgrundkurse werden zugeordnet
    pflicht(j)
    //Wenn Musik, Kunst oder DS als Prüfungsfach gewählt wurden, wird der Grundkurs vorübergehend auf gewählt gesetzt
    if (sessionStorage.getItem('extra8') == 'false' && sessionStorage.getItem('extra10') == 'false' && sessionStorage.getItem('extra17') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Musik' || sessionStorage.getItem('pfach' + j) =='Kunst' || sessionStorage.getItem('pfach' + j) =='DS')) {
      if (sessionStorage.getItem('pfach' + j) == 'Musik') {
        sessionStorage.setItem('extra8', true)
        sessionStorage.setItem('extra10', false)
        sessionStorage.setItem('extra17', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Kunst') {
        sessionStorage.setItem('extra8', false)
        sessionStorage.setItem('extra10', true)
        sessionStorage.setItem('extra17', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'DS') {
        sessionStorage.setItem('extra8', false)
        sessionStorage.setItem('extra10', false)
        sessionStorage.setItem('extra17', true)
      }
    }
    //Wenn Englisch, Latein, Französisch oder Spanisch als Prüfungsfach gewählt wurden, wird der Grundkurs vorübergehend auf gewählt gesetzt
    if (sessionStorage.getItem('extra3') == 'false' && sessionStorage.getItem('extra7') == 'false' && sessionStorage.getItem('extra6') == 'false' && sessionStorage.getItem('extra11') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Englisch' || sessionStorage.getItem('pfach' + j) == 'Latein' || sessionStorage.getItem('pfach' + j) == 'Französisch' || sessionStorage.getItem('pfach' + j) == 'Spanisch')) {
      if (sessionStorage.getItem('pfach' + j) == 'Englisch') {
        sessionStorage.setItem('extra3', true)
        sessionStorage.setItem('extra7', false)
        sessionStorage.setItem('extra6', false)
        sessionStorage.setItem('extra11', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Latein') {
        sessionStorage.setItem('extra3', false)
        sessionStorage.setItem('extra7', true)
        sessionStorage.setItem('extra6', false)
        sessionStorage.setItem('extra11', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Französisch') {
        sessionStorage.setItem('extra3', false)
        sessionStorage.setItem('extra7', false)
        sessionStorage.setItem('extra6', true)
        sessionStorage.setItem('extra11', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Spanisch') {
        sessionStorage.setItem('extra3', false)
        sessionStorage.setItem('extra7', false)
        sessionStorage.setItem('extra6', false)
        sessionStorage.setItem('extra11', true)
      }
    }
    //Wenn eine Naturwissenschaft als Prüfungsfach gewählt wurde, wird der Zähler für die Naturwissenschaften um 1 hochgezählt
    if (sessionStorage.getItem('pfach' + j) == 'Biologie' || sessionStorage.getItem('pfach' + j) == 'Physik' || sessionStorage.getItem('pfach' + j) == 'Chemie' || sessionStorage.getItem('pfach' + j) == 'Informatik') {
      interaction = parseInt(sessionStorage.getItem('counter_nw'))
      interaction += 1
      sessionStorage.setItem('counter_nw', interaction)
      console.log('NW-Counter: ' + sessionStorage.getItem('counter_nw'))
    }
  }
  //Wenn Sport als P5 gewählt wurde, wird
  if (sessionStorage.getItem('pfach5') == 'Sport') {
    sessionStorage.setItem('sport_gk', true)
  }
  //1 FS
  if (sessionStorage.getItem('extra3') == 'false' && sessionStorage.getItem('extra7') == 'false' && sessionStorage.getItem('extra6') == 'false' && sessionStorage.getItem('extra11') == 'false') {
    sessionStorage.setItem('extra3', true)
    sessionStorage.setItem('extra7', true)
    sessionStorage.setItem('extra6', true)
    sessionStorage.setItem('extra11', true)
  }
  if (sessionStorage.getItem('extra3') == 'true' && sessionStorage.getItem('extra7') == 'true' && sessionStorage.getItem('extra6') == 'true' && sessionStorage.getItem('extra11') == 'true') {
    document.getElementById("englisch.label").style.opacity = '1'
    document.getElementById("latein.label").style.opacity = '1'
    document.getElementById("franzoesisch.label").style.opacity = '1'
    document.getElementById("spanisch.label").style.opacity = '1'
  } else {
    document.getElementById("englisch.label").style.opacity = '0.5'
    document.getElementById("latein.label").style.opacity = '0.5'
    document.getElementById("franzoesisch.label").style.opacity = '0.5'
    document.getElementById("spanisch.label").style.opacity = '0.5'
    document.getElementById("englisch").disabled = true
    document.getElementById("latein").disabled = true
    document.getElementById("franzoesisch").disabled = true
    document.getElementById("spanisch").disabled = true
  }


  //Musik, Kunst, DS
  if (sessionStorage.getItem('extra8') == 'false' && sessionStorage.getItem('extra10') == 'false' && sessionStorage.getItem('extra17') == 'false') {
    sessionStorage.setItem('extra8', true)
    sessionStorage.setItem('extra10', true)
    sessionStorage.setItem('extra17', true)
  }
  if (sessionStorage.getItem('extra8') == 'true' && sessionStorage.getItem('extra10') == 'true'  && sessionStorage.getItem('extra17') == 'true') {
    document.getElementById("musik.label").style.opacity = '1'
    document.getElementById("ds.label").style.opacity = '1'
    document.getElementById("kunst.label").style.opacity = '1'
  } else {
    document.getElementById("musik.label").style.opacity = '0.5'
    document.getElementById("ds.label").style.opacity = '0.5'
    document.getElementById("kunst.label").style.opacity = '0.5'
    document.getElementById("kunst").disabled = true
    document.getElementById("ds").disabled = true
    document.getElementById("musik").disabled = true
  }


  //Religion
  if (sessionStorage.getItem('extra15') == 'false' && sessionStorage.getItem('extra18') == 'false') {
    sessionStorage.setItem('extra15', true)
    sessionStorage.setItem('extra18', true)
  }
  if (sessionStorage.getItem('extra15') == 'true' && sessionStorage.getItem('extra18') == 'true') {
    document.getElementById("religion.label").style.opacity = '1'
    document.getElementById("wn.label").style.opacity = '1'
  } else {
    document.getElementById("religion.label").style.opacity = '0.5'
    document.getElementById("wn.label").style.opacity = '0.5'
    document.getElementById("wn").disabled = true
    document.getElementById("religion").disabled = true
  }
  //2 NW
  if (parseInt(sessionStorage.getItem('counter_nw')) < 2) {
    var help_informatik = false;
    var help_biologie = false;
    var help_physik = false;
    var help_chemie = false;
    for (let k = 1; k < 6; k++) {
      if (sessionStorage.getItem('pfach' + k) == 'Informatik' || sessionStorage.getItem('extra9') == 'true') {
        help_informatik = true;
      } 
      if (sessionStorage.getItem('pfach' + k) == 'Biologie' || sessionStorage.getItem('extra5') == 'true') {
        help_biologie = true;
      } 
      if (sessionStorage.getItem('pfach' + k) == 'Physik' || sessionStorage.getItem('extra4') == 'true') {
        help_physik = true;
      } 
      if (sessionStorage.getItem('pfach' + k) == 'Chemie' || sessionStorage.getItem('extra2') == 'true') {
        help_chemie = true;
      } 
    }
    if (help_informatik == true) {
      document.getElementById("informatik.label").style.opacity = '0.5'
    }
    if (help_biologie == true) {
      document.getElementById("bio.label").style.opacity = '0.5'
    }
    if (help_physik == true) {
      document.getElementById("physik.label").style.opacity = '0.5'
    }
    if (help_chemie == true) {
      document.getElementById("chemie.label").style.opacity = '0.5'
    }
  } else {
    document.getElementById("informatik.label").style.opacity = '0.5'
    document.getElementById("physik.label").style.opacity = '0.5'
    document.getElementById("chemie.label").style.opacity = '0.5'
    document.getElementById("bio.label").style.opacity = '0.5'    
    document.getElementById("informatik").disabled = true
    document.getElementById("physik").disabled = true
    document.getElementById("chemie").disabled = true
    document.getElementById("bio").disabled = true
  }
console.log('Religion-GK: ' + sessionStorage.getItem('extra15'))
console.log('WN-GK: ' + sessionStorage.getItem('extra18'))  
console.log('Deutsch-GK: ' + sessionStorage.getItem('extra12'))
console.log('Mathe-GK: ' + sessionStorage.getItem('extra1'))
console.log('Geschichte-GK: ' + sessionStorage.getItem('extra13'))
console.log('PoWi-GK: ' + sessionStorage.getItem('extra14'))
console.log('Musik-GK: ' + sessionStorage.getItem('extra8'))
console.log('Kunst-GK: ' + sessionStorage.getItem('extra10'))
console.log('DS-GK: ' + sessionStorage.getItem('extra17'))
console.log('Englisch-GK: ' + sessionStorage.getItem('extra3'))
console.log('Spanisch-GK: ' + sessionStorage.getItem('extra11'))
console.log('Latein-GK: ' + sessionStorage.getItem('extra7'))
console.log('Französisch-GK: ' + sessionStorage.getItem('extra6'))

}
function spra() {
  var help_informatik = false
  for (var j = 1; j < 6; j++) {
    pflicht(j)
    if (sessionStorage.getItem('extra8') == 'false' && sessionStorage.getItem('extra10') == 'false' && sessionStorage.getItem('extra17') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Musik' || sessionStorage.getItem('pfach' + j) == 'Kunst' || sessionStorage.getItem('pfach' + j) == 'DS')) {
      if (sessionStorage.getItem('pfach' + j) == 'Musik') {
        sessionStorage.setItem('extra8', true)
        sessionStorage.setItem('extra10', false)
        sessionStorage.setItem('extra17', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Kunst') {
        sessionStorage.setItem('extra8', false)
        sessionStorage.setItem('extra10', true)
        sessionStorage.setItem('extra17', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'DS') {
        sessionStorage.setItem('extra8', false)
        sessionStorage.setItem('extra10', false)
        sessionStorage.setItem('extra17', true)
      }
    }
    if (sessionStorage.getItem('extra4') == 'false' && sessionStorage.getItem('extra5') == 'false' && sessionStorage.getItem('extra2') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Physik' || sessionStorage.getItem('pfach' + j) == 'Chemie' || sessionStorage.getItem('pfach' + j) == 'Biologie')) {
      if (sessionStorage.getItem('pfach' + j) == 'Physik') {
        sessionStorage.setItem('extra4', true)
        sessionStorage.setItem('extra5', false)
        sessionStorage.setItem('extra2', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Chemie') {
        sessionStorage.setItem('extra4', false)
        sessionStorage.setItem('extra2', true)
        sessionStorage.setItem('extra5', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Biologie') {
        sessionStorage.setItem('extra4', false)
        sessionStorage.setItem('extra2', false)
        sessionStorage.setItem('extra5', true)
      }
    }
    if (sessionStorage.getItem('pfach' + j) == 'Englisch' || sessionStorage.getItem('pfach' + j) == 'Latein' || sessionStorage.getItem('pfach' + j) == 'Französisch' || sessionStorage.getItem('pfach' + j) == 'Spanisch') {
      interaction = parseInt(sessionStorage.getItem('counter_fs'))
      interaction += 1
      sessionStorage.setItem('counter_fs', interaction)
      console.log('FS-Counter: ' + sessionStorage.getItem('counter_fs'))
    }
    if (help_informatik == false && sessionStorage.getItem('pfach' + j) == 'Informatik') {
      help_informatik = true
    } 
  }
  if (parseInt(sessionStorage.getItem('counter_fs')) < 2)  {
    var help_lang = false
    for (let index = 1; index < 6; index++) {
      if (sessionStorage.getItem('pfach' + index) == 'Englisch') {
        help_lang = true
      } 
    }
    if (help_lang == true) {
      document.getElementById("spanisch.label").style.opacity = '1'
      document.getElementById("latein.label").style.opacity = '1'
      document.getElementById("franzoesisch.label").style.opacity = '1'
    } else {
      sessionStorage.setItem('extra3', true)
      document.getElementById("spanisch.label").style.opacity = '0.5'
      document.getElementById("latein.label").style.opacity = '0.5'
      document.getElementById("franzoesisch.label").style.opacity = '0.5'
      document.getElementById("latein").disabled = true
      document.getElementById("franzoesisch").disabled = true
      document.getElementById("spanisch").disabled = true
    }
  } else {
    sessionStorage.setItem('extra3', true)
    document.getElementById("spanisch.label").style.opacity = '0.5'
    document.getElementById("latein.label").style.opacity = '0.5'
    document.getElementById("franzoesisch.label").style.opacity = '0.5'
    document.getElementById("latein").disabled = true
    document.getElementById("franzoesisch").disabled = true
    document.getElementById("spanisch").disabled = true
  }
  if (help_informatik == true) {
    document.getElementById("informatikja.label").style.opacity = '0.5'
    document.getElementById("informatikne.label").style.opacity = '0.5'
    document.getElementById("informatikja").disabled = true
    document.getElementById("informatikne").disabled = true
  } else {
    document.getElementById("informatikja.label").style.opacity = '1'
    document.getElementById("informatikne.label").style.opacity = '1'
  }

  //Sport
  if (sessionStorage.getItem('pfach5') == 'Sport') {
    sessionStorage.setItem('sport_gk', true)
  }

  //1 NW
  if (sessionStorage.getItem('extra4') == 'false' && sessionStorage.getItem('extra2') == 'false' && sessionStorage.getItem('extra5') == 'false') {
    sessionStorage.setItem('extra4', true)
    sessionStorage.setItem('extra2', true)
    sessionStorage.setItem('extra5', true)
  }
  if (sessionStorage.getItem('extra4') == 'true' && sessionStorage.getItem('extra2') == 'true'  && sessionStorage.getItem('extra5') == 'true') {
    document.getElementById("physik.label").style.opacity = '1'
    document.getElementById("chemie.label").style.opacity = '1'
    document.getElementById("bio.label").style.opacity = '1'
  } else {
    document.getElementById("physik.label").style.opacity = '0.5'
    document.getElementById("chemie.label").style.opacity = '0.5'
    document.getElementById("bio.label").style.opacity = '0.5'
    document.getElementById("physik").disabled = true
    document.getElementById("chemie").disabled = true
    document.getElementById("bio").disabled = true
  }


  //Musik, Kunst, DS
  if (sessionStorage.getItem('extra8') == 'false' && sessionStorage.getItem('extra10') == 'false' && sessionStorage.getItem('extra17') == 'false') {
    sessionStorage.setItem('extra8', true)
    sessionStorage.setItem('extra10', true)
    sessionStorage.setItem('extra17', true)
  }
  console.log(sessionStorage.getItem('extra8'))
  if (sessionStorage.getItem('extra8') == 'true' && sessionStorage.getItem('extra10') == 'true' && sessionStorage.getItem('extra17') == 'true') {
    document.getElementById("musik.label").style.opacity = '1'
    document.getElementById("ds.label").style.opacity = '1'
    document.getElementById("kunst.label").style.opacity = '1'
  } else {
    document.getElementById("musik.label").style.opacity = '0.5'
    document.getElementById("ds.label").style.opacity = '0.5'
    document.getElementById("kunst.label").style.opacity = '0.5'
    document.getElementById("musik").disabled = true
    document.getElementById("kunst").disabled = true
    document.getElementById("ds").disabled = true
  }


  //Religion
  if (sessionStorage.getItem('extra15') == 'false' && sessionStorage.getItem('extra18') == 'false') {
    sessionStorage.setItem('extra15', true)
    sessionStorage.setItem('extra18', true)
  }
  if (sessionStorage.getItem('extra15') == 'true' && sessionStorage.getItem('extra18') == 'true') {
    document.getElementById("religion.label").style.opacity = '1'
    document.getElementById("wn.label").style.opacity = '1'
  } else {
    document.getElementById("religion.label").style.opacity = '0.5'
    document.getElementById("wn.label").style.opacity = '0.5'
    document.getElementById("religion").disabled = true
    document.getElementById("wn").disabled = true
  }
  console.log('Religion-GK: ' + sessionStorage.getItem('extra15'))
  console.log('WN-GK: ' + sessionStorage.getItem('extra18'))  
  console.log('Deutsch-GK: ' + sessionStorage.getItem('extra12'))
  console.log('Mathe-GK: ' + sessionStorage.getItem('extra1'))
  console.log('Geschichte-GK: ' + sessionStorage.getItem('extra13'))
  console.log('PoWi-GK: ' + sessionStorage.getItem('extra14'))
  console.log('Musik-GK: ' + sessionStorage.getItem('extra8'))
  console.log('Kunst-GK: ' + sessionStorage.getItem('extra10'))
  console.log('DS-GK: ' + sessionStorage.getItem('extra17'))
  console.log('Englisch-GK: ' + sessionStorage.getItem('extra3'))
  console.log('Spanisch-GK: ' + sessionStorage.getItem('extra11'))
  console.log('Latein-GK: ' + sessionStorage.getItem('extra7'))
  console.log('Französisch-GK: ' + sessionStorage.getItem('extra6'))
}
function muku() {
  var help_informatik = false
  for (var j = 1; j < 6; j++) {
    pflicht(j)
    if (sessionStorage.getItem('extra3') == 'false' && sessionStorage.getItem('extra7') == 'false' && sessionStorage.getItem('extra6') == 'false' && sessionStorage.getItem('extra11') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Englisch' || sessionStorage.getItem('pfach' + j) == 'Latein' || sessionStorage.getItem('pfach' + j) == 'Französisch' || sessionStorage.getItem('pfach' + j) == 'Spanisch')) {
      if (sessionStorage.getItem('pfach' + j) == 'Englisch') {
        sessionStorage.setItem('extra3', true)
        sessionStorage.setItem('extra7', false)
        sessionStorage.setItem('extra6', false)
        sessionStorage.setItem('extra11', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Latein') {
        sessionStorage.setItem('extra3', false)
        sessionStorage.setItem('extra7', true)
        sessionStorage.setItem('extra6', false)
        sessionStorage.setItem('extra11', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Französisch') {
        sessionStorage.setItem('extra3', false)
        sessionStorage.setItem('extra7', false)
        sessionStorage.setItem('extra6', true)
        sessionStorage.setItem('extra11', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Spanisch') {
        sessionStorage.setItem('extra3', false)
        sessionStorage.setItem('extra7', false)
        sessionStorage.setItem('extra6', false)
        sessionStorage.setItem('extra11', true)
      }
    }
    if (sessionStorage.getItem('extra4') == 'false' && sessionStorage.getItem('extra5') == 'false' && sessionStorage.getItem('extra2') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Physik' || sessionStorage.getItem('pfach' + j) == 'Chemie' || sessionStorage.getItem('pfach' + j) == 'Biologie')) {
      if (sessionStorage.getItem('pfach' + j) == 'Physik') {
        sessionStorage.setItem('extra4', true)
        sessionStorage.setItem('extra5', false)
        sessionStorage.setItem('extra2', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Chemie') {
        sessionStorage.setItem('extra4', false)
        sessionStorage.setItem('extra2', true)
        sessionStorage.setItem('extra5', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Biologie') {
        sessionStorage.setItem('extra4', false)
        sessionStorage.setItem('extra2', false)
        sessionStorage.setItem('extra5', true)
      }
    }
    if (help_informatik == false && sessionStorage.getItem('pfach' + j) == 'Informatik') {
      help_informatik = true
    }
     
  }

  //Sport
  if (sessionStorage.getItem('pfach5') == 'Sport') {
    sessionStorage.setItem('sport_gk', true)
  }
  //1 FS
  if (sessionStorage.getItem('extra3') == 'false' && sessionStorage.getItem('extra7') == 'false' && sessionStorage.getItem('extra6') == 'false' && sessionStorage.getItem('extra11') == 'false') {
    sessionStorage.setItem('extra3', true)
    sessionStorage.setItem('extra7', true)
    sessionStorage.setItem('extra6', true)
    sessionStorage.setItem('extra11', true)
  }
  if (sessionStorage.getItem('extra3') == 'true' && sessionStorage.getItem('extra7') == 'true' && sessionStorage.getItem('extra6') == 'true' && sessionStorage.getItem('extra11') == 'true') {
    document.getElementById("englisch.label").style.opacity = '1'
    document.getElementById("latein.label").style.opacity = '1'
    document.getElementById("franzoesisch.label").style.opacity = '1'
    document.getElementById("spanisch.label").style.opacity = '1'
  } else {
    document.getElementById("englisch.label").style.opacity = '0.5'
    document.getElementById("latein.label").style.opacity = '0.5'
    document.getElementById("franzoesisch.label").style.opacity = '0.5'
    document.getElementById("spanisch.label").style.opacity = '0.5'
    document.getElementById("englisch").disabled = true
    document.getElementById("latein").disabled = true
    document.getElementById("franzoesisch").disabled = true
    document.getElementById("spanisch").disabled = true
  }
  //1 NW
  if (sessionStorage.getItem('extra4') == 'false' && sessionStorage.getItem('extra2') == 'false' && sessionStorage.getItem('extra5') == 'false') {
    sessionStorage.setItem('extra4', true)
    sessionStorage.setItem('extra2', true)
    sessionStorage.setItem('extra5', true)
  }
  if (sessionStorage.getItem('extra4') == 'true' && sessionStorage.getItem('extra2') == 'true'  && sessionStorage.getItem('extra5') == 'true') {
    document.getElementById("physik.label").style.opacity = '1'
    document.getElementById("chemie.label").style.opacity = '1'
    document.getElementById("bio.label").style.opacity = '1'
  } else {
    document.getElementById("physik.label").style.opacity = '0.5'
    document.getElementById("chemie.label").style.opacity = '0.5'
    document.getElementById("bio.label").style.opacity = '0.5'
    document.getElementById("physik").disabled = true
    document.getElementById("chemie").disabled = true
    document.getElementById("bio").disabled = true
  }
  //Religion
  if (sessionStorage.getItem('extra15') == 'false' && sessionStorage.getItem('extra18') == 'false') {
    sessionStorage.setItem('extra15', true)
    sessionStorage.setItem('extra18', true)
  }
  if (sessionStorage.getItem('extra15') == 'true' && sessionStorage.getItem('extra18') == 'true') {
    document.getElementById("religion.label").style.opacity = '1'
    document.getElementById("wn.label").style.opacity = '1'
  } else {
    document.getElementById("religion.label").style.opacity = '0.5'
    document.getElementById("wn.label").style.opacity = '0.5'
    document.getElementById("religion").disabled = true
    document.getElementById("wn").disabled = true
  }
  if (help_informatik == true) {
    document.getElementById("informatikja.label").style.opacity = '0.5'
    document.getElementById("informatikne.label").style.opacity = '0.5'
    document.getElementById("informatikja").disabled = true
    document.getElementById("informatikne").disabled = true
  } else {
    document.getElementById("informatikja.label").style.opacity = '1'
    document.getElementById("informatikne.label").style.opacity = '1'
  }
  // 2 aus Musik, Kunst, DS
  if (sessionStorage.getItem('pfach1') == 'Musik') {
    document.getElementById("musik.label").style.opacity = '0.5'
    document.getElementById("musik").disabled = true
  } else if (sessionStorage.getItem('pfach1') == 'Kunst') {
    document.getElementById("kunst.label").style.opacity = '0.5'
    document.getElementById("kunst").disabled = true
  }
}
function gese(){
  for (var j = 1; j < 6; j++) {
    pflicht(j)
    if (sessionStorage.getItem('pfach' + j) == 'Biologie' || sessionStorage.getItem('pfach' + j) == 'Physik' || sessionStorage.getItem('pfach' + j) == 'Chemie' || sessionStorage.getItem('pfach' + j) == 'Informatik') {
      interaction = parseInt(sessionStorage.getItem('counter_nw'))
      interaction += 1
      sessionStorage.setItem('counter_nw', interaction)
      console.log('NW-Counter: ' + sessionStorage.getItem('counter_nw'))
    }
    if (sessionStorage.getItem('pfach' + j) == 'Englisch' || sessionStorage.getItem('pfach' + j) == 'Latein' || sessionStorage.getItem('pfach' + j) == 'Französisch' || sessionStorage.getItem('pfach' + j) == 'Spanisch') {
      interaction = parseInt(sessionStorage.getItem('counter_fs'))
      interaction += 1
      sessionStorage.setItem('counter_fs', interaction)
      console.log('FS-Counter: ' + sessionStorage.getItem('counter_fs'))
    }
    if (sessionStorage.getItem('extra8') == 'false' && sessionStorage.getItem('extra10') == 'false' && sessionStorage.getItem('extra17') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Musik' || sessionStorage.getItem('pfach' + j) == 'Kunst' || sessionStorage.getItem('pfach' + j) == 'DS')) {
      if (sessionStorage.getItem('pfach' + j) == 'Musik') {
        sessionStorage.setItem('extra8', true)
        sessionStorage.setItem('extra10', false)
        sessionStorage.setItem('extra17', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Kunst') {
        sessionStorage.setItem('extra8', false)
        sessionStorage.setItem('extra10', true)
        sessionStorage.setItem('extra17', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'DS') {
        sessionStorage.setItem('extra8', false)
        sessionStorage.setItem('extra10', false)
        sessionStorage.setItem('extra17', true)
      }
    }
  }
  //Sport
  if (sessionStorage.getItem('pfach5') == 'Sport') {
    sessionStorage.setItem('sport_gk', true)
  }
  //Religion
  if (sessionStorage.getItem('extra15') == 'false' && sessionStorage.getItem('extra18') == 'false') {
    sessionStorage.setItem('extra15', true)
    sessionStorage.setItem('extra18', true)
  }
  if (sessionStorage.getItem('extra15') == 'true' && sessionStorage.getItem('extra18') == 'true') {
    document.getElementById("religion.label").style.opacity = '1'
    document.getElementById("wn.label").style.opacity = '1'
  } else {
    document.getElementById("religion.label").style.opacity = '0.5'
    document.getElementById("wn.label").style.opacity = '0.5'
    document.getElementById("religion").disabled = true
    document.getElementById("wn").disabled = true
  }
  if (parseInt(sessionStorage.getItem('counter_nw')) == 0) {
    document.getElementById("physik.label").style.opacity = '1'
    document.getElementById("bio.label").style.opacity = '1'
    document.getElementById("chemie.label").style.opacity = '1'
    document.getElementById("informatik.label").style.opacity = '1'
  } else if (parseInt(sessionStorage.getItem('counter_nw')) == 1) {
    document.getElementById("physik.label").style.opacity = '0.5'
    document.getElementById("bio.label").style.opacity = '0.5'
    document.getElementById("chemie.label").style.opacity = '0.5'
    document.getElementById("informatik.label").style.opacity = '0.5'
    document.getElementById("physik").disabled = true
    document.getElementById("bio").disabled = true
    document.getElementById("chemie").disabled = true
    document.getElementById("informatik").disabled = true
    var help_informatik = false;
    var help_biologie = false;
    var help_physik = false;
    var help_chemie = false;
    for (let k = 1; k < 6; k++) {
      if (sessionStorage.getItem('pfach' + k) == 'Informatik') {
        help_informatik = true;
      } 
      if (sessionStorage.getItem('pfach' + k) == 'Biologie') {
        help_biologie = true;
      } 
      if (sessionStorage.getItem('pfach' + k) == 'Physik') {
        help_physik = true;
      } 
      if (sessionStorage.getItem('pfach' + k) == 'Chemie') {
        help_chemie = true;
      } 
    }
    if (help_informatik == true) {
      document.getElementById("informatik2.label").style.opacity = '0.5'
      document.getElementById("informatik2").disabled = true
    }
    if (help_biologie == true) {
      document.getElementById("bio2.label").style.opacity = '0.5'
      document.getElementById("bio2").disabled = true
    }
    if (help_physik == true) {
      document.getElementById("physik2.label").style.opacity = '0.5'
      document.getElementById("physik2").disabled = true
    }
    if (help_chemie == true) {
      document.getElementById("chemie2.label").style.opacity = '0.5'
      document.getElementById("chemie2").disabled = true
    }
  } else if (parseInt(sessionStorage.getItem('counter_nw')) == 2) {
    document.getElementById("physik.label").style.opacity = '0.5'
    document.getElementById("bio.label").style.opacity = '0.5'
    document.getElementById("chemie.label").style.opacity = '0.5'
    document.getElementById("informatik.label").style.opacity = '0.5'
    document.getElementById("physik").disabled = true
    document.getElementById("bio").disabled = true
    document.getElementById("chemie").disabled = true
    document.getElementById("informatik").disabled = true
    document.getElementById("physik2.label").style.opacity = '0.5'
    document.getElementById("bio2.label").style.opacity = '0.5'
    document.getElementById("chemie2.label").style.opacity = '0.5'
    document.getElementById("informatik2.label").style.opacity = '0.5'
    document.getElementById("physik2").disabled = true
    document.getElementById("bio2").disabled = true
    document.getElementById("chemie2").disabled = true
    document.getElementById("informatik2").disabled = true
    document.getElementById("englisch2.label").style.opacity = '0.5'
    document.getElementById("latein2.label").style.opacity = '0.5'
    document.getElementById("spanisch2.label").style.opacity = '0.5'
    document.getElementById("franzoesisch2.label").style.opacity = '0.5'
    document.getElementById("englisch2").disabled = true
    document.getElementById("latein2").disabled = true
    document.getElementById("spanisch2").disabled = true
    document.getElementById("franzoesisch2").disabled = true
  }
  if (parseInt(sessionStorage.getItem('counter_fs')) == 0) {
    document.getElementById("englisch.label").style.opacity = '1'
    document.getElementById("latein.label").style.opacity = '1'
    document.getElementById("spanisch.label").style.opacity = '1'
    document.getElementById("franzoesisch.label").style.opacity = '1'
  } else if (parseInt(sessionStorage.getItem('counter_fs')) == 1) {
    document.getElementById("englisch.label").style.opacity = '0.5'
    document.getElementById("latein.label").style.opacity = '0.5'
    document.getElementById("spanisch.label").style.opacity = '0.5'
    document.getElementById("franzoesisch.label").style.opacity = '0.5'
    document.getElementById("englisch").disabled = true
    document.getElementById("latein").disabled = true
    document.getElementById("spanisch").disabled = true
    document.getElementById("franzoesisch").disabled = true
    var help_englisch = false
    var help_latein = false
    var help_spanisch = false
    var help_franzoesisch = false
    for (let k = 1; k < 6; k++) {
      if (sessionStorage.getItem('pfach' + k) == 'Englisch') {
        help_englisch = true;
      } 
      if (sessionStorage.getItem('pfach' + k) == 'Latein') {
        help_latein = true;
      } 
      if (sessionStorage.getItem('pfach' + k) == 'Spanisch') {
        help_spanisch = true;
      } 
      if (sessionStorage.getItem('pfach' + k) == 'Französisch') {
        help_franzoesisch = true;
      } 
    }
    if (help_englisch == true) {
      document.getElementById("englisch2.label").style.opacity = '0.5'
      document.getElementById("englisch2").disabled = true
    }
    if (help_latein == true) {
      document.getElementById("latein2.label").style.opacity = '0.5'
      document.getElementById("latein2").disabled = true
      document.getElementById("spanisch2.label").style.opacity = '0.5'
      document.getElementById("spanisch2").disabled = true
      document.getElementById("franzoesisch2.label").style.opacity = '0.5'
      document.getElementById("franzoesisch2").disabled = true
    }
    if (help_spanisch == true) {
      document.getElementById("latein2.label").style.opacity = '0.5'
      document.getElementById("latein2").disabled = true
      document.getElementById("spanisch2.label").style.opacity = '0.5'
      document.getElementById("spanisch2").disabled = true
      document.getElementById("franzoesisch2.label").style.opacity = '0.5'
      document.getElementById("franzoesisch2").disabled = true
    }
    if (help_franzoesisch == true) {
      document.getElementById("latein2.label").style.opacity = '0.5'
      document.getElementById("latein2").disabled = true
      document.getElementById("franzoesisch2.label").style.opacity = '0.5'
      document.getElementById("franzoesisch2").disabled = true
      document.getElementById("spanisch2.label").style.opacity = '0.5'
      document.getElementById("spanisch2").disabled = true
    }
  } else if (parseInt(sessionStorage.getItem('counter_fs')) == 2) {
    document.getElementById("englisch.label").style.opacity = '0.5'
    document.getElementById("latein.label").style.opacity = '0.5'
    document.getElementById("spanisch.label").style.opacity = '0.5'
    document.getElementById("franzoesisch.label").style.opacity = '0.5'
    document.getElementById("englisch").disabled = true
    document.getElementById("latein").disabled = true
    document.getElementById("spanisch").disabled = true
    document.getElementById("franzoesisch").disabled = true
    document.getElementById("englisch2.label").style.opacity = '0.5'
    document.getElementById("latein2.label").style.opacity = '0.5'
    document.getElementById("spanisch2.label").style.opacity = '0.5'
    document.getElementById("franzoesisch2.label").style.opacity = '0.5'
    document.getElementById("englisch2").disabled = true
    document.getElementById("latein2").disabled = true
    document.getElementById("spanisch2").disabled = true
    document.getElementById("franzoesisch2").disabled = true
    document.getElementById("physik2.label").style.opacity = '0.5'
    document.getElementById("bio2.label").style.opacity = '0.5'
    document.getElementById("chemie2.label").style.opacity = '0.5'
    document.getElementById("informatik2.label").style.opacity = '0.5'
    document.getElementById("physik2").disabled = true
    document.getElementById("bio2").disabled = true
    document.getElementById("chemie2").disabled = true
    document.getElementById("informatik2").disabled = true
  }
  //Musik, Kunst, DS
  if (sessionStorage.getItem('extra8') == 'false' && sessionStorage.getItem('extra10') == 'false' && sessionStorage.getItem('extra17') == 'false') {
    sessionStorage.setItem('extra8', true)
    sessionStorage.setItem('extra10', true)
    sessionStorage.setItem('extra17', true)
  }
  console.log(sessionStorage.getItem('extra8'))
  if (sessionStorage.getItem('extra8') == 'true' && sessionStorage.getItem('extra10') == 'true' && sessionStorage.getItem('extra17') == 'true') {
    document.getElementById("musik.label").style.opacity = '1'
    document.getElementById("ds.label").style.opacity = '1'
    document.getElementById("kunst.label").style.opacity = '1'
  } else {
    document.getElementById("musik.label").style.opacity = '0.5'
    document.getElementById("ds.label").style.opacity = '0.5'
    document.getElementById("kunst.label").style.opacity = '0.5'
    document.getElementById("musik").disabled = true
    document.getElementById("ds").disabled = true
    document.getElementById("kunst").disabled = true
  }
}
function pflicht(j) {
  //Wenn Deutsch nicht gewählt wurde, wird Deutsch als Grundkurs gesetzt
  if (sessionStorage.getItem('extra12') == 'false' && sessionStorage.getItem('pfach' + j) == 'Deutsch') {
    sessionStorage.setItem('extra12', false)
  } else {
    sessionStorage.setItem('extra12', true)
  }
  //Wenn Mathe nicht gewählt wurde, wird Mathe als Grundkurs gewählt
  if (sessionStorage.getItem('extra1') == 'false' && sessionStorage.getItem('pfach' + j) == 'Mathe') {
    sessionStorage.setItem('extra1', false)
  } else {
    sessionStorage.setItem('extra1', true)
  }
  //Wenn Geschichte nicht gewählt wurde, wird Geschichte als Grundkurs gewählt
  if (sessionStorage.getItem('extra13') == 'false' && sessionStorage.getItem('pfach' + j) == 'Geschichte') {
    sessionStorage.setItem('extra13', false)
  } else {
    sessionStorage.setItem('extra13', true)
  }
  //Wenn Politik/Wirtschaft nicht gewählt wurde, wird Politik/Wirtschaft als Grundkurs gewählt
  if (sessionStorage.getItem('extra14') == 'false' && sessionStorage.getItem('pfach' + j) == 'Politik Wirtschaft') {
    sessionStorage.setItem('extra14', false)
  } else {
    sessionStorage.setItem('extra14', true)
  }
  if (sessionStorage.getItem('extra15') == 'false' && sessionStorage.getItem('extra18') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Religion' || sessionStorage.getItem('pfach' + j) == 'WN')) {
    if (sessionStorage.getItem('pfach' + j) == 'Religion') {
      sessionStorage.setItem('extra15', true)
      sessionStorage.setItem('extra18', false)       
    }
    if (sessionStorage.getItem('pfach' + j) == 'WN') {
      sessionStorage.setItem('extra15', false)
      sessionStorage.setItem('extra18', true)
    }
  }
  if (sessionStorage.getItem('pfach' + j) == 'Erdkunde') {
    document.getElementById("erdkundja.label").style.opacity = '0.5'
    document.getElementById("erdkundne.label").style.opacity = '0.5'
    document.getElementById("erdkundja").disabled = true
    document.getElementById("erdkundne").disabled = true
  }
}
//Religion wird als Grundkurs gewählt und Werte und Normen abgewählt
function set_religion() {
  sessionStorage.setItem('extra15', true)
  sessionStorage.setItem('extra18', false)
}
//Werte und Normen wird als Grundkurs gewählt und Religion abgewählt
function set_wn() {
  sessionStorage.setItem('extra15', false)
  sessionStorage.setItem('extra18', true)
}
//Musik wird gewählt, während Kunst und DS nicht als Grundkurse belegt werden
function set_musik() {
  sessionStorage.setItem('extra8', true)
  sessionStorage.setItem('extra10', false)
  sessionStorage.setItem('extra17', false)
}
//Kunst wird gewählt, während Musik und DS nicht als Grundkurse belegt werden
function set_kunst() {
  sessionStorage.setItem('extra8', false)
  sessionStorage.setItem('extra10', true)
  sessionStorage.setItem('extra17', false)
}
//DS wird gewählt, während Kunst und Musik nicht als Grundkurse belegt werden
function set_ds() {
  sessionStorage.setItem('extra8', false)
  sessionStorage.setItem('extra10', false)
  sessionStorage.setItem('extra17', true) 
}
//Englisch wird als Grundkurs gesetzt und alle anderen Fremdsprachen werden nicht als Grundkurs belegt
function set_englisch() {
  sessionStorage.setItem('extra3', true)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra11', false)
}
//Französisch wird als Grundkurs gesetzt und alle anderen Fremdsprachen werden nicht als Grundkurs belegt
function set_franzoesisch() {
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra6', true)
  sessionStorage.setItem('extra11', false)
}
//Latein wird als Grundkurs gesetzt und alle anderen Fremdsprachen werden nicht als Grundkurs belegt
function set_latein() {
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra7', true)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra11', false)
}
//Spanisch wird als Grundkurs gesetzt und alle anderen Fremdsprachen werden nicht als Grundkurs belegt
function set_spanisch() {
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra11', true)
}
//Erdkunde wird als Grundkurs belegt
function set_erdkunde() {
  sessionStorage.setItem('extra16', true)
} 
//Erdkunde wird nicht als Grundkurs belegt
function set_erdkunde_false() {
  sessionStorage.setItem('extra16', false)
}
//Informatik wird als Grundkurs belegt
function set_informatik_voluntary() {
  sessionStorage.setItem('extra9', true)
} 
//Informatik wird nicht als Grundkurs belegt
function set_informatik_false() {
  sessionStorage.setItem('extra9', false)
}
//Biologie wird als Grundkurs belegt und die anderen Naturwissenschaften werden nicht als Grundkurs festgelegt
function set_biologie() {
  sessionStorage.setItem('extra5', true)
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra9', false)
}
//Physik wird als Grundkurs belegt und die anderen Naturwissenschaften werden nicht als Grundkurs festgelegt
function set_physik() {
  sessionStorage.setItem('extra4', true)
  sessionStorage.setItem('extra5', false)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra9', false)
} 
//Chemie wird als Grundkurs belegt und die anderen Naturwissenschaften werden nicht als Grundkurs festgelegt
function set_chemie() {
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra2', true)
  sessionStorage.setItem('extra9', false)
  sessionStorage.setItem('extra5', false)
}
//Informatik wird als Grundkurs belegt und die anderen Naturwissenschaften werden nicht als Grundkurs festgelegt
function set_informatik() {
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra9', true)
  sessionStorage.setItem('extra5', false) 
}  
//Biologie wird als Grundkurs gewählt und der Button bei der 2. Fremdsprache/2. Naturwissenschaft wird unnutzbar gemacht, damit das Fach nicht doppelt gewählt werden kann
function set_biologie_gese() {
  sessionStorage.setItem('extra5', true)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra9', false)
  document.getElementById("bio2.label").style.opacity = '0.5'
  document.getElementById("bio2").checked = false
  document.getElementById("bio2").disabled = true

  document.getElementById("chemie2.label").style.opacity = '1'
  document.getElementById("chemie2").disabled = false
  document.getElementById("physik2.label").style.opacity = '1'
  document.getElementById("physik2").disabled = false
  document.getElementById("informatik2.label").style.opacity = '1'
  document.getElementById("informatik2").disabled = false
  
  for (let index = 1; index < 6; index++) {
    if (sessionStorage.getItem('pfach' + index) == 'Informatik') {
      document.getElementById("informatik2.label").style.opacity = '0.5'
      document.getElementById("informatik2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + index) == 'Chemie') {
      document.getElementById("chemie2.label").style.opacity = '0.5'
      document.getElementById("chemie2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + index) == 'Biologie') {
      document.getElementById("bio2.label").style.opacity = '0.5'
      document.getElementById("bio2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + index) == 'Physik') {
      document.getElementById("physik2.label").style.opacity = '0.5'
      document.getElementById("physik2").disabled = true
    }
  }
}
//Physik wird als Grundkurs gewählt und der Button bei der 2. Fremdsprache/2. Naturwissenschaft wird unnutzbar gemacht, damit das Fach nicht doppelt gewählt werden kann
function set_physik_gese() {
  sessionStorage.setItem('extra4', true)
  sessionStorage.setItem('extra5', false)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra9', false)

  document.getElementById("physik2.label").style.opacity = '0.5'
  document.getElementById("physik2").checked = false
  document.getElementById("physik2").disabled = true

  document.getElementById("chemie2.label").style.opacity = '1'
  document.getElementById("chemie2").disabled = false
  document.getElementById("bio2.label").style.opacity = '1'
  document.getElementById("bio2").disabled = false
  document.getElementById("informatik2.label").style.opacity = '1'
  document.getElementById("informatik2").disabled = false

  for (let index = 1; index < 6; index++) {
    if (sessionStorage.getItem('pfach' + index) == 'Informatik') {
      document.getElementById("informatik2.label").style.opacity = '0.5'
      document.getElementById("informatik2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + index) == 'Chemie') {
      document.getElementById("chemie2.label").style.opacity = '0.5'
      document.getElementById("chemie2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + index) == 'Biologie') {
      document.getElementById("bio2.label").style.opacity = '0.5'
      document.getElementById("bio2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + index) == 'Physik') {
      document.getElementById("physik2.label").style.opacity = '0.5'
      document.getElementById("physik2").disabled = true
    }
  }
} 
//Chemie wird als Grundkurs gewählt und der Button bei der 2. Fremdsprache/2. Naturwissenschaft wird unnutzbar gemacht, damit das Fach nicht doppelt gewählt werden kann
function set_chemie_gese() {
  sessionStorage.setItem('extra2', true)
  sessionStorage.setItem('extra5', false)
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra9', false)

  document.getElementById("chemie2.label").style.opacity = '0.5'
  document.getElementById("chemie2").checked = false
  document.getElementById("chemie2").disabled = true

  document.getElementById("bio2.label").style.opacity = '1'
  document.getElementById("bio2").disabled = false
  document.getElementById("physik2.label").style.opacity = '1'
  document.getElementById("physik2").disabled = false
  document.getElementById("informatik2.label").style.opacity = '1'
  document.getElementById("informatik2").disabled = false

  for (let index = 1; index < 6; index++) {
    if (sessionStorage.getItem('pfach' + index) == 'Informatik') {
      document.getElementById("informatik2.label").style.opacity = '0.5'
      document.getElementById("informatik2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + index) == 'Chemie') {
      document.getElementById("chemie2.label").style.opacity = '0.5'
      document.getElementById("chemie2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + index) == 'Biologie') {
      document.getElementById("bio2.label").style.opacity = '0.5'
      document.getElementById("bio2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + index) == 'Physik') {
      document.getElementById("physik2.label").style.opacity = '0.5'
      document.getElementById("physik2").disabled = true
    }
  }
}
//Informatik wird als Grundkurs gewählt und der Button bei der 2. Fremdsprache/2. Naturwissenschaft wird unnutzbar gemacht, damit das Fach nicht doppelt gewählt werden kann
function set_informatik_gese() {
  sessionStorage.setItem('extra9', true)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra5', false)
  document.getElementById("informatik2.label").style.opacity = '0.5'
  document.getElementById("informatik2").checked = false
  document.getElementById("informatik2").disabled = true
  
  document.getElementById("chemie2.label").style.opacity = '1'
  document.getElementById("chemie2").disabled = false
  document.getElementById("bio2.label").style.opacity = '1'
  document.getElementById("bio2").disabled = false
  document.getElementById("physik2.label").style.opacity = '1'
  document.getElementById("physik2").disabled = false
  for (let index = 1; index < 6; index++) {
    if (sessionStorage.getItem('pfach' + index) == 'Informatik') {
      document.getElementById("informatik2.label").style.opacity = '0.5'
      document.getElementById("informatik2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + index) == 'Chemie') {
      document.getElementById("chemie2.label").style.opacity = '0.5'
      document.getElementById("chemie2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + index) == 'Biologie') {
      document.getElementById("bio2.label").style.opacity = '0.5'
      document.getElementById("bio2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + index) == 'Physik') {
      document.getElementById("physik2.label").style.opacity = '0.5'
      document.getElementById("physik2").disabled = true
    }
  }
}  
//Spanisch wird als Grundkurs gewählt und der Button bei der 2. Fremdsprache/2. Naturwissenschaft wird unnutzbar gemacht, damit das Fach nicht doppelt gewählt werden kann
function set_spanisch_gese() {
  sessionStorage.setItem('extra11', true)
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra7', false)
  document.getElementById("spanisch2.label").style.opacity = '0.5'
  document.getElementById("spanisch2").checked = false
  document.getElementById("spanisch2").disabled = true

  document.getElementById("englisch2.label").style.opacity = '1'
  document.getElementById("englisch2").disabled = false
  document.getElementById("latein2.label").style.opacity = '0.5'
  document.getElementById("latein2").disabled = true
  document.getElementById("franzoesisch2.label").style.opacity = '0.5'
  document.getElementById("franzoesisch2").disabled = true
}
//Latein wird als Grundkurs gewählt und der Button bei der 2. Fremdsprache/2. Naturwissenschaft wird unnutzbar gemacht, damit das Fach nicht doppelt gewählt werden kann
function set_latein_gese() {
  sessionStorage.setItem('extra7', true)
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra11', false)
  document.getElementById("latein2.label").style.opacity = '0.5'
  document.getElementById("latein2").checked = false
  document.getElementById("latein2").disabled = true

  document.getElementById("englisch2.label").style.opacity = '1'
  document.getElementById("englisch2").disabled = false
  document.getElementById("spanisch2.label").style.opacity = '0.5'
  document.getElementById("spanisch2").disabled = true
  document.getElementById("franzoesisch2.label").style.opacity = '0.5'
  document.getElementById("franzoesisch2").disabled = true
}
//Latein wird als Grundkurs gewählt und der Button bei der 2. Fremdsprache/2. Naturwissenschaft wird unnutzbar gemacht, damit das Fach nicht doppelt gewählt werden kann
function set_englisch_gese() {
  sessionStorage.setItem('extra3', true)
  sessionStorage.setItem('extra11', false)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra7', false)
  document.getElementById("englisch2.label").style.opacity = '0.5'
  document.getElementById("englisch2").checked = false
  document.getElementById("englisch2").disabled = true
  
  document.getElementById("spanisch2.label").style.opacity = '1'
  document.getElementById("spanisch2").disabled = false
  document.getElementById("latein2.label").style.opacity = '1'
  document.getElementById("latein2").disabled = false
  document.getElementById("franzoesisch2.label").style.opacity = '1'
  document.getElementById("franzoesisch2").disabled = false
}
//Französisch wird als Grundkurs gewählt und der Button bei der 2. Fremdsprache/2. Naturwissenschaft wird unnutzbar gemacht, damit das Fach nicht doppelt gewählt werden kann
function set_franzoesisch_gese() {
  sessionStorage.setItem('extra6', true)
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra11', false)
  sessionStorage.setItem('extra7', false)
  document.getElementById("franzoesisch2.label").style.opacity = '0.5'
  document.getElementById("franzoesisch2").checked = false
  document.getElementById("franzoesisch2").disabled = true

  document.getElementById("englisch2.label").style.opacity = '1'
  document.getElementById("englisch2").disabled = false
  document.getElementById("latein2.label").style.opacity = '0.5'
  document.getElementById("latein2").disabled = true
  document.getElementById("franzoesisch2.label").style.opacity = '0.5'
  document.getElementById("franzoesisch2").disabled = true
}
//Englisch wird als Grundkurs gewählt
function set_englisch_gese2() {
  sessionStorage.setItem('extra3', true)
}
//Französisch wird als Grundkurs gewählt
function set_franzoesisch_gese2() {
  sessionStorage.setItem('extra6', true)
}
//Latein wird als Grundkurs gewählt
function set_latein_gese2() {
  sessionStorage.setItem('extra7', true)
}
//Spanisch wird als Grundkurs gewählt
function set_spanisch_gese2() {
  sessionStorage.setItem('extra11', true)
}
//Physik wird als Grundkurs gewählt
function set_physik_gese2() {
  sessionStorage.setItem('extra4', true)
}
//Informatik wird als Grundkurs gewählt
function set_informatik_gese2() {
  sessionStorage.setItem('extra9', true)
}
//Chemie wird als Grundkurs gewählt
function set_chemie_gese2() {
  sessionStorage.setItem('chemie', true)
}
//Biologie wird als Grundkurs gewählt
function set_biologie_gese2() {
  sessionStorage.setItem('extra5', true)
}
//
function end() {
  for(let i = 1; i < 6; i++){
    switch (sessionStorage.getItem('pfach' + i)){
      case 'Mathe':
        if(i <=5){
          sessionStorage.setItem('extra1', false)
        } else {
          sessionStorage.setItem('extra1', true) 
        }
        break;
      case 'Informatik':
        if(i <=5){
          sessionStorage.setItem('extra9', false)
        } else {
          sessionStorage.setItem('extra9', true)
                }
        break;
      case 'Chemie':
        if(i <=5){
          sessionStorage.setItem('extra2', false)
        } else {
          sessionStorage.setItem('extra2', true)
        }
        break;
      case 'Biologie':
        if(i <=5){
          sessionStorage.setItem('extra5', false)
        } else {
          sessionStorage.setItem('extra5', true)
        }
        break;
      case 'Physik':
        if(i <=5){
          sessionStorage.setItem('extra4', false)
        } else {
          sessionStorage.setItem('extra4', true)
        }
        break;
      case 'Deutsch':
        if(i <=5){
          sessionStorage.setItem('extra12', false)
        } else {
          sessionStorage.setItem('extra12', true)
        }
        break;
      case 'Englisch':
        if(i <=5){
          sessionStorage.setItem('extra3', false)
        } else {
          sessionStorage.setItem('extra3', true)
        }
        break;
      case 'Französisch':
        if(i <=5){
          sessionStorage.setItem('extra6', false)
        } else {
          sessionStorage.setItem('extra6', true)
        }
        break;
      case 'Latein':
        if(i <=5){
          sessionStorage.setItem('extra7', false)
        } else {
          sessionStorage.setItem('extra7', true)
        }
        break;
      case 'Spanisch':
        if(i <=5){
          sessionStorage.setItem('extra11', false)
        } else {
          sessionStorage.setItem('extra11', true)
        }
        break;
      case 'Kunst':
        if(i <=5){
          sessionStorage.setItem('extra10', false)
        } else {
          sessionStorage.setItem('extra10', true)
        }
        break;
      case 'Musik':
        if(i <=5){
          sessionStorage.setItem('extra8', false)
        } else {
          sessionStorage.setItem('extra8', true)
        }
        break;
      case 'Geschichte':
        if(i <=5){
          sessionStorage.setItem('extra13', false)
        } else {
          sessionStorage.setItem('extra13', true)
        }
        break;
      case 'Religion':
        if(i <=5){
          sessionStorage.setItem('extra15', false)
        } else {
          sessionStorage.setItem('extra15', true)
        }
        break;
      case 'Erdkunde':
        if(i <=5){
          sessionStorage.setItem('extra16', false)
        } else {
          sessionStorage.setItem('extra16', true)
        }
        break;
      case 'Politik Wirtschaft':
        if(i <=5){
          sessionStorage.setItem('extra14', false)
        } else {
          sessionStorage.setItem('extra14', true)
        }
        break;
      case 'Sport':
        if(i <=5){
          sessionStorage.setItem('sport_gk', false)
        } else {
          sessionStorage.setItem('sport_gk', true)
        }
        break;
    }
  }
}
function set_powi_wish() {
  sessionStorage.getItem('wish_for_p4_p5', 'Politik Wirtschaft')
}
function set_geschichte_wish() {
  sessionStorage.getItem('wish_for_p4_p5', 'Geschichte')
}
function set_kunst_wish() {
  sessionStorage.getItem('wish_for_p4_p5', 'Kunst')
}
function set_musik_wish() {
  sessionStorage.getItem('wish_for_p4_p5', 'Musik')
}
function set_religion_wish() {
  sessionStorage.getItem('wish_for_p4_p5', 'Religion')
}
//
function check_for_complete_p() {
  var p1_gewaehlt = false
  var p2_gewaehlt = false
  var p3_gewaehlt = false
  var p4_gewaehlt = false
  var p5_gewaehlt = false

  for (let index = 1; index < 6; index++) {
    if (index == 1) {
      for (let k = 1; k < 14; k++) {
        if (document.getElementById("pfach" + index + "." + k).checked == true) {
          p1_gewaehlt = true
        }
      }
    }
    if (index == 2) {
      for (let k = 1; k < 13; k++) {
        if (document.getElementById("pfach" + index + "." + k).checked == true) {
          p2_gewaehlt = true
        }
      }
    }
    if (index == 3) {
      for (let k = 1; k < 15; k++) {
        if (document.getElementById("pfach" + index + "." + k).checked == true) {
          p3_gewaehlt = true
        }
      }
    }
    if (index == 4) {
      for (let k = 1; k < 17; k++) {
        if (document.getElementById("pfach" + index + "." + k).checked == true) {
          p4_gewaehlt = true
        }
      }
    }
    if (index == 5) {
      for (let k = 1; k < 18; k++) {
        if (document.getElementById("pfach" + index + "." + k).checked == true) {
          p5_gewaehlt = true
        }
      }
    }
  }
  if (p1_gewaehlt == true && p2_gewaehlt == true && p3_gewaehlt == true && p4_gewaehlt == true && p5_gewaehlt == true) {
    console.log('gewählt')
    return true
  } else {
    console.log('error')
    return false
  }
}
function check_for_complete_gk_gese() {
  if (((document.getElementById("religion").disabled == true && document.getElementById("wn").disabled == true) || (document.getElementById("religion").checked == true || document.getElementById("wn").checked == true)) && 
  ((document.getElementById("musik").disabled == true && document.getElementById("kunst").disabled == true && document.getElementById("ds").disabled == true) || (document.getElementById("musik").checked == true || document.getElementById("kunst").checked == true || document.getElementById("ds").checked == true))
  && ((document.getElementById("erdkundja").disabled == true && document.getElementById("erdkundne").disabled == true) || (document.getElementById("erdkundja").checked == true || document.getElementById("erdkundne").checked == true)) && 
  ((document.getElementById("spanisch").disabled == true && document.getElementById("latein").disabled == true && document.getElementById("franzoesisch").disabled == true && document.getElementById("englisch").disabled == true) || (document.getElementById("englisch").checked == true || document.getElementById("spanisch").checked == true || document.getElementById("franzoesisch").checked == true || document.getElementById("latein").checked == true)) && 
  ((document.getElementById("physik").disabled == true && document.getElementById("bio").disabled == true && document.getElementById("informatik").disabled == true && document.getElementById("chemie").disabled == true) || (document.getElementById("physik").checked == true || document.getElementById("bio").checked == true || document.getElementById("informatik").checked == true || document.getElementById("chemie").checked == true)) &&
  ((document.getElementById("spanisch2").disabled == true && document.getElementById("latein2").disabled == true && document.getElementById("englisch2").disabled == true && document.getElementById("franzoesisch2").disabled == true && 
  document.getElementById("physik2").disabled == true && document.getElementById("informatik2").disabled == true && document.getElementById("chemie2").disabled == true && document.getElementById("bio2").disabled == true) || (document.getElementById("physik2").checked == true || document.getElementById("chemie2").checked == true || document.getElementById("informatik2").checked == true || document.getElementById("bio2").checked == true || document.getElementById("spanisch2").checked == true || document.getElementById("englisch2").checked == true || document.getElementById("latein2").checked == true || document.getElementById("franzoesisch2").checked == true))) 
  {
    console.log('gewählt')
    return true
  } else {
    console.log('error')
    return false
  }
}
function check_for_complete_gk_manu() {
  if (((document.getElementById("religion").disabled == true && document.getElementById("wn").disabled == true) || (document.getElementById("religion").checked == true || document.getElementById("wn").checked == true)) && 
  ((document.getElementById("musik").disabled == true && document.getElementById("kunst").disabled == true && document.getElementById("ds").disabled == true) || (document.getElementById("musik").checked == true || document.getElementById("kunst").checked == true || document.getElementById("ds").checked == true))
  && ((document.getElementById("erdkundja").disabled == true && document.getElementById("erdkundne").disabled == true) || (document.getElementById("erdkundja").checked == true || document.getElementById("erdkundne").checked == true)) && 
  ((document.getElementById("spanisch").disabled == true && document.getElementById("latein").disabled == true && document.getElementById("franzoesisch").disabled == true && document.getElementById("englisch").disabled == true) || (document.getElementById("englisch").checked == true || document.getElementById("spanisch").checked == true || document.getElementById("franzoesisch").checked == true || document.getElementById("latein").checked == true)) && 
  ((document.getElementById("physik").disabled == true && document.getElementById("bio").disabled == true && document.getElementById("informatik").disabled == true && document.getElementById("chemie").disabled == true) || (document.getElementById("physik").checked == true || document.getElementById("bio").checked == true || document.getElementById("informatik").checked == true || document.getElementById("chemie").checked == true))) 
  {
    console.log('gewählt')
    return true
  } else {
    console.log('error')
    return false
  }
}
function check_for_complete_gk_muku() {
  if (((document.getElementById("religion").disabled == true && document.getElementById("wn").disabled == true) || (document.getElementById("religion").checked == true || document.getElementById("wn").checked == true)) &&
  ((document.getElementById("erdkundja").disabled == true && document.getElementById("erdkundne").disabled == true) || (document.getElementById("erdkundja").checked == true || document.getElementById("erdkundne").checked == true)) && 
  ((document.getElementById("informatikja").disabled == true && document.getElementById("informatikne").disabled == true) || (document.getElementById("informatikja").checked == true || document.getElementById("informatikne").checked == true)) && 
  ((document.getElementById("physik").disabled == true && document.getElementById("bio").disabled == true && document.getElementById("chemie").disabled == true) || (document.getElementById("physik").checked == true || document.getElementById("bio").checked == true || document.getElementById("chemie").checked == true)) &&
  ((document.getElementById("spanisch").disabled == true && document.getElementById("latein").disabled == true && document.getElementById("franzoesisch").disabled == true && document.getElementById("englisch").disabled == true) || (document.getElementById("englisch").checked == true || document.getElementById("spanisch").checked == true || document.getElementById("franzoesisch").checked == true || document.getElementById("latein").checked == true)) && 
  ((document.getElementById("musik").disabled == true && document.getElementById("kunst").disabled == true && document.getElementById("ds").disabled == true) || (document.getElementById("musik").checked == true || document.getElementById("kunst").checked == true || document.getElementById("ds").checked == true))) 
  {
    console.log('gewählt')
    return true
  } else {
    console.log('error')
    return false
  }
}
function check_for_complete_gk_spra() {
  if (((document.getElementById("religion").disabled == true && document.getElementById("wn").disabled == true) || (document.getElementById("religion").checked == true || document.getElementById("wn").checked == true)) && 
  ((document.getElementById("musik").disabled == true && document.getElementById("kunst").disabled == true && document.getElementById("ds").disabled == true) || (document.getElementById("musik").checked == true || document.getElementById("kunst").checked == true || document.getElementById("ds").checked == true))
  && ((document.getElementById("erdkundja").disabled == true && document.getElementById("erdkundne").disabled == true) || (document.getElementById("erdkundja").checked == true || document.getElementById("erdkundne").checked == true)) && 
  ((document.getElementById("informatikja").disabled == true && document.getElementById("informatikne").disabled == true) || (document.getElementById("informatikja").checked == true || document.getElementById("informatikne").checked == true)) && 
  ((document.getElementById("physik").disabled == true && document.getElementById("bio").disabled == true && document.getElementById("chemie").disabled == true) || (document.getElementById("physik").checked == true || document.getElementById("bio").checked == true || document.getElementById("chemie").checked == true)) &&
  ((document.getElementById("spanisch").disabled == true && document.getElementById("latein").disabled == true && document.getElementById("franzoesisch").disabled == true) || (document.getElementById("spanisch").checked == true || document.getElementById("franzoesisch").checked == true || document.getElementById("latein").checked == true))) 
  {
    console.log('gewählt')
    return true
  } else {
    console.log('error')
    return false
  }
} 