// Tests para las regex de extracción de reflexión.
// Estos tests documentan y protegen el comportamiento de cargarReflexion() en evangelio.js.

// HTML de muestra que replica la estructura real de dominicos.org/predicacion/homilia/.../pautas/
const HTML_DOMINGO_AUDIO = `
<h2>Reflexión del Evangelio de hoy</h2><p></p><h3>"Se les abrieron los ojos a los dos"</h3>
<p>La reflexión de este domingo habla sobre la tentación.</p>
<p>Solo Dios puede dar la plenitud al ser humano.</p>
<p></p><p><br/></p><h2>Evangelio de hoy en audio</h2><div class="pred_audio"></div>
`;

const HTML_DOMINGO_VIDEO = `
<h2>Reflexión del Evangelio de hoy</h2><p>Contenido de la reflexión en vídeo.</p>
<p></p><p><br/></p><h2>Evangelio de hoy en vídeo</h2><div class="pred_video"></div>
`;

const HTML_DOMINGO_VIDEO_SIN_ACENTO = `
<h2>Reflexión del Evangelio de hoy</h2><p>Contenido de la reflexión.</p>
<p></p><h2>Evangelio de hoy en video</h2>
`;

const HTML_PENDIENTE = `
<h2>Reflexión del Evangelio de hoy</h2><p>Pendiente de publicación</p>
`;

// HTML de muestra para días de semana (desde evangelio-del-dia/.../  misma página que las lecturas)
const HTML_SEMANA = `
<h2>Reflexión del Evangelio de hoy</h2><p>La reflexión del día de semana.</p><footer class="autor">Fray Autor O.P.</footer>
`;

// Réplica exacta de las regex usadas en evangelio.js
const REGEX_REFLEXION_DOMINGO = /\<h2>Reflexión del [Ee]vangelio de hoy([\s\S]*?)(?=\<h2>Evangelio de hoy en (audio|v[ií]deo))/;
const REGEX_REFLEXION_SEMANA = /\<h2>Reflexión del Evangelio de hoy(.*?)\<footer class=\"autor\"/;
const REGEX_PENDIENTE = /\<h2>Reflexión del [Ee]vangelio de hoy\<\/h2>\<p>Pendiente de publicación\<\/p>/;

describe('Regex reflexión domingo - extracción desde /pautas/', () => {
	test('extrae el contenido hasta "Evangelio de hoy en audio"', () => {
		const match = HTML_DOMINGO_AUDIO.match(REGEX_REFLEXION_DOMINGO);
		expect(match).not.toBeNull();
		expect(match[0]).toContain('Reflexión del Evangelio de hoy');
		expect(match[0]).toContain('La reflexión de este domingo');
		expect(match[0]).toContain('Solo Dios puede dar la plenitud');
	});

	test('el resultado NO incluye el marcador de fin "Evangelio de hoy en audio"', () => {
		const match = HTML_DOMINGO_AUDIO.match(REGEX_REFLEXION_DOMINGO);
		expect(match[0]).not.toContain('Evangelio de hoy en audio');
	});

	test('extrae el contenido hasta "Evangelio de hoy en vídeo" (con acento)', () => {
		const match = HTML_DOMINGO_VIDEO.match(REGEX_REFLEXION_DOMINGO);
		expect(match).not.toBeNull();
		expect(match[0]).toContain('Contenido de la reflexión en vídeo');
		expect(match[0]).not.toContain('Evangelio de hoy en vídeo');
	});

	test('extrae el contenido hasta "Evangelio de hoy en video" (sin acento)', () => {
		const match = HTML_DOMINGO_VIDEO_SIN_ACENTO.match(REGEX_REFLEXION_DOMINGO);
		expect(match).not.toBeNull();
		expect(match[0]).not.toContain('Evangelio de hoy en video');
	});

	test('devuelve null si no hay marcador de fin reconocido', () => {
		const htmlSinFin = '<h2>Reflexión del Evangelio de hoy</h2><p>Sin marcador de fin.</p>';
		const match = htmlSinFin.match(REGEX_REFLEXION_DOMINGO);
		expect(match).toBeNull();
	});

	test('funciona con saltos de línea dentro de la reflexión (multiline)', () => {
		const htmlMultilinea = `<h2>Reflexión del Evangelio de hoy</h2>
<p>Primera línea.</p>
<p>Segunda línea.</p>
<h2>Evangelio de hoy en audio</h2>`;
		const match = htmlMultilinea.match(REGEX_REFLEXION_DOMINGO);
		expect(match).not.toBeNull();
		expect(match[0]).toContain('Primera línea');
		expect(match[0]).toContain('Segunda línea');
	});
});

describe('Regex pendiente de publicación', () => {
	test('detecta el mensaje de pendiente de publicación', () => {
		expect(HTML_PENDIENTE.match(REGEX_PENDIENTE)).not.toBeNull();
	});

	test('no genera falso positivo en una reflexión publicada', () => {
		expect(HTML_DOMINGO_AUDIO.match(REGEX_PENDIENTE)).toBeNull();
	});

	test('es case-insensitive para "Evangelio" (E/e)', () => {
		const htmlMinuscula = '<h2>Reflexión del evangelio de hoy</h2><p>Pendiente de publicación</p>';
		expect(htmlMinuscula.match(REGEX_PENDIENTE)).not.toBeNull();
	});
});

describe('Regex reflexión días de semana', () => {
	test('extrae la reflexión de un día de semana', () => {
		const match = HTML_SEMANA.match(REGEX_REFLEXION_SEMANA);
		expect(match).not.toBeNull();
		expect(match[0]).toContain('La reflexión del día de semana');
	});

	test('el resultado incluye la apertura del footer pero no su contenido', () => {
		const match = HTML_SEMANA.match(REGEX_REFLEXION_SEMANA);
		// La regex captura hasta <footer class="autor" (inclusive), luego slice(0,-1)
		// elimina solo la comilla final. El tag <footer se incluye parcialmente.
		const reflexion = match[0].slice(0, -1);
		expect(reflexion).toContain('<footer class="autor');
		expect(reflexion).not.toContain('Fray Autor'); // el contenido del footer no se captura
	});

	test('devuelve null si no hay footer de autor', () => {
		const htmlSinFooter = '<h2>Reflexión del Evangelio de hoy</h2><p>Sin footer.</p>';
		expect(htmlSinFooter.match(REGEX_REFLEXION_SEMANA)).toBeNull();
	});
});
