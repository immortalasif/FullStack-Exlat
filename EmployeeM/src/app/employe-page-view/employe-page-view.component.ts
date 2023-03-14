import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../services/employees.service';
@Component({
  selector: 'app-employe-page-view',
  templateUrl: './employe-page-view.component.html',
  styleUrls: ['./employe-page-view.component.css']
})
export class EmployePageViewComponent implements OnInit{
username !: any;
empDetails:any;
constructor(private service: EmployeesService,private router: Router) { }

  ngOnInit(): void {
    sessionStorage.getItem("loggedid")
    this.username=sessionStorage.getItem("loggedid");

    this.service.getEmployeeById(this.username.id).subscribe({

      next: (val) => { this.empDetails = val },
      error: (val) => { console.log(val) },

    }
    )
  }
}
