import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = ' http://localhost:5000/tasks'

  constructor(
    private http:HttpClient
  ) { }

  getTasks(): Observable <Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }
}
