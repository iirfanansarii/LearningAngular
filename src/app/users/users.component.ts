//below i  have just added Input and rest of thing was already present 
import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // below defining decorator (line 12)
  @Input() devilName

  constructor() { }

  ngOnInit(): void {
    // to get data in console file
    console.warn(this.devilName)
  }

}
