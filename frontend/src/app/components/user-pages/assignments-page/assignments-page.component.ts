import { Component, ViewChild, OnInit } from '@angular/core';
import {MatDatepicker} from '@angular/material/datepicker';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-assignments-page',
  templateUrl: './assignments-page.component.html',
  styleUrls: ['./assignments-page.component.css']
})
export class AssignmentsPageComponent implements OnInit {

  @ViewChild('picker') datePickerElement: MatDatepicker<any>;
  choosenDate: Date = new Date;
  numberOfDays: number = 0;

  columnsToDisplay: string[] = [];
  dataToDisplay: any[] = [];

  newTask: string = "";
  newTaskPoints: number = null;

  constructor(private _snackBar: MatSnackBar) { }

  tasksList = [
    {id: 1, name: "Kuchnia", points: 50 ,shcedule_id: 1},
    {id: 2, name: "Sprzątanie łazienki", points: 150 ,shcedule_id: 1},
    {id: 3, name: "Zakupy", points: 250 ,shcedule_id: 1},
    {id: 4, name: "Pranie dla wszystkich XD", points: 550 ,shcedule_id: 1},
    {id: 5, name: "Odkurzanie", points: 450 ,shcedule_id: 1}
  ]

  userTasksList = [
    {id: 1, month: 2, day: 21, done: false, user_id: 1, task_id: 1},
    {id: 2, month: 2, day: 12, done: true, user_id: 2, task_id: 2},
    {id: 3, month: 2, day: 15, done: false, user_id: 1, task_id: 4},
    {id: 4, month: 2, day: 10, done: true, user_id: 2, task_id: 1},
    {id: 5, month: 2, day: 8, done: true, user_id: 1, task_id: 5},
    {id: 6, month: 2, day: 28, done: true, user_id: 3, task_id: 3},
    {id: 7, month: 2, day: 5, done: false, user_id: 1, task_id: 2}
  ]



  ngOnInit(): void {
    this.countNumberOfDays();
    this.fillColumns();
    this.getSchedulerData();
  }

  addNewTask(): void {
    if (this.newTask == "" || this.newTaskPoints == null || this.newTaskPoints == 0) {
      this._snackBar.open('Task name and point cannot be empty or equal to zero!', 'Close',{
        duration: 3000,
      });
    } else {
      this.tasksList.push({id: 6, name: this.newTask, points: this.newTaskPoints ,shcedule_id: 1});
      this.newTask = "";
      this.newTaskPoints = null;
      this.getSchedulerData();
    }
  }

  datepickerEvent(data: Date) {
    this.choosenDate = data;
    this.countNumberOfDays();
    this.fillColumns();
    this.getSchedulerData();
    this.datePickerElement.close();
  }

  fillColumns(): void {
    this.columnsToDisplay = ["Tasks"]
    for (let i = 1; i <= this.numberOfDays; i++) {
      this.columnsToDisplay.push(i.toString());
    }
  }

  countNumberOfDays(): void {
    let year = this.choosenDate.getFullYear();
    let month = this.choosenDate.getMonth();
    this.numberOfDays = this.daysInMonth(month+1,year);
  }

  getDate(): string {
    let year = this.choosenDate.getFullYear();
    let monthName: string = this.choosenDate.toLocaleString('default', { month: 'long' });
    return monthName + " / " + year;
  }

  daysInMonth (month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }

  getSchedulerData(): void {
    let result: any[] = [];
    for (let tasksListItem of this.tasksList) {
      let rowData = {"Tasks": tasksListItem.name + " (" + tasksListItem.points + "pkt)"};
      for (let columnItem of this.columnsToDisplay) {
        if (columnItem != "Tasks") {
          for (let userTaskItem of this.userTasksList) {
            if (userTaskItem.task_id  == tasksListItem.id && userTaskItem.day.toString() == columnItem.toString()) {
              rowData[columnItem.toString()] = {userId: userTaskItem.id, taskId: tasksListItem.id};
              break;
            }
            rowData[columnItem.toString()] = {userId: null, taskId: tasksListItem.id};
          }
        }
      }
      result.push(rowData);
    }
    this.dataToDisplay = result;
  }

  getCellValue(userTaskId: any): boolean {
    if (userTaskId != null) {
      let userTask = this.userTasksList.find(obj => obj.id == userTaskId);
      return userTask.done;
    }
    return null;
  }

  updateUserTaskData(userTaskId: number, columnValue: number, taskIdValue: number): void {
    let monthValue = this.choosenDate.getMonth();
    if (userTaskId != null) {
      let userTask = this.userTasksList.find(obj => obj.id == userTaskId);
      if (userTask.done == true) {
        this._snackBar.open('This task have been done by someone this day.', 'Close',{
          duration: 3000,
        });
      } else {
        userTask.done = true;
        let idx = this.userTasksList.findIndex(obj => obj.id == userTaskId);
        this.userTasksList[idx] = userTask;
      }
    } else {
      let newUserTask = {id: 8, month: monthValue, day: columnValue, done: false, user_id: 1, task_id: taskIdValue};
      this.userTasksList.push(newUserTask);
    }
    this.getSchedulerData();
  }

}
