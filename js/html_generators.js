"use strict";
var HtmlGenerator = new Blockly.Generator('HTML');

HtmlGenerator.ORDER_ATOMIC = 0;
HtmlGenerator.ORDER_NONE = 0;

HtmlGenerator.init = function(workspace) {};
HtmlGenerator.finish = function(code) {return code;};

//Generating a stack. The scrub_ function is called on every block from blockToCode
HtmlGenerator.scrub_ = function(block, code) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = HtmlGenerator.blockToCode(nextBlock);
  return code + nextCode;
};

//alte Definitionsaufrufe
//HtmlGenerator['html'] = function(block) {

//neuer Definitionsaufruf
HtmlGenerator.forBlock['css_classes'] = function(block, generator) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<style>\n' + statements_content + '</style>\n';
  return code;
};

HtmlGenerator.forBlock['css_class'] = function(block, generator) {
  var class_name = block.getFieldValue('NAME');
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '.' + class_name + ' {\n' + statements_content + '}\n';
  return code;
};

HtmlGenerator.forBlock['css_tag'] = function(block, generator) {
  var class_name = block.getFieldValue('NAME');
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = class_name + ' {\n' + statements_content + '}\n';
  return code;
};

HtmlGenerator.forBlock['css_classdock'] = function(block, generator) {
  var class_name = block.getFieldValue('NAME');
  var code = ' class="' + class_name + '"';
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator.forBlock['css_attribut'] = function(block, generator) {
  var text_property = block.getFieldValue('property');
  var text_value = block.getFieldValue('value');
  var code = text_property + ': ' + text_value + ';\n';
  return code;
};

HtmlGenerator.forBlock['css_color'] = function(block, generator) {
  var colour_name = block.getFieldValue('NAME');
  var code = 'color: ' + colour_name + ';\n';
  return code;
};

HtmlGenerator.forBlock['css_bgcolour'] = function(block, generator) {
  var colour_name = block.getFieldValue('NAME');
  var code = 'background-color: ' + colour_name + ';\n';
  return code;
};

HtmlGenerator.forBlock['baseframe'] = function(block, generator) {
  var statements_head = HtmlGenerator.statementToCode(block, 'head');
  var statements_body = HtmlGenerator.statementToCode(block, 'body');

  var code = '<!DOCTYPE HTML>\n<html>\n<head>\n  <meta charset="utf-8">\n'
    + statements_head
    + "</head>\n\n<body>\n"
    + statements_body
    + "</body>\n</html>\n";

  return code;
};

HtmlGenerator.forBlock['html'] = function(block, generator) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<!DOCTYPE HTML>\n<html>\n' + statements_content + '</html>\n';
  return code;
};

HtmlGenerator.forBlock['body'] = function(block, generator) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<body>\n' + statements_content + '</body>\n';
  return code;
};

HtmlGenerator.forBlock['head'] = function(block, generator) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<head>\n  <meta charset="utf-8">\n' + statements_content + '</head>\n';
  return code;
};

HtmlGenerator.forBlock['title'] = function(block, generator) {
  var title_name = block.getFieldValue('NAME');
  if (title_name != "")
    document.getElementById('title').innerText = title_name;
  else
    document.getElementById('title').innerText = "Webseite";
  var code = '<title>' + title_name + '</title>\n';
  return code;
};

HtmlGenerator.forBlock['paragraph'] = function(block, generator) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<p>\n' + statements_content + '</p>\n';
  return code;
};

HtmlGenerator.forBlock['plaintext'] = function(block, generator) {
  var text_content = block.getFieldValue('content');
  var code = text_content + '\n';
  return code;
};

HtmlGenerator.forBlock['division'] = function(block, generator) {
  var value_name = HtmlGenerator.valueToCode(block, 'NAME', HtmlGenerator.ORDER_ATOMIC);
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<div' + value_name + '>\n' + statements_content + '</div>\n';
  return code;
};

HtmlGenerator.forBlock['style'] = function(block, generator) {
  var statements_name = HtmlGenerator.statementToCode(block, 'NAME');
  var code = ' style="' + statements_name.trim() + '"';
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator.forBlock['generictag'] = function(block, generator) {
  var text_name = block.getFieldValue('NAME');
  var value_name = HtmlGenerator.valueToCode(block, 'NAME', HtmlGenerator.ORDER_ATOMIC);
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<' + text_name + value_name + '>\n' + statements_content + '</' + text_name + '>\n';
  return code;
};

HtmlGenerator.forBlock['more_attributes'] = function(block, generator) {
  var value_name1 = HtmlGenerator.valueToCode(block, 'NAME1', HtmlGenerator.ORDER_ATOMIC);
  var value_name2 = HtmlGenerator.valueToCode(block, 'NAME2', HtmlGenerator.ORDER_ATOMIC);
  var value_name3 = HtmlGenerator.valueToCode(block, 'NAME3', HtmlGenerator.ORDER_ATOMIC);
  var code = value_name1 + value_name2 + value_name3;
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator.forBlock['genericattribute'] = function(block, generator) {
  var text_attribute = block.getFieldValue('attribute');
  var text_value = block.getFieldValue('value');
  var code = ' ' + text_attribute + '="' + text_value + '"';
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator.forBlock['link'] = function(block, generator) {
  var text_name = block.getFieldValue('NAME');
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<a href="' + text_name + '">' + statements_content.trim() + '</a>\n';
  return code;
};

HtmlGenerator.forBlock['span'] = function(block, generator) {
  var value_name = HtmlGenerator.valueToCode(block, 'NAME', HtmlGenerator.ORDER_ATOMIC);
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<span' + value_name + '>' + statements_content.trim() + '</span>\n';
  return code;
};

HtmlGenerator.forBlock['image'] = function(block, generator) {
  var text_image = block.getFieldValue('IMAGE');
  var text_alt = block.getFieldValue('ALT');
  var code = '<img src="' +  text_image + '" alt="' + text_alt + '">\n';
  return code;
};

HtmlGenerator.forBlock['emphasise'] = function(block, generator) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<em>' + statements_content.trim() + '</em>\n';
  return code;
};

HtmlGenerator.forBlock['strong'] = function(block, generator) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<strong>' + statements_content.trim() + '</strong>\n';
  return code;
};

HtmlGenerator.forBlock['headline'] = function(block, generator) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<' + dropdown_name + '>' + statements_content.trim() + '</' +  dropdown_name + '>\n';
  return code;
};

HtmlGenerator.forBlock['linebreak'] = function(block, generator) {
  var code = '<br>\n';
  return code;
};

HtmlGenerator.forBlock['horizontalbreak'] = function(block, generator) {
  var code = '<hr>\n';
  return code;
};

HtmlGenerator.forBlock['unorderedlist'] = function(block, generator) {
  var statements_name = HtmlGenerator.statementToCode(block, 'NAME');
  var code = '<ul>\n' + statements_name + '</ul>\n';
  return code;
};

HtmlGenerator.forBlock['orderedlist'] = function(block, generator) {
  var statements_name = HtmlGenerator.statementToCode(block, 'NAME');
  var code = '<ol>\n' + statements_name + '</ol>\n';
  return code;
};

HtmlGenerator.forBlock['listelement'] = function(block, generator) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<li>' + statements_content.trim() + '</li>\n';
  return code;
};

HtmlGenerator.forBlock['deleted'] = function(block, generator) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<del>' + statements_content.trim() + '</del>\n';
  return code;
};

HtmlGenerator.forBlock['super'] = function(block, generator) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<sup>' + statements_content.trim() + '</sup>\n';
  return code;
};

HtmlGenerator.forBlock['sub'] = function(block, generator) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<sub>' + statements_content.trim() + '</sub>\n';
  return code;
};

HtmlGenerator.forBlock['code'] = function(block, generator) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<code>\n' + statements_content + '</code>\n';
  return code;
};

HtmlGenerator.forBlock['form'] = function(block, generator) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<form>\n' + statements_content + '</form>\n';
  return code;
};

HtmlGenerator.forBlock['table'] = function(block, generator) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<table>\n' + statements_content + '</table>\n';
  return code;
};

HtmlGenerator.forBlock['tablerow'] = function(block, generator) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<tr>\n' + statements_content + '</tr>\n';
  return code;
};

HtmlGenerator.forBlock['tablecell'] = function(block, generator) {
  var statements_content = HtmlGenerator.statementToCode(block, 'content');
  var code = '<td>' + statements_content.trim() + '</td>\n';
  return code;
};

HtmlGenerator.forBlock['input_text'] = function(block, generator) {
  var text_default = block.getFieldValue('default');
  var code = '<input value="' + text_default + '">\n';
  return code;
};

HtmlGenerator.forBlock['button'] = function(block, generator) {
  var statements_name = HtmlGenerator.statementToCode(block, 'NAME');
  var code = '<button>' + statements_name.trim() + '</button>\n';
  return code;
};

HtmlGenerator.forBlock['input'] = function(block, generator) {
  var dropdown_type = block.getFieldValue('type');
  var text_value = block.getFieldValue('value');
  var value_text = HtmlGenerator.valueToCode(block, 'text', HtmlGenerator.ORDER_ATOMIC);
  var code = '<input type="' + dropdown_type + '" value="' + text_value + '"' + value_text + ' />\n';
  return code;
};

HtmlGenerator.forBlock['script'] = function(block, generator) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<script>\n' + statements_content + '</script>\n';
  return code;
};

HtmlGenerator.forBlock['onclick'] = function(block, generator) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = ' onclick="' + statements_name.trim() + '"';
  return [code, HtmlGenerator.ORDER_NONE];
};
