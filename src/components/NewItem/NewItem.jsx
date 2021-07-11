import {useState} from 'react';

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
            <form onSubmit={handleSubmit}>
                <input value={newUrl} onChange={(event) => setNewUrl(event.target.value)} />
                <input value={newDescription} onChange={(event) => setNewDescription(event.target.value)} />
                <input type="submit" value="Add Picture" />
            </form>
        </>
    )
}

export default NewItem