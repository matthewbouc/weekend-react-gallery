import {useState} from 'react';
import './NewItem.css';

function NewItem({postNewPic}) {
    const [newUrl, setNewUrl] = useState('');
    const [newDescription, setNewDescription] = useState('');

    let newPicture = {
        path: newUrl,
        description: newDescription
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postNewPic(newPicture);
        setNewUrl('');
        setNewDescription('');
    }

    return (
        <>
            <div className="addForm">
            <form onSubmit={handleSubmit}>
                <input value={newUrl} onChange={(event) => setNewUrl(event.target.value)} placeholder="Image URL"/>
                <input value={newDescription} onChange={(event) => setNewDescription(event.target.value)} placeholder="Image Description" />
                <input type="submit" value="Add Picture" />
            </form>
            </div>
            
        </>
    )
}

export default NewItem