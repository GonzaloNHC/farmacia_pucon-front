import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LotesService } from '../../services/lotes.service';

@Component({
  standalone: true,
  selector: 'app-lotes-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './lotes-list.html'
})
export class LotesList implements OnInit {
  medicamentoId?: number;
  lotes: any[] = [];
  loading = false;

  constructor(private route: ActivatedRoute, private lotesSvc: LotesService) {}

  ngOnInit(): void {
    this.medicamentoId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.medicamentoId) { this.load(); }
  }

  load() {
    if (!this.medicamentoId) return;
    this.loading = true;
    this.lotesSvc.listByMedicamento(this.medicamentoId).subscribe({
      next: data => { this.lotes = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
