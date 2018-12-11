
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatSlideToggleModule, 
	MatRadioModule, MatAutocompleteModule, MatListModule, MatInputModule, MatProgressBarModule, MatDialogModule, MatTabsModule,
	MatDatepickerModule, MatNativeDateModule, MatSnackBarModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, 
  MatSlideToggleModule, MatRadioModule, MatAutocompleteModule, MatListModule, MatInputModule, MatProgressBarModule, 
  MatDialogModule, MatTabsModule, MatDatepickerModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, 
  MatSlideToggleModule, MatRadioModule, MatAutocompleteModule, MatListModule, MatInputModule, MatProgressBarModule, 
  MatDialogModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatSortModule ],
})
export class MaterialModule { }
