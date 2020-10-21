const calculaTamMaxEquipo = (jornada): number => {
  let tam = 0;
  for (let partido of jornada) {
    if (tam < partido.local.length) {
      tam = partido.local.length;
    }
    if (tam < partido.visitante.length) {
      tam = partido.visitante.length;
    }
  }
  return tam;
};

const daCaracter = (tam: number, caracter: string): string => {
  let linea = "";
  for (let i = 0; i < tam; i++) {
    linea += caracter;
  }
  return linea;
};

const muestra = (jornada) => {
  let tamColumna = calculaTamMaxEquipo(jornada);
  let linea = daCaracter(tamColumna, "─");
  let i = 0;
  for (let partido of jornada) {
    let rellenoLocal = daCaracter(tamColumna - partido.local.length, " ");
    let rellenoVisitante = daCaracter(
      tamColumna - partido.visitante.length,
      " "
    );

    if (i == 0) {
      //cabecera
      console.log("┌" + linea + "┬" + linea + "┐");
      console.log(
        "|" +
          rellenoLocal +
          partido.local +
          "|" +
          partido.visitante +
          rellenoVisitante +
          "|"
      );
      console.log("├" + linea + "┼" + linea + "┤");
    } else if (i == jornada.length - 1) {
      //estoy en el último
      console.log(
        "|" +
          rellenoLocal +
          partido.local +
          "|" +
          partido.visitante +
          rellenoVisitante +
          "|"
      );
      console.log("└" + linea + "┴" + linea + "┘");
    } else {
      //zona media
      console.log(
        "|" +
          rellenoLocal +
          partido.local +
          "|" +
          partido.visitante +
          rellenoVisitante +
          "|"
      );
      console.log("├" + linea + "┼" + linea + "┤");
    }

    i++;
  }
};

export { muestra };
