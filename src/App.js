import DocumentUpload from './pages/document-upload/document-upload.component';
import { FilesProvider } from './context/files/files.context';
import './App.css';

function App() {
  return (
    <div className="App">
      <FilesProvider>
        <DocumentUpload />
      </FilesProvider>
    </div>
  );
}

export default App;
