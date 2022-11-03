import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  questionList:any [] = [];

  baseUrl = "http://127.0.0.1:8088";

  getAllQuestions(){
    return this.http.get<any>(this.baseUrl+ "/questions")
    
  }


  getQuestionList(){
    return this.questionList;
  }
}
