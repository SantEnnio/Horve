Horve
==================

Provides a Class for Horizontal & Vertical Scrolling WebSites

![Horve](http://eqepa.com/wp-content/uploads/2010/02/horve-logo1-200x57.png)
 
How to use
----------

*HTML*

	#HTML
	<div id="DivWindow">
		<div id="container">
			<div id="screen1" num="1" class="screen">
				<div id="content1" class="content">Screen 1</div>
			</div>
			<div id="screen2" num="2" class="screen">
				<div id="content2" class="content">Screen 2</div>
			</div>
			<div id="screen3" num="3" class="screen">
				<div id="content3" class="content">Screen 3</div>
			</div>
			<div id="screen4" num="4" class="screen">
				<div id="content4" class="content">Screen 4</div>
			</div>
			<div id="screen5" num="5" class="screen">
				<div id="content5" class="content">Screen 5</div>
			</div>
			<div id="screen6" num="6" class="screen">
				<div id="content6" class="content">Screen 6</div>
			</div>
		</div>
	</div>

*JS*

	#JS
    var hv=new horve("DivWindow","container",{
			rows:3, 
			transition:Fx.Transitions.Quad.easeInOut,
			duration:500,
			defaultScreen:3,
			haveButton:true,
			screens:null,
			_minX:1000,
			_minY:500,
			onStart:function(screen){
				$('content'+screen).morph({'height':30, 'opacity':0.5,duration:20});
			},
			onComplete:function(screen){
				$('content'+screen).morph({'height':200,  'opacity':1, duration:20});
			}
		});


*PARAMS*

    * divWindow: the id of the div that contains everything.
	
    * Container: the id of the div that contains the screens.
	
    * rows: number of rows of screens. Default value=1.
	
    * transition: Fx.Transition to use when switch from a screen to another. Default value=Fx.Transitions.Quad.easeInOut.
	
    * duration: millis. Default value=1000.
	
    * defaultScreen: first Screen to display. Default value=1.
	
	* haveButtons: set true if the page provides buttons for switching from screen to screen (view notes). Default value=true.
	
	* screens: the array of screen to switch. If is set to null the class take all divs with class="screen"
	
	* _minX & _minY: the class sets the size of the screens based on the client resolution. These parameters are the minimum size of the screens. Default values=1000x500
	
	* onComplete(screen) & onStart(screen): function called when the switch has completed or started. The screen var passed to the function contains the number of current screen
	
	
*NOTES*

If haveButtons is set to true the class search for all elements with class="buttonSwitchTo#" (# is the number of the screen).
If haveButtons is set to false you can use the method hv.switchToScreen(screenNumber) to switch to the desired screen.

*NOTES, DEMO & DOCUMENTATION*

The class has been tested on IE 7+, Chrome 4+, Firefox 3+ and Android phone browser (on htc g1 running Android 1.6).
[Here](http://eqepa.com/Playground/Mootools/Horve/0.4plus/Example/demo.html) it is a basic demo.
View the [Horve page](http://eqepa.com/projects/mootools-plugins/horve-mootools-horizontal-vertical-scroll-websites/) for more detailed documentation.
Please leave your comments or report bugs [here](http://eqepa.com/blog/2010/04/horve-0-4-released/).