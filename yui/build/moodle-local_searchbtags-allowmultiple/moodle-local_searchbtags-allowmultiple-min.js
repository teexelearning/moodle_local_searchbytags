YUI.add("moodle-local_searchbtags-allowmultiple",function(e,t){debugger;var n={OPTIONS:".menutags"},r;M.local_searchbytags=M.local_searchbytags||{},M.local_searchbytags.allowmultiple={},r=M.local_searchbytags.allowmultiple,r.init=function(){debugger;e.delegate("change",this.option_changed,e.config.doc,n.OPTIONS,this),e.delegate("keyup",this.keyDown,e.config.doc,n.OPTIONS,this),e.delegate("keydown",this.keyUp,e.config.doc,n.OPTIONS,this)},r.option_changed=function(e){return e.ctrlKey||e.shiftKey||this.multiselect?(e.preventDefault,!1):!0},r.keyDown=function(e){debugger;if(e.ctrlKey||e.shiftKey)this.multiselect=!0},r.keyUp=function(e){debugger;if(e.ctrlKey||e.shiftKey)this.multiselect=!1}},"@VERSION@");
