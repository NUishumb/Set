export default class Team {
    constructor() {
        this.members = new Set();
    }

    toArray() {
        return [...this.members];
    }

    add(player) {
        if (!this.members.has(player)) this.members.add(player);
        return 'Персонаж уже существует';
    }

    addAll(...players) {
        players.forEach((e) => this.members.add(e));
    }
}
