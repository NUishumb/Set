export default class Character {
    constructor(name = '', type = '') {
        if (name.length >= 2 && name.length <= 10) this.name = name;
        else throw new Error('Длинна имени должна быть в пределах 2-10 символов');
        if (
            type === 'Bowman' || type === 'Swordsman' || type === 'Magician'
            || type === 'Daemon' || type === 'Undead' || type === 'Zombie'
        ) {
            this.type = type;
        } else {
            throw new Error('Некорректный тип');
        }
        this.health = 100;
        this.level = 1;
    }
}
