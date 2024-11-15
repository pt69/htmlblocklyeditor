// Pt 2023 - MIT-License

document.getElementById('HTMLsaveDateiname').value = 'BlocklyCode';

document.getElementById('HTMLSave').onclick = function() {
  try {
    let xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xml_text = Blockly.Xml.domToText(xml);
    let link = document.createElement('a');
    link.download = document.getElementById('HTMLsaveDateiname').value + '.xml';
    link.href = "data:application/octet-stream;utf-8," + encodeURIComponent(xml_text);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch { }
};


document.getElementById('URLSave').onclick = function() {
  try {
    let xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xml_text = Blockly.Xml.domToText(xml);
    let compressed = LZString.compressToEncodedURIComponent(xml_text);
    let URL_text = "#LZ=" + compressed;
    let URLDiv = document.getElementById('URLDiv');
    URLDiv.innerHTML = URL_text;
  } catch { }
};

const fileSelector = document.getElementById('HTMLDateiwahl');
fileSelector.addEventListener('change', (event) => {
  const fileList = event.target.files;
  let file = fileList[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function (event) {
    Blockly.mainWorkspace.clear();
    var xml = Blockly.Xml.textToDom(event.target.result);
    Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace);   
    document.getElementById('HTMLDateiwahl').value = null; 
  };  
});