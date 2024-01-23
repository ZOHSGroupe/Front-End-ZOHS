import { Component, Input, OnInit, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';
import { CheckServerMaintenanceProblemService } from '../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.css'
})
export class EmailVerificationComponent implements OnInit{
  @ViewChildren('digitInput') digitInputs!: QueryList<ElementRef<HTMLInputElement>>;

  @Input() eventFunction: () => void=()=>{
    console.log(this.getDigitsCode());
  };
  @Input() email:string="example@example.com";
  @Input() code:string="";
  @Input() lastPage:string="";
  digits: string[] = ['', '', '', '', '', ''];
  constructor(private readonly checkServerConnection:CheckServerMaintenanceProblemService){

  }
  ngOnInit(): void {
    this.checkServerConnection.checkGatewayConnection();
  }
  resendCode(){
    // code change
  }
  getDigitsCode():string{
    let digitsCode:string="";
    this.digits.forEach((item:string)=>{
      digitsCode+=item;
    })
    return digitsCode;
  }
  onDigitInput(index: number): void {
    // Move focus to the next input field if available
    const nextIndex = index + 1;
    if (nextIndex <= this.digits.length) {
      const nextInput = document.getElementById(`digit${nextIndex}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
  verifieCode():void{
    if(this.getDigitsCode().length!=6){

    }else if(this.getDigitsCode()!=this.code){

    }else if(this.getDigitsCode()==this.code){
      //valid code
      this.eventFunction();
    }
  }

  


}
