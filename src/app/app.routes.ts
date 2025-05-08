import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EasymdeEditorComponent } from './easymde-editor/easymde-editor.component';
import { CodemirrorEditorComponent } from './codemirror-editor/codemirror-editor.component';

export const routes: Routes = [
  { path: "", component: CodemirrorEditorComponent },
  { path: "easymde", component: EasymdeEditorComponent },
];
