import { Component } from '@angular/core';
import { MinistryHelperService } from 'src/app/components/helper/ministry/ministry-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends MinistryHelperService {

}
