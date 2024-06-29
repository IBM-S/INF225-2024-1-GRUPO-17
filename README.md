# Branch Apache Jmeter

En esta Branch se encuentran todos los archivos que se utilizaron para realizar el plan de carga para el proyecto.

* loadtests: carpeta que contiene imagenes de algunos graficos para los distintos tests realizados.
* Test Plan Proyecto INF.jmx: corresponde al plan de carga realizado en Apache Jmeter, este hace uso de los archivos CSV "patients" y "workers", por lo que en caso de ser utilizado estos archivos deberan encontrarse en el mismo directorio que el plan de carga.
* crear_pacientes.py: corresponde a un archivo python utilizado para crear el archivo "patients.csv", este genera datos aleatorios y validos para pacientes en la BD.
* crear_trabajadores.py: corresponde a un archivo python utilizado para crear el archivo "workers.csv", este genera datos aleatorios y validos para trabajadores en la BD.
* patients.csv: archivo csv con datos de pacientes aleatorios validos para la BD.
* workers.csv: archivo csv con datos de trabajadores aleatorios validos para la BD.

Todos los modulos del plan de carga realizado toman en cuenta un bombeardeo de 250 usuarios en un intervalo de 30 segundos, ademas de que el tiempo maximo considerado para
entregar una respuesta sera de 1000 milisegundos.

Los graficos de tiempo de respuesta consideran intervalos de 10 milisegundos.
