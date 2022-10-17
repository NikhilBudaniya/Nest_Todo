import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TaskService {
    private tasks:Task[]=[];

    addTask(title:string){
        const taskId=this.tasks.length+1
        const newTask = new Task(taskId,new Date().toString(),title,false);
        this.tasks.push(newTask);
        return(taskId);
    }
    
    getTasks(){
        return this.tasks;
    }

    getSingleTask(taskId:string){
        const task=this.findTask(taskId)[0];
        return {...task};
    }

    updateTask(taskId:string,title:string,status:boolean){
        const [task,index]=this.findTask(taskId);
        const updatedTask={...task}
        if(title){
            updatedTask.title=title;
        }
        if(status){
            updatedTask.is_completed=status;
        }
        this.tasks[index]=updatedTask;
    }

    deleteTask(taskId:string){
        const index=this.findTask(taskId)[1];
        this.tasks.splice(index,1);
        for(var i=index;i<this.tasks.length;i++){
            this.tasks[i].id--;
        }
    }


    private findTask(taskId:string):[Task,number]{
        const tId=Number(taskId)
        const taskIndex=this.tasks.findIndex(taskData =>taskData.id===tId);
        const task=this.tasks[taskIndex];
        if(!task){
            throw new NotFoundException('Task Not Found.')
        }
        return [task,taskIndex];
    }
}
