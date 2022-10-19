import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiAcceptedResponse, ApiBadGatewayResponse, ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { TaskService } from './task.service';
@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService:TaskService){}

    @ApiCreatedResponse({description:'Created a task successfully.'})
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
    
    @ApiCreatedResponse({description:'Successfully Updated the task.'})
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
