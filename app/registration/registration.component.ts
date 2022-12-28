import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  
  registrationForm:any
  constructor (private http:HttpClient,private router:Router,private formBuilder:FormBuilder){
    this.createRegistrationForm();
    
  }
  
    createRegistrationForm(): void{
    this.registrationForm = this.formBuilder.group({
      fname: ['',Validators.required],
      lname: ['',Validators.required],
      mobile:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      gender:['',Validators.required],
      address:['',Validators.required],
      city:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      pincode:['',[Validators.required,Validators.pattern("^[1-9][0-9]{5}$")]],
      email: ['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$')]],
      confirmpassword:['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$')]]
    });
  }

  save(){
    console.log(this.registrationForm)
    this.http.post('http://localhost:5184/api/User/User_Registration',this.registrationForm.value,{ responseType: 'text' }).subscribe(data=>{
    console.log(data);

    if(data=="Registered Successfull")
    {      
      alert("Registered Successfull");
      this.router.navigate(['/Login']);
    }
    },
    
    error=>{
      if(error){
        console.log(error);
        alert("Sorry unable to register");
      }
    }
    ) ;

      

  }
  

  ngOnInit(): void {
  }
 
  handleClear():void{
    this.registrationForm.reset();
  }
  
  

}

