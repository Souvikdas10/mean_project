import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editData!: FormGroup
  eid!: any;
  udetails!: any;
  constructor(private userSer: UserService, private router: Router,
    private aroute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.editData = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      salary: new FormControl(''),
    })
    this.aroute.paramMap.subscribe((params) => {
      this.eid = params.get('_id')
      console.log("Collected id:", this.eid);

      this.userSer.editSingledata(this.eid).subscribe((res: any) => {
        console.log("Database data", res.data)
        this.udetails = res.data;

        this.editData = new FormGroup({
          name: new FormControl(this.udetails.name),
          email: new FormControl(this.udetails.email),
          phone: new FormControl(this.udetails.phone),
          salary: new FormControl(this.udetails.salary)
        })
      })
    })
  }
  submitData() {
    // alert("Updated Successfully")
    console.log(" Fetch Update Forms Data:", this.editData.value);

    this.userSer.updatedata(this.eid, this.editData.value).subscribe((res: any) => {
      console.log("User Successfully Update:", res.data);
      alert("User Successfully Update");
      if (res.data) {
        this.router.navigateByUrl('/view')
      }
    })
  }
}