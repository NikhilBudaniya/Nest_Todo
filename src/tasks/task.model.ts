export class Task{
    constructor(
    public id:number,
    public date_created:string,
    public title: string,
    public is_completed?:boolean,
    ){}
}