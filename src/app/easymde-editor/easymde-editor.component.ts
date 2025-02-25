import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import EasyMDE from 'easymde';

@Component({
  selector: 'app-easymde-editor',
  templateUrl: './easymde-editor.component.html',
  styleUrls: ['./easymde-editor.component.less']
})
export class EasymdeEditorComponent implements OnInit {
  @ViewChild('editor', {static: true}) editorRef!: ElementRef;
  editor!: EasyMDE;
  reader = new FileReader();
  change = false;
  path: any;

  ngOnInit() {
    this.editor = new EasyMDE({
      autoDownloadFontAwesome: true,
      element: this.editorRef.nativeElement,
      lineNumbers: true,
      renderingConfig: {
        codeSyntaxHighlighting: true,
      },
      spellChecker: false,
      status: false,
      toolbar: false
    });
  }

  getEditorContent(): string {
    return this.editor.value();
  }

  @HostListener('document:keydown.control.s', ['$event'])
  handleCtrlS(event: KeyboardEvent) {
    event.preventDefault();
    this.change = false;
    console.log('Ctrl+S detected');
    // save to file
    if (this.path) {
      console.log("this.path: ", this.path);
    } else {
      console.log("No path");
    }
    console.log(this.getEditorContent());
  }

  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
    this.change = true;
    console.log('Text area content changed');
    console.log(this.getEditorContent());
  }

  readFile(event: Event) {
    const file = (event.target as HTMLInputElement).files;
    if (!file) return;
    // const path = new Blob.("public/test.md");
    console.log("e.target.result: 1");
    this.reader.onloadend = ((e: any) => {
      console.log("e.target.result");
      this.editor.value(e.target.result);
    });
    console.log("e.target.result: 2");
    this.reader.readAsText(file[0]);
    this.path = file[0];
  }
}
