// - Una cadena de texto con tu Nombre
const firstName = 'Sergio';

// - Otra cadena de texto con tu Apellido
const lastName = 'Torchia';

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
const estudiante = firstName + ' ' + lastName;

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
const estudianteMayus = estudiante.toUpperCase();

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
const estudianteMinus = estudiante.toLowerCase();

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let estudianteLength = estudiante.length;

// - Una variable que contenga la primera letra del Nombre
let firstLetter = firstName.charAt(0);

// - Otra variable que contenga la última letra del Apellido
let lastLetter = lastName.charAt(lastName.length - 1);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let noBlanks = estudiante.replaceAll(/\s/g, '');

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let containsEstudiante = estudiante.includes(firstName);
