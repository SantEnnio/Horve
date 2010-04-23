/*
---
description: horve - Class for Horizontal & Vertical Scrolling WebSites

authors:
  - Ennio Pirolo (http://eqepa.com)

license: MIT-style

requires:
  - more/1.2.4.2: '*'

provides: [Horve]

...
*/
var horve=new Class({
	Implements:Options,
	cont:null,
	wind:null,
	options:{
		rows:1,
		defaultScreen:1,
		haveButtons:true,
		screens:null,
		transition:Fx.Transitions.Quad.easeInOut,
		duration:1000,
		_minX:1000,
		_minY:500,
		onComplete:function(){},
		onStart:function(){}
	},
	currentScreen:1,
	xScreenDim:0,
	yScreendim:0,
	bodyEl:null,
	scroll:null,
	
	initialize:function(windId,contId,options){
		
		this.setOptions(options);
		this.wind=$(windId);
		this.cont=$(contId);
		this.bodyEl=$$("body")[0];
		//console.log(this.options.screens);
		if(options.screens==null)this.options.screens=$$(".screen");
		
		this.xScreenDim=this.bodyEl.getSize().x;
		this.yScreenDim=this.bodyEl.getSize().y;
		
		if(this.xScreenDim<this._minX) this.xScreenDim=this._minX;
		if(this.yScreenDim<this._minY) this.yScreenDim=this._minY;
		
		//inizializzazione oggetti Fx
		this.scroll = new Fx.Scroll(this.wind, {
				wait: false,
				duration: this.options.duration,
				transition: this.options.transition,
				onComplete:function(){
					this.options.onComplete(this.currentScreen);
				}.bind(this),
				onStart:function(){
					this.options.onStart(this.currentScreen);
				}.bind(this)
		});
		
		this.setScreensDimensions();
		this.setScreensPositions();
		
		this.switchToScreen(this.options.defaultScreen);
		if(this.options.haveButtons) this.setSwitchButtonFunc();
	},
	setScreensDimensions:function(){
		if(this.options.screens!=null){
				this.wind.setStyle('width',this.getX());
				this.wind.setStyle('height',this.getY());
				this.wind.setStyle('overflow',"hidden");
				this.wind.setStyle("position","relative");
				this.options.screens.setStyle('width',this.getX());
				this.options.screens.setStyle('height',this.getY());
		}
		else alert("Ops, there was an error");
	},
	setScreensPositions:function(){
		if(this.options.screens!=null){
			
			//prendo il numero di screens trovati
			var sN=this.options.screens.length; //screens Number
			//cerco di calcolare il numero di colonne
			var col=sN/this.options.rows;
			var resto=sN%this.options.rows;
			//console.log(col+" "+resto);
			if(resto!=0){ alert("Sorry! This version of Horve can't handle this page!");}
			else{
				var n=0;
				this.cont.setStyle('width', this.getX()*col);
				this.cont.setStyle('height', this.getY()*this.options.rows);
				
				for(var i=0;i<sN;i++){
					sc=this.options.screens[i];
					n=sc.get('num');
					var r=n%col;
					var q=n/col;
					var qI=q.toInt();
					//console.log(n+" "+col+" "+q+" "+qI);
					if(q==qI) qI--;
					sc.setStyle('top', this.getY()*qI);
					sc.setStyle('bottom', this.getY()*(this.options.rows-qI));
					
					var l=(n-1)%col;
					//console.log(l)
					sc.setStyle('left',this.getX()*l);
				}
			}//end else (resto==0)
		}
		else alert("Ops, there was an error!");
	},
	
	switchToScreen:function(index){
		
		if(index!=this.currentScreen){
			var sc=$('contentCont'+this.currentScreen)
			//console.log(index);
			
			var s=$('screen'+index);
			if(this.options.haveButtons){
				$$('.buttonSwitchCurrent')[0].removeClass('buttonSwitchCurrent');
				$$('.buttonSwitchTo'+index)[0].addClass('buttonSwitchCurrent');
			}
			//For Google chrome & IE...
			var left=s.getStyle('left');
			var top=s.getStyle('top');
			if(left=="auto") left=0;
			if(top=="auto") top=0;
			
			this.scroll.toElement(s);
			this.currentScreen=index;
		}
	},
	
	getX:function(){
		return this.xScreenDim;
	},
	getY:function(){
		return this.yScreenDim;
	},
	
	setSwitchButtonFunc:function(){
		
		var s=this.options.screens.length;
		var a=1;
		while(a<=s){
			$$('.buttonSwitchTo'+a).each(function(item,index){
				eval("$(item).addEvent('click',function(){this.switchToScreen("+a+");}.bind(this))");
			}.bind(this));
			a++;
		}
	}	
});