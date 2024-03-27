import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  pageTitle: string = 'Login';

  username: string = '';
  password: string = '';

  showOperation: boolean = false;

  items: string[] = ['item1', 'item2', 'item3'];

  onSubmit() {
    console.log(this.username, this.password);

    this.showOperation = !this.showOperation;
  }

  incrementItems() {
    this.items.push('item' + (this.items.length + 1));
  }

  itemGreatherthan5() {
    return this.items.length > 5;
  }
}
