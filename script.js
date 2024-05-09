// glitch text

	var things = ['coding','knitting','blogging','blogging','blogging','blogging','blogging','designing','planning','writing','writing','writing','writing','writing','writing','writing','programming','programming','programming','programming','programming','concluding','programming','thinking','scripting','scripting','scripting','scripting','scripting','sewing','sketching','ruminating','deliberating','pondering','contemplating','abstracting','abstracting','abstracting','abstracting','abstracting','abstracting','optimising','optimising','optimising','optimising','optimising','optimising','refactoring','refactoring','refactoring','objectifying','simplifying','decoupling','debugging','debugging','debugging','debugging','debugging','debugging','configuring','streamlining','searching','tweaking','editing'];
	var junk = ['#','@','%','*','&amp;','&lt;','&gt;','_','=','+','[',']','|','-','!','?','X'];

	function randomInt(min, max)
	{
		return Math.round(min + (Math.random() * (max-min)));
	}

	function tick()
	{
		var txt = things[randomInt(0, things.length-1)];
		var chars = txt.split('');
		var glitch = randomInt(0, 3);
		for (var i = 0; i < glitch; i++)
		{
			chars[randomInt(0, chars.length-1)] = junk[randomInt(0, junk.length-1)];
		}
		txt = chars.join('');
		$('#ing').html(txt);
		window.setTimeout(tick, randomInt(16,400));
	}

	if(document.getElementById('ing') != null) tick();
