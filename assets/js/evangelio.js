// Evangelio del Día - JavaScript (Sin jQuery)

// Definir la función esDomingo
function esDomingo(fecha_format) {
	var dateParts = fecha_format.split("-");
	var dia = dateParts[0];
	var mes = dateParts[1];
	var anio = dateParts[2];

	var fecha_format_1 = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
	if (fecha_format_1 instanceof Date && !isNaN(fecha_format_1)) {
		var dia = fecha_format_1.getDay();
		return dia == 0;
	} else {
		return false;
	}
}

const day_today_short_1 = (new Date()).toLocaleDateString("es-ES", { timeZone: 'Europe/Madrid' }).split('T')[0];
day_today_short = day_today_short_1.replaceAll("/", "-");
var day_today_1 = new Date().toLocaleDateString("es-ES", { timeZone: 'Europe/Madrid' });
var day_today = day_today_1.replaceAll("/", "-");
var fechaActual = new Date();

var juevesSantoFormateado = calcularJuevesSanto(fechaActual.getFullYear()).toLocaleDateString().replaceAll("/", "-");
var viernesSantoFormateado = calcularViernesSanto(fechaActual.getFullYear()).toLocaleDateString().replaceAll("/", "-");
var SabadoSantoFormateado = calcularSabadoSanto(fechaActual.getFullYear()).toLocaleDateString().replaceAll("/", "-");

var semana_santa = false;
if (day_today == juevesSantoFormateado || day_today == viernesSantoFormateado || day_today == SabadoSantoFormateado) {
	semana_santa = true;
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

function agregarCeros(numero) {
	return numero < 10 ? '0' + numero : numero;
}

function buscarEvangelio() {
	var fecha_calendar_1 = document.getElementById("fecha_calendar").value;

	if (!fecha_calendar_1) {
		if (typeof showSnackbar === 'function') {
			showSnackbar('Por favor selecciona una fecha', 'warning');
		}
		return;
	}

	var dateParts = fecha_calendar_1.split("-");
	var dia = dateParts[2];
	var mes = dateParts[1];
	var anio = dateParts[0];
	var fecha_format_2 = dia + "-" + mes + "-" + anio;

	var juevesSantoActual = calcularJuevesSanto(fechaActual.getFullYear());
	var juevesSantoFormateado = agregarCeros(juevesSantoActual.getDate()) + '-' + agregarCeros(juevesSantoActual.getMonth() + 1) + '-' + juevesSantoActual.getFullYear();

	var viernesSantoActual = calcularViernesSanto(fechaActual.getFullYear());
	var viernesSantoFormateado = agregarCeros(viernesSantoActual.getDate()) + '-' + agregarCeros(viernesSantoActual.getMonth() + 1) + '-' + viernesSantoActual.getFullYear();

	var SabadoSantoActual = calcularSabadoSanto(fechaActual.getFullYear());
	var SabadoSantoFormateado = agregarCeros(SabadoSantoActual.getDate()) + '-' + agregarCeros(SabadoSantoActual.getMonth() + 1) + '-' + SabadoSantoActual.getFullYear();

	semana_santa = (fecha_format_2 == juevesSantoFormateado || fecha_format_2 == viernesSantoFormateado || fecha_format_2 == SabadoSantoFormateado);

	var lecturas_url;
	if (fecha_calendar_1 != "" && esDomingo(fecha_format_2)) {
		lecturas_url = "https://corsproxy.io/?url=https://www.dominicos.org/predicacion/homilia/" + fecha_format_2 + "/lecturas/";
		putLecturas(lecturas_url);
	} else if (fecha_calendar_1 != "" && !esDomingo(fecha_format_2)) {
		if (fecha_calendar_1.match(/01-01/) || fecha_calendar_1.match(/08-08/) || fecha_calendar_1.match(/08-15/) || fecha_calendar_1.match(/11-01/) || fecha_calendar_1.match(/12-24/) || fecha_calendar_1.match(/12-25/) || fecha_calendar_1.match(/01-06/) || semana_santa) {
			lecturas_url = "https://corsproxy.io/?url=https://www.dominicos.org/predicacion/homilia/" + fecha_format_2 + "/lecturas/";
			putLecturas(lecturas_url);
		} else {
			lecturas_url = "https://corsproxy.io/?url=https://www.dominicos.org/predicacion/evangelio-del-dia/" + fecha_format_2 + "/";
			putLecturas(lecturas_url);
		}
	}
}

function putLecturas(lecturas_url) {
	if (typeof showLoading === 'function') showLoading();

	fetch(lecturas_url)
		.then(response => {
			if (!response.ok) throw new Error('Network error');
			return response.text();
		})
		.then(result => {
			if (typeof hideLoading === 'function') hideLoading();

			var fecha_calendar_1 = document.getElementById("fecha_calendar").value;
			var dateParts = fecha_calendar_1.split("-");
			var dia = dateParts[2];
			var mes = dateParts[1];
			var anio = dateParts[0];
			var fecha_format_2 = dia + "-" + mes + "-" + anio;

			// Extraer nombre del evangelio
			var evengelio_nombre_match;
			if (result.match(/[Ee]vangelio según :(.*?)\"/) != null) {
				evengelio_nombre_match = result.match(/[Ee]vangelio según(.*?)\"/)[0].replace(", lecturas del día y reflexión", "");
			} else if (result.match(/Comienzo del santo [Ee]vangelio según(.*?)\"/)) {
				evengelio_nombre_match = result.match(/Comienzo del santo [Ee]vangelio según(.*?)\"/)[0];
			} else {
				evengelio_nombre_match = result.match(/Lectura del santo [Ee]vangelio según(.*?)\"/)[0];
			}
			var evengelio_nombre = evengelio_nombre_match.slice(0, -1);
			document.getElementById("evangelio_nombre").innerHTML = evengelio_nombre;

			// Extraer lecturas
			var lecturas;
			if ((!fecha_format_2.match("undefined-undefined") && esDomingo(fecha_format_2)) || (fecha_format_2.match("undefined-undefined") && esDomingo(day_today)) || (day_today_short_1.match(/^1\/1\//) && fecha_format_2.match("undefined-undefined")) || fecha_calendar_1.match(/01-01/) || (day_today_short_1.match(/^8\/8\//) && fecha_format_2.match("undefined-undefined")) || fecha_calendar_1.match(/08-08/) || (day_today_short_1.match(/15\/8\//) && fecha_format_2.match("undefined-undefined")) || fecha_calendar_1.match(/08-15/) || (day_today_short_1.match(/^1\/11\//) && fecha_format_2.match("undefined-undefined")) || fecha_calendar_1.match(/11-01/) || (day_today_short_1.match(/24\/12\//) && fecha_format_2.match("undefined-undefined")) || fecha_calendar_1.match(/12-24/) || (day_today_short_1.match(/25\/12\//) && fecha_format_2.match("undefined-undefined")) || fecha_calendar_1.match(/12-25/) || (day_today_short_1.match(/^6\/1\//) && fecha_format_2.match("undefined-undefined")) || fecha_calendar_1.match(/01-06/) || semana_santa) {
				let lecturas_match1 = result.match(/\<h2\>Primera lectura(.*?)\<\/p\>\<p\>\<\/p\>\<asid/)[0];
				lecturas = lecturas_match1.slice(0, -1);
			} else {
				let lecturas_match = result.match(/\<h2\>Primera lectura(.*?)\<\/p\>\<p\>\<\/p\>\<a name=\"/)[0];
				lecturas = lecturas_match.slice(0, -1);
			}
			document.getElementById("evangelio").innerHTML = lecturas;

			// Crear botón de audio si no existe
			if (!document.getElementById("btn").innerHTML.match(/Escuchar/)) {
				crearBotonAudio(lecturas);
			}

			// Cargar reflexión
			cargarReflexion(fecha_format_2, fecha_calendar_1, result);
		})
		.catch(error => {
			console.error("Error:", error);
			if (typeof hideLoading === 'function') hideLoading();
			if (typeof showSnackbar === 'function') {
				showSnackbar('Error al cargar el evangelio. Verifica tu conexión.', 'error');
			}
		});
}

function crearBotonAudio(lecturas) {
	var x = document.createElement("BUTTON");
	var t = document.createTextNode("Escuchar");
	var y = document.createTextNode("Pausar");
	x.className = "audio-btn";
	x.appendChild(t);
	var btn = document.getElementById("btn");
	btn.appendChild(x);

	x.onclick = function () {
		var lecturas_no_tag = lecturas.replaceAll("<h1>", "").replaceAll("<h2>", "").replaceAll("</h2>", " ").replaceAll("<h3>", "").replaceAll("</h3>", " ").replaceAll("<p>", "").replaceAll("</p>", " ").replaceAll("R/", "").replaceAll("<br/>", "").replaceAll("<a name=", "");
		reproducirAudio(lecturas_no_tag, x, t, y);
	};
}

function reproducirAudio(texto, boton, textoEscuchar, textoPausar) {
	const synth = window.speechSynthesis;
	const utterThis = new SpeechSynthesisUtterance(texto);
	utterThis.lang = 'es-ES';

	if (!document.getElementById("btn").innerHTML.match(/Pausar/)) {
		synth.speak(utterThis);
		boton.replaceChild(textoPausar, textoEscuchar);
		synth.resume();

		if (!document.getElementById("btnp").innerHTML.match(/Reiniciar/)) {
			var p = document.createElement("BUTTON");
			var o = document.createTextNode("Reiniciar");
			p.className = "audio-btn secondary";
			p.appendChild(o);
			var btnp = document.getElementById("btnp");
			btnp.appendChild(p);
			p.onclick = function () {
				synth.cancel();
				synth.speak(utterThis);
			};
		}
		document.getElementById("btnp").style.display = "inline";
	} else {
		synth.pause();
		boton.replaceChild(textoEscuchar, textoPausar);
		document.getElementById("btnp").style.display = "none";
	}
}

function cargarReflexion(fecha_format_2, fecha_calendar_1, result) {
	if ((!fecha_format_2.match("undefined-undefined") && esDomingo(fecha_format_2)) || (fecha_format_2.match("undefined-undefined") && esDomingo(day_today)) || (day_today_short_1.match(/^1\/1\//) && fecha_format_2.match("undefined-undefined")) || fecha_calendar_1.match(/01-01/) || (day_today_short_1.match(/^8\/8\//) && fecha_format_2.match("undefined-undefined")) || fecha_calendar_1.match(/08-08/) || (day_today_short_1.match(/15\/8\//) && fecha_format_2.match("undefined-undefined")) || fecha_calendar_1.match(/08-15/) || (day_today_short_1.match(/^1\/11\//) && fecha_format_2.match("undefined-undefined")) || fecha_calendar_1.match(/11-01/) || (day_today_short_1.match(/24\/12\//) && fecha_format_2.match("undefined-undefined")) || fecha_calendar_1.match(/12-24/) || (day_today_short_1.match(/25\/12\//) && fecha_format_2.match("undefined-undefined")) || fecha_calendar_1.match(/12-25/) || (day_today_short_1.match(/^6\/1\//) && fecha_format_2.match("undefined-undefined")) || fecha_calendar_1.match(/01-06/) || semana_santa) {

		if (fecha_format_2.match("undefined-undefined")) {
			fecha_calendar_1 = day_today_short;
			var dateParts = fecha_calendar_1.split("-");
			var dia = dateParts[0];
			var mes = dateParts[1];
			var anio = dateParts[2];
			fecha_format_2 = dia + "-" + mes + "-" + anio;
		}

		var reflexion_url = "https://corsproxy.io/?url=https://www.dominicos.org/predicacion/homilia/" + fecha_format_2 + "/pautas/";

		fetch(reflexion_url)
			.then(response => response.text())
			.then(result1 => {
				if (result1.match(/\<h2>Reflexión del [Ee]vangelio de hoy\<\/h2>\<p>Pendiente de publicación\<\/p>/)) {
					document.getElementById("reflexion").innerHTML = "Aún no está publicada, normalmente se publican con una semana de antelación.";
				} else {
					let reflexion_match = result1.match(/\<h2>Reflexión del [Ee]vangelio de hoy([\s\S]*?)Evangelio de hoy en vídeo/)[0];
					var reflexion = reflexion_match.slice(0, -25);
					document.getElementById("reflexion").innerHTML = reflexion;
				}
			})
			.catch(error => {
				console.error("Error:", error);
				if (typeof showSnackbar === 'function') {
					showSnackbar('No se pudo cargar la reflexión.', 'warning');
				}
			});
	} else {
		if (result.match(/\<h2>Reflexión del Evangelio de hoy(.*?)\<footer class=\"autor\"/) == null) {
			document.getElementById("reflexion").innerHTML = "Aún no está publicada, normalmente se publican con una semana de antelación.";
		} else {
			let reflexion_match = result.match(/\<h2>Reflexión del Evangelio de hoy(.*?)\<footer class=\"autor\"/)[0];
			var reflexion = reflexion_match.slice(0, -1);
			document.getElementById("reflexion").innerHTML = reflexion;
		}
	}
}

// Cargar evangelio al inicio
document.addEventListener('DOMContentLoaded', function() {
	if ((day_today == juevesSantoFormateado || day_today == viernesSantoFormateado || day_today == SabadoSantoFormateado) || esDomingo(day_today) || day_today.match(/8-8-/) || day_today.match(/^01-01-\d{4}$/) || day_today.match(/15-8-/) || day_today.match(/1-11-/) || day_today.match(/24-11-/) || day_today.match(/25-11-/) || day_today.match(/6-1-/)) {
		lecturas_url = "https://corsproxy.io/?url=https://www.dominicos.org/predicacion/evangelio-del-dia/hoy/lecturas/";
		putLecturas(lecturas_url);
	} else {
		lecturas_url = "https://corsproxy.io/?url=https://www.dominicos.org/predicacion/evangelio-del-dia/" + day_today_short + "/";
		putLecturas(lecturas_url);
	}
});
