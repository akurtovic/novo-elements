// NG2
import { Component } from '@angular/core';
// APP
let BasicDemoTpl = require('./templates/BasicEditorDemo.html');
let QuillDemoTpl = require('./templates/QuillEditorDemo.html');

const template = `
<div class="container">
    <h1>CK Editor <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/blob/master/src/elements/editor">(source)</a></small></h1>
    <p>Basic HTML editor using CK Editor.</p>

    <h5>Basic</h5>
    <button theme="primary" (click)="insertText(editor)">Insert "Hello World" at Cursor</button>
    <br />
    <div class="example editor-demo">${BasicDemoTpl}</div>
    <code-snippet [code]="BasicDemoTpl"></code-snippet>
    
    <h5>Quill</h5>
    <button theme="primary" (click)="insertText(editor)">Insert "Hello World" at Cursor</button>
    <br />
    <div class="example editor-demo">${QuillDemoTpl}</div>
    <code-snippet [code]="QuillDemoTpl"></code-snippet>
</div>
`;

@Component({
    selector: 'editor-demo',
    template: template
})
export class EditorDemoComponent {
    private BasicDemoTpl:string = BasicDemoTpl;
    private QuillDemoTpl:string = QuillDemoTpl;
    private editorValue:string = '<p>I AM A PRE-RENDERED VALUE</p><h1>TEST</h1>';

    insertText(editor) {
        editor.insertText('Hello World');
    }
}
