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
    var hv=new horve("DivWindow","container",3, Fx.Transitions.Quad.easeInOut,1000,3, );


*PARAMS*

    * divWindow: the id of the div that contains everything.
	
    * Container: the id of the div that contains the screens.
	
    * numRows: number of rows of screens.
	
    * Transition: Fx.Transition to use when switch from a screen to another.
	
    * Duration: millis
	
    * DefaultScreen: first Screen to display
	
	* haveButtons: set true if the page provides buttons for switching from screen to screen (view notes)
	
	
*NOTES*

If haveButtons is set to true the class search for all elements with class="buttonSwitchTo#" when # is the number of the screen.
If haveButtons is set to false you can use the method hv.switchToScreen(screenNumber) to switch to the desired screen.

*NOTES, DEMO & DOCUMENTATION*

This is a very beta version of the class.
[Here](http://eqepa.com/Playground/Mootools/Horve/demo.html) it is a basic demo.
View the [Horve page](http://eqepa.com/projects/mootools-plugins/horve-mootools-horizontal-vertical-scroll-websites/) for more detailed documentation.