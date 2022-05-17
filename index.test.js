const {jouer}=require('./index');


test('Player win', () => {
    expect(jouer("ciseau","feuille")).toBe(true);
});
test('Player loose', () => {
    expect(jouer("pierre","feuille")).toBe(false);
});

test('Egalité', () => {
    expect(jouer("pierre","pierre")).toBe(null);
});


test('Mauvaise entrée', () => {
    expect(jouer("pier","pierre")).toBe(undefined);
});
test('Mauvaise 2', () => {
    expect(jouer("pier")).toBe(undefined);
});