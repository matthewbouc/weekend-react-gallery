import {useState} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './NewItem.css';
import useStyles from '../UseStyles/UseStyles';

function NewItem({postNewPic}) {
    const classes = useStyles();

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
            <form onSubmit={handleSubmit} className={classes.newForm} noValidate autoComplete="off">
                <TextField value={newUrl} onChange={(event) => setNewUrl(event.target.value)} variant="filled" label="Picture URL"/>
                <TextField value={newDescription} onChange={(event) => setNewDescription(event.target.value)} variant="filled" label="Image Description" />
                <Button variant="contained" type="submit" color="primary" className={classes.newFormButton}>
                Add To Album
                </Button>
            </form>
            </div>
            
        </>
    )
}

export default NewItem