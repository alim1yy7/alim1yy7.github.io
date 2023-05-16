import { Component } from '@angular/core';

import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  constructor(private api: ApiService) {}
}
