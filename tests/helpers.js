// Funciones puras extraídas de evangelio.js para poder testearlas con CommonJS.
// No modificar sin actualizar también evangelio.js.

function esDomingo(fecha_format) {
	var dateParts = fecha_format.split("-");
	var fecha_format_1 = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
	if (fecha_format_1 instanceof Date && !isNaN(fecha_format_1)) {
		var dia = fecha_format_1.getDay();
		return dia == 0;
	} else {
		return false;
	}
}

function agregarCeros(numero) {
	return numero < 10 ? '0' + numero : numero;
}

function calcularFechaPascua(anio) {
	var a = anio % 19;
	var b = Math.floor(anio / 100);
	var c = anio % 100;
	var d = Math.floor(b / 4);
	var e = b % 4;
	var f = Math.floor((b + 8) / 25);
	var g = Math.floor((b - f + 1) / 3);
	var h = (19 * a + b - d - g + 15) % 30;
	var i = Math.floor(c / 4);
	var k = c % 4;
	var l = (32 + 2 * e + 2 * i - h - k) % 7;
	var m = Math.floor((a + 11 * h + 22 * l) / 451);
	var n0 = (h + l + 7 * m + 114);
	var n = Math.floor(n0 / 31) - 1;
	var p = n0 % 31 + 1;
	return new Date(anio, n, p);
}

function calcularJuevesSanto(anio) {
	var fechaPascua = calcularFechaPascua(anio);
	var juevesSanto = new Date(fechaPascua);
	juevesSanto.setDate(fechaPascua.getDate() - 3);
	return juevesSanto;
}

function calcularViernesSanto(anio) {
	var fechaPascua = calcularFechaPascua(anio);
	var viernesSanto = new Date(fechaPascua);
	viernesSanto.setDate(fechaPascua.getDate() - 2);
	return viernesSanto;
}

function calcularSabadoSanto(anio) {
	var fechaPascua = calcularFechaPascua(anio);
	var sabadoSanto = new Date(fechaPascua);
	sabadoSanto.setDate(fechaPascua.getDate() - 1);
	return sabadoSanto;
}

module.exports = {
	esDomingo,
	agregarCeros,
	calcularFechaPascua,
	calcularJuevesSanto,
	calcularViernesSanto,
	calcularSabadoSanto,
};
