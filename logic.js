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

  sessionStorage.setItem(sessionStorage.getItem('nicht_waehlen_Fach'), false)

  //Variablen, die definieren, welche Grundkurse gewählt wurden
  //Legende für die Extras
  /*
  1: Biologie
  2: Chemie
  3: DS
  4: Deutsch
  5: Englisch
  6: Erdkunde
  7: Französisch
  8: Geschichte
  9: Informatik
  10: Kunst
  11: Latein
  12: Mathe
  13: Musik
  14: Physik
  15: PoWi
  16: Religion
  17: Spanisch
  18: WN
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

  sessionStorage.setItem('lp1', 13)
  sessionStorage.setItem('lp2', 12)
  sessionStorage.setItem('lp3', 14)
  sessionStorage.setItem('lp4', 16)
  sessionStorage.setItem('lp5', 17)

  sessionStorage.setItem('lk_stundenanzahl', 5)
  sessionStorage.setItem('gk_stundenanzahl', 3)
  sessionStorage.setItem('sp_sf_stundenanzahl', 2)

  sessionStorage.setItem('stundenanzahl_gesamt', 21)
  sessionStorage.setItem('stundenanzahl_minimum', 32)

  sessionStorage.setItem('deutsch_already_counted', false)
  sessionStorage.setItem('geschichte_already_counted', false)
  sessionStorage.setItem('powi_already_counted', false)
  sessionStorage.setItem('mathe_already_counted', false)

  sessionStorage.setItem('pfaecher_gewaehlt', false)
  sessionStorage.setItem('gks_gewaehlt', false)
}
//Kernfächer werden um 1 erhöht
function kernfaecher_add() {
  sessionStorage.setItem('kernfaecher', (parseInt(sessionStorage.getItem('kernfaecher')) + 1))
}
//Kernfächer werden um 1 reduziert
function kernfaecher_dec() {
  sessionStorage.setItem('kernfaecher', (parseInt(sessionStorage.getItem('kernfaecher')) - 1))
}
//Nicht-Kernfächer werden um 1 erhöht
function nicht_kernfaecher_add() {
  sessionStorage.setItem('nicht_kernfaecher', (parseInt(sessionStorage.getItem('nicht_kernfaecher')) + 1))
}
//Nicht-Kernfächer werden um 1 reduziert
function nicht_kernfaecher_dec() {
  sessionStorage.setItem('nicht_kernfaecher', (parseInt(sessionStorage.getItem('nicht_kernfaecher')) - 1))
}
//Der Zähler für die Fächer im jeweiligen Bereich wird um 1 erhöht
function bereich_add(abc) {
  sessionStorage.setItem((abc + '_anzahl'), (parseInt(sessionStorage.getItem(abc + '_anzahl')) + 1))
}
//Der Zähler für die Fächer im jeweiligen Bereich wird um 1 reduziert
function bereich_dec(abc) {
  sessionStorage.setItem((abc + '_anzahl'), (parseInt(sessionStorage.getItem(abc + '_anzahl')) - 1))
}
//Die Wählbarkeit eines Faches wird verändert
function waehlbarkeit(fach_w, choose) {
  sessionStorage.setItem(fach_w, choose)
}
function check_fach_for_pfach(fach) {
  let help = false
  for (let i = 1; i < 6; i++) {
    if (sessionStorage.getItem('pfach' + i) == fach) {
      help = true
    }
  }
  return help
}
//Die Buttons einer Stufe werden deaktiviert
function disable_buttons_p(i) {
  for (let j = 1; j < parseInt(sessionStorage.getItem('lp' + i)) + 1; j++) {
      document.getElementById('pfach' + i + "." + j).disabled = true
  }
}
function enable_fachbutton(fach) {
  document.getElementById(fach + ".label").style.opacity = '1'
  document.getElementById(fach).disabled = false
}
function disable_fachbutton(fach) {
  document.getElementById(fach + ".label").style.opacity = '0.5'
  document.getElementById(fach).disabled = true
}
//Der Zähler für Naturwissenschaften wird um 1 erhöht
function nw_add() {
  sessionStorage.setItem('counter_nw', (parseInt(sessionStorage.getItem('counter_nw')) + 1))
}
//Der Zähler für Fremdsprachen wird um 1 erhöht
function fs_add() {
  sessionStorage.setItem('counter_fs', (parseInt(sessionStorage.getItem('counter_fs')) + 1))
}
function fs_schon_gewaehlt_logic(fach_a, fach_b, fach_c) {
  let help2 = false
  for (let k = 1; k < i && help2 == false; k++) {
    if (sessionStorage.getItem('pfach' + k) != fach_a && sessionStorage.getItem('pfach' + k) != fach_b && sessionStorage.getItem('pfach' + k) != fach_c) {
      help2 = false
    } else {
      help2 = true
    }
  }
  if (help2 == true) {
    nicht_kernfaecher_add()
  } else {
    kernfaecher_add()
  }
}
//Der Teil, der Logik, welcher die Variablen setzt
function logicsubjects(i) {
  switch (sessionStorage.getItem('pfach' + i)) {
    case 'Mathe':
      //Wenn Mathe P1 ist
      if (i === 1) {
        sessionStorage.setItem('profil', 'mana')
        sessionStorage.setItem('p2_waehlbar[1]', true)
        sessionStorage.setItem('p2_waehlbar[2]', true)
        sessionStorage.setItem('p2_waehlbar[3]', true)
        sessionStorage.setItem('p2_waehlbar[4]', true)
      }
      kernfaecher_add()
      bereich_add('C')
      waehlbarkeit('mathe_w', false)
      break
    case 'Informatik':
      //Wenn Informatik P1 ist
      if (i === 1) {
        sessionStorage.setItem('profil', 'mana')
        sessionStorage.setItem('p2_waehlbar[0]', true)
        sessionStorage.setItem('p2_waehlbar[2]', true)
        sessionStorage.setItem('p2_waehlbar[3]', true)
        sessionStorage.setItem('p2_waehlbar[4]', true)
        sessionStorage.setItem('chemie_w', true)
        sessionStorage.setItem('biologie_w', true)
        sessionStorage.setItem('physik_w', true)
      }
      nicht_kernfaecher_add()
      bereich_add('C')
      waehlbarkeit('informatik_w', false)
      nw_add()
      break
    case 'Chemie':
      //Wenn Chemie P1 ist
      if (i === 1) {
        sessionStorage.setItem('profil', 'mana')
        sessionStorage.setItem('p2_waehlbar[0]', true)
        sessionStorage.setItem('p2_waehlbar[1]', true)
        sessionStorage.setItem('p2_waehlbar[3]', true)
        sessionStorage.setItem('p2_waehlbar[4]', true)
        sessionStorage.setItem('informatik_w', true)
        sessionStorage.setItem('biologie_w', true)
        sessionStorage.setItem('physik_w', true)
      }
      nicht_kernfaecher_add()
      bereich_add('C')
      waehlbarkeit('chemie_w', false)
      nw_add()
      break
    case 'Biologie':
      //Wenn Biologie P1 ist
      if (i === 1) {
        sessionStorage.setItem('profil', 'mana')
        sessionStorage.setItem('p2_waehlbar[0]', true)
        sessionStorage.setItem('p2_waehlbar[1]', true)
        sessionStorage.setItem('p2_waehlbar[2]', true)
        sessionStorage.setItem('p2_waehlbar[4]', true)
        sessionStorage.setItem('informatik_w', true)
        sessionStorage.setItem('chemie_w', true)
        sessionStorage.setItem('physik_w', true)
      }
      nicht_kernfaecher_add()
      bereich_add('C')
      waehlbarkeit('biologie_w', false)
      nw_add()
      break
    case 'Physik':
      //Wenn Physik P1 ist
      if (i === 1) {
        sessionStorage.setItem('profil', 'mana')
        sessionStorage.setItem('p2_waehlbar[0]', true)
        sessionStorage.setItem('p2_waehlbar[1]', true)
        sessionStorage.setItem('p2_waehlbar[2]', true)
        sessionStorage.setItem('p2_waehlbar[3]', true)
        sessionStorage.setItem('informatik_w', true)
        sessionStorage.setItem('chemie_w', true)
        sessionStorage.setItem('biologie_w', true)
      }
      nicht_kernfaecher_add()
      bereich_add('C')
      waehlbarkeit('physik_w', false)
      nw_add()
      break
    case 'Deutsch':
      //Wenn Deutsch P1 ist
      if (i === 1) {
        sessionStorage.setItem('profil', 'spra')
        sessionStorage.setItem('p2_waehlbar[6]', true)
        sessionStorage.setItem('p2_waehlbar[7]', true)
        sessionStorage.setItem('p2_waehlbar[8]', true)
        sessionStorage.setItem('p2_waehlbar[9]', true)
      }
      kernfaecher_add()
      bereich_add('A')
      waehlbarkeit('deutsch_w', false)
      break
    case 'Englisch':
      //Wenn Englisch P1 ist
      if (i === 1) {
        sessionStorage.setItem('profil', 'spra')
        sessionStorage.setItem('p2_waehlbar[5]', true)
        sessionStorage.setItem('p2_waehlbar[7]', true)
        sessionStorage.setItem('p2_waehlbar[8]', true)
        sessionStorage.setItem('p2_waehlbar[9]', true)
        kernfaecher_add()
      }
      //Wenn Englisch P2-P5 ist
      if (i > 1) {
        fs_schon_gewaehlt_logic('Latein', 'Französisch', 'Spanisch')
      }
      bereich_add('A')
      waehlbarkeit('englisch_w', false)
      fs_add()
      break
    case 'Französisch':
      //Wenn Französisch P1 ist
      if (i === 1) {
        sessionStorage.setItem('profil', 'spra')
        sessionStorage.setItem('p2_waehlbar[5]', true)
        sessionStorage.setItem('p2_waehlbar[6]', true)
        sessionStorage.setItem('p2_waehlbar[8]', true)
        sessionStorage.setItem('p2_waehlbar[9]', true)
        kernfaecher_add()
      }
      //Wenn Französisch P2-P5 ist
      if (i > 1) {
        fs_schon_gewaehlt_logic('Latein', 'Englisch', 'Spanisch')
      }
      sessionStorage.setItem('latein_w', false)
      sessionStorage.setItem('spanisch_w', false)
      bereich_add('A')
      waehlbarkeit('franzoesisch_w', false)
      fs_add()
      break
    case 'Latein':
      //Wenn Latein P1 ist
      if (i === 1) {
        sessionStorage.setItem('profil', 'spra')
        sessionStorage.setItem('p2_waehlbar[5]', true)
        sessionStorage.setItem('p2_waehlbar[6]', true)
        sessionStorage.setItem('p2_waehlbar[7]', true)
        sessionStorage.setItem('p2_waehlbar[9]', true)
        kernfaecher_add()
      }
      //Wenn Latein P2-P5 ist
      if (i > 1) {
        fs_schon_gewaehlt_logic('Englisch', 'Französisch', 'Spanisch')
      }
      sessionStorage.setItem('franzoesisch_w', false)
      sessionStorage.setItem('spanisch_w', false)
      bereich_add('A')
      waehlbarkeit('latein_w', false)
      fs_add()
      break
    case 'Spanisch':
      //Wenn Spanisch P1 ist
      if (i === 1) {
        sessionStorage.setItem('profil', 'spra')
        sessionStorage.setItem('p2_waehlbar[5]', true)
        sessionStorage.setItem('p2_waehlbar[6]', true)
        sessionStorage.setItem('p2_waehlbar[7]', true)
        sessionStorage.setItem('p2_waehlbar[8]', true)
        kernfaecher_add()
      }
      //Wenn Spanisch P2-P5 ist
      if (i > 1) {
        fs_schon_gewaehlt_logic('Latein', 'Französisch', 'Englisch')
      }
      sessionStorage.setItem('latein_w', false)
      sessionStorage.setItem('franzoesisch_w', false)
      bereich_add('A')
      waehlbarkeit('spanisch_w', false)
      fs_add()
      break
    case 'Kunst':
      //Wenn Kunst P1 ist
      if (i === 1) {
        sessionStorage.setItem('profil', 'muku')
        sessionStorage.setItem('p2_waehlbar[0]', true)
        sessionStorage.setItem('p2_waehlbar[5]', true)
      }
      //Wenn Kunst P2-P5 ist
      sessionStorage.setItem('musik_w', false)
      nicht_kernfaecher_add()
      bereich_add('A')
      waehlbarkeit('kunst_w', false)
      break
    case 'Musik':
      //Wenn Musik P1 ist
      if (i === 1) {
        sessionStorage.setItem('profil', 'muku')
        sessionStorage.setItem('p2_waehlbar[0]', true)
        sessionStorage.setItem('p2_waehlbar[5]', true)
      }
      sessionStorage.setItem('kunst_w', false)
      nicht_kernfaecher_add()
      bereich_add('A')
      waehlbarkeit('musik_w', false)
      break
    case 'Geschichte':
      //Wenn Geschichte P1 ist
      if (i === 1) {
        sessionStorage.setItem('profil', 'gese')
        for (let index = 0; index < 14; index++) {
          sessionStorage.setItem('p2_waehlbar[' + index + ']', true)
        }
        sessionStorage.setItem('pfach3', 'Politik Wirtschaft')
      }
      nicht_kernfaecher_add()
      bereich_add('B')
      waehlbarkeit('geschichte_w', false)
      break
    case 'Religion':
      nicht_kernfaecher_add()
      bereich_add('B')
      waehlbarkeit('religion_w', false)
      break
    case 'Erdkunde':
      nicht_kernfaecher_add()
      bereich_add('B')
      waehlbarkeit('erdkunde_w', false)
      break
    case 'Politik Wirtschaft':
      nicht_kernfaecher_add()
      bereich_add('B')
      waehlbarkeit('powi_w', false)
      break
    case 'Sport':
      nicht_kernfaecher_add()
      waehlbarkeit('sport_w', false)
      break
  }
  if (sessionStorage.getItem('nicht_kernfaecher') == 3) {
    sessionStorage.setItem('w_nk', false)
  }
  if (sessionStorage.getItem('A_anzahl') != 0 && sessionStorage.getItem('B_anzahl') != 0 && sessionStorage.getItem('C_anzahl') != 0 && i == 4) {
    sessionStorage.setItem('w[3]', true)
  }

  let Anzahlen = [['A_anzahl', 'B_anzahl', 'C_anzahl'],['B_anzahl', 'C_anzahl', 'A_anzahl'],['C_anzahl', 'A_anzahl', 'B_anzahl']]
  let waehlbarkeit_bereiche = [['w[0]', 'w[1]', 'w[2]'], ['w[1]', 'w[2]', 'w[0]'], ['w[2]', 'w[0]', 'w[1]']]

  for (let h = 0; h < Anzahlen.length; h++) {
    if (parseInt(sessionStorage.getItem(Anzahlen[h][0])) == 3) {
      sessionStorage.setItem(waehlbarkeit_bereiche[h][0], false)
      if (parseInt(sessionStorage.getItem('kernfaecher')) == 1 && parseInt(sessionStorage.getItem('A_anzahl')) == 3) {
        sessionStorage.setItem('physik_w', false)
        sessionStorage.setItem('chemie_w', false)
        sessionStorage.setItem('informatik_w', false)
        sessionStorage.setItem('biologie_w', false)
      }
      if (sessionStorage.getItem(Anzahlen[h][1]) == '1') {
        sessionStorage.setItem(waehlbarkeit_bereiche[h][1], false)
      }
      if (sessionStorage.getItem(Anzahlen[h][2]) == '1') {
        sessionStorage.setItem(waehlbarkeit_bereiche[h][2], false)
      }
    }
  }

  if (parseInt(sessionStorage.getItem('A_anzahl')) == 2) {
    if (parseInt(sessionStorage.getItem('B_anzahl')) == 2) {
      sessionStorage.setItem('w[0]', false)
      sessionStorage.setItem('w[1]', false)
      sessionStorage.setItem('w[2]', true)
    }
    if (parseInt(sessionStorage.getItem('C_anzahl')) == 2) {
      sessionStorage.setItem('w[0]', false)
      sessionStorage.setItem('w[2]', false)
      sessionStorage.setItem('w[1]', true)
      sessionStorage.setItem('w_nk', true)
      sessionStorage.setItem('geschichte_w', true)
    }
    if (parseInt(sessionStorage.getItem('C_anzahl')) == 1 && parseInt(sessionStorage.getItem('kernfaecher')) == 1) {
      sessionStorage.setItem('musik_w', false)
      sessionStorage.setItem('kunst_w', false)
      sessionStorage.setItem('chemie_w', false)
      sessionStorage.setItem('biologie_w', false)
      sessionStorage.setItem('physik_w', false)
      sessionStorage.setItem('informatik_w', false)
      sessionStorage.setItem('w[1]', true)
    }
  }
  if (parseInt(sessionStorage.getItem('C_anzahl')) == 2) {
    if (parseInt(sessionStorage.getItem('B_anzahl')) == 2) {
      sessionStorage.setItem('w[1]', false)
      sessionStorage.setItem('w[2]', false)
      sessionStorage.setItem('w[0]', true)
      if (parseInt(sessionStorage.getItem('kernfaecher')) < 2) {
        sessionStorage.setItem('w_nk', false)
      } else {
        sessionStorage.setItem('w_nk', true)
      }
    }
    if (parseInt(sessionStorage.getItem('A_anzahl')) == 1 && parseInt(sessionStorage.getItem('kernfaecher')) == 1) {
      sessionStorage.setItem('chemie_w', false)
      sessionStorage.setItem('biologie_w', false)
      sessionStorage.setItem('physik_w', false)
      sessionStorage.setItem('informatik_w', false)
      if (check_fach_for_pfach('Englisch') || check_fach_for_pfach('Spanisch') || check_fach_for_pfach('Latein') || check_fach_for_pfach('Französisch')) {
        sessionStorage.setItem('englisch_w', false)
        sessionStorage.setItem('latein_w', false)
        sessionStorage.setItem('spanisch_w', false)
        sessionStorage.setItem('franzoesisch_w', false)
      }
    }
  }


  let nw_for_mu_and_ku = 0
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
//Teil der Logik, der prüft, welche Fächer in der nächsten Stufe noch wählbar sind (ruft die beiden folgenden Methoden dafür auf)
function proof_in_advance(pfach, i) {
  let help_lp = sessionStorage.getItem('lp' + i)
    for (let j = 1; j < help_lp; j++) {
        document.getElementById("pfach" + i + "." + j + ".label").style.opacity = '1'
        document.getElementById("pfach" + i + "." + j).disabled = false
    }
  //Alle Fächer werden nach Wählbarkeit überprüft
  var all_subjects = Array('', 'Mathe', 'Chemie', 'Englisch', 'Physik', 'Biologie', 'Franzoesisch', 'Latein', 'Musik', 'Informatik', 'Kunst', 'Spanisch', 'Deutsch', 'Geschichte', 'Politik Wirtschaft', 'Religion', 'Erdkunde', 'Sport')
  for (let j = 0; j < 18; j++) {
    switch (all_subjects[j]) {
      case 'Mathe':
        try {
          proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[0]'), sessionStorage.getItem('mathe_w'))
        } catch (error) {
        }
        break;
      case 'Chemie':
        try {
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[2]'), sessionStorage.getItem('chemie_w'))
        } catch (error) {

        }
        break;
      case 'Englisch':
        try {
          if (check_fach_for_pfach('Latein') || check_fach_for_pfach('Spanisch') || check_fach_for_pfach('Französisch')) {
            proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[6]'), sessionStorage.getItem('englisch_w'))
            break;
          } else {
            proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[6]'), sessionStorage.getItem('englisch_w'))
          }
          /*
          for (let index = 1; index < 6; index++) {
            if (sessionStorage.getItem('pfach' + index) == 'Latein' || sessionStorage.getItem('pfach' + index) == 'Spanisch' || sessionStorage.getItem('pfach' + index) == 'Französisch') {
              proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[6]'), sessionStorage.getItem('englisch_w'))
              break;
            }
          }
          proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[6]'), sessionStorage.getItem('englisch_w'))
          */
        } catch (error) {

        }
        break;
      case 'Physik':
        try {
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[4]'), sessionStorage.getItem('physik_w'))
        } catch (error) {

        }
        break;
      case 'Biologie':
        try {
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[3]'), sessionStorage.getItem('biologie_w'))
        } catch (error) {

        }
        break;
      case 'Geschichte':
        try {
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[1]'), sessionStorage.getItem('p2_waehlbar[12]'), sessionStorage.getItem('geschichte_w'))
        } catch (e) {

        }
        break
      case 'Franzoesisch':
        try {
          if (check_fach_for_pfach('Latein') || check_fach_for_pfach('Spanisch') || check_fach_for_pfach('Englisch')) {
            proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[7]'), sessionStorage.getItem('franzoesisch_w'))
            break;
          } else {
            proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[7]'), sessionStorage.getItem('franzoesisch_w'))
          }
          /*
          for (let index = 1; index < 6; index++) {
            if (sessionStorage.getItem('pfach' + index) == 'Latein' || sessionStorage.getItem('pfach' + index) == 'Spanisch' || sessionStorage.getItem('pfach' + index) == 'Englisch') {
              proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[7]'), sessionStorage.getItem('franzoesisch_w'))
              break
            }
          }
          proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[7]'), sessionStorage.getItem('franzoesisch_w'))
          */
        } catch (error) {

        }
        break;
      case 'Latein':
        try {
          if (check_fach_for_pfach('Englisch') || check_fach_for_pfach('Spanisch') || check_fach_for_pfach('Französisch')) {
            proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[8]'), sessionStorage.getItem('latein_w'))
            break;
          } else {
            proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[8]'), sessionStorage.getItem('latein_w'))
          }
          /*
          for (let index = 1; index < 6; index++) {
            if (sessionStorage.getItem('pfach' + index) == 'Französisch' || sessionStorage.getItem('pfach' + index) == 'Spanisch' || sessionStorage.getItem('pfach' + index) == 'Englisch') {
              proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[8]'), sessionStorage.getItem('latein_w'))
            }
          }
          proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[8]'), sessionStorage.getItem('latein_w'))
          */
        } catch (error) {

        }
        break;
      case 'Musik':
        try {
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[11]'), sessionStorage.getItem('musik_w'))
        } catch (error) {

        }
        break;
      case 'Informatik':
        try {
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[1]'), sessionStorage.getItem('informatik_w'))
        } catch (error) {

        }
        break;
      case 'Kunst':
        try {
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[10]'), sessionStorage.getItem('kunst_w'))
        } catch (error) {

        }
        break;
      case 'Politik Wirtschaft':
        try {
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[1]'), sessionStorage.getItem('p2_waehlbar[13]'), sessionStorage.getItem('powi_w'))
          if (sessionStorage.getItem('profil') == 'gese' && i === 3) {
            document.getElementById("pfach3.14.label").style.opacity = '1'
            document.getElementById("pfach3.14").disabled = false
          }
        } catch (error) {

        }
        break;
      case 'Spanisch':
        try {
          if (check_fach_for_pfach('Englisch') || check_fach_for_pfach('Latein') || check_fach_for_pfach('Französisch')) {
            proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[9]'), sessionStorage.getItem('spanisch_w'))
            break;
          } else {
            proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[9]'), sessionStorage.getItem('spanisch_w'))
          }
          /*
          for (let index = 1; index < 6; index++) {
            if (sessionStorage.getItem('pfach' + index) == 'Französisch' || sessionStorage.getItem('pfach' + index) == 'Latein' || sessionStorage.getItem('pfach' + index) == 'Englisch') {
              proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[9]'), sessionStorage.getItem('spanisch_w'))
            }
          }
          proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[9]'), sessionStorage.getItem('spanisch_w'))
          */
        } catch (error) {

        }
        break;
      case 'Deutsch':
        try {
          proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[5]'), sessionStorage.getItem('deutsch_w'))
        } catch (error) {

        }
        break;
      case 'Religion':
        try {
          if (sessionStorage.getItem('w[1]') === 'true' && sessionStorage.getItem('w_nk') === 'true' && sessionStorage.getItem('religion_w') === 'true') {
            if (i <= 3) {
              document.getElementById(pfach + j + ".label").style.opacity = '0.5'
              document.getElementById((pfach + j)).disabled = true
              break
            }
            document.getElementById(pfach + j + ".label").style.opacity = '1'
            document.getElementById((pfach + j)).disabled = false
          } else {
            document.getElementById(pfach + j + ".label").style.opacity = '0.5'
            document.getElementById((pfach + j)).disabled = true
          }
        } catch (error) {

        }

        break;
      case 'Erdkunde':
        try {
          if (sessionStorage.getItem('w[1]') === 'true' && sessionStorage.getItem('w_nk') === 'true' && sessionStorage.getItem('erdkunde_w') === 'true') {
            if (i <= 3) {
              document.getElementById(pfach + j + ".label").style.opacity = '0.5'
              document.getElementById((pfach + j)).disabled = true
              break
            }
            document.getElementById(pfach + j + ".label").style.opacity = '1'
            document.getElementById((pfach + j)).disabled = false
          } else {
            document.getElementById(pfach + j + ".label").style.opacity = '0.5'
            document.getElementById((pfach + j)).disabled = true
          }
        } catch (error) {

        }
        break;
      case 'Sport':
        try {
          if (sessionStorage.getItem('w[3]') != 'true') {
            document.getElementById(pfach + j + ".label").style.opacity = '0.5'
            document.getElementById((pfach + j)).disabled = true
          } else {
            if (sessionStorage.getItem('w_nk') === 'true' && sessionStorage.getItem('sport_w') === 'true') {
              document.getElementById(pfach + j + ".label").style.opacity = '1'
              document.getElementById((pfach + j)).disabled = false
            } else {
              document.getElementById(pfach + j + ".label").style.opacity = '0.5'
              document.getElementById((pfach + j)).disabled = true
            }
          }
        } catch (error) {

        }
        break;
    }
  }
}
//Überprüft die Wählbarkeit und passt Buttons dementsprechend an (Kernfächer)
function proof_in_advance_visibility(pfach, i, j, bereich, waehlbar, fachvariable) {
  if (bereich === 'true' && fachvariable === 'true') {
    if (i === 2 && waehlbar === 'false') {
      disable_fachbutton((pfach + j))
    } else {
      if (i === 3 && sessionStorage.getItem('profil') == 'gese') {
        document.getElementById(pfach + j + ".label").style.opacity = '0.5'
        document.getElementById((pfach + j)).disabled = true
      } else {
        document.getElementById(pfach + j + ".label").style.opacity = '1'
        document.getElementById((pfach + j)).disabled = false
      }
    }
  } else {
    disable_fachbutton((pfach + j))
  }
}
//Überprüft die Wählbarkeit und passt Buttons dementsprechend an (Nicht-Kernfächer)
function proof_in_advance_visibility_w_nk(pfach, i, j, bereich, waehlbar, fachvariable) {
  if (bereich === 'true' && sessionStorage.getItem('w_nk') === 'true' && fachvariable === 'true') {
    if (i === 2 && waehlbar === 'false') {
      disable_fachbutton((pfach + j))
    } else {
      if (i === 3 && sessionStorage.getItem('profil') == 'gese') {
        document.getElementById(pfach + j + ".label").style.opacity = '0.5'
        document.getElementById((pfach + j)).disabled = true
      } else {
        document.getElementById(pfach + j + ".label").style.opacity = '1'
      }
    }
  } else {
    disable_fachbutton((pfach + j))
  }
}
//Die Wunschbuttons werden entsprechend angepasst, je nachdem, ob das Fach als Prüfungsfach gewählt wurde
function disable_wish(fach, j) {
  if (sessionStorage.getItem('pfach' + j) == fach) {
    document.getElementById(fach + "2").disabled = true
    document.getElementById(fach + "2.label").style.opacity = '0.5'
  }
}
//Sportgrundkurs
function sport_gk() {
  if (sessionStorage.getItem('pfach5') == 'Sport') {
    sessionStorage.setItem('sport_gk', true)
  }
}
//Überprüft, ob Musik, Kunst oder DS als Prüfungsfächer gewählt wurden und setzt vorläufig die passende Grundkursvariable auf true
function checking_for_muku_gk(j) {
  if (sessionStorage.getItem('extra13') == 'false' && sessionStorage.getItem('extra10') == 'false' && sessionStorage.getItem('extra3') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Musik' || sessionStorage.getItem('pfach' + j) == 'Kunst' || sessionStorage.getItem('pfach' + j) == 'DS')) {
    sessionStorage.setItem('extra13', false)
    sessionStorage.setItem('extra10', false)
    sessionStorage.setItem('extra3', false)
    switch (sessionStorage.getItem('pfach' + j)) {
      case 'Musik':
        sessionStorage.setItem('extra13', true)
        break;
      case 'Kunst':
        sessionStorage.setItem('extra10', true)
        break;
      case 'DS':
        sessionStorage.setItem('extra3', true)
        break;
      default:
        break;
    }
    /*
    if (sessionStorage.getItem('pfach' + j) == 'Musik') {
      sessionStorage.setItem('extra13', true)
      sessionStorage.setItem('extra10', false)
      sessionStorage.setItem('extra3', false)
    }
    if (sessionStorage.getItem('pfach' + j) == 'Kunst') {
      sessionStorage.setItem('extra13', false)
      sessionStorage.setItem('extra10', true)
      sessionStorage.setItem('extra3', false)
    }
    if (sessionStorage.getItem('pfach' + j) == 'DS') {
      sessionStorage.setItem('extra13', false)
      sessionStorage.setItem('extra10', false)
      sessionStorage.setItem('extra3', true)
    }
    */
  }
}
function buttons_muku() {
  if (sessionStorage.getItem('extra13') == 'false' && sessionStorage.getItem('extra10') == 'false' && sessionStorage.getItem('extra3') == 'false') {
    document.getElementById("musik.label").style.opacity = '1'
    document.getElementById("ds.label").style.opacity = '1'
    document.getElementById("kunst.label").style.opacity = '1'
  } else {
    disable_fachbutton('musik')
    disable_fachbutton('ds')
    disable_fachbutton('kunst')
    disable_fachbutton('Musik2')
    disable_fachbutton('Kunst2')
    document.getElementById("div_muku").title = "Da bereits ein musisch-künstlerisches Fach gewählt wurde, muss hier nichts mehr gewählt werden"
  }
}
function buttons_religion_wn() {
  if (sessionStorage.getItem('extra16') == 'false' && sessionStorage.getItem('extra18') == 'false') {
    document.getElementById("religion.label").style.opacity = '1'
    document.getElementById("wn.label").style.opacity = '1'
  } else {
    disable_fachbutton('religion')
    disable_fachbutton('wn')
    document.getElementById("div_rewn").title = "Da bereits Religion oder Werte und Normen gewählt wurde, muss hier nichts mehr gewählt werden"
  }
}
function checking_for_fs(j) {
  if (sessionStorage.getItem('extra5') == 'false' && sessionStorage.getItem('extra11') == 'false' && sessionStorage.getItem('extra7') == 'false' && sessionStorage.getItem('extra17') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Englisch' || sessionStorage.getItem('pfach' + j) == 'Latein' || sessionStorage.getItem('pfach' + j) == 'Französisch' || sessionStorage.getItem('pfach' + j) == 'Spanisch')) {
    /*sessionStorage.setItem('extra5', check_fach_for_pfach('Englisch'))
    sessionStorage.setItem('extra11', check_fach_for_pfach('Latein'))
    sessionStorage.setItem('extra7', check_fach_for_pfach('Französisch'))
    sessionStorage.setItem('extra17', check_fach_for_pfach('Spanisch'))*/
    
    if (sessionStorage.getItem('pfach' + j) == 'Englisch') {
      sessionStorage.setItem('extra5', true)
      sessionStorage.setItem('extra11', false)
      sessionStorage.setItem('extra7', false)
      sessionStorage.setItem('extra17', false)
    }
    if (sessionStorage.getItem('pfach' + j) == 'Latein') {
      sessionStorage.setItem('extra5', false)
      sessionStorage.setItem('extra11', true)
      sessionStorage.setItem('extra7', false)
      sessionStorage.setItem('extra17', false)
    }
    if (sessionStorage.getItem('pfach' + j) == 'Französisch') {
      sessionStorage.setItem('extra5', false)
      sessionStorage.setItem('extra11', false)
      sessionStorage.setItem('extra7', true)
      sessionStorage.setItem('extra17', false)
    }
    if (sessionStorage.getItem('pfach' + j) == 'Spanisch') {
      sessionStorage.setItem('extra5', false)
      sessionStorage.setItem('extra11', false)
      sessionStorage.setItem('extra7', false)
      sessionStorage.setItem('extra17', true)
    }
  }
}
function buttons_fs() {
  if (sessionStorage.getItem('extra5') == 'false' && sessionStorage.getItem('extra11') == 'false' && sessionStorage.getItem('extra7') == 'false' && sessionStorage.getItem('extra17') == 'false') {
    document.getElementById("englisch.label").style.opacity = '1'
    document.getElementById("latein.label").style.opacity = '1'
    document.getElementById("franzoesisch.label").style.opacity = '1'
    document.getElementById("spanisch.label").style.opacity = '1'
  } else {
    disable_fachbutton('englisch')
    disable_fachbutton('latein')
    disable_fachbutton('franzoesisch')
    disable_fachbutton('spanisch')
    document.getElementById("div_fs").title = "Da bereits eine Fremdsprache gewählt wurde, muss hier nichts mehr gewählt werden"
  }
}
function checking_for_nw(j) {
  if (sessionStorage.getItem('extra14') == 'false' && sessionStorage.getItem('extra1') == 'false' && sessionStorage.getItem('extra2') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Physik' || sessionStorage.getItem('pfach' + j) == 'Chemie' || sessionStorage.getItem('pfach' + j) == 'Biologie')) {
    if (sessionStorage.getItem('pfach' + j) == 'Physik') {
      sessionStorage.setItem('extra14', true)
      sessionStorage.setItem('extra2', false)
      sessionStorage.setItem('extra1', false)
    }
    if (sessionStorage.getItem('pfach' + j) == 'Chemie') {
      sessionStorage.setItem('extra2', true)
      sessionStorage.setItem('extra14', false)
      sessionStorage.setItem('extra1', false)
    }
    if (sessionStorage.getItem('pfach' + j) == 'Biologie') {
      sessionStorage.setItem('extra1', true)
      sessionStorage.setItem('extra2', false)
      sessionStorage.setItem('extra14', false)
    }
  }
}
function buttons_nw() {
  if (sessionStorage.getItem('extra14') == 'false' && sessionStorage.getItem('extra2') == 'false' && sessionStorage.getItem('extra1') == 'false') {
    document.getElementById("physik.label").style.opacity = '1'
    document.getElementById("chemie.label").style.opacity = '1'
    document.getElementById("bio.label").style.opacity = '1'
  } else {
    disable_fachbutton('physik')
    disable_fachbutton('chemie')
    disable_fachbutton('bio')
    document.getElementById("div_nw").title = "Da bereits eine Naturwissenschaft gewählt wurde, muss hier nichts mehr gewählt werden"
  }
}
function checking_for_informatik(j, help_informatik) {
  /*
  if (help_informatik == false && sessionStorage.getItem('pfach' + j) == 'Informatik') {
    return true
  } else {
    return false
  }*/
  return (help_informatik == false && sessionStorage.getItem('pfach' + j) == 'Informatik') ? true : false
}
function buttons_informatik(help_informatik) {
  if (help_informatik == true) {
    disable_fachbutton('informatikja')
    disable_fachbutton('informatikne')
    document.getElementById("div_inf").title = "Da bereits Informatik gewählt wurde, muss hier nichts mehr gewählt werden"
  } else {
    document.getElementById("informatikja.label").style.opacity = '1'
    document.getElementById("informatikne.label").style.opacity = '1'
  }
}
//Methode, welche grundlegende Dinge für die Grundkurse im mathematisch-naturwissenschaftlichen Profil regelt
function mana() {
  for (let j = 1; j < 6; j++) {
    disable_wish('Kunst', j)
    disable_wish('Musik', j)
    disable_wish('Geschichte', j)
    disable_wish('Religion', j)
    if (sessionStorage.getItem('pfach' + j) == 'Politik Wirtschaft') {
      disable_fachbutton('PoWi2')
    }
    pflicht(j)
    checking_for_muku_gk(j)
    checking_for_fs(j)
  }
  calc_stunden_for_pflicht()
  pflicht_label()
  sport_gk()
  buttons_religion_wn()
  buttons_fs()
  buttons_muku()
  if (parseInt(sessionStorage.getItem('counter_nw')) < 2) {
    if (check_fach_for_pfach('Informatik') || sessionStorage.getItem('extra9') == 'true') {
      disable_fachbutton('informatik')
    }
    if (check_fach_for_pfach('Biologie') || sessionStorage.getItem('extra1') == 'true') {
      disable_fachbutton('bio')
    }
    if (check_fach_for_pfach('Physik') || sessionStorage.getItem('extra14') == 'true') {
      disable_fachbutton('physik')
    }
    if (check_fach_for_pfach('Chemie') || sessionStorage.getItem('extra2') == 'true') {
      disable_fachbutton('chemie')
    }
    /*
    for (let k = 1; k < 6; k++) {
      if (sessionStorage.getItem('pfach' + k) == 'Informatik' || sessionStorage.getItem('extra9') == 'true') {
        disable_fachbutton('informatik')
      }
      if (sessionStorage.getItem('pfach' + k) == 'Biologie' || sessionStorage.getItem('extra1') == 'true') {
        disable_fachbutton('bio')
      }
      if (sessionStorage.getItem('pfach' + k) == 'Physik' || sessionStorage.getItem('extra14') == 'true') {
        disable_fachbutton('physik')
      }
      if (sessionStorage.getItem('pfach' + k) == 'Chemie' || sessionStorage.getItem('extra2') == 'true') {
        disable_fachbutton('chemie')
      }
    }
    */
  } else {
    disable_fachbutton('informatik')
    disable_fachbutton('bio')
    disable_fachbutton('physik')
    disable_fachbutton('chemie')
    document.getElementById("div_nw").title = "Da bereits 2 Naturwissenschaften gewählt wurde, muss hier nichts mehr gewählt werden"
  }
}
//Methode, welche grundlegende Dinge für die Grundkurse im sprachlichen Profil regelt
function spra() {
  var help_informatik = false
  for (let j = 1; j < 6; j++) {
    disable_wish('Kunst', j)
    disable_wish('Musik', j)
    if (sessionStorage.getItem('pfach' + j) == 'Politik Wirtschaft') {
      disable_fachbutton('PoWi2')
    }
    disable_wish('Geschichte', j)
    disable_wish('Religion', j)
    pflicht(j)
    checking_for_muku_gk(j)
    checking_for_nw(j)
    if (help_informatik == false) {
      help_informatik = checking_for_informatik(j, help_informatik)
    }
  }
  calc_stunden_for_pflicht()
  pflicht_label()
  sport_gk()
  buttons_religion_wn()
  buttons_muku()
  buttons_informatik(help_informatik)
  buttons_nw()
  if (parseInt(sessionStorage.getItem('counter_fs')) < 2) {
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
      sessionStorage.setItem('extra5', true)
      disable_fachbutton('spanisch')
      disable_fachbutton('latein')
      disable_fachbutton('franzoesisch')

      let text = document.getElementById("pflicht").textContent
      text += ', En'
      document.getElementById("pflicht").textContent = text

      document.getElementById("div_fs").title = "Da bereits eine 2. Fremdsprache gewählt wurde, wird Englisch automatisch als Grundkurs gewählt"
    }
  } else {
    sessionStorage.setItem('extra5', true)
    disable_fachbutton('spanisch')
    disable_fachbutton('latein')
    disable_fachbutton('franzoesisch')
    document.getElementById("div_fs").title = "Da bereits eine 2. Fremdsprache gewählt wurde, wird Englisch automatisch als Grundkurs gewählt"
  }
}
//Methode, welche grundlegende Dinge für die Grundkurse im musisch-künstlerischen Profil regelt
function muku() {
  var help_informatik = false
  for (let j = 1; j < 6; j++) {
    if (sessionStorage.getItem('pfach' + j) == 'Politik Wirtschaft') {
      disable_fachbutton('PoWi2')
    }
    disable_wish('Geschichte', j)
    disable_wish('Religion', j)
    pflicht(j)
    checking_for_fs(j)
    checking_for_nw(j)
    if (help_informatik == false) {
      help_informatik = checking_for_informatik(j, help_informatik)
    }
  }
  calc_stunden_for_pflicht()
  pflicht_label()
  sport_gk()
  buttons_religion_wn()
  buttons_fs()
  buttons_nw()
  buttons_informatik(help_informatik)
  if (sessionStorage.getItem('pfach1') == 'Musik') {
    disable_fachbutton('musik')
  } else if (sessionStorage.getItem('pfach1') == 'Kunst') {
    disable_fachbutton('kunst')
  }
}
//Methode, welche grundlegende Dinge für die Grundkurse im gesellschaftlichen Profil regelt
function gese() {
  for (let j = 1; j < 6; j++) {
    disable_wish('Kunst', j)
    disable_wish('Musik', j)
    disable_wish('Religion', j)
    pflicht(j)
    checking_for_muku_gk(j)
  }
  calc_stunden_for_pflicht()
  pflicht_label()
  sport_gk()
  buttons_religion_wn()
  buttons_muku()
  if (parseInt(sessionStorage.getItem('counter_nw')) === 0) {
    document.getElementById("physik.label").style.opacity = '1'
    document.getElementById("bio.label").style.opacity = '1'
    document.getElementById("chemie.label").style.opacity = '1'
    document.getElementById("informatik.label").style.opacity = '1'
  } else if (parseInt(sessionStorage.getItem('counter_nw')) === 1) {
    disable_fachbutton('physik')
    disable_fachbutton('bio')
    disable_fachbutton('chemie')
    disable_fachbutton('informatik')
    document.getElementById("div_nw1").title = "Da bereits eine Naturwissenschaft gewählt wurde, muss hier nichts mehr gewählt werden"
    if (check_fach_for_pfach('Informatik')) {
      disable_fachbutton('informatik2')
    }
    if (check_fach_for_pfach('Biologie')) {
      disable_fachbutton('bio2')
    }
    if (check_fach_for_pfach('Physik')) {
      disable_fachbutton('physik2')
    }
    if (check_fach_for_pfach('Chemie')) {
      disable_fachbutton('chemie2')
    }
    /*
    for (let k = 1; k < 6; k++) {
      if (sessionStorage.getItem('pfach' + k) == 'Informatik') {
        disable_fachbutton('informatik2')
      }
      if (sessionStorage.getItem('pfach' + k) == 'Biologie') {
        disable_fachbutton('bio2')
      }
      if (sessionStorage.getItem('pfach' + k) == 'Physik') {
        disable_fachbutton('physik2')
      }
      if (sessionStorage.getItem('pfach' + k) == 'Chemie') {
        disable_fachbutton('chemie2')
      }
    }
    */
  } else if (parseInt(sessionStorage.getItem('counter_nw')) == 2) {
    disable_fachbutton('physik')
    disable_fachbutton('bio')
    disable_fachbutton('chemie')
    disable_fachbutton('informatik')
    disable_fachbutton('physik2')
    disable_fachbutton('bio2')
    disable_fachbutton('chemie2')
    disable_fachbutton('informatik2')
    disable_fachbutton('englisch2')
    disable_fachbutton('latein2')
    disable_fachbutton('spanisch2')
    disable_fachbutton('franzoesisch2')
    document.getElementById("div_2fs2nw").title = "Da bereits eine 2. Fremdsprache oder 2. Naturwissenschaft gewählt wurde, muss hier nichts mehr gewählt werden"
  }

  if (parseInt(sessionStorage.getItem('counter_fs')) == 0) {
    document.getElementById("englisch.label").style.opacity = '1'
    document.getElementById("latein.label").style.opacity = '1'
    document.getElementById("spanisch.label").style.opacity = '1'
    document.getElementById("franzoesisch.label").style.opacity = '1'
  } else if (parseInt(sessionStorage.getItem('counter_fs')) == 1) {
    disable_fachbutton('englisch')
    disable_fachbutton('latein')
    disable_fachbutton('spanisch')
    disable_fachbutton('franzoesisch')
    document.getElementById("div_fs1").title = "Da bereits eine Fremdsprache gewählt wurde, muss hier nichts mehr gewählt werden"

    if (check_fach_for_pfach('Englisch')) {
      disable_fachbutton('englisch2')
    }
    if (check_fach_for_pfach('Latein')) {
      disable_fachbutton('latein2')
      disable_fachbutton('spanisch2')
      disable_fachbutton('franzoesisch2')
    }
    if (check_fach_for_pfach('Spanisch')) {
      disable_fachbutton('latein2')
      disable_fachbutton('spanisch2')
      disable_fachbutton('franzoesisch2')
    }
    if (check_fach_for_pfach('Französisch')) {
      disable_fachbutton('latein2')
      disable_fachbutton('franzoesisch2')
      disable_fachbutton('spanisch2')
    }

    /*
    let help_englisch = false
    let help_latein = false
    let help_spanisch = false
    let help_franzoesisch = false
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
      disable_fachbutton('englisch2')
    }
    if (help_latein == true) {
      disable_fachbutton('latein2')
      disable_fachbutton('spanisch2')
      disable_fachbutton('franzoesisch2')
    }
    if (help_spanisch == true) {
      disable_fachbutton('latein2')
      disable_fachbutton('spanisch2')
      disable_fachbutton('franzoesisch2')
    }
    if (help_franzoesisch == true) {
      disable_fachbutton('latein2')
      disable_fachbutton('franzoesisch2')
      disable_fachbutton('spanisch2')
    }
    */
  } else if (parseInt(sessionStorage.getItem('counter_fs')) == 2) {
    disable_fachbutton('englisch')
    disable_fachbutton('latein')
    disable_fachbutton('spanisch')
    disable_fachbutton('franzoesisch')
    disable_fachbutton('englisch2')
    disable_fachbutton('latein2')
    disable_fachbutton('spanisch2')
    disable_fachbutton('franzoesisch2')
    disable_fachbutton('physik2')
    disable_fachbutton('bio2')
    disable_fachbutton('chemie2')
    disable_fachbutton('informatik2')
    document.getElementById("div_2fs2nw").title = "Da bereits eine 2. Fremdsprache oder 2. Naturwissenschaft gewählt wurde, muss hier nichts mehr gewählt werden"
  }
  if (sessionStorage.getItem('counter_nw') == 1 && sessionStorage.getItem('counter_fs') == 1) {
    enable_2fs_2nw()
  }
}
function pflicht_label() {
  let text = document.getElementById("pflicht").textContent
  if (!check_fach_for_pfach("Deutsch")) {
    if (text == 'Pflicht: ') {
      text += 'De'
    } else {
      text += ', De'
    }
  }
  if (!check_fach_for_pfach("Mathe")) {
    if (text == 'Pflicht: ') {
      text += 'Ma'
    } else {
      text += ', Ma'
    }
  }
  if (!check_fach_for_pfach("Geschichte")) {
    if (text == 'Pflicht: ') {
      text += 'Ge'
    } else {
      text += ', Ge'
    }
  }
  if (!check_fach_for_pfach("Politik Wirtschaft")) {
    if (text == 'Pflicht: ') {
      text += 'PoWi'
    } else {
      text += ', PoWi'
    }
  }
  if (check_fach_for_pfach("Deutsch") && check_fach_for_pfach("Mathe") && check_fach_for_pfach("Geschichte") && check_fach_for_pfach("Politik Wirtschaft")) {
    text += ' --- / --- '
  }
  document.getElementById("pflicht").textContent = text
}
//Setzt die Pflichtkurse, je nachdem, ob sie als Prüfungsfach bereits gewählt wurden
function pflicht(j) {
  /*if (sessionStorage.getItem('extra4') == 'false' && sessionStorage.getItem('pfach' + j) == 'Deutsch') {
    sessionStorage.setItem('extra4', false)
  } else {*/
    sessionStorage.setItem('extra4', true)
  //}
  /*if (sessionStorage.getItem('extra12') == 'false' && sessionStorage.getItem('pfach' + j) == 'Mathe') {
    sessionStorage.setItem('extra12', false)
  } else {*/
    sessionStorage.setItem('extra12', true)
  //}
  /*if (sessionStorage.getItem('extra8') == 'false' && sessionStorage.getItem('pfach' + j) == 'Geschichte') {
    sessionStorage.setItem('extra8', false)
  } else {*/
    sessionStorage.setItem('extra8', true)
  //}
  /*if (sessionStorage.getItem('extra15') == 'false' && sessionStorage.getItem('pfach' + j) == 'Politik Wirtschaft') {
    sessionStorage.setItem('extra15', false)
  } else {*/
    sessionStorage.setItem('extra15', true)
  //}

  if (sessionStorage.getItem('extra16') == 'false' && sessionStorage.getItem('extra18') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Religion' || sessionStorage.getItem('pfach' + j) == 'WN')) {
    if (sessionStorage.getItem('pfach' + j) == 'Religion') {
      sessionStorage.setItem('extra16', true)
      sessionStorage.setItem('extra18', false)
    }
    if (sessionStorage.getItem('pfach' + j) == 'WN') {
      sessionStorage.setItem('extra16', false)
      sessionStorage.setItem('extra18', true)
    }
  }
  if (sessionStorage.getItem('pfach' + j) == 'Erdkunde') {
    disable_fachbutton('erdkundja')
    disable_fachbutton('erdkundne')
    document.getElementById("div_ek").title = "Da Erdkunde bereits gewählt wurde, muss hier nichts mehr gewählt werden"
  }
}

function calc_stunden_for_pflicht() {
  /*
  let deutsch_help = false
  let mathe_help = false
  let geschichte_help = false
  let powi_help = false
  for (let i = 1; i < 6; i++) {
    switch (sessionStorage.getItem('pfach' + i)) {
      case 'Deutsch':
        deutsch_help = true
        break
      case 'Mathe':
        mathe_help = true
        break
      case 'Geschichte':
        geschichte_help = true
        break
      case 'Politik Wirtschaft':
        powi_help = true
        break
    }
  }
  */
  if (check_fach_for_pfach("Deutsch")) {
    sessionStorage.setItem('stundenanzahl_gesamt', (parseInt(sessionStorage.getItem('stundenanzahl_gesamt')) + parseInt(sessionStorage.getItem('gk_stundenanzahl'))))  
  } 
  if (check_fach_for_pfach("Mathe")) {
    sessionStorage.setItem('stundenanzahl_gesamt', (parseInt(sessionStorage.getItem('stundenanzahl_gesamt')) + parseInt(sessionStorage.getItem('gk_stundenanzahl'))))  
  } 
  if (check_fach_for_pfach("Geschichte")) {
    sessionStorage.setItem('stundenanzahl_gesamt', (parseInt(sessionStorage.getItem('stundenanzahl_gesamt')) + parseInt(sessionStorage.getItem('gk_stundenanzahl'))))  
  }
  if (check_fach_for_pfach("Politik Wirtschaft")) {
    sessionStorage.setItem('stundenanzahl_gesamt', (parseInt(sessionStorage.getItem('stundenanzahl_gesamt')) + parseInt(sessionStorage.getItem('gk_stundenanzahl'))))  
  }
}

//Aktiviert den Bereich 2.FS/2.NW, sobald 1 FS und 1 NW gewählt wurden
function enable_2fs_2nw() {
  console.log(parseInt(sessionStorage.getItem('counter_nw')) + parseInt(sessionStorage.getItem('counter_fs')))
  if (parseInt(sessionStorage.getItem('counter_nw')) + parseInt(sessionStorage.getItem('counter_fs')) < 3) {
    console.log('hi')
    if (((document.getElementById("spanisch").checked == true || document.getElementById("franzoesisch").checked == true || document.getElementById("latein").checked == true || document.getElementById("englisch").checked == true) || (document.getElementById("spanisch").disabled == true || document.getElementById("franzoesisch").disabled == true || document.getElementById("latein").disabled == true || document.getElementById("englisch").disabled == true))
    && ((document.getElementById("chemie").checked == true || document.getElementById("bio").checked == true || document.getElementById("physik").checked == true || document.getElementById("informatik").checked == true) || (document.getElementById("chemie").disabled == true || document.getElementById("bio").disabled == true || document.getElementById("physik").disabled == true || document.getElementById("informatik").disabled == true)))  { 
      
      enable_fachbutton('spanisch2')
      enable_fachbutton('franzoesisch2')
      enable_fachbutton('latein2')
      enable_fachbutton('englisch2')
      enable_fachbutton('chemie2')
      enable_fachbutton('bio2')
      enable_fachbutton('physik2')
      enable_fachbutton('informatik2')
      for (let j = 1; j < 6; j++) {
        if (sessionStorage.getItem('pfach' + j) == 'Spanisch' || document.getElementById("spanisch").checked == true) {
          disable_fachbutton('latein2')
          disable_fachbutton('franzoesisch2')
          disable_fachbutton('spanisch2')
        }
        if (sessionStorage.getItem('pfach' + j) == 'Französisch' || document.getElementById("franzoesisch").checked == true) {
          disable_fachbutton('latein2')
          disable_fachbutton('franzoesisch2')
          disable_fachbutton('spanisch2')
        }
        if (sessionStorage.getItem('pfach' + j) == 'Latein' || document.getElementById("latein").checked == true) {
          disable_fachbutton('latein2')
          disable_fachbutton('franzoesisch2')
          disable_fachbutton('spanisch2')
        }
        if (sessionStorage.getItem('pfach' + j) == 'Englisch' || document.getElementById("englisch").checked == true) {
          disable_fachbutton('englisch2')
        }
        if (sessionStorage.getItem('pfach' + j) == 'Chemie' || document.getElementById("chemie").checked == true) {
          disable_fachbutton('chemie2')
        }
        if (sessionStorage.getItem('pfach' + j) == 'Biologie' || document.getElementById("bio").checked == true) {
          disable_fachbutton('bio2')
        }
        if (sessionStorage.getItem('pfach' + j) == 'Physik' || document.getElementById("physik").checked == true) {
          disable_fachbutton('physik2')
        }
        if (sessionStorage.getItem('pfach' + j) == 'Informatik' || document.getElementById("informatik").checked == true) {
          disable_fachbutton('informatik2')
        }
      }
    }
  }
}

/* Fächer werden gewählt und jeweils zusammenhängende Buttons deaktiviert*/
function set_religion() {
  if (sessionStorage.getItem('extra18') == 'false' && sessionStorage.getItem('extra16') == 'false') {
    sessionStorage.setItem('stundenanzahl_gesamt', (parseInt(sessionStorage.getItem('stundenanzahl_gesamt')) + parseInt(sessionStorage.getItem('gk_stundenanzahl'))))
  }
  sessionStorage.setItem('extra16', true)
  sessionStorage.setItem('extra18', false)
  enable_fachbutton('Religion2')
}
function set_wn() {
  if (sessionStorage.getItem('extra18') == 'false' && sessionStorage.getItem('extra16') == 'false') {
    sessionStorage.setItem('stundenanzahl_gesamt', (parseInt(sessionStorage.getItem('stundenanzahl_gesamt')) + parseInt(sessionStorage.getItem('gk_stundenanzahl'))))
  }
  sessionStorage.setItem('extra18', true)
  sessionStorage.setItem('extra16', false)
  document.getElementById("Religion2").checked = false
  disable_fachbutton('Religion2')
}
function set_musik() {
  if (sessionStorage.getItem('extra13') == 'false' && sessionStorage.getItem('extra10') == 'false' && sessionStorage.getItem('extra3') == 'false') {
    sessionStorage.setItem('stundenanzahl_gesamt', (parseInt(sessionStorage.getItem('stundenanzahl_gesamt')) + parseInt(sessionStorage.getItem('gk_stundenanzahl'))))
  }
  sessionStorage.setItem('extra13', true)
  sessionStorage.setItem('extra10', false)
  sessionStorage.setItem('extra3', false)
  document.getElementById("Kunst2").checked = false
  enable_fachbutton('Musik2')
  disable_fachbutton('Kunst2')
}
function set_kunst() {
  if (sessionStorage.getItem('extra13') == 'false' && sessionStorage.getItem('extra10') == 'false' && sessionStorage.getItem('extra3') == 'false') {
    sessionStorage.setItem('stundenanzahl_gesamt', (parseInt(sessionStorage.getItem('stundenanzahl_gesamt')) + parseInt(sessionStorage.getItem('gk_stundenanzahl'))))
  }
  sessionStorage.setItem('extra10', true)
  sessionStorage.setItem('extra13', false)
  sessionStorage.setItem('extra3', false)
  document.getElementById("Musik2").checked = false
  enable_fachbutton('Kunst2')
  disable_fachbutton('Musik2')
}
function set_ds() {
  if (sessionStorage.getItem('extra13') == 'false' && sessionStorage.getItem('extra10') == 'false' && sessionStorage.getItem('extra3') == 'false') {
    sessionStorage.setItem('stundenanzahl_gesamt', (parseInt(sessionStorage.getItem('stundenanzahl_gesamt')) + parseInt(sessionStorage.getItem('gk_stundenanzahl'))))
  }
  sessionStorage.setItem('extra3', true)
  sessionStorage.setItem('extra13', false)
  sessionStorage.setItem('extra10', false)
  document.getElementById("Kunst2").checked = false
  document.getElementById("Musik2").checked = false
  disable_fachbutton('Kunst2')
  disable_fachbutton('Musik2')
}
function set_englisch() {
  if (sessionStorage.getItem('extra5') == 'false' && sessionStorage.getItem('extra11') == 'false' && sessionStorage.getItem('extra7') == 'false' && sessionStorage.getItem('extra17') == 'false') {
    sessionStorage.setItem('stundenanzahl_gesamt', (parseInt(sessionStorage.getItem('stundenanzahl_gesamt')) + parseInt(sessionStorage.getItem('gk_stundenanzahl'))))
  }
  if (sessionStorage.getItem('extra7') == 'false' && sessionStorage.getItem('extra11') == 'false' && sessionStorage.getItem('extra17') == 'false') {
    fs_add()
  }
  sessionStorage.setItem('extra5', true)
  sessionStorage.setItem('extra11', false)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra17', false)
  document.getElementById('englisch2').checked = false
}
function set_franzoesisch() {
  if (sessionStorage.getItem('extra5') == 'false' && sessionStorage.getItem('extra11') == 'false' && sessionStorage.getItem('extra7') == 'false' && sessionStorage.getItem('extra17') == 'false') {
    sessionStorage.setItem('stundenanzahl_gesamt', (parseInt(sessionStorage.getItem('stundenanzahl_gesamt')) + parseInt(sessionStorage.getItem('gk_stundenanzahl'))))
  }
  if (sessionStorage.getItem('extra5') == 'false' && sessionStorage.getItem('extra11') == 'false' && sessionStorage.getItem('extra17') == 'false') {
    fs_add()
  }
  sessionStorage.setItem('extra7', true)
  sessionStorage.setItem('extra5', false)
  sessionStorage.setItem('extra11', false)
  sessionStorage.setItem('extra17', false)
  document.getElementById('franzoesisch2').checked = false
}
function set_latein() {
  if (sessionStorage.getItem('extra5') == 'false' && sessionStorage.getItem('extra11') == 'false' && sessionStorage.getItem('extra7') == 'false' && sessionStorage.getItem('extra17') == 'false') {
    sessionStorage.setItem('stundenanzahl_gesamt', (parseInt(sessionStorage.getItem('stundenanzahl_gesamt')) + parseInt(sessionStorage.getItem('gk_stundenanzahl'))))
  }
  if (sessionStorage.getItem('extra5') == 'false' && sessionStorage.getItem('extra7') == 'false' && sessionStorage.getItem('extra17') == 'false') {
    fs_add()
  }
  sessionStorage.setItem('extra11', true)
  sessionStorage.setItem('extra5', false)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra17', false)
  document.getElementById('latein2').checked = false
}
function set_spanisch() {
  if (sessionStorage.getItem('extra5') == 'false' && sessionStorage.getItem('extra11') == 'false' && sessionStorage.getItem('extra7') == 'false' && sessionStorage.getItem('extra17') == 'false') {
    sessionStorage.setItem('stundenanzahl_gesamt', (parseInt(sessionStorage.getItem('stundenanzahl_gesamt')) + parseInt(sessionStorage.getItem('gk_stundenanzahl'))))
  }
  if (sessionStorage.getItem('extra7') == 'false' && sessionStorage.getItem('extra11') == 'false' && sessionStorage.getItem('extra5') == 'false') {
    fs_add()
  }
  sessionStorage.setItem('extra17', true)
  sessionStorage.setItem('extra5', false)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra11', false)
  document.getElementById('spanisch2').checked = false
}
function set_biologie() {
  if (sessionStorage.getItem('extra1') == 'false' && sessionStorage.getItem('extra2') == 'false' && sessionStorage.getItem('extra14') == 'false' && sessionStorage.getItem('extra9') == 'false') {
    sessionStorage.setItem('stundenanzahl_gesamt', (parseInt(sessionStorage.getItem('stundenanzahl_gesamt')) + parseInt(sessionStorage.getItem('gk_stundenanzahl'))))
  }
  if (sessionStorage.getItem('extra2') == 'false' && sessionStorage.getItem('extra9') == 'false' && sessionStorage.getItem('extra14') == 'false') {
    nw_add()
  }
  sessionStorage.setItem('extra1', true)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra14', false)
  sessionStorage.setItem('extra9', false)
  document.getElementById('bio2').checked = false
}
function set_physik() {
  if (sessionStorage.getItem('extra1') == 'false' && sessionStorage.getItem('extra2') == 'false' && sessionStorage.getItem('extra14') == 'false' && sessionStorage.getItem('extra9') == 'false') {
    sessionStorage.setItem('stundenanzahl_gesamt', (parseInt(sessionStorage.getItem('stundenanzahl_gesamt')) + parseInt(sessionStorage.getItem('gk_stundenanzahl'))))
  }
  if (sessionStorage.getItem('extra2') == 'false' && sessionStorage.getItem('extra9') == 'false' && sessionStorage.getItem('extra1') == 'false') {
    nw_add()
  }
  sessionStorage.setItem('extra14', true)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra1', false)
  sessionStorage.setItem('extra9', false)
  document.getElementById('physik2').checked = false
}
function set_chemie() {
  if (sessionStorage.getItem('extra1') == 'false' && sessionStorage.getItem('extra2') == 'false' && sessionStorage.getItem('extra14') == 'false' && sessionStorage.getItem('extra9') == 'false') {
    sessionStorage.setItem('stundenanzahl_gesamt', (parseInt(sessionStorage.getItem('stundenanzahl_gesamt')) + parseInt(sessionStorage.getItem('gk_stundenanzahl'))))
  }
  if (sessionStorage.getItem('extra1') == 'false' && sessionStorage.getItem('extra9') == 'false' && sessionStorage.getItem('extra14') == 'false') {
    nw_add()
  }
  sessionStorage.setItem('extra2', true)
  sessionStorage.setItem('extra14', false)
  sessionStorage.setItem('extra1', false)
  sessionStorage.setItem('extra9', false)
  document.getElementById('chemie2').checked = false

}
function set_informatik() {
  if (sessionStorage.getItem('extra1') == 'false' && sessionStorage.getItem('extra2') == 'false' && sessionStorage.getItem('extra14') == 'false' && sessionStorage.getItem('extra9') == 'false') {
    sessionStorage.setItem('stundenanzahl_gesamt', (parseInt(sessionStorage.getItem('stundenanzahl_gesamt')) + parseInt(sessionStorage.getItem('gk_stundenanzahl'))))
  }
  if (sessionStorage.getItem('extra2') == 'false' && sessionStorage.getItem('extra1') == 'false' && sessionStorage.getItem('extra14') == 'false') {
    nw_add()
  }
  sessionStorage.setItem('extra9', true)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra14', false)
  sessionStorage.setItem('extra1', false)
  document.getElementById('informatik2').checked = false
}

/* 2. NW / 2. FS */
function set_englisch_gese2() {
  sessionStorage.setItem('extra5', true)
}
function set_franzoesisch_gese2() {
  sessionStorage.setItem('extra7', true)
}
function set_latein_gese2() {
  sessionStorage.setItem('extra11', true)
}
function set_spanisch_gese2() {
  sessionStorage.setItem('extra17', true)
}
function set_physik_gese2() {
  sessionStorage.setItem('extra14', true)
}
function set_informatik_gese2() {
  sessionStorage.setItem('extra9', true)
}
function set_chemie_gese2() {
  sessionStorage.setItem('extra2', true)
}
function set_biologie_gese2() {
  sessionStorage.setItem('extra1', true)
}
/* Zusätzliche Fächer */
function set_erdkunde(choose) {
  sessionStorage.setItem('extra6', choose)
}
function set_informatik_voluntary(choose) {
  sessionStorage.setItem('extra9', choose)
}
function set_wish(fach) {
  sessionStorage.setItem('wish_for_p4_p5', fach)
}
function end() {
  for (let i = 1; i < 6; i++) {
    switch (sessionStorage.getItem('pfach' + i)) {
      case 'Mathe':
        sessionStorage.setItem('extra12', false)
        break;
      case 'Informatik':
        sessionStorage.setItem('extra9', false)
        break;
      case 'Chemie':
        sessionStorage.setItem('extra2', false)
        break;
      case 'Biologie':
        sessionStorage.setItem('extra1', false)
        break;
      case 'Physik':
        sessionStorage.setItem('extra14', false)
        break;
      case 'Deutsch':
        sessionStorage.setItem('extra4', false)
        break;
      case 'Englisch':
        sessionStorage.setItem('extra5', false)
        break;
      case 'Französisch':
        sessionStorage.setItem('extra7', false)
        break;
      case 'Latein':
        sessionStorage.setItem('extra11', false)
        break;
      case 'Spanisch':
        sessionStorage.setItem('extra17', false)
        break;
      case 'Kunst':
        sessionStorage.setItem('extra10', false)
        break;
      case 'Musik':
        sessionStorage.setItem('extra13', false)
        break;
      case 'Geschichte':
        sessionStorage.setItem('extra8', false)
        break;
      case 'Religion':
        sessionStorage.setItem('extra16', false)
        break;
      case 'Erdkunde':
        sessionStorage.setItem('extra6', false)
        break;
      case 'Politik Wirtschaft':
        sessionStorage.setItem('extra15', false)
        break;
      case 'Sport':
        sessionStorage.setItem('sport_gk', false)
        break;
    }
  }
}
/* Überprüfungen, ob alles gewählt wurde */
function check_for_complete_p() {
  var p_gewaehlt = [false, false, false, false, false]
  var lp = [14, 13, 15, 17, 18]
  for (let index = 1; index < 6; index++) {
    for (let k = 1; k < lp[index - 1]; k++) {
      if (document.getElementById("pfach" + index + "." + k).checked == true) {
        p_gewaehlt[index - 1] = true
      }
    }
  }
  if (p_gewaehlt[0] == true && p_gewaehlt[1] == true && p_gewaehlt[2] == true && p_gewaehlt[3] == true && p_gewaehlt[4] == true) {
    return true
  } else {
    return false
  }
}
function check_for_pfaecher_gewaehlt() {
  if (sessionStorage.getItem('pfaecher_gewaehlt') == 'false' || sessionStorage.getItem('gks_gewaehlt') == null) {
    window.location.href = "faecherwahl_main.html"
  } 
}
function check_for_gk_gewaehlt() {
  if (sessionStorage.getItem('gks_gewaehlt') == 'false' || sessionStorage.getItem('gks_gewaehlt') == null) {
    if (sessionStorage.getItem('profil') != null) {
      window.location.href = "wahl" + sessionStorage.getItem('profil') + ".html"
    } else {
      window.location.href = "faecherwahl_main.html"
    }
  }
}
function check_for_gewaehlt_output() {
  if (sessionStorage.getItem('gks_gewaehlt') == 'false' || sessionStorage.getItem('gks_gewaehlt') == null) {
    if (sessionStorage.getItem('pfaecher_gewaehlt') == 'false' || sessionStorage.getItem('pfaecher_gewaehlt') == null) {
      window.location.href = "faecherwahl_main.html"
    } else {
      check_for_gk_gewaehlt()
    }
  }
}
function check_for_complete_gk_gese() {
  if (((document.getElementById("religion").disabled == true && document.getElementById("wn").disabled == true) || (document.getElementById("religion").checked == true || document.getElementById("wn").checked == true)) &&
    ((document.getElementById("musik").disabled == true && document.getElementById("kunst").disabled == true && document.getElementById("ds").disabled == true) || (document.getElementById("musik").checked == true || document.getElementById("kunst").checked == true || document.getElementById("ds").checked == true))
    && ((document.getElementById("erdkundja").disabled == true && document.getElementById("erdkundne").disabled == true) || (document.getElementById("erdkundja").checked == true || document.getElementById("erdkundne").checked == true)) &&
    ((document.getElementById("spanisch").disabled == true && document.getElementById("latein").disabled == true && document.getElementById("franzoesisch").disabled == true && document.getElementById("englisch").disabled == true) || (document.getElementById("englisch").checked == true || document.getElementById("spanisch").checked == true || document.getElementById("franzoesisch").checked == true || document.getElementById("latein").checked == true)) &&
    ((document.getElementById("physik").disabled == true && document.getElementById("bio").disabled == true && document.getElementById("informatik").disabled == true && document.getElementById("chemie").disabled == true) || (document.getElementById("physik").checked == true || document.getElementById("bio").checked == true || document.getElementById("informatik").checked == true || document.getElementById("chemie").checked == true)) &&
    ((document.getElementById("spanisch2").disabled == true && document.getElementById("latein2").disabled == true && document.getElementById("englisch2").disabled == true && document.getElementById("franzoesisch2").disabled == true &&
      document.getElementById("physik2").disabled == true && document.getElementById("informatik2").disabled == true && document.getElementById("chemie2").disabled == true && document.getElementById("bio2").disabled == true) || (document.getElementById("physik2").checked == true || document.getElementById("chemie2").checked == true || document.getElementById("informatik2").checked == true || document.getElementById("bio2").checked == true || document.getElementById("spanisch2").checked == true || document.getElementById("englisch2").checked == true || document.getElementById("latein2").checked == true || document.getElementById("franzoesisch2").checked == true))) {
    return true
  } else {
    return false
  }
}
function check_for_complete_gk_manu() {
  if (((document.getElementById("religion").disabled == true && document.getElementById("wn").disabled == true) || (document.getElementById("religion").checked == true || document.getElementById("wn").checked == true)) &&
    ((document.getElementById("musik").disabled == true && document.getElementById("kunst").disabled == true && document.getElementById("ds").disabled == true) || (document.getElementById("musik").checked == true || document.getElementById("kunst").checked == true || document.getElementById("ds").checked == true))
    && ((document.getElementById("erdkundja").disabled == true && document.getElementById("erdkundne").disabled == true) || (document.getElementById("erdkundja").checked == true || document.getElementById("erdkundne").checked == true)) &&
    ((document.getElementById("spanisch").disabled == true && document.getElementById("latein").disabled == true && document.getElementById("franzoesisch").disabled == true && document.getElementById("englisch").disabled == true) || (document.getElementById("englisch").checked == true || document.getElementById("spanisch").checked == true || document.getElementById("franzoesisch").checked == true || document.getElementById("latein").checked == true)) &&
    ((document.getElementById("physik").disabled == true && document.getElementById("bio").disabled == true && document.getElementById("informatik").disabled == true && document.getElementById("chemie").disabled == true) || (document.getElementById("physik").checked == true || document.getElementById("bio").checked == true || document.getElementById("informatik").checked == true || document.getElementById("chemie").checked == true))) {
    return true
  } else {
    return false
  }
}
function check_for_complete_gk_muku() {
  if (((document.getElementById("religion").disabled == true && document.getElementById("wn").disabled == true) || (document.getElementById("religion").checked == true || document.getElementById("wn").checked == true)) &&
    ((document.getElementById("erdkundja").disabled == true && document.getElementById("erdkundne").disabled == true) || (document.getElementById("erdkundja").checked == true || document.getElementById("erdkundne").checked == true)) &&
    ((document.getElementById("informatikja").disabled == true && document.getElementById("informatikne").disabled == true) || (document.getElementById("informatikja").checked == true || document.getElementById("informatikne").checked == true)) &&
    ((document.getElementById("physik").disabled == true && document.getElementById("bio").disabled == true && document.getElementById("chemie").disabled == true) || (document.getElementById("physik").checked == true || document.getElementById("bio").checked == true || document.getElementById("chemie").checked == true)) &&
    ((document.getElementById("spanisch").disabled == true && document.getElementById("latein").disabled == true && document.getElementById("franzoesisch").disabled == true && document.getElementById("englisch").disabled == true) || (document.getElementById("englisch").checked == true || document.getElementById("spanisch").checked == true || document.getElementById("franzoesisch").checked == true || document.getElementById("latein").checked == true)) &&
    ((document.getElementById("musik").disabled == true && document.getElementById("kunst").disabled == true && document.getElementById("ds").disabled == true) || (document.getElementById("musik").checked == true || document.getElementById("kunst").checked == true || document.getElementById("ds").checked == true))) {
    return true
  } else {
    return false
  }
}
function check_for_complete_gk_spra() {
  if (((document.getElementById("religion").disabled == true && document.getElementById("wn").disabled == true) || (document.getElementById("religion").checked == true || document.getElementById("wn").checked == true)) &&
    ((document.getElementById("musik").disabled == true && document.getElementById("kunst").disabled == true && document.getElementById("ds").disabled == true) || (document.getElementById("musik").checked == true || document.getElementById("kunst").checked == true || document.getElementById("ds").checked == true))
    && ((document.getElementById("erdkundja").disabled == true && document.getElementById("erdkundne").disabled == true) || (document.getElementById("erdkundja").checked == true || document.getElementById("erdkundne").checked == true)) &&
    ((document.getElementById("informatikja").disabled == true && document.getElementById("informatikne").disabled == true) || (document.getElementById("informatikja").checked == true || document.getElementById("informatikne").checked == true)) &&
    ((document.getElementById("physik").disabled == true && document.getElementById("bio").disabled == true && document.getElementById("chemie").disabled == true) || (document.getElementById("physik").checked == true || document.getElementById("bio").checked == true || document.getElementById("chemie").checked == true)) &&
    ((document.getElementById("spanisch").disabled == true && document.getElementById("latein").disabled == true && document.getElementById("franzoesisch").disabled == true) || (document.getElementById("spanisch").checked == true || document.getElementById("franzoesisch").checked == true || document.getElementById("latein").checked == true))) {
    return true
  } else {
    return false
  }
}
function show_kf_abc() {
  document.getElementById('info_kf').value = 'Kernfächer: ' + sessionStorage.getItem('kernfaecher') + ', Bereich A: ' + sessionStorage.getItem('A_anzahl') + ', Bereich B: ' + sessionStorage.getItem('B_anzahl') + ', Bereich C: ' + sessionStorage.getItem('C_anzahl')
}
function uncheck_reset_gk_manu() {
  document.getElementById("religion").checked = false
  document.getElementById("wn").checked = false

  document.getElementById("musik").checked = false
  document.getElementById("ds").checked = false
  document.getElementById("kunst").checked = false

  document.getElementById("spanisch").checked = false
  document.getElementById("latein").checked = false
  document.getElementById("englisch").checked = false
  document.getElementById("franzoesisch").checked = false

  document.getElementById("erdkundja").checked = false
  document.getElementById("erdkundne").checked = false

  document.getElementById("chemie").checked = false
  document.getElementById("physik").checked = false
  document.getElementById("informatik").checked = false
  document.getElementById("bio").checked = false

  enable_fachbutton("Religion2")
  enable_fachbutton("PoWi2")
  enable_fachbutton("Geschichte2")
  enable_fachbutton("Kunst2")
  enable_fachbutton("Musik2")

  document.getElementById("PoWi2").checked = false
  document.getElementById("Geschichte2").checked = false
  document.getElementById("Kunst2").checked = false
  document.getElementById("Musik2").checked = false
  document.getElementById("Religion2").checked = false

  sessionStorage.setItem('extra12', false)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra5', false)
  sessionStorage.setItem('extra14', false)
  sessionStorage.setItem('extra1', false)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra11', false)
  sessionStorage.setItem('extra13', false)
  sessionStorage.setItem('extra9', false)
  sessionStorage.setItem('extra10', false)
  sessionStorage.setItem('extra17', false)
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra8', false)
  sessionStorage.setItem('extra15', false)
  sessionStorage.setItem('extra16', false)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra18', false)
  sessionStorage.setItem('sport_gk', false)

  sessionStorage.setItem('wish_for_p4_p5', '')

  document.getElementById("pflicht").textContent = 'Pflicht: '
  mana()
}
function uncheck_reset_gk_spra() {
  document.getElementById("religion").checked = false
  document.getElementById("wn").checked = false

  document.getElementById("musik").checked = false
  document.getElementById("ds").checked = false
  document.getElementById("kunst").checked = false

  document.getElementById("spanisch").checked = false
  document.getElementById("latein").checked = false
  document.getElementById("franzoesisch").checked = false

  document.getElementById("erdkundja").checked = false
  document.getElementById("erdkundne").checked = false

  document.getElementById("informatikja").checked = false
  document.getElementById("informatikne").checked = false

  document.getElementById("chemie").checked = false
  document.getElementById("physik").checked = false
  document.getElementById("bio").checked = false

  enable_fachbutton("Religion2")
  enable_fachbutton("PoWi2")
  enable_fachbutton("Geschichte2")
  enable_fachbutton("Kunst2")
  enable_fachbutton("Musik2")

  document.getElementById("Religion2").checked = false
  document.getElementById("PoWi2").checked = false
  document.getElementById("Geschichte2").checked = false
  document.getElementById("Kunst2").checked = false
  document.getElementById("Musik2").checked = false

  sessionStorage.setItem('extra12', false)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra5', false)
  sessionStorage.setItem('extra14', false)
  sessionStorage.setItem('extra1', false)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra11', false)
  sessionStorage.setItem('extra13', false)
  sessionStorage.setItem('extra9', false)
  sessionStorage.setItem('extra10', false)
  sessionStorage.setItem('extra17', false)
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra8', false)
  sessionStorage.setItem('extra15', false)
  sessionStorage.setItem('extra16', false)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra18', false)
  sessionStorage.setItem('sport_gk', false)

  sessionStorage.setItem('wish_for_p4_p5', '')

  document.getElementById("pflicht").textContent = 'Pflicht: '
  spra()
}
function uncheck_reset_gk_muku() {
  document.getElementById("religion").checked = false
  document.getElementById("wn").checked = false

  document.getElementById("musik").checked = false
  document.getElementById("ds").checked = false
  document.getElementById("kunst").checked = false

  document.getElementById("spanisch").checked = false
  document.getElementById("latein").checked = false
  document.getElementById("franzoesisch").checked = false
  document.getElementById("englisch").checked = false

  document.getElementById("erdkundja").checked = false
  document.getElementById("erdkundne").checked = false

  document.getElementById("informatikja").checked = false
  document.getElementById("informatikne").checked = false

  document.getElementById("chemie").checked = false
  document.getElementById("physik").checked = false
  document.getElementById("bio").checked = false

  enable_fachbutton("Religion2")
  enable_fachbutton("PoWi2")
  enable_fachbutton("Geschichte2")

  document.getElementById("PoWi2").checked = false
  document.getElementById("Geschichte2").checked = false
  document.getElementById("Religion2").checked = false

  sessionStorage.setItem('extra12', false)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra5', false)
  sessionStorage.setItem('extra14', false)
  sessionStorage.setItem('extra1', false)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra11', false)
  sessionStorage.setItem('extra13', false)
  sessionStorage.setItem('extra9', false)
  sessionStorage.setItem('extra10', false)
  sessionStorage.setItem('extra17', false)
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra8', false)
  sessionStorage.setItem('extra15', false)
  sessionStorage.setItem('extra16', false)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra18', false)
  sessionStorage.setItem('sport_gk', false)

  sessionStorage.setItem('wish_for_p4_p5', '')

  document.getElementById("pflicht").textContent = 'Pflicht: '
  muku()
}
function uncheck_reset_gk_gese() {
  document.getElementById("religion").checked = false
  document.getElementById("wn").checked = false

  document.getElementById("musik").checked = false
  document.getElementById("ds").checked = false
  document.getElementById("kunst").checked = false

  document.getElementById("spanisch").checked = false
  document.getElementById("latein").checked = false
  document.getElementById("franzoesisch").checked = false
  document.getElementById("englisch").checked = false

  document.getElementById("erdkundja").checked = false
  document.getElementById("erdkundne").checked = false

  document.getElementById("chemie").checked = false
  document.getElementById("physik").checked = false
  document.getElementById("bio").checked = false
  document.getElementById("informatik").checked = false

  document.getElementById("chemie2").checked = false
  document.getElementById("physik2").checked = false
  document.getElementById("bio2").checked = false
  document.getElementById("informatik2").checked = false
  document.getElementById("spanisch2").checked = false
  document.getElementById("latein2").checked = false
  document.getElementById("franzoesisch2").checked = false
  document.getElementById("englisch2").checked = false

  document.getElementById("chemie2").disabled = true
  document.getElementById("physik2").disabled = true
  document.getElementById("bio2").disabled = true
  document.getElementById("informatik2").disabled = true
  document.getElementById("spanisch2").disabled = true
  document.getElementById("latein2").disabled = true
  document.getElementById("franzoesisch2").disabled = true
  document.getElementById("englisch2").disabled = true

  document.getElementById("chemie2.label").style.opacity = '0.5'
  document.getElementById("physik2.label").style.opacity = '0.5'
  document.getElementById("bio2.label").style.opacity = '0.5'
  document.getElementById("informatik2.label").style.opacity = '0.5'
  document.getElementById("spanisch2.label").style.opacity = '0.5'
  document.getElementById("latein2.label").style.opacity = '0.5'
  document.getElementById("franzoesisch2.label").style.opacity = '0.5'
  document.getElementById("englisch2.label").style.opacity = '0.5'

  sessionStorage.setItem('extra12', false)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra5', false)
  sessionStorage.setItem('extra14', false)
  sessionStorage.setItem('extra1', false)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra11', false)
  sessionStorage.setItem('extra13', false)
  sessionStorage.setItem('extra9', false)
  sessionStorage.setItem('extra10', false)
  sessionStorage.setItem('extra17', false)
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra8', false)
  sessionStorage.setItem('extra15', false)
  sessionStorage.setItem('extra16', false)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra18', false)
  sessionStorage.setItem('sport_gk', false)

  sessionStorage.setItem('wish_for_p4_p5', '')

  enable_fachbutton("Religion2")
  enable_fachbutton("Kunst2")
  enable_fachbutton("Musik2")

  document.getElementById("Kunst2").checked = false
  document.getElementById("Musik2").checked = false
  document.getElementById("Religion2").checked = false

  document.getElementById("pflicht").textContent = 'Pflicht: '
  gese()
}
