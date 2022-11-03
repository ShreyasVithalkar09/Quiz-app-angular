import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { UserResponseService } from 'src/app/services/user-response.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  qList:any [] = [];
  userResponseAns: any [] = [];
  ans:any [] = [];
  userAns: any [] = [];
  result: any = 0;

  constructor( private queService: QuestionService,
    private userService: UserResponseService) { }

  ngOnInit(): void {
    this.getScore()
  }

  getName(){
    return localStorage.getItem("name");
  }
  

  getScore(){
      this.queService.getAllQuestions().subscribe(data => {
        this.qList.push(data);
        this.userResponseAns = this.userService.getResponse();

        for(let i = 0; i<this.qList[0].length; i++){
          this.ans.push(this.qList[0][i].answer);
          this.userAns.push(this.userResponseAns[i].selected)
        }

        for(let i=0; i< this.userAns.length; i++){
          if(this.userAns[i] === this.ans[i]){
            this.result+=10;
          }
        }
        console.log(this.result)
        console.log(this.userAns)
        console.log(this.ans)
      });
  }

}
