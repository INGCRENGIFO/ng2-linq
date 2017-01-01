# ng2-linq

**Example: **

```
import { Component, OnInit } from '@angular/core';

import { LinqService } from './ng2-linq';

@Component({
  providers: [LinqService]
})
export class AppComponent implements OnInit {

  constructor(private linq: LinqService) { }
  
  testMethod(): void {
  
    var jsonArray = [{
                    "user": {
                        "id": 100,
                        "screen_name": "Smith Jhon"
                    },
                    "text": "jsmith"
					}, {
						"user": {
							"id": 130,
							"screen_name": "Stephen Kriston"
						},
						"text": "kstephen"
					}, {
						"user": {
							"id": 155,
							"screen_name": "Emma Watson"
						},
						"text": "wemma"
					}, {
						"user": {
							"id": 301,
							"screen_name": "Winona Ryder"
						},
						"text": "rwinona"
					}];
				
    linq.Enumerable().From(jsonArray)
                    .Where(function (x) {
                        return x.user.id < 200
                    })
                    .OrderBy(function (x) {
                        return x.user.screen_name
                    })
                    .Select(function (x) {
                        return x.user.screen_name + ':' + x.text
                    })
                    .ToArray();
  }
  
  ngOnInit(): void {
    this.testMethod();
  }
  
}
```

