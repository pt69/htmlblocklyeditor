var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');

var canvasWidth = 0;
var canvasHeight = 0;
    
var startWidth = 0.3*$(window).width();
var maxKoord = $(window).width();  

var HTMLBlocklyEditorToolbox = document.getElementById("toolbox");

var workspace = Blockly.inject(blocklyDiv, {
  toolbox: HTMLBlocklyEditorToolbox,
  toolboxPosition: 'start',  
  collapse : true,
  comments : false,
  disable : false,
  maxBlocks : Infinity,
  trashcan : true,
  horizontalLayout : false,
  tooltips: true,
  css : true,
  rtl : false,
  scrollbars : true,
  sounds : true,
  oneBasedIndex : true,
  grid: {
      spacing: 20,
      length: 1,
      colour: '#888',
      snap: true
  },   
  maxBlocks: Infinity,
  media: './media/',
  move: {
      scrollbars: {
          horizontal: true,
          vertical: true
      },
      drag: true,
      wheel: true
  },
  readOnly: false,
  zoom: {
      controls: true,
      wheel: true,
      startScale: 1,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.02
  } 
});

function HTMLPreviewUpdate(event) {
  var code = HtmlGenerator.workspaceToCode(workspace);
  let htmlImport = Prism.highlight(code, Prism.languages.html, 'html');
  document.getElementById('HTMLQuellCode').innerHTML = htmlImport;
  document.getElementById('website').src = "data:text/html;charset=utf-8," + encodeURIComponent(code);
}
workspace.addChangeListener(HTMLPreviewUpdate);

var onresize = function(e) {
  // Compute the absolute coordinates and dimensions of blocklyArea.
  var element = blocklyArea;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyArea.
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  let Hoehe = canvasHeight+100;
  if (blocklyArea.offsetHeight > Hoehe) {
  blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  } else {
    blocklyDiv.style.height = Hoehe + 'px';
  } 
  Blockly.svgResize(workspace);
};

let splitInstance = Split(['#split-0', '#split-1'], {
      minSize: [0, 10],
      snapOffset: 80,
      gutterSize: 20,
  })

let observer = new ResizeObserver(function(mutations) {
  onresize();
  Blockly.svgResize(workspace);
});

let child = document.getElementById('split-0');
observer.observe(child, { attributes: true });

window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);

function analyzeURL() {
  let urlString = window.location.hash;
  if (urlString.length > 0) {
      try {
          let triggerCode = urlString.substring(0, 4);
          if (triggerCode == "#LZ=") {
            Blockly.mainWorkspace.clear();
            let comressedCode = urlString.substring(4);
            let string = LZString.decompressFromEncodedURIComponent(comressedCode);
            let xml = Blockly.Xml.textToDom(string);
            Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);              
          }
      }
      catch {
         Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), workspace);
      }
  } else {
      Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), workspace);
  }
}

window.onload = analyzeURL();