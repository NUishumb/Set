import Character from '../Character';
import Team from '../Team';

test('should add character', () => {
    const char = new Character('abc', 'Bowman');
    const team = new Team();
    team.add(char);
    expect(team.toArray()).toEqual([{
        name: 'abc',
        type: 'Bowman',
        health: 100,
        level: 1,
    }]);
});

test('should throw error', () => {
    const char = new Character('abc', 'Bowman');
    const team = new Team();
    team.add(char);
    expect(() => team.add(char)).toThrow('Персонаж уже существует');
});

test('should add multiple characters', () => {
    const char = new Character('abc', 'Bowman');
    const char2 = new Character('asd', 'Daemon');
    const char3 = new Character('player53', 'Zombie');
    const team = new Team();
    team.addAll(char, char2, char3);
    expect(team.toArray()).toEqual([{
        name: 'abc',
        type: 'Bowman',
        health: 100,
        level: 1,
    },
    {
        name: 'asd',
        type: 'Daemon',
        health: 100,
        level: 1,
    },
    {
        name: 'player53',
        type: 'Zombie',
        health: 100,
        level: 1,
    }]);
});
