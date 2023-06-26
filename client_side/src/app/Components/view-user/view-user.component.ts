import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  allUser!: any;
  constructor(private UserSer: UserService) { }
  ngOnInit(): void {
    this.UserSer.getData().subscribe((res: any) => {
      console.log("fetch data:", res.data);
      this.allUser = res.data
    })
  }

  dele(id: number) {
    this.UserSer.deleteUser(id).subscribe((res) => {
      console.log("Delete Users form Database:", res);
      alert("User Deleted Successfully")
      this.UserSer.getData().subscribe((res:any) => {
        this.allUser = res.data;
      })

    })
  }

}

