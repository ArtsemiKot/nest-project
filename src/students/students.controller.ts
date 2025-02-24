import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentsService } from './students.service';

interface iStudents {
  id: number,
  name: string,
  age: number,
  grade: string
}
interface iStudentsBody {
  id: number,
  name: string,
  age: number,
  grade: string
}

@Controller()
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) { }

  @Get()
  getAll(): iStudents[] | string {
    try {
      return this.studentsService.getAll();
    } catch (error) {
      return error.message
    }
  }

  @Post('obj')
  createStudent(@Body() obj: iStudentsBody): iStudents[] | string {
    try {
      return this.studentsService.createStudent(obj);
    } catch (error) {
      return error.message
    }
  }

  @Put('/:id')
  updateStudents(@Body() obj: iStudentsBody, @Param('id') id: string): iStudents[] | string {
    try {
      return this.studentsService.updateStudent(id, obj);
    } catch (error) {
      return error.message
    }
  }

  @Delete('/:id')
  deleteStudent(@Param('id') id: string): iStudents[] | string {
    try {
      return this.studentsService.deleteStudent(id);
    } catch (error) {
      return error.message
    }
  }
}
