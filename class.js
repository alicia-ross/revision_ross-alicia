export default class Pokemon {
    constructor(name) {
        this.name = name;
    }

    //1
    longueurString(nombre) {
        return nombre === this.name.length;
    }

    //2
    moitieString() {
        const moitie = Math.floor(this.name.length / 2);
        return this.name.slice(moitie);
    }

    //3
    finiPoint() {
        return this.name.endsWith('.');
    }

    //4
    justeA() {
        for (const lettre of this.name) {
            if (lettre != 'a') {
                return false;
            }
        }
        return true;
    } 

    //5
    contientChiffre() {
        for (const lettre of this.name) {
            if (lettre >= '0' && lettre <= '9') {
                return true;
            }
        }
        return false;
    }

    //6
    pointAuMilieu() {
        const milieu = Math.floor(this.name.length / 2);
        if (this.name[milieu] === '.') {
            return true;
        }
        return false;
    }
}