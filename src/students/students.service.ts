import { Injectable } from '@nestjs/common';
import students from 'src/storage/students';

interface iStudents {
  id: number,
  name: string,
  age: number,
  grade: string
}
interface iStudentsBody {
  name: string,
  age: number,
  grade: string
}

@Injectable()
export class StudentsService {
  getAll(): iStudents[] | string {
    return students;
  }

  createStudent(obj: iStudentsBody): iStudents[] {
    const newId: number = students.length + 1
    students.push({ id: newId, ...obj })
    return students;
  }

  updateStudent(id: string, obj: iStudentsBody): iStudents[] {
    const indexEl = students.findIndex(el => el.id === +id);
    students[indexEl] = { ...students[indexEl], ...obj };
    return students;
  }
  deleteStudent(id: string): iStudents[] {
    const indexEl = students.findIndex(el => el.id === +id);
    students.splice(indexEl, 1);
    return students;
  }
}
