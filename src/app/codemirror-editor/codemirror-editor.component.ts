import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EditorView, basicSetup } from "codemirror";
import { Compartment } from '@codemirror/state';
import { LanguageSupport } from '@codemirror/language';
import { getLanguageExtension } from './config';

@Component({
  selector: 'app-codemirror-editor',
  imports: [],
  templateUrl: './codemirror-editor.component.html',
  styleUrl: './codemirror-editor.component.less'
})
export class CodemirrorEditorComponent implements OnInit {
  @ViewChild('editor', {static: true}) editorRef!: ElementRef;
  view: any;
  private languageCompartment = new Compartment();

  ngOnInit() {
    console.log('CodemirrorEditorComponent initialized');
    const language = getLanguageExtension('html');
    let extensions = [basicSetup];
    if (language) {
      extensions.push(language());
    }
    this.view = new EditorView({
      doc: "",
      parent: this.editorRef.nativeElement,
      extensions: extensions
    });
  }

  getLanguageExtension(filename: string): (() => LanguageSupport) | undefined {
    return getLanguageExtension(filename);
  }
}
