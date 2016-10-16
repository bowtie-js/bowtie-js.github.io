$(document).ready(function() {
  var bowtieEditor = ace.edit("bowtieeditor");
  var htmlEditor = ace.edit("htmleditor");

  bowtieEditor.getSession().setUseWorker(false);
  htmlEditor.getSession().setUseWorker(false);

  bowtieEditor.setOptions({
    fontSize: '12pt'
  });
  bowtieEditor.setTheme('ace/theme/monokai');
  bowtieEditor.getSession().setMode('ace/mode/erlang');
  bowtieEditor.renderer.setShowGutter(false);
  bowtieEditor.setReadOnly(true);
  bowtieEditor.setHighlightActiveLine(false);
  bowtieEditor.setDisplayIndentGuides(false);
  bowtieEditor.renderer.$cursorLayer.element.style.display = "none"
  bowtieEditor.setOption("showPrintMargin", false);
  htmlEditor.setOptions({
    fontSize: '12pt'
  });
  htmlEditor.setTheme('ace/theme/monokai');
  htmlEditor.getSession().setMode('ace/mode/html');
  htmlEditor.renderer.setShowGutter(false);
  htmlEditor.setReadOnly(true);
  htmlEditor.setHighlightActiveLine(false);
  htmlEditor.setHighlightGutterLine(false);
  htmlEditor.setDisplayIndentGuides(false);
  htmlEditor.renderer.$cursorLayer.element.style.display = "none"
  htmlEditor.setOption("showPrintMargin", false);
  $.get("/examples/example.bow", function(data) {
    bowtieEditor.insert(data);
  });
  $.get("/examples/example.html", function(data) {
    htmlEditor.insert(data);
  });
});
