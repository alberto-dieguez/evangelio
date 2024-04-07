document.getElementById("btnmostrarrosario").addEventListener("click", function() {
    var contenedor = document.getElementById("containerrosario2");
    if (contenedor.style.display === "none" || contenedor.style.display === "") {
        contenedor.style.display = "flex"; // Muestra los botones ocultos si están ocultos
    } else {
        contenedor.style.display = "none"; // Oculta los botones si ya están visibles
    }
});

// Define la función que se ejecutará al hacer clic en el botón
function rosarioGozoso() {
    // Obtiene el elemento HTML con el ID "evangelio"
    var evangelioElement = document.getElementById("evangelio");
    var reflexionElement = document.getElementById("reflexion");

    // Asigna el contenido de la variable "rosariolunes" al elemento HTML "evangelio"
    evangelioElement.innerHTML = rosario_lunes_sabado;
    reflexionElement.innerHTML = "";

}
// Define la función que se ejecutará al hacer clic en el botón
function rosarioLuminoso() {
    // Obtiene el elemento HTML con el ID "evangelio"
    var evangelioElement = document.getElementById("evangelio");
    var reflexionElement = document.getElementById("reflexion");

    // Asigna el contenido de la variable "rosariolunes" al elemento HTML "evangelio"
    evangelioElement.innerHTML = rosario_jueves;
    reflexionElement.innerHTML = "";

}
// Define la función que se ejecutará al hacer clic en el botón
function rosarioDoloroso() {
    // Obtiene el elemento HTML con el ID "evangelio"
    var evangelioElement = document.getElementById("evangelio");
    var reflexionElement = document.getElementById("reflexion");

    // Asigna el contenido de la variable "rosariolunes" al elemento HTML "evangelio"
    evangelioElement.innerHTML = rosario_martes_viernes;
    reflexionElement.innerHTML = "";

}
// Define la función que se ejecutará al hacer clic en el botón
function rosarioGlorioso() {
    // Obtiene el elemento HTML con el ID "evangelio"
    var evangelioElement = document.getElementById("evangelio");
    var reflexionElement = document.getElementById("reflexion");

    // Asigna el contenido de la variable "rosariolunes" al elemento HTML "evangelio"
    evangelioElement.innerHTML = rosario_miercoles_domingo;
    reflexionElement.innerHTML = "";

}



var rosario_lunes_sabado =`         <h2>Santo Rosario</h2>
(*) MISTERIOS GOZOSOS: (se rezan los lunes y sábados)<br><br>

<strong>1.</strong> Por la señal de la santa Cruz, de nuestros enemigos, líbranos, Señor, Dios nuestro. En el nombre del Padre y del
Hijo y del Espíritu Santo.<br><br>

<li>Señor, ábreme los labios. R/. Y mi boca proclamará tu alabanza.</li>
<li>Dios mío, ven en mi auxilio. R/. Señor, date prisa en socorrerme.</li>
<br>
Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los
siglos. Amén.<br><br>

<strong>2.</strong> Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra, y en Jesucristo, su Hijo único, nuestro
Señor, que fue concebido por el Espíritu Santo, nació de María Virgen, padeció bajo el poder de Poncio Pilato,
fue crucificado, muerto y sepultado; descendió a los infiernos; al tercer día resucitó de entre los muertos;
ascendió a los cielos, y está sentado a la derecha de Dios Padre todopoderoso; desde allí vendrá a juzgar a
vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de
los pecados, la resurrección de la carne y la vida eterna. Amén.<br><br>

<strong>3.</strong>Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
del mal. Amén.<br><br>

<strong>4. x3</strong>Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por
nosotros pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>

Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
de los siglos. Amén.<br><br>


<ol>
    (*) MISTERIOS GOZOSOS:
    <strong>Primer misterio: La Encarnación del Hijo de Dios.</strong> El Arcángel Gabriel se presenta ante la Virgen María y le anuncia que será la Madre
    de Jesús. “María dijo entonces: Yo soy la servidora del Señor, que se cumpla en Mí lo que has dicho”.
    (Lc. 1, 38) – Por este misterio pedimos a la Santísima Virgen aprender a ser humildes y obedientes a la
    Palabra de Dios.<br><br>

    <h3>Reza un Padre Nuestro</h3>
    Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
    voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
    como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
    del mal. Amén.<br><br>

    <h3>Reza 10 Avemarías</h3>
    Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
    y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
    Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>

    <h3>Reza un Gloria al Padre</h3>
    Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
    de los siglos. Amén.<br><br>

    <h3>Reza un María, Madre de gracia</h3>
    María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>

    <h3>Reza un Oh, Jesús Mío</h3>
    ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las
    almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>

    <strong>Segundo Misterio: La visitación de nuestra Señora a su prima Isabel:</strong> “En aquellos
    días, María partió y fue sin demora a un pueblo de la montaña de Judá”. (Lc. 1, 39), a ver a su prima
    Isabel. Imitemos a la Virgen María y aprendamos a sacrificarnos con alegría, en bien de nuestro prójimo.
    – Pidamos la verdadera caridad cristiana.<br><br>

    <h3>Reza un Padre Nuestro</h3>
    Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
    voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
    como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
    del mal. Amén.<br><br>
    
    <h3>Reza 10 Avemarías</h3>
    Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
    y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
    Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
    
    <h3>Reza un Gloria al Padre</h3>
    Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
    de los siglos. Amén.<br><br>
    
    <h3>Reza un María, Madre de gracia</h3>
    María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
    
    <h3>Reza un Oh, Jesús Mío</h3>
    ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las
    almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>

    <strong>Tercer Misterio: El nacimiento del Hijo de Dios en elportal de Belén:</strong>
    “Mientras se encontraban en Belén, le llegó el tiempo de ser madre; y María dio a luz a su hijo
    primogénito, lo envolvió en pañales y lo acostó en un pesebre”. (Lc. 2, 6-7) – Pidamos a la Santísima
    Virgen, el desprendimiento de todo lo terreno.<br><br>

    <h3>Reza un Padre Nuestro</h3>
    Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
    voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
    como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
    del mal. Amén.<br><br>
    
    <h3>Reza 10 Avemarías</h3>
    Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
    y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
    Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
    
    <h3>Reza un Gloria al Padre</h3>
    Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
    de los siglos. Amén.<br><br>
    
    <h3>Reza un María, Madre de gracia</h3>
    María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
    
    <h3>Reza un Oh, Jesús Mío</h3>
    ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, R/. lleva al cielo a todas las
    almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>

    <strong>Cuarto Misterio: La presentación de Jesús en el Templo:</strong> “Cuando llegó el día
    fijado por la Ley de Moisés para la purificación, llevaron al Niño a Jerusalén, para presentarlo al
    Señor”. (Lc. 2, 22) – Pidamos a la Santísima Virgen la virtud de la obediencia.<br><br>

    <h3>Reza un Padre Nuestro</h3>
    Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
    voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
    como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
    del mal. Amén.<br><br>
    
    <h3>Reza 10 Avemarías</h3>
    Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
    y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
    Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
    
    <h3>Reza un Gloria al Padre</h3>
    Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
    de los siglos. Amén.<br><br>
    
    <h3>Reza un María, Madre de gracia</h3>
    María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
    
    <h3>Reza un Oh, Jesús Mío</h3>
    ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las
    almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>

    <strong>Quiento Misterio: El Niño Jesús, perdido y hallado en el Templo:</strong> Jesús se ha perdido.
    Tiene doce años. Acongojada y afanosamente la Virgen lo busca con resignación. “Al tercer día, lo
    hallaron en el Templo en medio de los doctores de la Ley”. (Lc. 2, 46) – Pidamos a María gran
    resignación cristiana ante la voluntad de Dios.<br><br>
   
    <h3>Reza un Padre Nuestro</h3>
    Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
    voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
    como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
    del mal. Amén.<br><br>
    
    <h3>Reza 10 Avemarías</h3>
    Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
    y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
    Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
    
    <h3>Reza un Gloria al Padre</h3>
    Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
    de los siglos. Amén.<br><br>
    
    <h3>Reza un María, Madre de gracia</h3>
    María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
    
    <h3>Reza un Oh, Jesús Mío</h3>
    ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las
    almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>

    <h3>Una Salve a la Virgen</h3>
    Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A Ti llamamos
    los desterrados hijos de Eva; a Ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues,
    Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro
    muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce Virgen María!
    Ruega por nosotros, Santa Madre de Dios.
    Para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén.<br><br>
</ol>

<h2>Letanías de la Santísima Virgen</h2>
<p>Señor, ten piedad. R/. Señor, ten piedad<br>
    Cristo, ten piedad. R/. Cristo, ten piedad<br>
    Señor, ten piedad. R/. Señor, ten piedad<br>
    Cristo, óyenos. R/ Cristo, óyenos <br>
    Cristo, escúchanos R/. Cristo, escúchanos<br>
    Dios padre celestial, R/. Ten misericordia de nosotros <br>
    Dios hijo Redentor del mundo, R/ Ten misericordia de nosotros <br>
    Dios espíritu santo, R/ Ten misericordia de nosotros <br>
    Trinidad Santa un solo Dios, R/. Ten misericordia de nosotros<br>
    Santa María, R/ Ruega por Nosotros<br>
    Santa Madre de Dios, R/ Ruega por Nosotros<br>
    Santa Virgen de las vírgenes, R/ Ruega por Nosotros<br>
    Madre de Cristo, R/ Ruega por Nosotros<br>
    Madre de la iglesia, R/ Ruega por Nosotros<br>
    Madre de la Misericordia, R/ Ruega por Nosotros<br>
    Madre de la divina gracia, R/ Ruega por Nosotros<br>
    Madre de la esperanza, R/ Ruega por Nosotros<br>
    Madre Purísima, R/ Ruega por Nosotros<br>
    Madre castísima, R/ Ruega por Nosotros<br>
    Madre siempre Virgen, R/ Ruega por Nosotros<br>
    Madre inmaculada, R/ Ruega por Nosotros<br>
    Madre amable, R/ Ruega por Nosotros<br>
    Madre admirable, R/ Ruega por Nosotros<br>
    Madre del buen consejo, R/ Ruega por Nosotros<br>
    Madre del creador, R/ Ruega por Nosotros<br>
    Madre del Salvador, R/ Ruega por Nosotros<br>
    Virgen prudentísima, R/ Ruega por Nosotros<br>
    Virgen digna de veneración, R/ Ruega por Nosotros<br>
    Virgen digna de alabanza, R/ Ruega por Nosotros<br>
    Virgen poderosa, R/ Ruega por Nosotros<br>
    Virgen Clemente, R/ Ruega por Nosotros<br>
    Virgen fiel, R/ Ruega por Nosotros<br>
    Espejo de Justicia, R/ Ruega por Nosotros<br>
    Trono de la sabiduría, R/ Ruega por Nosotros<br>
    Causa de nuestra alegría, R/ Ruega por Nosotros<br>
    Vaso espiritual, R/ Ruega por Nosotros<br>
    Vaso Digno de honor, R/ Ruega por Nosotros<br>
    Vaso insigne de devoción, R/ Ruega por Nosotros<br>
    Rosa Mística, R/ Ruega por Nosotros<br>
    Torre de David, R/ Ruega por Nosotros<br>
    Torre de Marfil, R/ Ruega por Nosotros<br>
    Casa de oro, R/ Ruega por Nosotros<br>
    Arca de la alianza, R/ Ruega por Nosotros<br>
    Puerta del Cielo Ruega por Nosotros<br>
    Estrella de la mañana, R/ Ruega por Nosotros<br>
    Salud de los enfermos, R/ Ruega por Nosotros<br>
    Refugio de los pecadores, R/ Ruega por Nosotros<br>
    Consuelo de los migrantes, R/ Ruega por Nosotros<br>
    Consoladora de los afligidos, R/ Ruega por Nosotros<br>
    Auxilio de los cristianos, R/ Ruega por Nosotros<br>
    Reina de los Ángeles, R/ Ruega por Nosotros<br>
    Reina de los patriarcas, R/ Ruega por Nosotros<br>
    Reina de los Profetas, R/ Ruega por Nosotros<br>
    Reina de los Apóstoles, R/ Ruega por Nosotros<br>
    Reina de los mártires, R/ Ruega por Nosotros<br>
    Reina de los confesores, R/ Ruega por Nosotros<br>
    Reina de las vírgenes, R/ Ruega por Nosotros<br>
    Reina de Todos los Santos, R/ Ruega por Nosotros<br>
    Reina concebida sin pecado original, R/ Ruega por Nosotros<br>
    Reina asunta a los cielos, R/ Ruega por Nosotros<br>
    Reina del Rosario, R/ Ruega por Nosotros<br>
    Reina de la familia, R/ Ruega por Nosotros<br>
    Reina de la paz, R/ Ruega por Nosotros<br><br>


    Cordero de Dios que quitas el pecado del mundo R/. Perdónanos Señor.<br>
    Cordero de Dios que quitas el pecado del mundo R/. Escuchanos Señor.<br>
    Cordero de Dios que quitas, el pecado del mundo R/. Ten piedad de nosotros.<br><br>
</p>
    <h2>Oración</h2>
    Te pedimos, Señor, nos concedas a nosotros tus siervos, gozar de perpetua salud de alma y cuerpo, y por la
    gloriosa intercesión de la bienaventurada siempre Virgen María, seamos librados de las tristezas presentes y
    gocemos de la eterna alegría. Por Jesucristo, nuestro Señor. Amén.<br><br>

    <h2>Por las intenciones del Santo Padre</h2>
    Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu
    voluntad en la tierra como en el cielo.
    Danos hoy nuestro pan de cada día; perdona nuestras ofensas como también nosotros perdonamos a los que nos
    ofenden; no nos dejes caer en la tentación y líbranos del mal. Amén.<br><br>

    <h2>Jaculatoria final</h2>
    Ave María Purísima.<br>
    Sin pecado concebida.<br>
    María es madre de Gracia, Madre de misericordia, R/. en la vida y en la muerte ampáranos nuestra señora. Amen.<br><br>`;

    var rosario_jueves =`         <h2>Santo Rosario</h2>
    (*) MISTERIOS LUMINOSOS: (se rezan los jueves)<br><br>
    
    <strong>1.</strong> Por la señal de la santa Cruz, de nuestros enemigos, líbranos, Señor, Dios nuestro. En el nombre del Padre y del
    Hijo y del Espíritu Santo.<br><br>
    
    <li>Señor, ábreme los labios. R/. Y mi boca proclamará tu alabanza.</li>
    <li>Dios mío, ven en mi auxilio. R/. Señor, date prisa en socorrerme.</li>
    <br>
    Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los
    siglos. Amén.<br><br>
    
    <strong>2.</strong> Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra, y en Jesucristo, su Hijo único, nuestro
    Señor, que fue concebido por el Espíritu Santo, nació de María Virgen, padeció bajo el poder de Poncio Pilato,
    fue crucificado, muerto y sepultado; descendió a los infiernos; al tercer día resucitó de entre los muertos;
    ascendió a los cielos, y está sentado a la derecha de Dios Padre todopoderoso; desde allí vendrá a juzgar a
    vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de
    los pecados, la resurrección de la carne y la vida eterna. Amén.<br><br>
    
    <strong>3.</strong>Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
    voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
    como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
    del mal. Amén.<br><br>
    
    <strong>4. x3</strong>Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
    y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por
    nosotros pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
    
    Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
    de los siglos. Amén.<br><br>
    
    
    <ol>
        (*) MISTERIOS LUMINOSOS:
        <strong>Primer misterio: El Bautismo de Jesús en el río Jordán:</strong> “Apenas fue bautizado, 
        Jesús salió del agua. En ese momento se le abrieron los cielos, y vio al Espíritu de Dios descender como 
        una paloma y dirigirse hacia Él. Y se oyó una voz del cielo que decía: Éste es mi Hijo muy querido, 
        en quien tengo puesta toda mi predilección”. (Mt. 3, 16-17) – Pidamos a la Santísima Virgen, vivir 
        nuestro Bautismo con fidelidad a Cristo Jesús.<br><br>
    
        <h3>Reza un Padre Nuestro</h3>
        Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
        voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
        como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
        del mal. Amén.<br><br>
    
        <h3>Reza 10 Avemarías</h3>
        Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
        y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
        Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
    
        <h3>Reza un Gloria al Padre</h3>
        Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
        de los siglos. Amén.<br><br>
    
        <h3>Reza un María, Madre de gracia</h3>
        María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
    
        <h3>Reza un Oh, Jesús Mío</h3>
        ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las
        almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>
    
        <strong>Segundo Misterio: La autorrevelación de Jesús en las Bodas de Caná:</strong> “Y como faltaba vino la madre de Jesús le dijo: 
        No tienen vino. Jesús le respondió: ¿qué tenemos que ver nosotros?. Mi hora no ha llegado todavía. Pero su madre dijo a los sirvientes: 
        Hagan todo lo que Él les diga... Éste fue el primero de los signos de Jesús y lo hizo en Caná de Galilea. Así manifestó su gloria y 
        sus discípulos creyeron en Él”. (Jn. 2, 3-5, 11) – Pidamos a María Santísima, saber corresponder al Señor.<br><br>
    
        <h3>Reza un Padre Nuestro</h3>
        Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
        voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
        como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
        del mal. Amén.<br><br>
        
        <h3>Reza 10 Avemarías</h3>
        Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
        y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
        Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
        
        <h3>Reza un Gloria al Padre</h3>
        Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
        de los siglos. Amén.<br><br>
        
        <h3>Reza un María, Madre de gracia</h3>
        María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
        
        <h3>Reza un Oh, Jesús Mío</h3>
        ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las
        almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>
    
        <strong>Tercer Misterio: El anuncio de Jesús sobre el Reino de Dios y su invitación a la conversión:</strong>
        “Allí proclamaba la Buena Noticia de Dios, diciendo: El Tiempo se ha cumplido: el Reino de Dios está cerca. 
        Conviértanse y crean en la Buena Noticia”. (Mc. 1, 14-15) – Pidamos al Señor, nos envíe su Espíritu, para lograr una real conversión.<br><br>
    
        <h3>Reza un Padre Nuestro</h3>
        Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
        voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
        como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
        del mal. Amén.<br><br>
        
        <h3>Reza 10 Avemarías</h3>
        Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
        y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
        Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
        
        <h3>Reza un Gloria al Padre</h3>
        Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
        de los siglos. Amén.<br><br>
        
        <h3>Reza un María, Madre de gracia</h3>
        María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
        
        <h3>Reza un Oh, Jesús Mío</h3>
        ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, R/. lleva al cielo a todas las
        almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>
    
        <strong>Cuarto Misterio: La Transfiguración de Jesús en el Monte Tabor:</strong> “Mientras oraba, 
        su rostro cambió de aspecto y sus vestiduras se volvieron de una blancura deslumbrante... 
        Desde la nube se oyó entonces una Voz que decía: Éste es mi Hijo, el Elegido, escúchenlo”. (Lc. 9, 29 y 35) 
        – Pidamos a la Santísima Virgen, reconocer en nuestros hermanos, el rostro de Jesús.<br><br>
    
        <h3>Reza un Padre Nuestro</h3>
        Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
        voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
        como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
        del mal. Amén.<br><br>
        
        <h3>Reza 10 Avemarías</h3>
        Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
        y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
        Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
        
        <h3>Reza un Gloria al Padre</h3>
        Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
        de los siglos. Amén.<br><br>
        
        <h3>Reza un María, Madre de gracia</h3>
        María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
        
        <h3>Reza un Oh, Jesús Mío</h3>
        ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las
        almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>
    
        <strong>Quiento Misterio: Jesús instituye la Eucaristía:</strong> 
        “Mientras comían, Jesús tomó el pan, pronunció la bendición, lo partió y lo dio a sus discípulos diciendo: 
        Tomen y coman esto es mi Cuerpo. Después tomó una copa, dio gracias y se la entregó diciendo: 
        Beban todos de ella, porque ésta es mi Sangre, la Sangre de la Alianza, que se derrama por muchos para 
        la remisión de los pecados”. (Mt. 26, 26-28) – Pidamos a María Santísima, ser dignos depositarios del Cuerpo y de la Sangre de Jesús.<br><br>
       
        <h3>Reza un Padre Nuestro</h3>
        Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
        voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
        como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
        del mal. Amén.<br><br>
        
        <h3>Reza 10 Avemarías</h3>
        Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
        y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
        Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
        
        <h3>Reza un Gloria al Padre</h3>
        Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
        de los siglos. Amén.<br><br>
        
        <h3>Reza un María, Madre de gracia</h3>
        María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
        
        <h3>Reza un Oh, Jesús Mío</h3>
        ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las
        almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>
    
        <h3>Una Salve a la Virgen</h3>
        Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A Ti llamamos
        los desterrados hijos de Eva; a Ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues,
        Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro
        muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce Virgen María!
        Ruega por nosotros, Santa Madre de Dios.
        Para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén.<br><br>
    </ol>
    
    <h2>Letanías de la Santísima Virgen</h2>
    <p>Señor, ten piedad. R/. Señor, ten piedad<br>
        Cristo, ten piedad. R/. Cristo, ten piedad<br>
        Señor, ten piedad. R/. Señor, ten piedad<br>
        Cristo, óyenos. R/ Cristo, óyenos <br>
        Cristo, escúchanos R/. Cristo, escúchanos<br>
        Dios padre celestial, R/. Ten misericordia de nosotros <br>
        Dios hijo Redentor del mundo, R/ Ten misericordia de nosotros <br>
        Dios espíritu santo, R/ Ten misericordia de nosotros <br>
        Trinidad Santa un solo Dios, R/. Ten misericordia de nosotros<br>
        Santa María, R/ Ruega por Nosotros<br>
        Santa Madre de Dios, R/ Ruega por Nosotros<br>
        Santa Virgen de las vírgenes, R/ Ruega por Nosotros<br>
        Madre de Cristo, R/ Ruega por Nosotros<br>
        Madre de la iglesia, R/ Ruega por Nosotros<br>
        Madre de la Misericordia, R/ Ruega por Nosotros<br>
        Madre de la divina gracia, R/ Ruega por Nosotros<br>
        Madre de la esperanza, R/ Ruega por Nosotros<br>
        Madre Purísima, R/ Ruega por Nosotros<br>
        Madre castísima, R/ Ruega por Nosotros<br>
        Madre siempre Virgen, R/ Ruega por Nosotros<br>
        Madre inmaculada, R/ Ruega por Nosotros<br>
        Madre amable, R/ Ruega por Nosotros<br>
        Madre admirable, R/ Ruega por Nosotros<br>
        Madre del buen consejo, R/ Ruega por Nosotros<br>
        Madre del creador, R/ Ruega por Nosotros<br>
        Madre del Salvador, R/ Ruega por Nosotros<br>
        Virgen prudentísima, R/ Ruega por Nosotros<br>
        Virgen digna de veneración, R/ Ruega por Nosotros<br>
        Virgen digna de alabanza, R/ Ruega por Nosotros<br>
        Virgen poderosa, R/ Ruega por Nosotros<br>
        Virgen Clemente, R/ Ruega por Nosotros<br>
        Virgen fiel, R/ Ruega por Nosotros<br>
        Espejo de Justicia, R/ Ruega por Nosotros<br>
        Trono de la sabiduría, R/ Ruega por Nosotros<br>
        Causa de nuestra alegría, R/ Ruega por Nosotros<br>
        Vaso espiritual, R/ Ruega por Nosotros<br>
        Vaso Digno de honor, R/ Ruega por Nosotros<br>
        Vaso insigne de devoción, R/ Ruega por Nosotros<br>
        Rosa Mística, R/ Ruega por Nosotros<br>
        Torre de David, R/ Ruega por Nosotros<br>
        Torre de Marfil, R/ Ruega por Nosotros<br>
        Casa de oro, R/ Ruega por Nosotros<br>
        Arca de la alianza, R/ Ruega por Nosotros<br>
        Puerta del Cielo Ruega por Nosotros<br>
        Estrella de la mañana, R/ Ruega por Nosotros<br>
        Salud de los enfermos, R/ Ruega por Nosotros<br>
        Refugio de los pecadores, R/ Ruega por Nosotros<br>
        Consuelo de los migrantes, R/ Ruega por Nosotros<br>
        Consoladora de los afligidos, R/ Ruega por Nosotros<br>
        Auxilio de los cristianos, R/ Ruega por Nosotros<br>
        Reina de los Ángeles, R/ Ruega por Nosotros<br>
        Reina de los patriarcas, R/ Ruega por Nosotros<br>
        Reina de los Profetas, R/ Ruega por Nosotros<br>
        Reina de los Apóstoles, R/ Ruega por Nosotros<br>
        Reina de los mártires, R/ Ruega por Nosotros<br>
        Reina de los confesores, R/ Ruega por Nosotros<br>
        Reina de las vírgenes, R/ Ruega por Nosotros<br>
        Reina de Todos los Santos, R/ Ruega por Nosotros<br>
        Reina concebida sin pecado original, R/ Ruega por Nosotros<br>
        Reina asunta a los cielos, R/ Ruega por Nosotros<br>
        Reina del Rosario, R/ Ruega por Nosotros<br>
        Reina de la familia, R/ Ruega por Nosotros<br>
        Reina de la paz, R/ Ruega por Nosotros<br><br>
    
    
        Cordero de Dios que quitas el pecado del mundo R/. Perdónanos Señor.<br>
        Cordero de Dios que quitas el pecado del mundo R/. Escuchanos Señor.<br>
        Cordero de Dios que quitas, el pecado del mundo R/. Ten piedad de nosotros.<br><br>
    </p>
        <h2>Oración</h2>
        Te pedimos, Señor, nos concedas a nosotros tus siervos, gozar de perpetua salud de alma y cuerpo, y por la
        gloriosa intercesión de la bienaventurada siempre Virgen María, seamos librados de las tristezas presentes y
        gocemos de la eterna alegría. Por Jesucristo, nuestro Señor. Amén.<br><br>
    
        <h2>Por las intenciones del Santo Padre</h2>
        Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu
        voluntad en la tierra como en el cielo.
        Danos hoy nuestro pan de cada día; perdona nuestras ofensas como también nosotros perdonamos a los que nos
        ofenden; no nos dejes caer en la tentación y líbranos del mal. Amén.<br><br>
    
        <h2>Jaculatoria final</h2>
        Ave María Purísima.<br>
        Sin pecado concebida.<br>
        María es madre de Gracia, Madre de misericordia, R/. en la vida y en la muerte ampáranos nuestra señora. Amen.<br><br>`;

        var rosario_martes_viernes =`         <h2>Santo Rosario</h2>
        (*) MISTERIOS DOLOROSOS: (se rezan los martes y viernes)<br><br>
        
        <strong>1.</strong> Por la señal de la santa Cruz, de nuestros enemigos, líbranos, Señor, Dios nuestro. En el nombre del Padre y del
        Hijo y del Espíritu Santo.<br><br>
        
        <li>Señor, ábreme los labios. R/. Y mi boca proclamará tu alabanza.</li>
        <li>Dios mío, ven en mi auxilio. R/. Señor, date prisa en socorrerme.</li>
        <br>
        Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los
        siglos. Amén.<br><br>
        
        <strong>2.</strong> Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra, y en Jesucristo, su Hijo único, nuestro
        Señor, que fue concebido por el Espíritu Santo, nació de María Virgen, padeció bajo el poder de Poncio Pilato,
        fue crucificado, muerto y sepultado; descendió a los infiernos; al tercer día resucitó de entre los muertos;
        ascendió a los cielos, y está sentado a la derecha de Dios Padre todopoderoso; desde allí vendrá a juzgar a
        vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de
        los pecados, la resurrección de la carne y la vida eterna. Amén.<br><br>
        
        <strong>3.</strong>Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
        voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
        como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
        del mal. Amén.<br><br>
        
        <strong>4. x3</strong>Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
        y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por
        nosotros pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
        
        Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
        de los siglos. Amén.<br><br>
        
        
        <ol>
            (*) MISTERIOS DOLOROSOS:
            <strong>Primer misterio: La oración de Jesús en el Huerto de los Olivos:</strong> La noche antes de su muerte en la Cruz, Jesús,
            que siendo Dios sabía que lo iban a crucificar, sube al Monte de los Olivos a rezar. “Y adelantándose un poco, 
            cayó con el rostro en tierra, orando así: “Padre mío, si es posible, que pase lejos de mí este cáliz, pero no se haga mi voluntad,
            sino la tuya”. (Mt. 26, 39) – Pidamos a la Santísima Virgen, aprender a orar.<br><br>
        
            <h3>Reza un Padre Nuestro</h3>
            Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
            voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
            como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
            del mal. Amén.<br><br>
        
            <h3>Reza 10 Avemarías</h3>
            Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
            y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
            Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
        
            <h3>Reza un Gloria al Padre</h3>
            Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
            de los siglos. Amén.<br><br>
        
            <h3>Reza un María, Madre de gracia</h3>
            María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
        
            <h3>Reza un Oh, Jesús Mío</h3>
            ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las
            almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>
        
            <strong>Segundo Misterio: La Flagelación de Nuestro Señor:</strong> “Pilatos mandó entonces azotar a Jesús”.
            (Jn. 19, 1) – Pidamos a la Santísima Virgen, aprender a sufrir.<br><br>
        
            <h3>Reza un Padre Nuestro</h3>
            Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
            voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
            como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
            del mal. Amén.<br><br>
            
            <h3>Reza 10 Avemarías</h3>
            Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
            y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
            Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
            
            <h3>Reza un Gloria al Padre</h3>
            Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
            de los siglos. Amén.<br><br>
            
            <h3>Reza un María, Madre de gracia</h3>
            María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
            
            <h3>Reza un Oh, Jesús Mío</h3>
            ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las
            almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>
        
            <strong>Tercer Misterio: La Coronación de espinas:</strong>
            Los soldados tejieron una corona de espinas y se la pusieron sobre la cabeza. Lo revistieron con un manto rojo,
            y acercándose, le decían: “¡Salud, rey de los judíos!”, y lo abofeteaban. (Jn. 19, 2-3)
            – Pidamos a la Virgen, aprender a aceptar pacientemente las humillaciones.<br><br>
        
            <h3>Reza un Padre Nuestro</h3>
            Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
            voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
            como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
            del mal. Amén.<br><br>
            
            <h3>Reza 10 Avemarías</h3>
            Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
            y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
            Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
            
            <h3>Reza un Gloria al Padre</h3>
            Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
            de los siglos. Amén.<br><br>
            
            <h3>Reza un María, Madre de gracia</h3>
            María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
            
            <h3>Reza un Oh, Jesús Mío</h3>
            ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, R/. lleva al cielo a todas las
            almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>
        
            <strong>Cuarto Misterio: Jesús con la Cruz a cuestas camino al Calvario:</strong> Jesús,
            cargando sobre sí la cruz, salió de la ciudad para dirigirse al lugar llamado “del Cráneo”, 
            en hebreo “Gólgota”. (Jn. 19, 17) – Pidamos a la Virgen, aprender a aceptar y amar nuestra cruz.<br><br>
        
            <h3>Reza un Padre Nuestro</h3>
            Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
            voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
            como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
            del mal. Amén.<br><br>
            
            <h3>Reza 10 Avemarías</h3>
            Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
            y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
            Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
            
            <h3>Reza un Gloria al Padre</h3>
            Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
            de los siglos. Amén.<br><br>
            
            <h3>Reza un María, Madre de gracia</h3>
            María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
            
            <h3>Reza un Oh, Jesús Mío</h3>
            ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las
            almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>
        
            <strong>Quiento Misterio: La Crucifixión y Muerte de Nuestro Señor Jesucristo:</strong> 
            “Cuando llegaron al lugar llamado “del Cráneo”, lo crucificaron”. (Lc. 23, 33). Era alrededor del mediodía. 
            El sol se eclipsó y la oscuridad cubrió toda la tierra hasta las tres de la tarde: el velo del Templo se rasgó 
            por el medio. Jesús, con un grito, exclamó: “Padre, en tus manos encomiendo mi espíritu”. Y diciendo esto, 
            expiró. (Lc. 23, 44-46) – Pidamos a la Santísima Virgen llegar al último momento de nuestra vida, habiendo 
            cumplido bien nuestra misión aquí en la tierra.<br><br>
           
            <h3>Reza un Padre Nuestro</h3>
            Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
            voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
            como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
            del mal. Amén.<br><br>
            
            <h3>Reza 10 Avemarías</h3>
            Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
            y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
            Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
            
            <h3>Reza un Gloria al Padre</h3>
            Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
            de los siglos. Amén.<br><br>
            
            <h3>Reza un María, Madre de gracia</h3>
            María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
            
            <h3>Reza un Oh, Jesús Mío</h3>
            ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las
            almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>
        
            <h3>Una Salve a la Virgen</h3>
            Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A Ti llamamos
            los desterrados hijos de Eva; a Ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues,
            Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro
            muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce Virgen María!
            Ruega por nosotros, Santa Madre de Dios.
            Para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén.<br><br>
        </ol>
        
        <h2>Letanías de la Santísima Virgen</h2>
        <p>Señor, ten piedad. R/. Señor, ten piedad<br>
            Cristo, ten piedad. R/. Cristo, ten piedad<br>
            Señor, ten piedad. R/. Señor, ten piedad<br>
            Cristo, óyenos. R/ Cristo, óyenos <br>
            Cristo, escúchanos R/. Cristo, escúchanos<br>
            Dios padre celestial, R/. Ten misericordia de nosotros <br>
            Dios hijo Redentor del mundo, R/ Ten misericordia de nosotros <br>
            Dios espíritu santo, R/ Ten misericordia de nosotros <br>
            Trinidad Santa un solo Dios, R/. Ten misericordia de nosotros<br>
            Santa María, R/ Ruega por Nosotros<br>
            Santa Madre de Dios, R/ Ruega por Nosotros<br>
            Santa Virgen de las vírgenes, R/ Ruega por Nosotros<br>
            Madre de Cristo, R/ Ruega por Nosotros<br>
            Madre de la iglesia, R/ Ruega por Nosotros<br>
            Madre de la Misericordia, R/ Ruega por Nosotros<br>
            Madre de la divina gracia, R/ Ruega por Nosotros<br>
            Madre de la esperanza, R/ Ruega por Nosotros<br>
            Madre Purísima, R/ Ruega por Nosotros<br>
            Madre castísima, R/ Ruega por Nosotros<br>
            Madre siempre Virgen, R/ Ruega por Nosotros<br>
            Madre inmaculada, R/ Ruega por Nosotros<br>
            Madre amable, R/ Ruega por Nosotros<br>
            Madre admirable, R/ Ruega por Nosotros<br>
            Madre del buen consejo, R/ Ruega por Nosotros<br>
            Madre del creador, R/ Ruega por Nosotros<br>
            Madre del Salvador, R/ Ruega por Nosotros<br>
            Virgen prudentísima, R/ Ruega por Nosotros<br>
            Virgen digna de veneración, R/ Ruega por Nosotros<br>
            Virgen digna de alabanza, R/ Ruega por Nosotros<br>
            Virgen poderosa, R/ Ruega por Nosotros<br>
            Virgen Clemente, R/ Ruega por Nosotros<br>
            Virgen fiel, R/ Ruega por Nosotros<br>
            Espejo de Justicia, R/ Ruega por Nosotros<br>
            Trono de la sabiduría, R/ Ruega por Nosotros<br>
            Causa de nuestra alegría, R/ Ruega por Nosotros<br>
            Vaso espiritual, R/ Ruega por Nosotros<br>
            Vaso Digno de honor, R/ Ruega por Nosotros<br>
            Vaso insigne de devoción, R/ Ruega por Nosotros<br>
            Rosa Mística, R/ Ruega por Nosotros<br>
            Torre de David, R/ Ruega por Nosotros<br>
            Torre de Marfil, R/ Ruega por Nosotros<br>
            Casa de oro, R/ Ruega por Nosotros<br>
            Arca de la alianza, R/ Ruega por Nosotros<br>
            Puerta del Cielo Ruega por Nosotros<br>
            Estrella de la mañana, R/ Ruega por Nosotros<br>
            Salud de los enfermos, R/ Ruega por Nosotros<br>
            Refugio de los pecadores, R/ Ruega por Nosotros<br>
            Consuelo de los migrantes, R/ Ruega por Nosotros<br>
            Consoladora de los afligidos, R/ Ruega por Nosotros<br>
            Auxilio de los cristianos, R/ Ruega por Nosotros<br>
            Reina de los Ángeles, R/ Ruega por Nosotros<br>
            Reina de los patriarcas, R/ Ruega por Nosotros<br>
            Reina de los Profetas, R/ Ruega por Nosotros<br>
            Reina de los Apóstoles, R/ Ruega por Nosotros<br>
            Reina de los mártires, R/ Ruega por Nosotros<br>
            Reina de los confesores, R/ Ruega por Nosotros<br>
            Reina de las vírgenes, R/ Ruega por Nosotros<br>
            Reina de Todos los Santos, R/ Ruega por Nosotros<br>
            Reina concebida sin pecado original, R/ Ruega por Nosotros<br>
            Reina asunta a los cielos, R/ Ruega por Nosotros<br>
            Reina del Rosario, R/ Ruega por Nosotros<br>
            Reina de la familia, R/ Ruega por Nosotros<br>
            Reina de la paz, R/ Ruega por Nosotros<br><br>
        
        
            Cordero de Dios que quitas el pecado del mundo R/. Perdónanos Señor.<br>
            Cordero de Dios que quitas el pecado del mundo R/. Escuchanos Señor.<br>
            Cordero de Dios que quitas, el pecado del mundo R/. Ten piedad de nosotros.<br><br>
        </p>
            <h2>Oración</h2>
            Te pedimos, Señor, nos concedas a nosotros tus siervos, gozar de perpetua salud de alma y cuerpo, y por la
            gloriosa intercesión de la bienaventurada siempre Virgen María, seamos librados de las tristezas presentes y
            gocemos de la eterna alegría. Por Jesucristo, nuestro Señor. Amén.<br><br>
        
            <h2>Por las intenciones del Santo Padre</h2>
            Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu
            voluntad en la tierra como en el cielo.
            Danos hoy nuestro pan de cada día; perdona nuestras ofensas como también nosotros perdonamos a los que nos
            ofenden; no nos dejes caer en la tentación y líbranos del mal. Amén.<br><br>
        
            <h2>Jaculatoria final</h2>
            Ave María Purísima.<br>
            Sin pecado concebida.<br>
            María es madre de Gracia, Madre de misericordia, R/. en la vida y en la muerte ampáranos nuestra señora. Amen.<br><br>`;

            var rosario_miercoles_domingo =`         <h2>Santo Rosario</h2>
            (*) MISTERIOS GLORIOSOS: (se rezan los miércoles y domingos)<br><br>
            
            <strong>1.</strong> Por la señal de la santa Cruz, de nuestros enemigos, líbranos, Señor, Dios nuestro. En el nombre del Padre y del
            Hijo y del Espíritu Santo.<br><br>
            
            <li>Señor, ábreme los labios. R/. Y mi boca proclamará tu alabanza.</li>
            <li>Dios mío, ven en mi auxilio. R/. Señor, date prisa en socorrerme.</li>
            <br>
            Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los
            siglos. Amén.<br><br>
            
            <strong>2.</strong> Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra, y en Jesucristo, su Hijo único, nuestro
            Señor, que fue concebido por el Espíritu Santo, nació de María Virgen, padeció bajo el poder de Poncio Pilato,
            fue crucificado, muerto y sepultado; descendió a los infiernos; al tercer día resucitó de entre los muertos;
            ascendió a los cielos, y está sentado a la derecha de Dios Padre todopoderoso; desde allí vendrá a juzgar a
            vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de
            los pecados, la resurrección de la carne y la vida eterna. Amén.<br><br>
            
            <strong>3.</strong>Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
            voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
            como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
            del mal. Amén.<br><br>
            
            <strong>4. x3</strong>Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
            y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por
            nosotros pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
            
            Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
            de los siglos. Amén.<br><br>
            
            
            <ol>
                (*) MISTERIOS GLORIOSOS:
                <strong>Primer misterio: La Resurrección de Nuestro Señor Jesucristo:</strong> 
                Al entrar al sepulcro, vieron a un joven sentado a la derecha, vestido con una túnica blanca. 
                Ellas quedaron sorprendidas, pero él les dijo: “No teman. Ustedes buscan a Jesús de Nazaret, el Crucificado. 
                Ha resucitado, no está aquí. (Mc. 16, 5-6) – Si por el pecado hubiéramos muerto a la gracia, 
                pidamos a la Virgen María resucitar con Cristo, por medio de una sincera confesión.<br><br>
            
                <h3>Reza un Padre Nuestro</h3>
                Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
                voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
                como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
                del mal. Amén.<br><br>
            
                <h3>Reza 10 Avemarías</h3>
                Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
                y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
                Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
            
                <h3>Reza un Gloria al Padre</h3>
                Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
                de los siglos. Amén.<br><br>
            
                <h3>Reza un María, Madre de gracia</h3>
                María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
            
                <h3>Reza un Oh, Jesús Mío</h3>
                ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las
                almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>
            
                <strong>Segundo Misterio: La Ascensión de Nuestro Señor a los cielos:</strong> “Ustedes son testigos de todo esto. 
                Y Yo les enviaré lo que mi Padre les ha prometido. Permanezcan en la ciudad, hasta que sean revestidos con 
                la fuerza que viene de lo alto”. Después Jesús los llevó hasta las proximidades de Betania y, 
                elevando sus manos, los bendijo. Mientras los bendecía, se separó de ellos y fue llevado al cielo”. 
                (Lc. 24, 48-51) – Pidamos a la Santísima Virgen ascender diariamente en nuestra vida espiritual.<br><br>
            
                <h3>Reza un Padre Nuestro</h3>
                Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
                voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
                como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
                del mal. Amén.<br><br>
                
                <h3>Reza 10 Avemarías</h3>
                Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
                y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
                Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
                
                <h3>Reza un Gloria al Padre</h3>
                Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
                de los siglos. Amén.<br><br>
                
                <h3>Reza un María, Madre de gracia</h3>
                María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
                
                <h3>Reza un Oh, Jesús Mío</h3>
                ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las
                almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>
            
                <strong>Tercer Misterio: La venida del Espíritu Santo sobre María Santísima y sobre los Apóstoles:</strong>
                “Al llegar el día de Pentecostés, estaban todos reunidos en el mismo lugar. 
                De pronto, vino del cielo un ruido semejante a una ráfaga de viento que resonó en toda la casa donde se encontraban. 
                Entonces vieron aparecer unas lenguas como de fuego, que descendieron por separado sobre cada uno de ellos. 
                Todos quedaron llenos del Espíritu Santo”. (Hechos 2, 1-4) – Pidamos a la Santísima Virgen que el Espíritu 
                Santo nos ilumine para cumplir siempre la voluntad de Dios.<br><br>
            
                <h3>Reza un Padre Nuestro</h3>
                Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
                voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
                como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
                del mal. Amén.<br><br>
                
                <h3>Reza 10 Avemarías</h3>
                Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
                y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
                Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
                
                <h3>Reza un Gloria al Padre</h3>
                Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
                de los siglos. Amén.<br><br>
                
                <h3>Reza un María, Madre de gracia</h3>
                María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
                
                <h3>Reza un Oh, Jesús Mío</h3>
                ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, R/. lleva al cielo a todas las
                almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>
            
                <strong>Cuarto Misterio: La Asunción de María Santísima a los cielos:</strong> “Finalmente, la Virgen Inmaculada, 
                preservada inmune de toda mancha de culpa original, terminado el decurso de su vida terrena, fue asunta en cuerpo 
                y alma a la gloria celestial (Lumen Gentium Cap. VIII 59) – Pedimos a Dios, vivir como lo hizo María aquí en la tierra, 
                con sencillez y humildad, para alcanzar una santa muerte.<br><br>
            
                <h3>Reza un Padre Nuestro</h3>
                Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
                voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
                como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
                del mal. Amén.<br><br>
                
                <h3>Reza 10 Avemarías</h3>
                Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
                y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
                Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
                
                <h3>Reza un Gloria al Padre</h3>
                Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
                de los siglos. Amén.<br><br>
                
                <h3>Reza un María, Madre de gracia</h3>
                María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
                
                <h3>Reza un Oh, Jesús Mío</h3>
                ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las
                almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>
            
                <strong>Quiento Misterio: La Coronación de María Santísima como Reina y Señora de todo lo creado:</strong> 
                “...Y ensalzada por el Señor como Reina universal con el fin de que se asemejase de forma más plena a su Hijo, 
                Señor de los señores y vencedor del pecado y de la muerte”. (Lumen Gentium Cap. VIII 59) – 
                Pidamos a Dios la verdadera y filial devoción a María y la gracia de imitar fielmente sus virtudes, para alcanzar el cielo.<br><br>
               
                <h3>Reza un Padre Nuestro</h3>
                Padre Nuestro, que estás en el Cielo, santificado sea Tu nombre, venga a nosotros Tu reino, hágase tu
                voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas,
                como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos
                del mal. Amén.<br><br>
                
                <h3>Reza 10 Avemarías</h3>
                Dios te Salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres
                y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios,, R/ Ruega por
                Nosotros<br>pecadores, ahora y en la hora de nuestra muerte. Amén.<br><br>
                
                <h3>Reza un Gloria al Padre</h3>
                Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos
                de los siglos. Amén.<br><br>
                
                <h3>Reza un María, Madre de gracia</h3>
                María, Madre de gracia, Madre de misericordia. /R. En la vida y en la muerte ampáranos, gran Señora.<br><br>
                
                <h3>Reza un Oh, Jesús Mío</h3>
                ¡Oh! Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las
                almas, especialmente a las más necesitadas de Tu misericordia. Amén.<br><br>
            
                <h3>Una Salve a la Virgen</h3>
                Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A Ti llamamos
                los desterrados hijos de Eva; a Ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues,
                Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro
                muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce Virgen María!
                Ruega por nosotros, Santa Madre de Dios.
                Para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén.<br><br>
            </ol>
            
            <h2>Letanías de la Santísima Virgen</h2>
            <p>Señor, ten piedad. R/. Señor, ten piedad<br>
                Cristo, ten piedad. R/. Cristo, ten piedad<br>
                Señor, ten piedad. R/. Señor, ten piedad<br>
                Cristo, óyenos. R/ Cristo, óyenos <br>
                Cristo, escúchanos R/. Cristo, escúchanos<br>
                Dios padre celestial, R/. Ten misericordia de nosotros <br>
                Dios hijo Redentor del mundo, R/ Ten misericordia de nosotros <br>
                Dios espíritu santo, R/ Ten misericordia de nosotros <br>
                Trinidad Santa un solo Dios, R/. Ten misericordia de nosotros<br>
                Santa María, R/ Ruega por Nosotros<br>
                Santa Madre de Dios, R/ Ruega por Nosotros<br>
                Santa Virgen de las vírgenes, R/ Ruega por Nosotros<br>
                Madre de Cristo, R/ Ruega por Nosotros<br>
                Madre de la iglesia, R/ Ruega por Nosotros<br>
                Madre de la Misericordia, R/ Ruega por Nosotros<br>
                Madre de la divina gracia, R/ Ruega por Nosotros<br>
                Madre de la esperanza, R/ Ruega por Nosotros<br>
                Madre Purísima, R/ Ruega por Nosotros<br>
                Madre castísima, R/ Ruega por Nosotros<br>
                Madre siempre Virgen, R/ Ruega por Nosotros<br>
                Madre inmaculada, R/ Ruega por Nosotros<br>
                Madre amable, R/ Ruega por Nosotros<br>
                Madre admirable, R/ Ruega por Nosotros<br>
                Madre del buen consejo, R/ Ruega por Nosotros<br>
                Madre del creador, R/ Ruega por Nosotros<br>
                Madre del Salvador, R/ Ruega por Nosotros<br>
                Virgen prudentísima, R/ Ruega por Nosotros<br>
                Virgen digna de veneración, R/ Ruega por Nosotros<br>
                Virgen digna de alabanza, R/ Ruega por Nosotros<br>
                Virgen poderosa, R/ Ruega por Nosotros<br>
                Virgen Clemente, R/ Ruega por Nosotros<br>
                Virgen fiel, R/ Ruega por Nosotros<br>
                Espejo de Justicia, R/ Ruega por Nosotros<br>
                Trono de la sabiduría, R/ Ruega por Nosotros<br>
                Causa de nuestra alegría, R/ Ruega por Nosotros<br>
                Vaso espiritual, R/ Ruega por Nosotros<br>
                Vaso Digno de honor, R/ Ruega por Nosotros<br>
                Vaso insigne de devoción, R/ Ruega por Nosotros<br>
                Rosa Mística, R/ Ruega por Nosotros<br>
                Torre de David, R/ Ruega por Nosotros<br>
                Torre de Marfil, R/ Ruega por Nosotros<br>
                Casa de oro, R/ Ruega por Nosotros<br>
                Arca de la alianza, R/ Ruega por Nosotros<br>
                Puerta del Cielo Ruega por Nosotros<br>
                Estrella de la mañana, R/ Ruega por Nosotros<br>
                Salud de los enfermos, R/ Ruega por Nosotros<br>
                Refugio de los pecadores, R/ Ruega por Nosotros<br>
                Consuelo de los migrantes, R/ Ruega por Nosotros<br>
                Consoladora de los afligidos, R/ Ruega por Nosotros<br>
                Auxilio de los cristianos, R/ Ruega por Nosotros<br>
                Reina de los Ángeles, R/ Ruega por Nosotros<br>
                Reina de los patriarcas, R/ Ruega por Nosotros<br>
                Reina de los Profetas, R/ Ruega por Nosotros<br>
                Reina de los Apóstoles, R/ Ruega por Nosotros<br>
                Reina de los mártires, R/ Ruega por Nosotros<br>
                Reina de los confesores, R/ Ruega por Nosotros<br>
                Reina de las vírgenes, R/ Ruega por Nosotros<br>
                Reina de Todos los Santos, R/ Ruega por Nosotros<br>
                Reina concebida sin pecado original, R/ Ruega por Nosotros<br>
                Reina asunta a los cielos, R/ Ruega por Nosotros<br>
                Reina del Rosario, R/ Ruega por Nosotros<br>
                Reina de la familia, R/ Ruega por Nosotros<br>
                Reina de la paz, R/ Ruega por Nosotros<br><br>
            
            
                Cordero de Dios que quitas el pecado del mundo R/. Perdónanos Señor.<br>
                Cordero de Dios que quitas el pecado del mundo R/. Escuchanos Señor.<br>
                Cordero de Dios que quitas, el pecado del mundo R/. Ten piedad de nosotros.<br><br>
            </p>
                <h2>Oración</h2>
                Te pedimos, Señor, nos concedas a nosotros tus siervos, gozar de perpetua salud de alma y cuerpo, y por la
                gloriosa intercesión de la bienaventurada siempre Virgen María, seamos librados de las tristezas presentes y
                gocemos de la eterna alegría. Por Jesucristo, nuestro Señor. Amén.<br><br>
            
                <h2>Por las intenciones del Santo Padre</h2>
                Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu
                voluntad en la tierra como en el cielo.
                Danos hoy nuestro pan de cada día; perdona nuestras ofensas como también nosotros perdonamos a los que nos
                ofenden; no nos dejes caer en la tentación y líbranos del mal. Amén.<br><br>
            
                <h2>Jaculatoria final</h2>
                Ave María Purísima.<br>
                Sin pecado concebida.<br>
                María es madre de Gracia, Madre de misericordia, R/. en la vida y en la muerte ampáranos nuestra señora. Amen.<br><br>`;