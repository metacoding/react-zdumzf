import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import FileViewer from 'react-file-viewer';

const pngFile = 'https://stackblitz.com/files/react-zdumzf/github/metacoding/react-zdumzf/master/test.png';
const docxFile = 'https://stackblitz.com/files/react-zdumzf/github/metacoding/react-zdumzf/master/mehran.docx';

class App extends Component {
  constructor() {
    super();

    this.onError = this.onError.bind(this);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <h1>Doc Viewer</h1>
        <img src="/public/test.png" />
        <div>
          FileViewer for DOCX files
          <FileViewer
            fileType="docx"
            filePath={docxFile}
            errorComponent={this.CustomErrorComponent}
            onError={this.onError}/>
        </div>
      </div>
    );
  }

  onError(e) {
    console.log('error in file-viewer', e);
  }
}

render(<App />, document.getElementById('root'));
