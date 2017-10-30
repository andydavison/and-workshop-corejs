test('VAR', () => {
  var x = 5;
  var x = 6;
  expect(x).toBe(6);
});

test('LET and VAR', () => {
  var x = 6;
  if (true) {
    let x = 5;
    expect(x).toBe(5);
  }
});

test('LET', () => {
  let x = 5;
  x = 6;
  expect(x).toBe(6);
});

test('LET', () => {
  let x = 5;

  function foo() {
    let x = 20;

    return x;
  }

  expect(foo(x)).toBe(20);
});

test('CONST - scalar values', () => {
  const x = 5;
  // x = 'foo';
  expect(x).toBe(5);
});

test('CONST - assignment', () => {
  const x = 5;
  // x = 5
  expect(x).toBe(5);
});

test('CONST - objects', () => {
  const person = {
    name: 'Linus',
    age: 42
  };

  person.lastname = 'torvalds';

  expect(person.lastname).toBe('torvalds');
});
