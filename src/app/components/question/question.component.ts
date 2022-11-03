import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { UserResponseService } from 'src/app/services/user-response.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private questionService: QuestionService, private userResService: UserResponseService) { }


  currentQuestion:number = 0;
  questionList:any[] = [];
  data:string = "";
  name: string = "";
  

  ngOnInit(): void {
    this.getAllQuestions();
    this.getName();

  }

  getAllQuestions(){
    this.questionService.getAllQuestions()
    .subscribe(res => {
      this.questionList = res;
    })
  }

  next(){
    this.userResService.addResponse({
      "username": localStorage.getItem('name')!,
      "id": (this.currentQuestion+1).toString(),
      "selected": this.data
    })
    this.currentQuestion++;
    this.data = ""
  
    if(this.questionList.length === this.userResService.getResponse().length){
      this.userResService.submitResponse();
    }
  }

  onChange(e: any){
    this.data = e.target.value;
  }

  getName(){
    this.name = localStorage.getItem("name")!;
  }

}
