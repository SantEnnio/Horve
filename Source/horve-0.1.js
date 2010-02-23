/*
---

script: horve-0.1.js

description: Class for Horizontal & Vertical Scrolling WebSites

license: MIT-style license.

authors: 
-Ennio Pirolo
-eqepa

docs: http://eqepa.com/projects/mootools-plugins/horve-mootools-horizontal-vertical-scroll/

requires:
- more/1.2.4.2: '*'

provides:
-horve
...
*/

var horve=new Class({
	xScreenDim:0,
	yScreendim:0,
	_minX:1000,
	_minY:500,
	cont:null,
	bodyEl:null,
	screens:null,
	rows:null,
	currentScreen:0,
	scroll:null,
	instance:null,
	haveButtons:null,
	
	initialize:function(windId,contId,rowNumber,trans,dur,defaultScreen,haveButtons){
		
		this.haveButtons=haveButtons;
		this.wind=$(windId);
		this.cont=$(contId);
		this.bodyEl=$$("body")[0];
		this.screens=$$(".screen");
		this.rows=rowNumber;
		this.instance=this;
		this.xScreenDim=this.bodyEl.getSize().x;
		this.yScreenDim=this.bodyEl.getSize().y;
		//alert(this.xScreenDim+"x"+this.yScreenDim+"  "+this.bodyEl.getSize().x+"x"+this.bodyEl.getSize().y);
		if(this.xScreenDim<this._minX) this.xScreenDim=this._minX;
		if(this.yScreenDim<this._minY) this.yScreenDim=this._minY;
		
		//inizializzazione oggetti Fx
		this.scroll = new Fx.Scroll(this.wind, {
				wait: false,
				duration: dur,
				transition: trans,
				onComplete:function(){
					
				}
		});
		
		this.setScreensDimensions();
		this.setScreensPositions();
		
		this.switchToScreen(defaultScreen);
		if(this.haveButtons) this.setSwitchButtonFunc();
	},
	setScreensDimensions:function(){
		if(this.screens!=null){
				this.wind.setStyle('width',this.getX());
				this.wind.setStyle('height',this.getY());
				this.wind.setStyle('overflow',"hidden");
				this.wind.setStyle("position","relative");
				this.screens.setStyle('width',this.getX());
				this.screens.setStyle('height',this.getY());
		}
		else alert("Ops, there was an error");
	},
	setScreensPositions:function(){
		if(this.screens!=null){
			
			
			
			//prendo il numero di screens trovati
			var sN=this.screens.length; //screens Number
			//cerco di calcolare il numero di colonne
			var col=sN/this.rows;
			var resto=sN%this.rows;
			//console.log(col+" "+resto);
			if(resto!=0){ alert("Sorry! This version of Horve can't handle this page!");}
			else{
				var n=0;
				this.cont.setStyle('width', this.getX()*col);
				this.cont.setStyle('height', this.getY()*this.rows);
				
				for(var i=0;i<sN;i++){
					sc=this.screens[i];
					n=sc.get('num');
					var r=n%col;
					var q=n/col;
					var qI=q.toInt();
					//console.log(n+" "+col+" "+q+" "+qI);
					if(q==qI) qI--;
					sc.setStyle('top', this.getY()*qI);
					sc.setStyle('bottom', this.getY()*(this.rows-qI));
					
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
			
			this.currentScreen=index;
			var s=$('screen'+index);
			if(this.haveButtons){
				$$('.buttonSwitchCurrent')[0].removeClass('buttonSwitchCurrent');
				$$('.buttonSwitchTo'+index)[0].addClass('buttonSwitchCurrent');
			}
			//For Google chrome & IE...
			var left=s.getStyle('left');
			var top=s.getStyle('top');
			if(left=="auto") left=0;
			if(top=="auto") top=0;
			//alert(left+' '+ top);
			//this.moveLogo.start({'left': left, 'top': top});
			
			this.scroll.toElement(s);
			
		}
	},
	
	getX:function(){
		return this.xScreenDim;
	},
	getY:function(){
		return this.yScreenDim;
	},
	
	setSwitchButtonFunc:function(){
		
		$$('.buttonSwitchTo1').each(function(item,index){
			$(item).addEvent('click',function(){this.switchToScreen(1);}.bind(this)/*this.switchToScreen(1)*/);
		}.bind(this));
		$$('.buttonSwitchTo2').each(function(item,index){
			$(item).addEvent('click',function(){this.switchToScreen(2);}.bind(this)/*this.switchToScreen(1)*/);
		}.bind(this));
		$$('.buttonSwitchTo3').each(function(item,index){
			$(item).addEvent('click',function(){this.switchToScreen(3);}.bind(this)/*this.switchToScreen(1)*/);
		}.bind(this));
		$$('.buttonSwitchTo4').each(function(item,index){
			$(item).addEvent('click',function(){this.switchToScreen(4);}.bind(this)/*this.switchToScreen(1)*/);
		}.bind(this));
		$$('.buttonSwitchTo5').each(function(item,index){
			$(item).addEvent('click',function(){this.switchToScreen(5);}.bind(this)/*this.switchToScreen(1)*/);
		}.bind(this));
		$$('.buttonSwitchTo6').each(function(item,index){
			$(item).addEvent('click',function(){this.switchToScreen(6);}.bind(this)/*this.switchToScreen(1)*/);
		}.bind(this));
	}	
});