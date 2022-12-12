import { useState } from "react"
import { ListItem, Checkbox, IconButton, ListItemText, InputBase, ListItemSecondaryAction, DeleteOutlined } from '@mui/material'
import DeleteOutline from "@mui/icons-material/DeleteOutline";

const Todo = (props) => {
    const [item, setItem] = useState(props.item)
    const [readOnly, setReadOnly] = useState(true)
    const deleteItem = props.deleteItem;
    const editItem = props.editItem;

    const onEditTitle = (e) => {
        item.title = e.target.value;
        editItem();
    }

    const onCheckCheckBox = (e) => {
        item.done = e.target.checked;
        editItem();
    }

    const onDelete = () => {
        deleteItem(item);
    }
    
    const turnOffReadOnly = () => {
        setReadOnly(false);
    }

    const turnOnReadOnly = (e) => {
        if(e.key === "Enter") {
            setReadOnly(true);
        }
    }

    return (
        <ListItem>
            <Checkbox checked={item.done} onChange={onCheckCheckBox}></Checkbox>
            <ListItemText>
                <InputBase
                inputProps={{
                    "aria-label": "naked",
                    readOnly: readOnly
                }}
                onClick={turnOffReadOnly}
                onChange={onEditTitle}
                onKeyDown={turnOnReadOnly}
                type="text"
                id={item.id}
                name={item.id}
                value={item.title}
                multiline={true}
                fullWidth={true}
                />
            </ListItemText>
            <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo"
          onClick={onDelete} >
            <DeleteOutline />
        </IconButton>
      </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo;