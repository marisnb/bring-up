import React from 'react'

const Editor = () => {
    return (
        <div contentEditable={'plaintext-only'} id={"inputTextToSave"} role={'input'} className={"p-2 text-left __bu-content __bu-editor-border"}>

        </div>
    )
};

export {Editor};