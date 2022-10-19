import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
export class Task{
    public id:number;
    public date_created:string;
    @ApiProperty({description:"Title of the task."})
    @IsNotEmpty()
    public title: string;
    public is_completed?:boolean;
    constructor(
    id:number,
    date_created:string,
    title: string,
    is_completed?:boolean,
    ){
        this.id=id,
        this.date_created=date_created,
        this.title=title,
        this.is_completed=is_completed
    }
}