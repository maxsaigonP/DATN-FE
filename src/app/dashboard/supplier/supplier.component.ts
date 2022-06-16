import { Component, OnInit } from '@angular/core';
import { SupplierService } from './supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  constructor(private supService:SupplierService) { }
  supplier:any
  ngOnInit(): void {

    this.supService.getAllSupplier().subscribe(data=>{
      this.supplier=data;
    })
  }

  remove(id:number)
  {
    this.supService.removeSupplier(id).subscribe(data=>{
      if(data.status=200)
      {
        alert(data.msg);
        location.reload();
      }
    })
  }

}