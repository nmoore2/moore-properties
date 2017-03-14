/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
if (typeof(CKEDITOR) != 'undefined') {
CKEDITOR.editorConfig = function( config )
{
  // Define changes to default configuration here. For example:
  // config.language = 'fr';
  // config.uiColor = '#AADC6E';

  /* Filebrowser routes */
  // The location of an external file browser, that should be launched when "Browse Server" button is pressed.
  config.filebrowserBrowseUrl = "/ckeditor/attachment_files";

  // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Flash dialog.
  config.filebrowserFlashBrowseUrl = "/ckeditor/attachment_files";

  // The location of a script that handles file uploads in the Flash dialog.
  config.filebrowserFlashUploadUrl = "/ckeditor/attachment_files";

  // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Link tab of Image dialog.
  config.filebrowserImageBrowseLinkUrl = "/ckeditor/pictures";

  // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Image dialog.
  config.filebrowserImageBrowseUrl = "/ckeditor/pictures";

  // The location of a script that handles file uploads in the Image dialog.
  config.filebrowserImageUploadUrl = "/ckeditor/pictures";

  // The location of a script that handles file uploads.
  config.filebrowserUploadUrl = "/ckeditor/attachment_files";

  config.allowedContent = true;

  config.toolbar = 'Full';
 
  // config.toolbar_Full =
  // [
  // 	{ name: 'document', items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
  // 	{ name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
  // 	{ name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
  // 	{ name: 'forms', items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 
  //         'HiddenField' ] },
  // 	'/',
  // 	{ name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
  // 	{ name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv',
  // 	'-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
  // 	{ name: 'links', items : [ 'Link','Unlink','Anchor' ] },
  // 	{ name: 'insert', items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },
  // 	'/',
  // 	{ name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
  // 	{ name: 'colors', items : [ 'TextColor','BGColor' ] },
  // 	{ name: 'tools', items : [ 'Maximize', 'ShowBlocks','-','About' ] }
  // ];
 
  config.toolbar_Basic =
  [
  	['Bold', 'Italic', 'HorizontalRule', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink','-','Source']
  ];
  
  config.toolbar_Mini =
  [
  	['Bold', 'Italic']
  ];
  
  config.toolbar_Full =
  [
  	['Bold', 'Italic', 'HorizontalRule', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink','-','Source','-','Image']
  ];
  
  
}
};

