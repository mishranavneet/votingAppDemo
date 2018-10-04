import { Component } from "@angular/core";
import { CommonService } from "../common.service";


@Component({
    // selector: 'rr-report',
    templateUrl: 'report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent {


    constructor(private newService :CommonService,) { 
    }
        Repdata;
    

    ngOnInit() {
        this.newService.GetUser().subscribe(data =>  this.Repdata = data)

    }

    delete = function(id) {  
        this.newService.deleteUser(id)  
        .subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
    }

}