# About Angular-TextWrapper

This package helps you to enter currency amount value in HTML input field.
With this package you can enter the decimal values first, then you can enter the left side digits. 

# Example

If you want to enter 80600.50 then it will get entered like below :
```
step 1 : Enter the 2 decimal digits : 50
step 2 : As soon as we put the first 2 decimal digits, the dot(.) or decimal point will get appended : .50
step 3 : The cursor position will get changed and it will come to the left side of the dot(.)
step 4 : Now we can enter the amount on left side : 80600.50

```

![currency_amount_input_demo](https://user-images.githubusercontent.com/20151781/135712171-d4926ebc-9a67-413d-a790-328c1d4ae84c.gif)


# Installation

`npm i currency-amount-input-format --save`

Then...

in your app.component.ts file 

```
import { Component, OnInit } from '@angular/core';
import * as currencyAmountFormatter from 'currency-amount-input-format';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  amountFormatter() {

    //pass the input field ID as parameter

    currencyAmountFormatter.formatAmount('input-amnt-field-id');

  }
}



```

Then...

in your app.component.html file

Use "input" event to trigger the amountFormatter() function call.
Don't forget to add unique "id" for your input field

```

<span>
  <span style="font-size: x-large;">Amount : </span>

  <input id="input-amnt-field-id" 
   style="height:30px;font-size: x-large;" type="text" 
   (input)="amountFormatter();"/>

</span>

```
