Ext.data.JsonP.Ext_dd_DragDropElement({"alternateClassNames":[],"aliases":{},"enum":null,"parentMixins":[],"tagname":"class","subclasses":[],"extends":null,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/DragDropManager.html#Ext-dd-DragDropElement' target='_blank'>DragDropManager.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_timeoutCount' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropElement'>Ext.dd.DragDropElement</span><br/><a href='source/DragDropManager.html#Ext-dd-DragDropElement-property-_timeoutCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropElement-property-_timeoutCount' class='name expandable'>_timeoutCount</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Internal counter ...</div><div class='long'><p>Internal counter</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_addListeners' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropElement'>Ext.dd.DragDropElement</span><br/><a href='source/DragDropManager.html#Ext-dd-DragDropElement-method-_addListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropElement-method-_addListeners' class='name expandable'>_addListeners</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Trying to make the load order less important. ...</div><div class='long'><p>Trying to make the load order less important.  Without this we get\nan error if this file is loaded before the Event Utility.</p>\n</div></div></div><div id='method-getPosX' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropElement'>Ext.dd.DragDropElement</span><br/><a href='source/DragDropManager.html#Ext-dd-DragDropElement-method-getPosX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropElement-method-getPosX' class='name expandable'>getPosX</a>( <span class='pre'>el</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Returns the X position of an html element ...</div><div class='long'><p>Returns the X position of an html element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : HTMLElement<div class='sub-desc'><p>the element for which to get the position</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>the X coordinate</p>\n</div></li></ul></div></div></div><div id='method-getPosY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropElement'>Ext.dd.DragDropElement</span><br/><a href='source/DragDropManager.html#Ext-dd-DragDropElement-method-getPosY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropElement-method-getPosY' class='name expandable'>getPosY</a>( <span class='pre'>el</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Returns the Y position of an html element ...</div><div class='long'><p>Returns the Y position of an html element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : HTMLElement<div class='sub-desc'><p>the element for which to get the position</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>the Y coordinate</p>\n</div></li></ul></div></div></div><div id='method-getScroll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropElement'>Ext.dd.DragDropElement</span><br/><a href='source/DragDropManager.html#Ext-dd-DragDropElement-method-getScroll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropElement-method-getScroll' class='name expandable'>getScroll</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Returns the current scroll position ...</div><div class='long'><p>Returns the current scroll position</p>\n</div></div></div><div id='method-getScrollLeft' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropElement'>Ext.dd.DragDropElement</span><br/><a href='source/DragDropManager.html#Ext-dd-DragDropElement-method-getScrollLeft' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropElement-method-getScrollLeft' class='name expandable'>getScrollLeft</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Gets the scrollLeft ...</div><div class='long'><p>Gets the scrollLeft</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>the document's scrollTop</p>\n</div></li></ul></div></div></div><div id='method-getScrollTop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropElement'>Ext.dd.DragDropElement</span><br/><a href='source/DragDropManager.html#Ext-dd-DragDropElement-method-getScrollTop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropElement-method-getScrollTop' class='name expandable'>getScrollTop</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Gets the scrollTop ...</div><div class='long'><p>Gets the scrollTop</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>the document's scrollTop</p>\n</div></li></ul></div></div></div><div id='method-getStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropElement'>Ext.dd.DragDropElement</span><br/><a href='source/DragDropManager.html#Ext-dd-DragDropElement-method-getStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropElement-method-getStyle' class='name expandable'>getStyle</a>( <span class='pre'>el, styleProp</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Returns the specified element style property ...</div><div class='long'><p>Returns the specified element style property</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : HTMLElement<div class='sub-desc'><p>the element</p>\n</div></li><li><span class='pre'>styleProp</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>the style property</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The value of the style property</p>\n</div></li></ul></div></div></div><div id='method-handleWasClicked' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropElement'>Ext.dd.DragDropElement</span><br/><a href='source/DragDropManager.html#Ext-dd-DragDropElement-method-handleWasClicked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropElement-method-handleWasClicked' class='name expandable'>handleWasClicked</a>( <span class='pre'>node</span> )</div><div class='description'><div class='short'>Recursively searches the immediate parent and all child nodes for\nthe handle element in order to determine wheter or ...</div><div class='long'><p>Recursively searches the immediate parent and all child nodes for\nthe handle element in order to determine wheter or not it was\nclicked.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : HTMLElement<div class='sub-desc'><p>the html element to inspect</p>\n</div></li></ul></div></div></div><div id='method-moveToEl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropElement'>Ext.dd.DragDropElement</span><br/><a href='source/DragDropManager.html#Ext-dd-DragDropElement-method-moveToEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropElement-method-moveToEl' class='name expandable'>moveToEl</a>( <span class='pre'>moveEl, targetEl</span> )</div><div class='description'><div class='short'>Sets the x/y position of an element to the location of the\ntarget element. ...</div><div class='long'><p>Sets the x/y position of an element to the location of the\ntarget element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>moveEl</span> : HTMLElement<div class='sub-desc'><p>The element to move</p>\n</div></li><li><span class='pre'>targetEl</span> : HTMLElement<div class='sub-desc'><p>The position reference element</p>\n</div></li></ul></div></div></div><div id='method-numericSort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropElement'>Ext.dd.DragDropElement</span><br/><a href='source/DragDropManager.html#Ext-dd-DragDropElement-method-numericSort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropElement-method-numericSort' class='name expandable'>numericSort</a>( <span class='pre'>a, b</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Numeric array sort function ...</div><div class='long'><p>Numeric array sort function</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>a</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'>\n</div></li><li><span class='pre'>b</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>positive, negative or 0</p>\n</div></li></ul></div></div></div><div id='method-swapNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropElement'>Ext.dd.DragDropElement</span><br/><a href='source/DragDropManager.html#Ext-dd-DragDropElement-method-swapNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropElement-method-swapNode' class='name expandable'>swapNode</a>( <span class='pre'>n1, n2</span> )</div><div class='description'><div class='short'>Swap two nodes. ...</div><div class='long'><p>Swap two nodes.  In IE, we use the native method, for others we\nemulate the IE behavior</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>n1</span> : HTMLElement<div class='sub-desc'><p>the first node to swap</p>\n</div></li><li><span class='pre'>n2</span> : HTMLElement<div class='sub-desc'><p>the other node to swap</p>\n</div></li></ul></div></div></div></div></div></div></div>","superclasses":[],"meta":{},"requires":[],"html_meta":{},"statics":{"property":[],"cfg":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"DragDropManager.html#Ext-dd-DragDropElement","filename":"DragDropManager.js"}],"linenr":1175,"members":{"property":[{"tagname":"property","owner":"Ext.dd.DragDropElement","meta":{"private":true},"name":"_timeoutCount","id":"property-_timeoutCount"}],"cfg":[],"css_var":[],"method":[{"tagname":"method","owner":"Ext.dd.DragDropElement","meta":{"private":true},"name":"_addListeners","id":"method-_addListeners"},{"tagname":"method","owner":"Ext.dd.DragDropElement","meta":{},"name":"getPosX","id":"method-getPosX"},{"tagname":"method","owner":"Ext.dd.DragDropElement","meta":{},"name":"getPosY","id":"method-getPosY"},{"tagname":"method","owner":"Ext.dd.DragDropElement","meta":{"private":true},"name":"getScroll","id":"method-getScroll"},{"tagname":"method","owner":"Ext.dd.DragDropElement","meta":{},"name":"getScrollLeft","id":"method-getScrollLeft"},{"tagname":"method","owner":"Ext.dd.DragDropElement","meta":{},"name":"getScrollTop","id":"method-getScrollTop"},{"tagname":"method","owner":"Ext.dd.DragDropElement","meta":{},"name":"getStyle","id":"method-getStyle"},{"tagname":"method","owner":"Ext.dd.DragDropElement","meta":{},"name":"handleWasClicked","id":"method-handleWasClicked"},{"tagname":"method","owner":"Ext.dd.DragDropElement","meta":{},"name":"moveToEl","id":"method-moveToEl"},{"tagname":"method","owner":"Ext.dd.DragDropElement","meta":{},"name":"numericSort","id":"method-numericSort"},{"tagname":"method","owner":"Ext.dd.DragDropElement","meta":{},"name":"swapNode","id":"method-swapNode"}],"event":[],"css_mixin":[]},"inheritable":null,"private":null,"component":false,"name":"Ext.dd.DragDropElement","singleton":false,"override":null,"inheritdoc":null,"id":"class-Ext.dd.DragDropElement","mixins":[],"mixedInto":[]});