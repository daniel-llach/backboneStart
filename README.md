# rectangleMadness

Tomando la base de **backboneStart** y el ejercicio **rectangles** de *codeacademy* (https://www.youtube.com/watch?v=vPW1inIsln4&list=PLQUMc4-0pHw6_vUL1ty11EvDIgydBI_BL&index=6) cree este ejercicio llamado **backboneStart** en el cual nombre *rectangleView* a **appView** y separé el modelo *Rectangle* en un archivo independiente dentro de una nueva carpeta *models*. 

Además el llamado a la app **rectangle** la dejé en el archivo *main.js* en el cual llama a la función *RectangleView*  pasándole la lista de objetos *models* con los datos de los **rectangles** por medio de un **each** de **underscore**.

Respecto al estilo trabajé un poco el archivo *style.less* para mejorar la gráfica por medio de clases dinámicas de **less** incluyendo un contexto 3d otorgándole la clases **perspective** y **rotateY** a **canvas**.

Por último modifiqué la función **move** de **rectangleView** haciendo que le aumente o disminuya la posición x de cada **rectangle** y que además rote de manera aleatoria y dentro de un rango de -45 a 45º la perspectiva del **canvas** que contiene los objetos **rectangles**.
