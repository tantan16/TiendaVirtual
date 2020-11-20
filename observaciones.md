Querida Tania, 

En primer lugar quiero felicitarte por un gran trabajo. Se nota que aca pusiste esfuerzo, y que te esmeraste en entregar un tarjetao lo mas finalizado posible mas alla de las limitaciones de tiempo que tuviste. Me gusta mucho el diseño que hiciste y como adaptaste lo sugerido a tu propia personalidad y a la tienda en si que estabas desarrollando. 

Ire comentando tu trabajo de acuerdo a las consignas propuestas, y al final dejare algunos comentarios sueltos sobre tu codigo en general. Como siempre, la idea es darte las herramientas para que tu trabajo quede mejor aun. 

### Accesibilidad

En general tu sitio es accesible. Utilizas correctamente las etiquetas semanticas, por lo que un lector de pantalla puede orientarse facilmente en tu web. Los colores y contrastes adecuados. Tus imagenes tienen el atributo alt correcto. Muy buen trabajo aca. 

### Filtros y búsqueda

No esta hecha la funcionalidad de mostrar productos en grilla / columna, y es una ausencia bastante grande. Asumo que fue por falta de tiempo, pero escribime si intentaste hacerla y te trabaste en algo para que lo veamos juntas. 

Tus filtros funcionan correctamente uno a uno, pero no podemos hacer mas de una busqueda a la vez. Esto ocurre porque tu input, tu filtro de categorias y tu filtro por estrellas tienen tres funciones diferentes asociadas. Cuando hago click en una categoria, se produce el filtro por categorias correctamente. Pero cuando luego hago click en una estrella, se hace el filtro por estrellas y tu codigo no tiene manera de darse cuenta de que yo esperaba filtrar por categorias y estrellas a la vez. 
Esto se soluciona haciendo que las tres cosas, input, categorias y estrellas, tengan la misma funcion asociada. En la clase 32, identificamos esta funcion general como filtrarTarjetas, y es el nombre que usaré de ejemplo aca. 

```js
plantManualSearch.oninput = () => {
    filtrarTarjetas()
}


for (let checkbox of plantScoreFilter) {
    checkbox.oninput = () => {
      filtrarTarjetas()
  }
}

for (let checkbox of plantClassFilter) {
    checkbox.oninput = () => {
      filtrarTarjetas()
  }
}
```

Asi, en lugar de llamar cada filtro a una funcion distinta (si apretamos los checkbox se llama a la funcion que revisa los checkbox y nada mas), lo que hacemos es llamar a la misma funcion toda vez que se hace click en un filtro, o se escribe algo en el input. Hacemos esto para que esa funcion, filtrarTarjetas, pueda revisar *todos* los filtros. 

Otro problema es que la cantidad señalada no se actualiza con los filtros. Para hacerlo, debemos contar cuantos productos se muestran o no, es decir, cuantas tarjetas tienen la clase "ocultar" nos va a decir cuantas estan ocultas. 

En la funcion "filtrarTarjetas" y en la funcion "limpiarFiltros" podemos llamar a una nueva funcion, contarProductosMostrados(). En esa funcion
- Seleccionamos el mensaje de productos mostrados
- Contamos cuantas tarjetas ocultas hay
- Actualizamos el mensaje con el total de tarjetas menos las tarjetas ocultas. 

```js
const contarProductosMostrados = () => {
    const mensajeProductosMostrados = document.querySelector(".shown-products")
    const tarjetasOcultas = document.querySelectorAll(".product-card.hidden")
    const totalTarjetas = 12

    mensajeProductosMostrados.textContent = `Mostrando ${totalTarjetas - tarjetasOcultas.length} productos de 12`
}

```

### Carrito

La animacion y comportamiento de tu carrito esta muy bien! Sigue todas las pautas. Falto aqui quiza algo de atencion al maquetado para que se pareciera mas al modelo dado, pero a nivel comportamiento, que es lo mas importante, esta todo. 

### Checkout

Faltante. Habria sido bueno que dejaras al menos un maquetado. Si lo que te freno fueron los calculos, la idea seria asi (no quiero darte el codigo directamente porque entiendo que quiza quieras seguir trabajando en esto):

Asumimos que vamos a tener 
- un recargo por tarjeta, que iniciamos en 0
- un recargo por envio, que iniciamos en 0
- un descuento, que iniciamos en 0
- un subtotal, que es el valor que tenes definido
- un total, que iniciamos en 0

Iniciamos los valores en 0 porque si los dejamos "undefined" pueden traernos complicaciones despues en los calculos. 

 Cada vez que el usuario hace click en un checkbox o radio, ejecutamos la misma funcion: calcularTotal. Esa funcion se fija en el radio de "tarjeta de credito". Esta chequeado? Si es asi, calcula el 10% del subtotal y lo adjudica a la variable "recargo por tarjeta". Luego se fija en el checkbox de "envio". Esta marcado? Si es asi, adjudica el valor del envio a la variable "recargo por envio". Hace lo mismo con el descuento. Solo una vez que haya terminado las operaciones, podemos calcular el total, que es:
 total = subtotal + descuento + recargoPorEnvio + recargoPorTarjeta

 Si el usuario *no* marcó envio, por ejemplo, no hay problema, porque nuestra variable recargoPorEnvio queda en 0. 
 Obviamente estas variables te van a servir tambien para ir mostrandole al usuario en el checkout cuanto tiene que pagar por cada cosa. 

 Avisame si esto te sirve para encarar ese codigo, y si no me escribis y lo vemos juntas. 


### Misc 

Tu HTML esta muy bien, prolijo, claro y ordenado. Tu CSS esta muy prolijo y bien hecho tambien: se nota mucho el esfuerzo puesto. 

Con respecto al aspecto visual de tu web, donde no esta perfecto, se nota que fue el tiempo lo que faltó. En donde se nota que tuviste tiempo, el resultado es excelente. Donde no se ve tan bien, entiendo que el tiempo no fue tu aliado. Pero esa es una buena noticia: significa que, cuando tenes el tiempo para invertirlo, ya tenes dominada la parte visual de la programacion web. Y eso es algo a celebrar. 


### Nota 


Veo relativamente pocos problemas en tu TP, pero muchas ausencias. Me cuesta evaluar realmente tu Javascript porque hay poco que hayas escrito vos por fuera de lo que vimos en clase. Tu codigo es prolijo y correcto, y con atencion al detalle, lo que habla de tu capacidad, pero habria preferido ver un poco mas de tu codigo. Si esto vuelve a ocurrir, lo cual es logico porque son trabajos largos y el tiempo no ayuda, preferiria que me dejaras en el codigo comentado los intentos que no salieron: eso me da mucha informacion sobre como encaraste un problema, que tan en claros tenes los conceptos y como manejas JS. No es lo mismo un codigo comentado donde algo no funciona por un parentesis mal puesto, que un codigo que no funciona porque un concepto basico no esta bien aplicado. 

 Yo doy este TP por aprobado, mas alla de que falten algunas cosas. No dudo que quiza vayas a necesitar dedicarle un extra a JS con respecto a algunas compañeras, que ya pudieron practicar y resolver aqui lo que vos tendras que resolver en los proximos trabajos. Como seguir a partir de aqui es decision tuya, pero no dudo que podes. 

Con respecto a los restantes factores de evaluación: 
❌ No cumplido
✔️ Puede mejorar
✅ Cumplido

✅ Respeta la consigna.
✅ Estructura correcta de documento HTML.
✅ Respeta el diseño dado.
❌ Respeta el funcionamiento --> por los puntos faltantes
✔️ Responsive funciona correctamente.
✅ Buena estructura de proyecto.
✅ Código bien indentado.
✔️ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✅ Buenos nombres de clases.
✅ Buenos nombres de funciones y variables.
✅ Reutilización de estilos.
❌  Funciones pequeñas.
✔️ Commits con mensajes adecuados.
❌ Cumple con las condiciones de accesibilidad avanzada.

NOTA FINAL: 7
