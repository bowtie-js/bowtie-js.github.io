$(document).ready(function() {
  ace.require('/js/ext-language_tools.js');
  var bowtieEditor = ace.edit("bowtieeditor");
  var htmlEditor = ace.edit("htmleditor");

  bowtieEditor.setOptions({
    fontSize: '12pt'
  });
  bowtieEditor.setTheme('js/theme/textmate');
  bowtieEditor.getSession().setMode('ace/mode/erlang');

  htmlEditor.setOptions({
    fontSize: '12pt'
  });
  htmlEditor.setTheme('js/theme/textmate');
  htmlEditor.getSession().setMode('ace/mode/html');
});
