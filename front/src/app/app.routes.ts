import { Routes } from '@angular/router';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';

export const routes: Routes = [
  { path: '', component: TransactionListComponent },
  { path: 'add', component: TransactionFormComponent }
];