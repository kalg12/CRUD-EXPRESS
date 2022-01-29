const {Router} = require('express');
const router = Router();
const {obtenerAlumnos, creaUnNuevoAlumno, actualizaAlumno, eliminaAlumno} = require('../controllers/alumnosController');


//Obtiene todos los alumnos
router.get('/', obtenerAlumnos);
/* router.get ('/', (req, res) => {
    respuesta.messages = 'Lista de alumnos';
    res.json (respuesta);
}); */
//Crea un nuevo alumno
router.post('/', creaUnNuevoAlumno);
/* router.post ('/', (req, res) => {
    respuesta.messages = 'Alumno creado';
    res.json (respuesta);
}); */
//Actualiza un alumno
router.put('/:id', actualizaAlumno);
/* router.put ('/', (req, res) => {
    respuesta.messages = 'Alumno actualizado';
    res.json (respuesta);
}); */
//Elimina un alumno
router.delete('/:id', eliminaAlumno);
/* router.delete ('/', (req, res) => {
    respuesta.messages = 'Alumno eliminado';
    res.json (respuesta);
}); */

module.exports = router;