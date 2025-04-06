import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ✅ nécessaire pour routerLink
import { OperationService,  } from '../../services/operation.service';
import { Operation } from '../../models/operation.model';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // ✅ ajoute RouterModule ici
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent {
  accountNumber: string = '';
  operations: Operation[] = [];
  searched = false;

  constructor(private operationService: OperationService) {}

  loadOperations(): void {
    if (!this.accountNumber) return;

    this.operationService.getOperations(this.accountNumber).subscribe({
      next: (ops) => {
        this.operations = ops;
        this.searched = true;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des opérations :', err);
        this.operations = [];
        this.searched = true;
      }
    });
  }
}