import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService:TaskService){}

    @Post()
    addTask(@Body('title') taskTitle:string){
        const generatedTaskId=this.taskService.addTask(taskTitle);
        return {id:generatedTaskId}
    }

    @Get()
    getAllTasks(){
        return this.taskService.getTasks();
    }

    @Get(':id')
    getTask(@Param('id') taskId:string){
        return this.taskService.getSingleTask(taskId);
    }

    @Patch(':id')
    updateTask(@Param('id') taskId:string,@Body('title') taskTitle:string,@Body('is_completed') status:boolean){
        this.taskService.updateTask(taskId,taskTitle,status)
        return null;
    }

    @Delete(':id')
    removeTask(@Param('id') taskId:string){
        this.taskService.deleteTask(taskId);
        return null;
    }


}
