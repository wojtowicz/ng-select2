import { Component } from '@angular/core';
import { Select2OptionData } from 'ngSelect2';
import { Options } from 'select2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ng-select2 ';

  public data: Select2OptionData[] = [
    {
      id: 'Option 1',
      text: 'Option 1 text'
    },
    {
      id: 'Option 2',
      text: 'Option 2 disabled',
      disabled: true
    },
    {
      id: 'Option 3',
      text: 'Option 3 text',
    }
  ];

  public selected: string[];

  public options: Options = {
    width: '50%',
    multiple: true
  };
}
