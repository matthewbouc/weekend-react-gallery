import {useState} from 'react';
import './NewItem.css';

function NewItem({postNewPic}) {

    //States used to hold dynamic input states
    const [newUrl, setNewUrl] = useState('');
    const [newDescription, setNewDescription] = useState('');

    //Object that will be POSTed to the database
    let newPicture = {
        path: newUrl,
        description: newDescription
    }
    /**
     * On click of Add Picture, POST newPicture and clear the text inputs.
     */
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