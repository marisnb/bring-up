import React from 'react'
import SpeechRecognition from "react-speech-recognition";

class Editor extends React.Component {
    render() {
        const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props;
        if (!browserSupportsSpeechRecognition) {
            return null
        }
        return(
            <div contentEditable={'plaintext-only'} onLoad={this.listener} id={"inputTextToSave"} role={'input'} className={"p-2 text-left __bu-content __bu-editor-border"}>
                {transcript}
            </div>
        )
    }
}

// const Editor = () => {
//     return (
//         <div contentEditable={'plaintext-only'} id={"inputTextToSave"} role={'input'} className={"p-2 text-left __bu-content __bu-editor-border"}>
//
//         </div>
//     )
// };

export default  SpeechRecognition(Editor);