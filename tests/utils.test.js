const { esDomingo, agregarCeros } = require('./helpers');

describe('esDomingo', () => {
	test('devuelve true para un domingo (22-02-2026)', () => {
		expect(esDomingo('22-02-2026')).toBe(true);
	});

	test('devuelve true para otro domingo (01-01-2023)', () => {
		expect(esDomingo('01-01-2023')).toBe(true);
	});

	test('devuelve false para un lunes (23-02-2026)', () => {
		expect(esDomingo('23-02-2026')).toBe(false);
	});

	test('devuelve false para un sábado (21-02-2026)', () => {
		expect(esDomingo('21-02-2026')).toBe(false);
	});

	test('devuelve false para un viernes (20-02-2026)', () => {
		expect(esDomingo('20-02-2026')).toBe(false);
	});

	test('acepta mes sin cero a la izquierda (22-2-2026)', () => {
		expect(esDomingo('22-2-2026')).toBe(true);
	});

	test('devuelve false para fecha inválida', () => {
		expect(esDomingo('no-es-fecha')).toBe(false);
	});
});

describe('agregarCeros', () => {
	test('añade cero a dígito único', () => {
		expect(agregarCeros(1)).toBe('01');
		expect(agregarCeros(5)).toBe('05');
		expect(agregarCeros(9)).toBe('09');
	});

	test('no modifica números de dos o más dígitos', () => {
		expect(agregarCeros(10)).toBe(10);
		expect(agregarCeros(12)).toBe(12);
		expect(agregarCeros(31)).toBe(31);
	});

	test('el límite exacto: 10 no se modifica', () => {
		expect(agregarCeros(10)).toBe(10);
	});
});
