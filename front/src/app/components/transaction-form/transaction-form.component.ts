import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OperationService, } from '../../services/operation.service';
import { Operation } from '../../models/operation.model';
import { Router } from '@angular/router';

type OperationTypeExtended = '' | 'deposit' | 'withdrawal' | 'loan';

interface OperationForm extends Partial<Omit<Operation, 'type'>> {
  type: OperationTypeExtended;
}

@Component({
  standalone: true,
  selector: 'app-transaction-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {
  operation: OperationForm = {
    accountNumber: '',
    type: '',
    amount: 0,
    interest: 0,
    payments: 0,
    loanDate: undefined
  };

  constructor(private operationService: OperationService, private router: Router) {}

  submitOperation() {
    // Validation basique
    if (!this.operation.accountNumber || !this.operation.type || !this.operation.amount) {
      alert('Tous les champs requis doivent être remplis.');
      return;
    }

    // Création d'une copie propre à envoyer au backend
    const payload = { ...this.operation } as Operation;

    this.operationService.addOperation(payload).subscribe({
      next: () => {
        alert('✅ Opération ajoutée avec succès');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
        alert('❌ Erreur lors de l’ajout de l’opération');
      }
    });
  }
}