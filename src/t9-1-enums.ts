
enum TaskStatus {
  COMPLETE, // 0
  INCOMPLETE // 1
}

enum TaskStatus2 {
  COMPLETE = 2, // 2
  INCOMPLETE // 3
}

enum TaskStatus3 {
  COMPLETE = 'C',
  INCOMPLETE = 'I'
}

const task = { title: 'Hacer taller', status: TaskStatus.COMPLETE }
const task2 = { title: 'Hacer Examen', status: TaskStatus.INCOMPLETE }

if (task.status === TaskStatus.INCOMPLETE) {
  
}