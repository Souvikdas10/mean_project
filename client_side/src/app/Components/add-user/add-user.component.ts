import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  implements OnInit{
  UserData!: FormGroup
  constructor(private userSer: UserService, private route:Router) { }
  ngOnInit(): void {
    this.UserData = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      salary: new FormControl(''),
    })
  }
  submitData() {
    alert("Submitted Successfully")
    console.log("Forms Data:", this.UserData.value);
    this.userSer.postData(this.UserData.value).subscribe((res:any) => {
      console.log("Add Post Data:", res.data);
if(res){
  this.route.navigate(['/view'])
}
    })
  }
}
