export default class Team {
    constructor() {
        this.members = new Set();
    }

    toArray() {
        return [...this.members];
    }

    add(player) {
        if (!this.members.has(player)) this.members.add(player);
        else return 'Персонаж уже существует';
        return true;
    }

    addAll(...players) {
        players.forEach((e) => this.members.add(e));
    }
}
