export interface ITools {
    getColor: (levelValue: string) => string;
    getTXT: (levelValue) => string;
  }
  
  export const getColor = (levelColor: string) => {
    let classColor = '#4caf50';
    switch (levelColor) {
      case '0':
        classColor = '#4caf50'; // green lighten
        break;
      case '1':
        classColor = '#ffa726'; // orange lighten
        break;
      case '2':
        classColor = '#ff7043'; // deep orange lighten
        break;
      case '3':
        classColor = '#f44336'; // red lighten
        break;
    }
    return classColor;
  };
  
  export const getTXT = (levelColor: string) => {
    let txt = 'Acceptable';
    switch (levelColor) {
      case '0':
        txt = 'Acceptable';
        break;
      case '1':
        txt = 'rapports contradictoires';
        break;
      case '2':
        txt = 'à risque';
        break;
      case '3':
        txt = 'à éviter';
        break;
    }
    return txt.toUpperCase();
  };