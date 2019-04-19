import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import FileViewer from 'react-file-viewer';

const pngFile = 'https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png';
const docxFile = 'https://www2.le.ac.uk/Members/davidwickins/old/test.docx/at_download/file';

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
        <div>
          FileViewer for PNG files
          <FileViewer
            fileType="png"
            filePath={pngFile}
            errorComponent={this.CustomErrorComponent}
            onError={this.onError}/>
        </div>
        <div>
          FileViewer for PNG files
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
