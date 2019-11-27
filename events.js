var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var gen = document.getElementById("generate");		//handle the button "Generate".
gen.addEventListener("click", function()
	{
		var buttonsDiv = document.getElementById("buttons");
		buttonsDiv.innerHTML = '';		//clear the div in order to put other buttons in the next click.
		var val = document.getElementById("numLetters").value;
		if(isNaN(val) || parseInt(val) > 26 || parseInt(val) < 1)		//check input validity.
			{
				alert("Please enter a number between 1 and 26");
				var inp = document.getElementById("numLetters");
				var img = document.getElementById("images");
				inp.value = '';		//clear input field.
				val = '';		//clear buttons div.
				img.innerHTML = '';		//clear images div.
			}
		var num = parseInt(val);
		function check(x, y)		//a boolean function to check the repeated letters.
		{
			for(var i = 0;i < y.length-1;i++)
				if(x == y[i])
					return false;
			return true;
		}
			var leet = new Array();		//an array that holds only unique values.
			var rand = Math.floor((Math.random()*26));
			leet[0] = rand;
			var count = 1;
		while(count < num)
		{
			var rand2 = Math.floor((Math.random()*26));
			leet[count] = rand2;
			if(check(leet[count],leet))
				{
					leet[count] = rand2;
					count++;
				}
			else
				continue;
		}
		for(var i = 0;i < num;i++)
			{
				var buttonTag = document.createElement("button");
				buttonTag.innerHTML = letters[leet[i]];
				buttonsDiv.appendChild(buttonTag);
				var letterButton = document.getElementsByTagName("button")[i+1];		//assign an event handler to each button.
				letterButton.addEventListener("click", function()
				{
					var imagesDiv = document.getElementById("images");
					imagesDiv.innerHTML = '';
					var imgTag = document.createElement("img");
					imgTag.setAttribute("src", "Images/"+this.textContent+".jpg");		//each image in folder has a name with the first letter of its content.
					imagesDiv.appendChild(imgTag);
				}); //end of letter buttons function.
			}
	}); //end of generate button function.
	function winLoad(type, target, time)
	{
		this.type = type;
		this.target = target;
		this.time = time;
	}
	function winUnload(type, target, time)
	{
		this.type = type;
		this.target = target;
		this.time = time;
	}
	function genClick(type, target, time)
	{
		this.type = type;
		this.target = target;
		this.time = time;
	}
	function letClick(type, target, time)
	{
		this.type = type;
		this.target = target;
		this.time = time;
	}
	window.addEventListener("load", function(e)
	{
		var l = new winLoad();
		localStorage.setItem("l.type", window.load);
		localStorage.setItem("l.target", e.target);
		localStorage.setItem("l.time", new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
	});
	window.addEventListener("unload", function(e)
	{
		var u = new winUnload();
		localStorage.setItem("u.type", window.load);
		localStorage.setItem("u.target", e.target);
		localStorage.setItem("u.time", new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
	});
	gen.addEventListener("click", function(e)
	{
		var g = new genClick();
		localStorage.setItem("g.type", window.load);
		localStorage.setItem("g.target", e.target);
		localStorage.setItem("g.time", new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
	});
	var val = document.getElementById("numLetters").value;
	var num = parseInt(val);
	for(var i = 0;i < num;i++)
	{
		var letterButton = document.getElementsByTagName("button")[i+1];		//assign an event handler to each button.
				letterButton.addEventListener("click", function(e)
				{
					var lett = new letClick();
					localStorage.setItem("lett.type", window.load);
					localStorage.setItem("lett.target", e.target);
					localStorage.setItem("lett.time", new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
				});
	}