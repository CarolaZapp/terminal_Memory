import promptSync from 'prompt-sync';
const prompt = promptSync({eot: true});

function frageSeiten() {
  let seiten;
  do {
    seiten = prompt('Wie viele Seiten haben die Würfel?   ');
  } while (isNaN(seiten) || seiten % 1 !== 0 || seiten <= 0);
  return seiten;
}

function wuerfeln(seiten = 6) {
  return Math.floor(Math.random() * seiten) + 1;
}

function spielen(seiten = 6) {
  const computerWurf = wuerfeln(seiten);
  const spielerWurf = wuerfeln(seiten);
  console.log(`Computer würfelt eine ${computerWurf}!`);
  console.log(`Spieler würfelt eine ${spielerWurf}!`);
  if (computerWurf > spielerWurf) {
    return 'Computer hat gewonnen!';
  }
  if (computerWurf < spielerWurf) {
    return 'Spieler hat gewonnen!';
  }
  return 'Unentschieden!';
}

function weiterSpielen() {
  const weiter = prompt('Möchtest du noch eine Runde spielen? (j/n)  ').toLowerCase();
  if (weiter === 'j') {
    return true;
  }
  if (weiter === 'n') {
    return false;
  }
  return weiterSpielen();
}

function init() {
  const seiten = frageSeiten();
  let weiter;
  do {
    console.log(spielen(seiten));
    weiter = weiterSpielen();
  } while (weiter);
}

init();