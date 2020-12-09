function logicvariables() {
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

  sessionStorage.setItem('kernfaecher', 0)
  sessionStorage.setItem('nicht_kernfaecher', 0)
  sessionStorage.setItem('w_nk', true)

  sessionStorage.setItem("w[0]", true)
  sessionStorage.setItem("w[1]", true)
  sessionStorage.setItem("w[2]", true)
  sessionStorage.setItem("w[3]", false)
  sessionStorage.setItem('A_anzahl', 0)
  sessionStorage.setItem('B_anzahl', 0)
  sessionStorage.setItem('C_anzahl', 0)

  sessionStorage.setItem('counter_fs', 0)
  sessionStorage.setItem('counter_nw', 0)

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
  sessionStorage.setItem('extra12', false)
  sessionStorage.setItem('extra1', false)
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra11', false)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra5', false)
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra9', false)
  sessionStorage.setItem('extra13', false)
  sessionStorage.setItem('extra14', false)
  sessionStorage.setItem('extra15', false)
  sessionStorage.setItem('extra18', false)
  sessionStorage.setItem('sport_gk', false)
  sessionStorage.setItem('extra10', false)
  sessionStorage.setItem('extra8', false)
  sessionStorage.setItem('extra17', false)
  sessionStorage.setItem('extra16', false)
}
function logicsubjects(i) {
    var interaction = 0
    var help = 0
    switch (sessionStorage.getItem('pfach' + i)) {
        case 'Mathe':
            if (sessionStorage.getItem('w[2]') === 'true' && sessionStorage.getItem('mathe_w') === 'true') {
                if (i === 1) {
                    sessionStorage.setItem('profil', 'mana')
                    sessionStorage.setItem('p2_waehlbar[1]', true)
                    sessionStorage.setItem('p2_waehlbar[2]', true)
                    sessionStorage.setItem('p2_waehlbar[3]', true)
                    sessionStorage.setItem('p2_waehlbar[4]', true)              
                } 
            interaction = parseInt(sessionStorage.getItem('kernfaecher'))
            interaction += 1
            sessionStorage.setItem('kernfaecher', interaction)
            console.log('Kernfächer: ' + sessionStorage.getItem('kernfaecher'))

            interaction = parseInt(sessionStorage.getItem('C_anzahl'))
            interaction += 1
            sessionStorage.setItem('C_anzahl', interaction)
            console.log('C: ' + sessionStorage.getItem('C_anzahl'))

            interaction = sessionStorage.getItem('mathe_w')
            interaction = false
            sessionStorage.setItem('mathe_w', interaction)
            console.log('Wählbarkeit von Mathe: ' + sessionStorage.getItem('mathe_w'))
            } 
            break
        case 'Informatik':
          if (sessionStorage.getItem('w[2]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('informatik_w') == 'true') {
            if (i === 1) {
                sessionStorage.setItem('profil', 'mana')
                sessionStorage.setItem('p2_waehlbar[0]', true)
                sessionStorage.setItem('p2_waehlbar[2]', true)
                sessionStorage.setItem('p2_waehlbar[3]', true)
                sessionStorage.setItem('p2_waehlbar[4]', true) 
            }
            interaction = parseInt(sessionStorage.getItem('nicht_kernfaecher'))
            interaction += 1
            sessionStorage.setItem('nicht_kernfaecher', interaction)
            console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))

            interaction = parseInt(sessionStorage.getItem('C_anzahl'))
            interaction += 1
            sessionStorage.setItem('C_anzahl', interaction)
            console.log('C: ' + sessionStorage.getItem('C_anzahl'))

            interaction = sessionStorage.getItem('informatik_w')
            interaction = false
            sessionStorage.setItem('informatik_w', interaction)
            console.log('Wählbarkeit von Biologie: ' + sessionStorage.getItem('informatik_w'))
          }
          break
        case 'Chemie':
            if (sessionStorage.getItem('w[2]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('chemie_w') == 'true') {
                if (i === 1) {
                    sessionStorage.setItem('profil', 'mana')
                    sessionStorage.setItem('p2_waehlbar[0]', true)
                    sessionStorage.setItem('p2_waehlbar[1]', true)
                    sessionStorage.setItem('p2_waehlbar[3]', true)
                    sessionStorage.setItem('p2_waehlbar[4]', true)
                }
            interaction = parseInt(sessionStorage.getItem('nicht_kernfaecher'))
            interaction += 1
            sessionStorage.setItem('nicht_kernfaecher', interaction)
            console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))

            interaction = parseInt(sessionStorage.getItem('C_anzahl'))
            interaction += 1
            sessionStorage.setItem('C_anzahl', interaction)
            console.log('C: ' + sessionStorage.getItem('C_anzahl'))

            interaction = sessionStorage.getItem('chemie_w')
            interaction = false
            sessionStorage.setItem('chemie_w', interaction)
            console.log('Wählbarkeit von Chemie: ' + sessionStorage.getItem('chemie_w'))
          }
            break
        case 'Biologie':
          if (sessionStorage.getItem('w[2]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('biologie_w') == 'true') {
            if (i === 1) {
                sessionStorage.setItem('profil', 'mana')
                sessionStorage.setItem('p2_waehlbar[0]', true)
                sessionStorage.setItem('p2_waehlbar[1]', true)
                sessionStorage.setItem('p2_waehlbar[2]', true)
                sessionStorage.setItem('p2_waehlbar[4]', true)  
            }
            interaction = parseInt(sessionStorage.getItem('nicht_kernfaecher'))
            interaction += 1
            sessionStorage.setItem('nicht_kernfaecher', interaction)
            console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))

            interaction = parseInt(sessionStorage.getItem('C_anzahl'))
            interaction += 1
            sessionStorage.setItem('C_anzahl', interaction)
            console.log('C: ' + sessionStorage.getItem('C_anzahl'))

            interaction = sessionStorage.getItem('biologie_w')
            interaction = false
            sessionStorage.setItem('biologie_w', interaction)
            console.log('Wählbarkeit von Biologie: ' + sessionStorage.getItem('biologie_w'))
          }
            break
        case 'Physik':
          if (sessionStorage.getItem('w[2]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('physik_w') == 'true') {
            if (i === 1) {
              sessionStorage.setItem('profil', 'mana')
              sessionStorage.setItem('p2_waehlbar[0]', true)
              sessionStorage.setItem('p2_waehlbar[1]', true)
              sessionStorage.setItem('p2_waehlbar[2]', true)
              sessionStorage.setItem('p2_waehlbar[3]', true)  
          }
          interaction = parseInt(sessionStorage.getItem('nicht_kernfaecher'))
          interaction += 1
          sessionStorage.setItem('nicht_kernfaecher', interaction)
          console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))

          interaction = parseInt(sessionStorage.getItem('C_anzahl'))
          interaction += 1
          sessionStorage.setItem('C_anzahl', interaction)
          console.log('C: ' + sessionStorage.getItem('C_anzahl'))

          interaction = sessionStorage.getItem('physik_w')
          interaction = false
          sessionStorage.setItem('physik_w', interaction)
          console.log('Wählbarkeit von Physik: ' + sessionStorage.getItem('physik_w'))
          }      
            break
        case 'Deutsch':
          if (sessionStorage.getItem('w[0]') == 'true' && sessionStorage.getItem('deutsch_w') == 'true') {
            if (i === 1) {
                sessionStorage.setItem('profil', 'spra')
                console.log(sessionStorage.getItem('profil')) 
                sessionStorage.setItem('p2_waehlbar[6]', true)
                sessionStorage.setItem('p2_waehlbar[7]', true)
                sessionStorage.setItem('p2_waehlbar[8]', true)
                sessionStorage.setItem('p2_waehlbar[9]', true)
            }
            interaction = parseInt(sessionStorage.getItem('kernfaecher'))
            interaction += 1
            sessionStorage.setItem('kernfaecher', interaction)
            console.log('Kernfächer: ' + sessionStorage.getItem('kernfaecher'))

            interaction = parseInt(sessionStorage.getItem('A_anzahl'))
            interaction += 1
            sessionStorage.setItem('A_anzahl', interaction)
            console.log('A: ' + sessionStorage.getItem('A_anzahl'))

            interaction = sessionStorage.getItem('deutsch_w')
            interaction = false
            sessionStorage.setItem('deutsch_w', interaction)
            console.log('Wählbarkeit von Deutsch: ' + sessionStorage.getItem('deutsch_w'))
          }
            break
        case 'Englisch':
          if (sessionStorage.getItem('w[0]') == 'true' && sessionStorage.getItem('englisch_w') == 'true') {
            if (i === 1) {
              sessionStorage.setItem('profil', 'spra')
              sessionStorage.setItem('p2_waehlbar[5]', true)
              sessionStorage.setItem('p2_waehlbar[7]', true)
              sessionStorage.setItem('p2_waehlbar[8]', true)
              sessionStorage.setItem('p2_waehlbar[9]', true)
              interaction = parseInt(sessionStorage.getItem('kernfaecher'))
              interaction += 1
              sessionStorage.setItem('kernfaecher', interaction)
              console.log('Kernfächer: ' + sessionStorage.getItem('kernfaecher'))
          }
          if (i > 1) {
            var help2 = true
            for(let k = 1; k < i && help2 == true; k++) {
              if (sessionStorage.getItem('pfach' + k) != 'Latein' && sessionStorage.getItem('pfach' + k) != 'Spanisch' && sessionStorage.getItem('pfach' + k) != 'Französisch') {
                console.log('hi')
                help2 = false
              } else {
                console.log('hi2')
                help2 = true
              }
            }
            if (help2 == true) {
              interaction = parseInt(sessionStorage.getItem('nicht_kernfaecher'))
              interaction += 1
              sessionStorage.setItem('nicht_kernfaecher', interaction)
              console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))
            } else {
              interaction = parseInt(sessionStorage.getItem('kernfaecher'))
              interaction += 1
              sessionStorage.setItem('kernfaecher', interaction)
              console.log('Kernfächer: ' + sessionStorage.getItem('kernfaecher'))
            }
          }   
          interaction = parseInt(sessionStorage.getItem('A_anzahl'))
          interaction += 1
          sessionStorage.setItem('A_anzahl', interaction)
          console.log('A: ' + sessionStorage.getItem('A_anzahl'))

          interaction = sessionStorage.getItem('englisch_w')
          interaction = false
          sessionStorage.setItem('englisch_w', interaction)
          console.log('Wählbarkeit von Englisch: ' + sessionStorage.getItem('englisch_w'))
          }
            break      
        case 'Französisch':
          if (sessionStorage.getItem('w[0]') == 'true' && sessionStorage.getItem('franzoesisch_w') == 'true') {
            if (i === 1) {
                sessionStorage.setItem('profil', 'spra')
                sessionStorage.setItem('p2_waehlbar[5]', true)
                sessionStorage.setItem('p2_waehlbar[6]', true)
                sessionStorage.setItem('p2_waehlbar[8]', true)
                sessionStorage.setItem('p2_waehlbar[9]', true)
                interaction = parseInt(sessionStorage.getItem('kernfaecher'))
                interaction += 1
                sessionStorage.setItem('kernfaecher', interaction)
                console.log('Kernfächer: ' + sessionStorage.getItem('kernfaecher'))
            }
          }
          if (i > 1) {
            var help2 = true
            for(let k = 1; k < i && help2 == true; k++) {
              if (sessionStorage.getItem('pfach' + k) != 'Englisch' && sessionStorage.getItem('pfach' + k) != 'Spanisch' && sessionStorage.getItem('pfach' + k) != 'Latein') {
                console.log('hi')
                help2 = false
              } else {
                console.log('hi2')
                help2 = true
              }
            }
            if (help2 == true) {
              interaction = parseInt(sessionStorage.getItem('nicht_kernfaecher'))
              interaction += 1
              sessionStorage.setItem('nicht_kernfaecher', interaction)
              console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))
            } else {
              interaction = parseInt(sessionStorage.getItem('kernfaecher'))
              interaction += 1
              sessionStorage.setItem('kernfaecher', interaction)
              console.log('Kernfächer: ' + sessionStorage.getItem('kernfaecher'))
            }
          } 
          interaction = parseInt(sessionStorage.getItem('A_anzahl'))
          interaction += 1
          sessionStorage.setItem('A_anzahl', interaction)
          console.log('A: ' + sessionStorage.getItem('A_anzahl'))

          interaction = sessionStorage.getItem('franzoesisch_w')
          interaction = false
          sessionStorage.setItem('franzoesisch_w', interaction)
          console.log('Wählbarkeit von Französisch: ' + sessionStorage.getItem('franzoesisch_w'))
            break  
        case 'Latein':
          if (sessionStorage.getItem('w[0]') == 'true' && sessionStorage.getItem('latein_w') == 'true') {
            if (i === 1) {
                sessionStorage.setItem('profil', 'spra')
                sessionStorage.setItem('p2_waehlbar[5]', true)
                sessionStorage.setItem('p2_waehlbar[6]', true)
                sessionStorage.setItem('p2_waehlbar[7]', true)
                sessionStorage.setItem('p2_waehlbar[9]', true)

                interaction = parseInt(sessionStorage.getItem('kernfaecher'))
                interaction += 1
                sessionStorage.setItem('kernfaecher', interaction)
                console.log('Kernfächer: ' + sessionStorage.getItem('kernfaecher'))
            }
            if (i > 1) {
              var help2 = true
              for(let k = 1; k < i && help2 == true; k++) {
                if (sessionStorage.getItem('pfach' + k) != 'Englisch' && sessionStorage.getItem('pfach' + k) != 'Spanisch' && sessionStorage.getItem('pfach' + k) != 'Französisch') {
                  console.log('hi')
                  help2 = false
                } else {
                  console.log('hi2')
                  help2 = true
                }
              }
              if (help2 == true) {
                interaction = parseInt(sessionStorage.getItem('nicht_kernfaecher'))
                interaction += 1
                sessionStorage.setItem('nicht_kernfaecher', interaction)
                console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))
              } else {
                interaction = parseInt(sessionStorage.getItem('kernfaecher'))
                interaction += 1
                sessionStorage.setItem('kernfaecher', interaction)
                console.log('Kernfächer: ' + sessionStorage.getItem('kernfaecher'))
              }
            }   
          interaction = parseInt(sessionStorage.getItem('A_anzahl'))
          interaction += 1
          sessionStorage.setItem('A_anzahl', interaction)
          console.log('A: ' + sessionStorage.getItem('A_anzahl'))

          interaction = sessionStorage.getItem('latein_w')
          interaction = false
          sessionStorage.setItem('latein_w', interaction)
          console.log('Wählbarkeit von Latein: ' + sessionStorage.getItem('latein_w'))
        }
          break
        case 'Spanisch':
          if (sessionStorage.getItem('w[0]') == 'true' && sessionStorage.getItem('spanisch_w') == 'true') {
            if (i === 1) {
                sessionStorage.setItem('profil', 'spra')
                sessionStorage.setItem('p2_waehlbar[5]', true)
                sessionStorage.setItem('p2_waehlbar[6]', true)
                sessionStorage.setItem('p2_waehlbar[7]', true)
                sessionStorage.setItem('p2_waehlbar[8]', true)
                interaction = parseInt(sessionStorage.getItem('kernfaecher'))
                interaction += 1
                sessionStorage.setItem('kernfaecher', interaction)
                console.log('Kernfächer: ' + sessionStorage.getItem('kernfaecher'))
            }
          }
          if (i > 1) {
            var help2 = true
            for(let k = 1; k < i && help2 == true; k++) {
              if (sessionStorage.getItem('pfach' + k) != 'Englisch' && sessionStorage.getItem('pfach' + k) != 'Latein' && sessionStorage.getItem('pfach' + k) != 'Französisch') {
                console.log('hi')
                help2 = false
              } else {
                console.log('hi2')
                help2 = true
              }
            }
            if (help2 == true) {
              interaction = parseInt(sessionStorage.getItem('nicht_kernfaecher'))
              interaction += 1
              sessionStorage.setItem('nicht_kernfaecher', interaction)
              console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))
            } else {
              interaction = parseInt(sessionStorage.getItem('kernfaecher'))
              interaction += 1
              sessionStorage.setItem('kernfaecher', interaction)
              console.log('Kernfächer: ' + sessionStorage.getItem('kernfaecher'))
            }
          }   
          interaction = parseInt(sessionStorage.getItem('A_anzahl'))
          interaction += 1
          sessionStorage.setItem('A_anzahl', interaction)
          console.log('A: ' + sessionStorage.getItem('A_anzahl'))

          interaction = sessionStorage.getItem('spanisch_w')
          interaction = false
          sessionStorage.setItem('spanisch_w', interaction)
          console.log('Wählbarkeit von Spanisch: ' + sessionStorage.getItem('spanisch_w'))
            break
        case 'Kunst':
          if (sessionStorage.getItem('w[0]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('kunst_w') == 'true') {
            if (i === 1) {
              sessionStorage.setItem('profil', 'muku')
              sessionStorage.setItem('p2_waehlbar[0]', true)
              sessionStorage.setItem('p2_waehlbar[5]', true)
            }
          sessionStorage.setItem('musik_w', false)
          interaction = parseInt(sessionStorage.getItem('nicht_kernfaecher'))
          interaction += 1
          sessionStorage.setItem('nicht_kernfaecher', interaction)
          console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))

          interaction = parseInt(sessionStorage.getItem('A_anzahl'))
          interaction += 1
          sessionStorage.setItem('A_anzahl', interaction)
          console.log('A: ' + sessionStorage.getItem('A_anzahl'))

          interaction = sessionStorage.getItem('kunst_w')
          interaction = false
          sessionStorage.setItem('kunst_w', interaction)
          console.log('Wählbarkeit von Kunst: ' + sessionStorage.getItem('kunst_w'))
          }
            break
        case 'Musik':
          if (sessionStorage.getItem('w[0]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('musik_w') == 'true') {
            if (i === 1) {
                sessionStorage.setItem('profil', 'muku')
                sessionStorage.setItem('p2_waehlbar[0]', true)
                sessionStorage.setItem('p2_waehlbar[5]', true)
            }
            sessionStorage.setItem('kunst_w', false)
            interaction = parseInt(sessionStorage.getItem('nicht_kernfaecher'))
            interaction += 1
            sessionStorage.setItem('nicht_kernfaecher', interaction)
            console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))

            interaction = parseInt(sessionStorage.getItem('A_anzahl'))
            interaction += 1
            sessionStorage.setItem('A_anzahl', interaction)
            console.log('A: ' + sessionStorage.getItem('A_anzahl'))

            interaction = sessionStorage.getItem('musik_w')
            interaction = false
            sessionStorage.setItem('musik_w', interaction)
            console.log('Wählbarkeit von Musik: ' + sessionStorage.getItem('musik_w'))
          }
            break
        case 'Geschichte':
          if (sessionStorage.getItem('w[1]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('geschichte_w') == 'true') {
            if (i === 1) {
                sessionStorage.setItem('profil', 'gese')
                for (var index = 0; index < 14; index++) {
                    sessionStorage.setItem('p2_waehlbar[' + index + ']', true)
                }
            }
            interaction = parseInt(sessionStorage.getItem('nicht_kernfaecher'))
            interaction += 1
            sessionStorage.setItem('nicht_kernfaecher', interaction)
            console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))

            interaction = parseInt(sessionStorage.getItem('B_anzahl'))
            interaction += 1
            sessionStorage.setItem('B_anzahl', interaction)
            console.log('B: ' + sessionStorage.getItem('B_anzahl'))

            interaction = sessionStorage.getItem('geschichte_w')
            interaction = false
            sessionStorage.setItem('geschichte_w', interaction)
            console.log('Wählbarkeit von Geschichte: ' + sessionStorage.getItem('geschichte_w'))
          }
            break
        case 'Religion':
          if (sessionStorage.getItem('w[1]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('religion_w') == 'true') {
            interaction = parseInt(sessionStorage.getItem('nicht_kernfaecher'))
            interaction += 1
            sessionStorage.setItem('nicht_kernfaecher', interaction)
            console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))

            interaction = parseInt(sessionStorage.getItem('B_anzahl'))
            interaction += 1
            sessionStorage.setItem('B_anzahl', interaction)
            console.log('B: ' + sessionStorage.getItem('B_anzahl'))

            interaction = sessionStorage.getItem('religion_w')
            interaction = false
            sessionStorage.setItem('religion_w', interaction)
            console.log('Wählbarkeit von Religion: ' + sessionStorage.getItem('religion_w'))
          }
            break
        case 'Erdkunde':
          if (sessionStorage.getItem('w[1]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('erdkunde_w') == 'true') {  
            interaction = parseInt(sessionStorage.getItem('nicht_kernfaecher'))
            interaction += 1
            sessionStorage.setItem('nicht_kernfaecher', interaction)
            console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))

            interaction = parseInt(sessionStorage.getItem('B_anzahl'))
            interaction += 1
            sessionStorage.setItem('B_anzahl', interaction)
            console.log('B: ' + sessionStorage.getItem('B_anzahl'))

            interaction = sessionStorage.getItem('erdkunde_w')
            interaction = false
            sessionStorage.setItem('erdkunde_w', interaction)
            console.log('Wählbarkeit von Erdkunde: ' + sessionStorage.getItem('erdkunde_w'))
          }
            break
        case 'Politik Wirtschaft':
          if (sessionStorage.getItem('w[1]') == 'true' && sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('powi_w') == 'true') {
            interaction = parseInt(sessionStorage.getItem('nicht_kernfaecher'))
            interaction += 1
            sessionStorage.setItem('nicht_kernfaecher', interaction)
            console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))

            interaction = parseInt(sessionStorage.getItem('B_anzahl'))
            interaction += 1
            sessionStorage.setItem('B_anzahl', interaction)
            console.log('B: ' + sessionStorage.getItem('B_anzahl'))

            interaction = sessionStorage.getItem('powi_w')
            interaction = false
            sessionStorage.setItem('powi_w', interaction)
            console.log('Wählbarkeit von PoWi: ' + sessionStorage.getItem('powi_w'))
          }
          console.log('hi')
            break
        case 'Sport':
          if (sessionStorage.getItem('w[3]') == 'true') {
            if (sessionStorage.getItem('w_nk') == 'true' && sessionStorage.getItem('sport_w') == true) {
              interaction = parseInt(sessionStorage.getItem('nicht_kernfaecher'))
              interaction += 1
              sessionStorage.setItem('nicht_kernfaecher', interaction)
              console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))
            }
          }
          break
    } 
  if (sessionStorage.getItem('nicht_kernfaecher') == 3) {
    sessionStorage.setItem('w_nk', false)
  }
  if (sessionStorage.getItem('A_anzahl') != 0 && sessionStorage.getItem('B_anzahl') != 0 && sessionStorage.getItem('C_anzahl') != 0 && i == 4) {
    sessionStorage.setItem('w[3]', true)
  }
  if (parseInt(sessionStorage.getItem('A_anzahl')) == 3) {
    sessionStorage.setItem('w[0]', false)
    if (parseInt(sessionStorage.getItem('B_anzahl')) == 1) {
      sessionStorage.setItem('w[1]', false)
    }
    if (parseInt(sessionStorage.getItem('C_anzahl')) == 1) {
      sessionStorage.setItem('w[2]', false)
    }
  }
  if (parseInt(sessionStorage.getItem('B_anzahl')) == 3) {
    sessionStorage.setItem('w[1]', false)
    if (parseInt(sessionStorage.getItem('A_anzahl')) == 1) {
      sessionStorage.setItem('w[0]', false)
    }
    if (parseInt(sessionStorage.getItem('C_anzahl')) == 1) {
      sessionStorage.setItem('w[2]', false)
    }
  }
  if (parseInt(sessionStorage.getItem('C_anzahl')) == 3) {
    sessionStorage.setItem('w[2]', false)
    if (parseInt(sessionStorage.getItem('A_anzahl')) == 1) {
      sessionStorage.setItem('w[0]', false)
    }
    if (parseInt(sessionStorage.getItem('B_anzahl')) == 1) {
      sessionStorage.setItem('w[1]', false)
    }
  }
  if (parseInt(sessionStorage.getItem('A_anzahl')) == 2 && parseInt(sessionStorage.getItem('B_anzahl')) == 2){
    sessionStorage.setItem('w[0]', false)
    sessionStorage.setItem('w[1]', false)
    sessionStorage.setItem('w[2]', true)
    sessionStorage.setItem('w_nk', true)
  }
  if (parseInt(sessionStorage.getItem('B_anzahl')) == 2 && parseInt(sessionStorage.getItem('C_anzahl')) == 2){
    sessionStorage.setItem('w[1]', false)
    sessionStorage.setItem('w[2]', false)
    sessionStorage.setItem('w[0]', true)
    sessionStorage.setItem('w_nk', true)
  }
  if (parseInt(sessionStorage.getItem('A_anzahl')) == 2 && parseInt(sessionStorage.getItem('C_anzahl')) == 2){
    sessionStorage.setItem('w[0]', false)
    sessionStorage.setItem('w[2]', false)
    sessionStorage.setItem('w[1]', true)
    sessionStorage.setItem('w_nk', true)
    sessionStorage.setItem('geschichte_w', true)
  }
  if (parseInt(sessionStorage.getItem('C_anzahl')) == 2 && parseInt(sessionStorage.getItem('A_anzahl')) == 1 && parseInt(sessionStorage.getItem('kernfaecher')) == 1) {
    sessionStorage.setItem('chemie_w', false)
    sessionStorage.setItem('biologie_w', false)
    sessionStorage.setItem('physik_w', false)
    sessionStorage.setItem('informatik_w', false)
  }
  if (parseInt(sessionStorage.getItem('A_anzahl')) == 2 && parseInt(sessionStorage.getItem('C_anzahl')) == 1 && parseInt(sessionStorage.getItem('kernfaecher')) == 1) {
    sessionStorage.setItem('musik_w', false)
    sessionStorage.setItem('kunst_w', false)
    sessionStorage.setItem('chemie_w', false)
    sessionStorage.setItem('biologie_w', false)
    sessionStorage.setItem('physik_w', false)
    sessionStorage.setItem('informatik_w', false)
    sessionStorage.setItem('w[1]', true)
  }
  var nw_for_mu_and_ku = 0
  for (let index = 1; index < 6; index++) {
    if (sessionStorage.getItem('pfach' + index) == 'Biologie' || sessionStorage.getItem('pfach' + index) == 'Physik' || sessionStorage.getItem('pfach' + index) == 'Informatik' || sessionStorage.getItem('pfach' + index) == 'Chemie') {
      nw_for_mu_and_ku++
    }
  }
  if (nw_for_mu_and_ku >= 2) {
    sessionStorage.setItem('musik_w', false)
    sessionStorage.setItem('kunst_w', false)
    sessionStorage.setItem('biologie_w', false)
    sessionStorage.setItem('physik_w', false)
    sessionStorage.setItem('informatik_w', false)
    sessionStorage.setItem('chemie_w', false)
  }
}

function proof_in_advance(pfach, i) {
  var all_subjects = Array('', 'Mathe', 'Chemie', 'Englisch', 'Physik', 'Biologie', 'Franzoesisch', 'Latein', 'Musik', 'Informatik', 'Kunst', 'Spanisch', 'Deutsch', 'Geschichte', 'Politik Wirtschaft', 'Religion', 'Erdkunde', 'Sport')
  for (let j = 0; j < 18; j++) {
    switch (all_subjects[j]) {
      case 'Mathe':
        proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[0]'), sessionStorage.getItem('mathe_w'))
        break;
      case 'Chemie':
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[2]'), sessionStorage.getItem('chemie_w'))
        break;
      case 'Englisch':
        var help_fs = false
        for (let index = 1; index < 6; index++) {
          if (sessionStorage.getItem('pfach' + index) == 'Latein' || sessionStorage.getItem('pfach' + index) == 'Spanisch' || sessionStorage.getItem('pfach' + index) == 'Französisch') {
            help_fs = true
          }
        } 
        if (help_fs == true) {
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[6]'), sessionStorage.getItem('englisch_w'))
        } else {
          proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[6]'), sessionStorage.getItem('englisch_w'))
        }
      break;
      case 'Physik':
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[4]'), sessionStorage.getItem('physik_w'))
        break;
      case 'Biologie':
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[3]'), sessionStorage.getItem('biologie_w'))
      	 break;
      case 'Geschichte':
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[1]'), sessionStorage.getItem('p2_waehlbar[12]'), sessionStorage.getItem('geschichte_w'))
        break
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
      case 'Musik':
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[11]'), sessionStorage.getItem('musik_w'))
        break;
      case 'Informatik':
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[1]'), sessionStorage.getItem('informatik_w'))
        break;
      case 'Kunst':
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[10]'), sessionStorage.getItem('kunst_w'))
        break;
      case 'Politik Wirtschaft':
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[1]'), sessionStorage.getItem('p2_waehlbar[13]'), sessionStorage.getItem('powi_w'))
        break;
      case 'Spanisch':
        var help_fs = false
        for (let index = 1; index < 6; index++) {
          if (sessionStorage.getItem('pfach' + index) == 'Französisch' || sessionStorage.getItem('pfach' + index) == 'Latein' || sessionStorage.getItem('pfach' + index) == 'Englisch') {
            help_fs = true
          }
        } 
        if (help_fs == true) {
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[9]'), sessionStorage.getItem('spanisch_w'))
        } else {
          proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[9]'), sessionStorage.getItem('spanisch_w'))
        }
        break; 
      case 'Deutsch':
        proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[5]'), sessionStorage.getItem('deutsch_w'))
        break;        
      case 'Religion':
        if (sessionStorage.getItem('w[1]') === 'true' && sessionStorage.getItem('w_nk') === 'true' && sessionStorage.getItem('religion_w') === 'true') {
          if (i <= 3) {
            document.getElementById(pfach + j + ".label").style.opacity = '0.5'
            var a = toString(pfach + j)
            a = pfach + j
            document.getElementById(a).disabled = true
            break
          }
          document.getElementById(pfach + j + ".label").style.opacity = '1'
        } else {
          document.getElementById(pfach + j + ".label").style.opacity = '0.5'
          var a = toString(pfach + j)
          a = pfach + j
          document.getElementById(a).disabled = true
        }
        break;
      case 'Erdkunde':
        if (sessionStorage.getItem('w[1]') === 'true' && sessionStorage.getItem('w_nk') === 'true' && sessionStorage.getItem('erdkunde_w') === 'true') {
          if (i <= 3) {
            document.getElementById(pfach + j + ".label").style.opacity = '0.5'
            var a = toString(pfach + j)
            a = pfach + j
            document.getElementById(a).disabled = true
            break
          }
          document.getElementById(pfach + j + ".label").style.opacity = '1'
        } else {
          document.getElementById(pfach + j + ".label").style.opacity = '0.5'
        }
        break; 
      case 'Sport':
        if (sessionStorage.getItem('w[3]') != 'true') {
          document.getElementById(pfach + j + ".label").style.opacity = '0.5'
          var a = toString(pfach + j)
          a = pfach + j
          console.log(a)
          document.getElementById(a).disabled = true
        } else {
          if (sessionStorage.getItem('w_nk') === 'true' && sessionStorage.getItem('sport_w') === 'true') {
            document.getElementById(pfach + j + ".label").style.opacity = '1'
          } else {
            document.getElementById(pfach + j + ".label").style.opacity = '0.5'
          }
        }
        break; 
    }
  }
}

function proof_in_advance_visibility (pfach, i, j, bereich, waehlbar, fachvariable){
  if (bereich === 'true' && fachvariable === 'true') {
    if (i === 2 && waehlbar === 'false') {
      document.getElementById(pfach + j + ".label").style.opacity = '0.5'
      var a = toString(pfach + j)
      a = pfach + j
      document.getElementById(a).disabled = true
    } else {
      document.getElementById(pfach + j + ".label").style.opacity = '1'
    }
  } else {
    document.getElementById(pfach + j + ".label").style.opacity = '0.5'
    var a = toString(pfach + j)
    a = pfach + j
    document.getElementById(a).disabled = true
  }
}
function proof_in_advance_visibility_w_nk (pfach, i, j, bereich, waehlbar, fachvariable){
  if (bereich === 'true' && sessionStorage.getItem('w_nk') === 'true' && fachvariable === 'true') {
    if (i === 2 && waehlbar === 'false') {
      document.getElementById(pfach + j + ".label").style.opacity = '0.5'
      var a = toString(pfach + j)
      a = pfach + j
      document.getElementById(a).disabled = true
    } else {
      document.getElementById(pfach + j + ".label").style.opacity = '1'
    }
  } else {
    document.getElementById(pfach + j + ".label").style.opacity = '0.5'
    var a = toString(pfach + j)
    a = pfach + j
    document.getElementById(a).disabled = true
  }
}

function mana(){
  for (var j = 1; j < 6; j++) {
    pflicht(j)
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
    if (sessionStorage.getItem('pfach' + j) == 'Biologie' || sessionStorage.getItem('pfach' + j) == 'Physik' || sessionStorage.getItem('pfach' + j) == 'Chemie' || sessionStorage.getItem('pfach' + j) == 'Informatik') {
      interaction = parseInt(sessionStorage.getItem('counter_nw'))
      interaction += 1
      sessionStorage.setItem('counter_nw', interaction)
      console.log('NW-Counter: ' + sessionStorage.getItem('counter_nw'))
    }
  }
  //Sport
  if (sessionStorage.getItem('pfach4') == 'Sport') {
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
    }
  } else {
    sessionStorage.setItem('extra3', true)
    document.getElementById("spanisch.label").style.opacity = '0.5'
    document.getElementById("latein.label").style.opacity = '0.5'
    document.getElementById("franzoesisch.label").style.opacity = '0.5'
  }
  if (help_informatik == true) {
    document.getElementById("informatikja.label").style.opacity = '0.5'
    document.getElementById("informatikne.label").style.opacity = '0.5'
  } else {
    document.getElementById("informatikja.label").style.opacity = '1'
    document.getElementById("informatikne.label").style.opacity = '1'
  }

  //Sport
  if (sessionStorage.getItem('pfach4') == 'Sport') {
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
    console.log('ghjfldkgnps')
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
  if (sessionStorage.getItem('pfach4') == 'Sport') {
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
  }
  //Sport
  if (sessionStorage.getItem('pfach4') == 'Sport') {
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
}



function pflicht(j) {
  if (sessionStorage.getItem('extra12') == false && sessionStorage.getItem('pfach' + j) == 'Deutsch') {
    sessionStorage.setItem('extra12', false)
  } else {
    sessionStorage.setItem('extra12', true)
  }
  if (sessionStorage.getItem('extra1') == false && sessionStorage.getItem('pfach' + j) == 'Mathe') {
    sessionStorage.setItem('extra1', false)
  } else {
    sessionStorage.setItem('extra1', true)
  }
  if (sessionStorage.getItem('extra13') == false && sessionStorage.getItem('pfach' + j) == 'Geschichte') {
    sessionStorage.setItem('extra13', false)
  } else {
    sessionStorage.setItem('extra13', true)
  }
  if (sessionStorage.getItem('extra14') == false && sessionStorage.getItem('pfach' + j) == 'Politik Wirtschaft') {
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
}
function set_religion() {
  sessionStorage.setItem('extra15', true)
  sessionStorage.setItem('extra18', false)
}
function set_wn() {
  sessionStorage.setItem('extra15', false)
  sessionStorage.setItem('extra18', true)
}
function set_musik() {
  sessionStorage.setItem('extra8', true)
  sessionStorage.setItem('extra10', false)
  sessionStorage.setItem('extra17', false)
}
function set_kunst() {
  sessionStorage.setItem('extra8', false)
  sessionStorage.setItem('extra10', true)
  sessionStorage.setItem('extra17', false)
}
function set_ds() {
  sessionStorage.setItem('extra8', false)
  sessionStorage.setItem('extra10', false)
  sessionStorage.setItem('extra17', true) 
}
function set_englisch() {
  sessionStorage.setItem('extra3', true)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra11', false)
}
function set_franzoesisch() {
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra6', true)
  sessionStorage.setItem('extra11', false)
}
function set_latein() {
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra7', true)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra11', false)
}
function set_spanisch() {
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra11', true)
}
function set_erdkunde() {
  sessionStorage.setItem('extra16', true)
} 
function set_erdkunde_false() {
  sessionStorage.setItem('extra16', false)
}
function set_informatik() {
  sessionStorage.setItem('extra9', true)
} 
function set_informatik_false() {
  sessionStorage.setItem('extra9', false)
}
function set_biologie() {
  sessionStorage.setItem('extra5', true)
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra9', false)
}
function set_physik() {
  sessionStorage.setItem('extra4', true)
  sessionStorage.setItem('extra5', false)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra9', false)
} 
function set_chemie() {
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra2', true)
  sessionStorage.setItem('extra9', false)
  sessionStorage.setItem('extra5', false)
}
function set_informatik() {
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra9', true)
  sessionStorage.setItem('extra5', false) 
}  
function set_biologie_gese() {
  sessionStorage.setItem('extra5', true)
  document.getElementById("biologie2.label").style.opacity = '0.5'
  document.getElementById("biologie2").disabled = true
}
function set_physik_gese() {
  sessionStorage.setItem('extra4', true)
  document.getElementById("physik2.label").style.opacity = '0.5'
  document.getElementById("physik2").disabled = true
} 
function set_chemie_gese() {
  sessionStorage.setItem('extra2', true)
  document.getElementById("chemie2.label").style.opacity = '0.5'
  document.getElementById("chemie2").disabled = true
}
function set_informatik_gese() {
  sessionStorage.setItem('extra9', true)
  document.getElementById("informatik2.label").style.opacity = '0.5'
  document.getElementById("informatik2").disabled = true
}   
function set_spanisch_gese() {
  sessionStorage.setItem('extra11', true)
  document.getElementById("spanisch2.label").style.opacity = '0.5'
  document.getElementById("spanisch2").disabled = true
}
function set_latein_gese() {
  sessionStorage.setItem('extra7', true)
  document.getElementById("latein2.label").style.opacity = '0.5'
  document.getElementById("latein2").disabled = true
}
function set_englisch_gese() {
  sessionStorage.setItem('extra3', true)
  document.getElementById("englisch2.label").style.opacity = '0.5'
  document.getElementById("englisch2").disabled = true
}
function set_franzoesisch_gese() {
  sessionStorage.setItem('extra6', true)
  document.getElementById("franzoesisch2.label").style.opacity = '0.5'
  document.getElementById("franzoesisch2").disabled = true
}
function set_englisch_gese2() {
  sessionStorage.setItem('extra3', true)
}
function set_franzoesisch_gese2() {
  sessionStorage.setItem('extra6', true)
}
function set_latein_gese2() {
  sessionStorage.setItem('extra7', true)
}
function set_spanisch_gese2() {
  sessionStorage.setItem('extra11', true)
}
function set_physik_gese2() {
  sessionStorage.setItem('extra4', true)
}
function set_informatik_gese2() {
  sessionStorage.setItem('extra9', true)
}
function set_chemie_gese2() {
  sessionStorage.setItem('chemie', true)
}
function set_biologie_gese2() {
  sessionStorage.setItem('extra5', true)
}