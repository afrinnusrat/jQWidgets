/*
jQWidgets v5.1.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function($){$.jqx.jqxWidget("jqxPivotDesigner","",{}),$.extend($.jqx._jqxPivotDesigner.prototype,{defineInstance:function(){var t={type:"pivotGrid",target:null,dataFields:null};$.extend(!0,this,t)},_instanceId:0,createInstance:function(t){this.element;var e=this.host,i=this,s=[{widget:"jqxWindow",src:"jqxwindow.js"},{widget:"jqxButton",src:"jqxbuttons.js"},{widget:"jqxCheckBox",src:"jqxcheckbox.js"},{widget:"jqxInput",src:"jqxinput.js"},{widget:"jqxScrollBar",src:"jqxscrollbar.js"},{widget:"jqxListBox",src:"jqxlistbox.js"},{widget:"jqxDropDownList",src:"jqxdropdownlist.js"},{widget:"jqxDragDrop",src:"jqxdragdrop.js"}];for(var a in s)if(!window[s[a].widget])throw new Error("Please include "+s[a].src);this._isTouchDevice();var n="jqx-rc-all jqx-widget jqx-pivotgrid jqx-designer-host"+this.toThemeProperty("jqx-widget-content");e.append("<div class='"+n+"' style='width: 100%; height: 100%; overflow:hidden; onselectstart='return false;' oncontextmenu='return false;''><div class='labelFields jqx-widget' style='position: absolute;'>Pivot Table Fields</div><div class='labelFilters jqx-widget' style='position: absolute;'>Filters</div><div class='labelColumns jqx-widget' style='position: absolute;'>Columns</div><div class='labelRows jqx-widget' style='position: absolute;'>Rows</div><div class='labelValues jqx-widget' style='position: absolute;'>Values</div><div class='divFields' style='position: absolute;'></div><div class='divFilters' style='position: absolute;'></div><div class='divColumns' style='position: absolute;'></div><div class='divRows' style='position: absolute;'></div><div class='divValues' style='position: absolute;'></div></div>"),this._listBoxes={fields:i.host.find(".divFields"),rows:i.host.find(".divRows"),columns:i.host.find(".divColumns"),values:i.host.find(".divValues"),filters:i.host.find(".divFilters")},$.jqx.utilities.resize(i.host,function(){i._resize()},!1)},destroy:function(){$.jqx.utilities.resize(this.host,null,!0),self.target&&delete self.target._pivotDesigner},_getLocalizedString:function(t){var e=this.target?this.target._localizedStrings:{};switch(t){case"fields":return e.fieldslabel||"Pivot Fields";case"calculation":return e.calculation||"Calculation";case"filters":return e.filterslabel||"Filters";case"rows":return e.rowslabel||"Rows";case"columns":return e.columnslabel||"Columns";case"values":return e.valueslabel||"Values";case"of":return e.of||"of";case"to":return e.to||"to";case"move":return e.move||"Move";case"remove":return e.remove||"Remove";case"count":return e.count||"Count";case"sum":return e.sum||"Sum";case"average":return e.avgerage||"Average";case"product":return e.product||"Product";case"min":return e.min||"Min";case"max":return e.max||"Max"}return e[t]?e[t]:t},_isTouchDevice:function(){if(void 0!=this.touchDevice)return this.touchDevice;var t=$.jqx.mobile.isTouchDevice();if(this.touchDevice=t,1==this.touchmode){if($.jqx.browser.msie&&$.jqx.browser.version<9)return this.enablehover=!1,!1;t=!0,$.jqx.mobile.setMobileSimulator(this.element),this.touchDevice=t}else 0==this.touchmode&&(t=!1);return t&&0!=this.touchModeStyle&&(this.touchDevice=!0,this.host.addClass(this.toThemeProperty("jqx-touch")),this.host.find("jqx-widget-content").addClass(this.toThemeProperty("jqx-touch")),this.host.find("jqx-widget-header").addClass(this.toThemeProperty("jqx-touch")),this.scrollbarsize=this.touchscrollbarsize),t},_resize:function(){var t=this._listBoxes,e=this.host,i=e.height()-10,s=e.width()-10,a=$("<span style='white-space:nowrap;'></span>");this.host.append(a);for(var n=0,o=["fields","filters","rows","columns","values"],l=0;l<o.length;l++){a.text(this._getLocalizedString(o[l]));var r=a.height();r>n&&(n=r)}a.remove();var d=this.host.position(),u=d.left+5,g=d.top+5;g+=5,e.find(".labelFields").css({left:u,top:g,width:s-10,height:n}),g+=n;var v=(i-3*(n+10))/3,c=(s-5)/2;t.fields.css({left:u,top:g,background:"white"}),t.fields.jqxListBox({width:s,height:v,allowDrop:!0,allowDrag:!0}),g+=v+10,e.find(".labelFilters").css({left:u,top:g,width:c,height:n}),e.find(".labelColumns").css({left:u+c+5,top:g,width:c,height:n}),g+=n,t.filters.css({left:u,top:g}),t.filters.jqxListBox({width:c,height:v}),t.columns.css({left:u+c+5,top:g}),t.columns.jqxListBox({width:c,height:v}),g+=v+10,e.find(".labelRows").css({left:u,top:g,width:c,height:n}),e.find(".labelValues").css({left:u+c+5,top:g,width:c,height:n}),g+=n,e.find(".divRows").css({left:u,top:g}),e.find(".divRows").jqxListBox({width:c,height:v}),e.find(".divValues").css({left:u+c+5,top:g}),e.find(".divValues").jqxListBox({width:c,height:v})},_setupListBoxes:function(){var t=this,e=(t.host,t._listBoxes);for(var i in e){var s=e[i];s.off(),s.jqxListBox({allowDrag:!0,allowDrop:!0,renderer:function(e,i,s){return t._getCustomRendererElement(i,t._listBoxes.fields[0]!=this.host[0])}}).on("dragStart",function(t){e.rows.jqxListBox({dropAction:"copy"}),e.columns.jqxListBox({dropAction:"copy"}),e.filters.jqxListBox({dropAction:"copy"}),e.values.jqxListBox({dropAction:"copy"}),e.fields.jqxListBox({dropAction:"copy"})}).on("dragEnd",function(e){t._moveElement($(this),e.args.dropTargetElement,e.args.index,e.args.value)})}},_moveElement:function(t,e,i,s){var a=this,n=a._listBoxes;if(e){if(t[0]!=n.fields[0]&&t.jqxListBox("removeAt",i),e==n.fields[0])n.fields.jqxListBox("clear"),a._populateListBox(n.fields,a._allFields,"all");else{if(t[0]==n.fields[0]&&e==n.values[0]||(n.rows[0]!=e&&a._removeItem(n.rows,s),n.columns[0]!=e&&a._removeItem(n.columns,s)),e==n.values[0]){for(var o=n.values.jqxListBox("getItems"),l=0;l<o.length;l++)n.values.jqxListBox("updateAt",{label:o[l].label,value:$.extend({},o[l].value)},l);a._autoAssignAggregationFunctions()}a._removeDuplicates(n.rows),a._removeDuplicates(n.columns),a._removeDuplicates(n.filters)}a._updateCurrentSettings(),a._updateListBoxLabels();r=$(e).jqxListBox("width");$(e).jqxListBox("width",r+1),$(e).jqxListBox("width",r-1);var r=t.jqxListBox("width");t.jqxListBox("width",r+1),t.jqxListBox("width",r-1),a._updateListBoxLabels(),a._refreshPivotGrid(a._targetCurrentSettings)}},refresh:function(){var t=this;t.target&&(t.target._pivotDesigner=this),t._readPivotSettings(),t._setupListBoxes(),t._resize(),t._updateListBoxLabels()},_updateCurrentSettings:function(){var t=this,e=t._listBoxes,i=$.extend({},t._targetCurrentSettings),s={},a=["rows","columns","values","filters"];for(var n in a)for(var o=i[a[n]],l=0;l<o.length;l++)s[v=o[l].dataField+"_"+(o[l].function||"")]=$.extend({},o[l]),delete s[v].dataField,delete s[v].text;i=$.extend({},t._targetInitSettings);for(var n in a)for(var o=i[a[n]],l=0;l<o.length;l++)s[v=o[l].dataField+"_"+(o[l].function||"")]=$.extend(s[v]||{},o[l]),delete s[v].dataField,delete s[v].text;for(var n in e){o=e[n].jqxListBox("getItems");i[n]=[];for(l=0;l<o.length;l++){var r=o[l].value.dataField,d=o[l].value.text,u="values"==n?o[l].value.function:void 0,g={dataField:r,text:d||r};u&&(g.function=u),g.text=t._getFieldLabel(u,r);var v=g.dataField+"_"+(u||""),c=s[v];c&&$.extend(g,c),i[n].push(g)}}t._targetCurrentSettings=i},_refreshPivotGrid:function(t){var e=this,i=new $.jqx.pivot(e.target.source.dataAdapter,t);$(e.target.element).jqxPivotGrid({source:i});var s=$(e.target.element).jqxPivotGrid("getInstance");s._pivotRows.autoResize(),s._pivotColumns.autoResize(),s.refresh(),e._targetCurrentSettings=t},_autoAssignAggregationFunctions:function(){for(var t=this,e=t.host.find(".divValues").jqxListBox("getItems"),i={},s=0;s<e.length;s++)e[s].value.function&&(i[e[s].value.dataField]||(i[e[s].value.dataField]={}),i[e[s].value.dataField][e[s].value.function]=!0);for(var a=t.target.source.getFunctions(),s=0;s<e.length;s++){var n=!1;if(!e[s].value.function){i[e[s].value.dataField]||(i[e[s].value.dataField]={});for(var o in a)if(!i[e[s].value.dataField][o]){i[e[s].value.dataField][o]=!0,e[s].value.function=o,n=!0;break}if(!n)for(var o in a){e[s].value.function=o;break}}}},_updateListBoxLabels:function(){var t=this;t.host.find(".pivot-designer-item-button").off();var e=t._listBoxes;for(var i in e){var s=e[i],a=s.jqxListBox("getItems");if(a)for(var n=0;n<a.length;n++){var o=void 0;if("values"==i&&!(o=a[n].value.function))throw"Unspecified pivot aggregation function";a[n].label=t._getFieldLabel(o,a[n].value.dataField),s.jqxListBox("updateAt",{label:a[n].label,value:a[n].value},n)}}t.host.find(".pivot-designer-item-button").off(),t.host.find(".pivot-designer-item-button").on("click",function(i){for(var s in e)for(var a=e[s].jqxListBox("getItems"),n=0;n<a.length;n++){var o=$(a[n].element).find(".pivot-designer-item-button");if(o.length>0&&o[0]==this)return void t._showDesignerItemContextMenu(s,n)}})},_showDesignerItemContextMenu:function(t,e){var i=this;if(!i._isWindowOpen()){var s=i._listBoxes,a={moveOperations:{}};for(var n in s)n!=t&&(a.moveOperations[i._getLocalizedString("move")+" "+i._getLocalizedString("to")+" "+i._getLocalizedString(n)]={dropTarget:n});if("values"==t){var o=i.target.source.getFunctions(),l={};for(var n in o)l[i._getLocalizedString(n)]={function:n};a.functions=l}i._windowData={type:t,itemIndex:e,fieldSettings:a},"filters"==t?(this._filtersWindow||this._createFiltersWindow(),this._filtersWindow.jqxWindow("open"),this._updateFiltersWindowData()):(this._settingsWindow||this._createSettingsWindow(),this._settingsWindow.jqxWindow("open"),this._updateWindowData())}},_isWindowOpen:function(){return this._settingsWindow&&this._settingsWindow.jqxWindow("isOpen")||this._filtersWindow&&this._filtersWindow.jqxWindow("isOpen")},_getFieldLabel:function(t,e){if(t)return this._getValueFieldLabel(t,e);var i=this._targetInitSettings;for(var s in i)if("values"!=s){var a=i[s];for(var n in a)if(a[n].dataField==e&&a[n].text)return a[n].text}return e},_getValueFieldLabel:function(t,e){var i=this,s=i._getLocalizedString(t)||t,a=void 0,n=i._targetInitSettings;if(n.values)for(var o in n.values)if(n.values[o].dataField==e&&n.values[o].function==t&&void 0!=(a=n.values[o].text))break;return a||s+" "+i._getLocalizedString("of")+" "+e},_removeItem:function(t,e){for(var i=t.jqxListBox("getItems"),s=0,a=0;a<i.length;a++)t.jqxListBox("getItem",a).value.dataField==e.dataField&&(t.jqxListBox("removeAt",a-s),s++)},_getCustomRendererElement:function(t,e){return e?"<div><div style='width: 16px;height: 16px; float:left; margin-top: 1px;' class='pivot-designer-item-button jqx-pivotgrid-settings-icon'></div><div>"+t+"</div></div>":"<div><div style='height: 16px; float:left; margin-top: 2px;'></div><div>"+t+"</div></div>"},_readPivotSettings:function(){function t(t,e,i){if(Array.isArray(t))for(var s=0;s<t.length;s++){var a=t[s].name||t[s].dataField;a&&0!=a.length&&(e[a]||(e[a]={text:a,dataField:a}),void 0!=t[s].text&&"values"!=i&&(e[a].text=t[s].text),e[a].function=t[s].function)}}var e=this;if(e.target){var i=e.target.source;if(i){var s=i.dataAdapter;if(s){var a=s._source;if(a){e._targetCurrentSettings=$.extend({},e.target.source._initSettings),e._targetInitSettings=$.extend({},e.target.source._initSettings);var n={},o={dataFields:this.dataFields,adapterDataFields:a.datafields,rows:e.target.source.rows,columns:e.target.source.columns,values:e.target.source.values,filters:e.target.source.filters};Array.isArray(o.dataFields)?t(o.dataFields,n):t(o.adapterDataFields,n),t(o.filters,n,"filters"),t(o.rows,n,"rows"),t(o.columns,n,"columns"),t(o.values,n,"values"),this._allFields=n;e.host;var l=e._listBoxes;e._populateListBox(l.fields,n,"all"),e._populateListBox(l.filters,o.filters,"filters"),e._populateListBox(l.rows,o.rows,"rows"),e._populateListBox(l.columns,o.columns,"columns"),e._populateListBox(l.values,o.values,"values")}}}}},_populateListBox:function(t,e,i){var s=[],a=0;for(var n in e){var o=e[n].dataField,l=e[n].text||this._allFields[o].text||o;s[a]={text:l,value:{text:l,dataField:o,function:e[n].function||void 0}},"values"!=i&&(s[a].value.function=void 0),a++}t.jqxListBox({source:s,displayMember:"text",valueMember:"value"})},_removeDuplicates:function(t){for(var e=t.jqxListBox("getItems"),i={},s=0;s<e.length;s++){var a=e[s].label;void 0!=i[a]?(t.jqxListBox("removeAt",s),e.splice(s,1),s--):i[a]=!0}},_createSettingsWindow:function(){var t=this,e="<div id='pivotFieldSettingsWindow' style='width: 300px; height: 200px'><table style='width: 100%;'><tr><td style='height: 30px;'>"+t._getLocalizedString("move")+" "+t._getLocalizedString("to")+"</td><td><div style='width: 100%;' class='lbPivotFieldMoveTo'></div></td></tr><tr><td style='height: 30px;'>"+t._getLocalizedString("alignment")+"</td><td><div style='width: 100%;' class='lbAlignment'></div></td></tr><tr class='valueField'><td style='height: 30px;'>"+t._getLocalizedString("calculation")+"</td><td><div style='width: 100%;' class='lbCalculation'></div></td></tr><tr class='valueField'><td style='height: 30px;'>"+t._getLocalizedString("numberformat")+"</td><td></td></tr><tr class='valueField'><td style='height: 30px;'>"+t._getLocalizedString("cellalignment")+"</td><td><div style='width: 100%;' class='lbCellsAlignment'></div></td></tr><tr class='valueField'><td style='height: 30px;'>"+t._getLocalizedString("prefix")+"</td><td><input type='text' style='width: 100%;' class='txtPrefix'></input></td></tr><tr class='valueField'><td style='height: 30px;'>"+t._getLocalizedString("decimalplacestext")+"</td><td><input type='text' style='width: 100%;' class='txtDecimalPlaces'></input></td></tr><tr class='valueField'><td style='height: 30px;'>"+t._getLocalizedString("thousandsseparatortext")+"</td><td><input type='text' style='width: 100%;' class='txtThousandsSeparator'></input></td></tr><tr class='valueField'><td style='height: 30px;'>"+t._getLocalizedString("decimalseparatortext")+"</td><td><input type='text' style='width: 100%;' class='txtDecimalSeparator'></input></td></tr><tr class='valueField'><td style='height: 30px;'>"+t._getLocalizedString("nagativebracketstext")+"</td><td><div style='width: 100%;' class='checkBoxNagativeWithBrackets'></input></td></tr><tr><td style='height: 30px;' colspan=2 align=middle><input class='btnOk' type='button' value='"+t._getLocalizedString("ok")+"'></input><input class='btnCancel' style='margin-left: 10px;' type='button' value='"+t._getLocalizedString("cancel")+"'></input></td></tr></table>";t.host.append(e);t._settingsWindow=t.host.find("#pivotFieldSettingsWindow").jqxWindow({title:t._getLocalizedString("fieldsettings"),position:{x:0,y:0},showCollapseButton:!0,autoOpen:!1,minWidth:380,maxWidth:380,width:380,height:360,initContent:function(){t._updateWindowData();var e=t._settingsWindow.find(".btnCancel").jqxButton({width:80}),i=t._settingsWindow.find(".btnOk").jqxButton({width:80});e.on("click",function(){t._settingsWindow.jqxWindow("close")}),i.on("click",function(){t._applySettingsWindowChanges(),t._settingsWindow.jqxWindow("close")})}})},_applySettingsWindowChanges:function(){var t=this,e=t._windowData.itemIndex,i=t._windowData.type,s=t._listBoxes[i],a=s.jqxListBox("getItem",e),n=t._settingsWindow.find(".lbPivotFieldMoveTo").jqxDropDownList("selectedIndex");if(-1!=n){var o=void 0;for(var l in t._windowData.fieldSettings.moveOperations)if(o=t._windowData.fieldSettings.moveOperations[l].dropTarget,-1==--n)break;var r=t._listBoxes[o],d=a.value;return r!=t._listBoxes.fields&&r.jqxListBox("addItem",{label:a.label,value:d}),void t._moveElement(s,r[0],e,d)}u=t._settingsWindow.find(".lbAlignment").jqxDropDownList("getSelectedItem");if(t._targetCurrentSettings[i][e].align=u.value,delete t._targetCurrentSettings[i][e].function,"values"==i){u=t._settingsWindow.find(".lbCalculation").jqxDropDownList("getSelectedItem");t._targetCurrentSettings[i][e].text=a.value.text=a.label=t._getFieldLabel(u.value,a.value.dataField),t._targetCurrentSettings[i][e].function=a.value.function=u.value,s.jqxListBox("updateAt",{label:a.value.text,value:a.value},e),t._updateListBoxLabels()}if("values"==i){var u=t._settingsWindow.find(".lbCellsAlignment").jqxDropDownList("getSelectedItem");(x=t._targetCurrentSettings[i][e].formatSettings||{}).align=u.value,t._targetCurrentSettings[i][e].formatSettings=x}if("values"==i){var g=t._settingsWindow.find(".txtPrefix");(x=t._targetCurrentSettings[i][e].formatSettings||{}).prefix=g.val(),t._targetCurrentSettings[i][e].formatSettings=x}if("values"==i){var v=t._settingsWindow.find(".txtDecimalPlaces");(x=t._targetCurrentSettings[i][e].formatSettings||{}).decimalPlaces=v.val(),t._targetCurrentSettings[i][e].formatSettings=x}if("values"==i){var c=t._settingsWindow.find(".txtThousandsSeparator");(x=t._targetCurrentSettings[i][e].formatSettings||{}).thousandsSeparator=c.val(),t._targetCurrentSettings[i][e].formatSettings=x}if("values"==i){var f=t._settingsWindow.find(".txtDecimalSeparator");(x=t._targetCurrentSettings[i][e].formatSettings||{}).decimalSeparator=f.val(),t._targetCurrentSettings[i][e].formatSettings=x}if("values"==i){var h=t._settingsWindow.find(".checkBoxNagativeWithBrackets"),x=t._targetCurrentSettings[i][e].formatSettings||{};x.negativeWithBrackets=h.val(),t._targetCurrentSettings[i][e].formatSettings=x}t._refreshPivotGrid(t._targetCurrentSettings)},_updateWindowData:function(){for(var t=this,e=t._windowData.fieldSettings,i=t._listBoxes[t._windowData.type].jqxListBox("getItem",t._windowData.itemIndex).value,s=t.target.source[t._windowData.type],a=void 0,n=0;n<s.length;n++)if(s[n].dataField==i.dataField&&s[n].function==i.function){a=s[n];break}var o=[];for(var n in e.moveOperations)o.push({text:n,value:e.moveOperations[n]});t._settingsWindow.find(".lbPivotFieldMoveTo").jqxDropDownList({source:o,displayMember:"text",selectedIndex:-1,valueMember:"value",autoDropDownHeight:!0});var l=o=[{text:t._getLocalizedString("left"),value:"left"},{text:t._getLocalizedString("center"),value:"center"},{text:t._getLocalizedString("right"),value:"right"}],r=0;if(a)for(f=0;f<o.length;f++)if(o[f].value==a.align){r=f;break}t._settingsWindow.find(".lbAlignment").jqxDropDownList({source:o,selectedIndex:r,displayMember:"text",valueMember:"value",autoDropDownHeight:!0});var d=390;if(e.functions){var u=i.function;t._settingsWindow.find(".valueField").show(),o=[],r=-1;var g=0;for(var n in e.functions){var v=e.functions[n].function;o.push({text:n,value:v}),u==v&&(r=g),g++}t._settingsWindow.find(".lbCalculation").jqxDropDownList({source:o,displayMember:"text",valueMember:"value",autoDropDownHeight:!0,selectedIndex:r}),o=l;var r=2,c="right";if(a){a.formatSettings&&a.formatSettings.align&&(c=a.formatSettings.align);for(var f=0;f<o.length;f++)if(o[f].value==c){r=f;break}}t._settingsWindow.find(".lbCellsAlignment").jqxDropDownList({source:o,selectedIndex:r,displayMember:"text",valueMember:"value",autoDropDownHeight:!0});var h="";a&&a.formatSettings&&void 0!=a.formatSettings.prefix&&(h=a.formatSettings.prefix),t._settingsWindow.find(".txtPrefix").jqxInput({value:h,height:23,width:195});var x=2;try{a&&a.formatSettings&&void 0!=a.formatSettings.decimalPlaces&&(x=parseInt(a.formatSettings.decimalPlaces))}catch(t){x=2}t._settingsWindow.find(".txtDecimalPlaces").jqxInput({value:x,height:23,width:195});var p=t._getLocalizedString("thousandsseparator");a&&a.formatSettings&&void 0!=a.formatSettings.thousandsSeparator&&(p=a.formatSettings.thousandsSeparator),t._settingsWindow.find(".txtThousandsSeparator").jqxInput({value:p,height:23,width:195});var w=t._getLocalizedString("decimalseparator");a&&a.formatSettings&&void 0!=a.formatSettings.decimalSeparator&&(w=a.formatSettings.decimalSeparator),t._settingsWindow.find(".txtDecimalSeparator").jqxInput({value:w,height:23,width:195});var m=!1;a&&a.formatSettings&&void 0!=a.formatSettings.negativeWithBrackets&&(m=1==a.formatSettings.negativeWithBrackets),t._settingsWindow.find(".checkBoxNagativeWithBrackets").jqxCheckBox({checked:m})}else d=160,t._settingsWindow.find(".valueField").hide();t._settingsWindow.jqxWindow({height:d})},_createFiltersWindow:function(){var t=this,e="<div id='pivotFieldFiltersWindow' style='width: 300px; height: 340px;'><div style='padding: 5; margin: 5; width: 100%; height: 100%;'><table style='width: 100%; height: 100%; margin:0; padding:0;' cellspacing=0; cellpadding=0><tr style='height: auto;'><td style='height: 100%;'><div style='padding: 0px; margin: 0px; display:inline-block;position:relative;' class='listBoxFilters'></div></td></tr><tr style='height: 5px;'><td></td></tr><tr style='height: 30px;'><td colspan=2 align=middle><input class='btnOk' type='button' value='"+t._getLocalizedString("ok")+"'></input><input class='btnCancel' style='margin-left: 10px;' type='button' value='"+t._getLocalizedString("cancel")+"'></input></td></tr></div></table>";t.host.append(e);t._filtersWindow=t.host.find("#pivotFieldFiltersWindow").jqxWindow({title:t._getLocalizedString("fieldsettings"),position:{x:0,y:0},showCollapseButton:!0,autoOpen:!1,minWidth:300,maxWidth:300,width:300,height:360,initContent:function(){t._updateFiltersWindowData();var e=t._filtersWindow.find(".btnCancel").jqxButton({width:80}),i=t._filtersWindow.find(".btnOk").jqxButton({width:80});e.on("click",function(){t._filtersWindow.jqxWindow("close")}),i.on("click",function(){t._applyFiltersWindowChanges(),t._filtersWindow.jqxWindow("close")})}})},_updateFiltersWindowData:function(){for(var t=this,e=t._windowData.fieldSettings,i=t._listBoxes[t._windowData.type].jqxListBox("getItem",t._windowData.itemIndex).value,s=t.target.source[t._windowData.type],a=void 0,n=0;n<s.length;n++)if(s[n].dataField==i.dataField&&s[n].function==i.function){a=s[n];break}var o=[];for(var n in e.moveOperations)o.push({text:n,value:e.moveOperations[n]});o=[];var l=t.target.source.getItemsFilterStatus(a.dataField);for(var n in l)o.push({label:n,value:l[n]});var r=t._filtersWindow.find(".listBoxFilters");r.jqxListBox({source:o,checkBoxes:!0,displayMember:"label",selectedIndex:-1,valueMember:"value",width:"100%",height:"100%"}),r.jqxListBox("beginUpdate"),r.jqxListBox("checkAll");for(n=0;n<o.length;n++)o[n].value&&r.jqxListBox("uncheckIndex",n);r.jqxListBox("endUpdate")},_applyFiltersWindowChanges:function(){for(var self=this,lbFilters=self._filtersWindow.find(".listBoxFilters"),items=lbFilters.jqxListBox("getItems"),uncheckedItems=[],i=0;i<items.length;i++)items[i].checked||uncheckedItems.push(items[i].label);for(var fn="filterFunction = function(value) {",i=0;i<uncheckedItems.length;i++)fn+="if (value == '"+uncheckedItems[i]+"') return true;";fn+="return false;",fn+="}";for(var itemIndex=self._windowData.itemIndex,itemType=self._windowData.type,source=self._listBoxes[itemType],item=source.jqxListBox("getItem",itemIndex),targetCurrentSettings=self._targetCurrentSettings,i=0;i<targetCurrentSettings.filters.length;i++)targetCurrentSettings.filters[i].dataField==item.value.dataField&&(targetCurrentSettings.filters[i].filterFunction=eval(fn));self._refreshPivotGrid(self._targetCurrentSettings)}})}(jqxBaseFramework);
