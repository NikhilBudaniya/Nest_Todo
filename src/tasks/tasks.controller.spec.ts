import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import { TasksController } from './tasks.controller';

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers:[TaskService]
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('getTask',()=>{
    it('should throw a successfull response with id=1',async ()=>{
      expect(await controller.addTask('Create Unit Tests')).toStrictEqual({"id":1});
    });
  });
});
