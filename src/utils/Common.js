const saveData = () => {
    let textToSave = document.getElementById("inputTextToSave").innerHTML;
    let textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    let textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    //var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;

    let downloadLink = document.createElement("a");
    downloadLink.download = 'file';
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
};

const destroyClickedElement = (event) => {
    document.body.removeChild(event.target);
};

const loadFileAsText = () => {
    let fileToLoad = document.getElementById("fileToLoad").files[0];
    let fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent)
    {
        let textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").textContent = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
};

const loadFile = () => {
    let file = document.getElementById("fileToLoad");
    file.click();
};

const profile = () => {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginRight = "250px";
    //document.getElementById("profile").click();
};

const profileClose = () => {
    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginRight = "0";
};

export {saveData, loadFileAsText, loadFile, profile, profileClose}