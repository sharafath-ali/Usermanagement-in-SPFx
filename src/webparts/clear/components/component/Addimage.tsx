import * as React from 'react';
import { useState } from 'react';
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import { sp } from '../sp';
import styles from '../Clear.module.scss';

interface IFileUploadProps {
  id: string;
}

const AddImage: React.FC<IFileUploadProps> = ({id}) => {
    const emplyeeId = parseInt(id)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  console.log(id)

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUploadClick = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }
    const documentLibraryName = `EmployeeLibrary/${emplyeeId}`;
    const fileNamePath = `profilepic.jpg`;

    let result: any;
    if (selectedFile.size <= 10485760) {
      console.log('selectedfile',selectedFile);
      result = await sp.web.getFolderByServerRelativePath(documentLibraryName).files.addUsingPath(fileNamePath, selectedFile, { Overwrite: true });
      console.log("url test",result)
    } else {
      result = await sp.web.getFolderByServerRelativePath(documentLibraryName).files.addChunked(fileNamePath, selectedFile, data => {
        console.log(`progress`);
      }, true);
    }
    console.log("url test",result?.data?.ServerRelativeUrl)
    const url = ` https://2mxff3.sharepoint.com/sites/SharafathAli/EmployeeLibrary/${emplyeeId}/profilepic.jpg`   
    const list = sp.web.lists.getByTitle("users");
   console.log(emplyeeId)
  list.items.getById(emplyeeId).update({
     Image_url:url
   });
  };

  return (
    
   <div className={styles.uploadcontainer}>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleUploadClick}>Upload</button>
      {selectedFile && (
        <div className={styles.selectedfile}>
          <p>Selected file: {selectedFile.name}</p>
          <img src={URL.createObjectURL(selectedFile)} alt="Selected file preview" />
        </div>
      )}
    </div>


  );
};

export default AddImage;