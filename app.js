// Array para almacenar la lista de alumnos
let students = [];

// Función para renderizar la lista de alumnos
function renderStudents() {
  const studentsList = document.getElementById('students-list');
  studentsList.innerHTML = ''; // Limpia la lista antes de renderizar

  students.forEach((student, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${student.name} - Clases Asistidas: ${student.classes}</span>
      <button onclick="addClass(${index})">+1 Clase</button>
    `;
    studentsList.appendChild(li);
  });
}

// Función para agregar un nuevo alumno
function addStudent() {
  const studentNameInput = document.getElementById('student-name');
  const studentName = studentNameInput.value.trim(); // Eliminamos espacios vacíos

  if (studentName) {
    // Agrega el alumno con 0 clases al array
    students.push({ name: studentName, classes: 0 });
    studentNameInput.value = ''; // Limpia el input
    renderStudents(); // Vuelve a mostrar la lista actualizada
  } else {
    alert('Por favor, ingresa un nombre válido.');
  }
}

// Función para sumar una clase asistida a un alumno
function addClass(index) {
  students[index].classes += 1; // Incrementa las clases del alumno seleccionado
  renderStudents(); // Vuelve a mostrar la lista actualizada
}

// Evento: Agregar alumno al presionar el botón
document.getElementById('add-student-btn').addEventListener('click', addStudent);
