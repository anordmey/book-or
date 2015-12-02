// Generic-or
// Overview: (i) Helper Functions (ii) Parameters (iii) Control Flow

// ---------------- HELPER FUNCTIONS ------------------

// show slide function
function showSlide(id) {
	$(".slide").hide(); //jquery - all elements with class of slide - hide
	$("#" + id).show(); //jquery - element with given id - show
}

//coinFlip function (randomly returns 0 or 1)
function coinFlip() {
	return Math.floor(Math.random() * 2);
}

//array shuffle function
function shuffle(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

getCurrentDate = function() {
	var currentDate = new Date();
	var day = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	return (month + "/" + day + "/" + year);
}

getCurrentTime = function() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();

	if (minutes < 10) minutes = "0" + minutes;
	return (hours + ":" + minutes);
}

//preload images: 
var myimages = new Array();

function preloading() {
	for (x = 0; x < preloading.arguments.length; x++) {
		myimages[x] = new Image();
		myimages[x].src = preloading.arguments[x];
	}
}

preloading("images/apple.png","images/balloon.png","images/banana.png","images/barn.png","images/bear.png","images/bee.png","images/bell.png","images/bike.png","images/bird.png","images/blank.png","images/block.png","images/boat.png","images/book.png","images/bucket.png","images/bus.png","images/butterfly.png","images/button-gradient.png","images/cake.png","images/car.png","images/carrot.png","images/cat.png","images/chair.png","images/chicken.png","images/clock.png","images/comb.png","images/cookie.png","images/cow.png","images/crayon.png","images/cup.png","images/cupcake.png","images/dog.png","images/donut.png","images/dress.png","images/drum.png","images/duck.png","images/elephant.png","images/fence.png","images/firetruck.png","images/fish.png","images/flower.png","images/fork.png","images/frog.png","images/giraffe.png","images/glasses.png","images/goat.png","images/guitar.png","images/hat.png","images/horse.png","images/house.png","images/key.png","images/lamp.png","images/lion.png","images/map.png","images/mitten.png","images/monkey.png","images/necklace.png","images/orange.png","images/paintbrush.png","images/party_hat.png","images/peach.png","images/pear.png","images/peas.png","images/pencil.png","images/penguin.png","images/phone.png","images/pig.png","images/pizza.png","images/plane.png","images/plate.png","images/popcorn.png","images/popsicle.png","images/present.png","images/pretzel.png","images/purse.png","images/scissors.png","images/sheep.png","images/shirt.png","images/shoe.png","images/shorts.png","images/soccer.png","images/sock.png","images/spoon.png","images/stanford.png","images/stim_list.csv","images/strawberry.png","images/stroller.png","images/table.png","images/teddybear.png","images/tiger.png","images/toothbrush.png","images/trafficlight.png","images/train.png","images/tree.png","images/turtle.png","images/watch.png","images/zipper.png");

// ---------------- PARAMETERS ------------------


//-----EXPERIMENT VARIABLES-----
var counter = 0;
//total number of test trials:
var number = 36;

//-----items and names -----
//first, load all the images and names in the same order

var items = shuffle([
	[
		["apple", "apples"],
		["pear", "pears"]
	],
	[
		["banana", "bananas"],
		["orange", "oranges"]
	],
	[
		["carrot", "carrots"],
		["strawberry", "strawberries"]
	],
	[
		["cake", "cakes"],
		["donut", "donuts"]
	],
	[
		["cookie", "cookies"],
		["pretzel", "pretzels"]
	],
	[
		["cupcake", "cupcakes"],
		["popsicle", "popsicles"]
	],
	// [
	// 	["pizza", "pizzas"],
	// 	["peas", "peas"]
	// ],
	[
		["dog", "dogs"],
		["cat", "cats"]
	],
	[
		["horse", "horses"],
		["cow", "cows"]
	],
	[
		["tiger", "tigers"],
		["lion", "lions"]
	],
	[
		["frog", "frogs"],
		["turtle", "turtles"]
	],
	[
		["pig", "pigs"],
		["goat", "goats"]
	],
	[
		["butterfly", "butterflies"],
		["bee", "bees"]
	],
	[
		["chicken", "chickens"],
		["duck", "ducks"]
	],
	[
		["penguin", "penguins"],
		["fish", "fish"]
	],
	[
		["giraffe", "giraffes"],
		["elephant", "elephants"]
	],
	[
		["bear", "bears"],
		["sheep", "sheep"]
	],
	[
		["bird", "birds"],
		["monkey", "monkeys"]
	],
	[
		["hat", "hats"],
		["mitten", "mittens"]
	],
	[
		["shorts", "shorts"],
		["shirt", "shirts"]
	],
	[
		["sock", "socks"],
		["shoe", "shoes"]
	],
	[
		["pencil", "pencils"],
		["crayon", "crayons"]
	],
	[
		["drum", "drums"],
		["guitar", "guitars"]
	],
	[
		["car", "cars"],
		["bus", "buses"]
	],
	// [
	// 	["stroller", "strollers"],
	// 	["bike", "bikes"]
	// ],
	[
		["plane", "planes"],
		["boat", "boats"]
	],
	[
		["train", "trains"],
		["firetruck", "firetrucks"]
	],
	[
		["plate", "plates"],
		["fork", "forks"]
	],
	[
		["cup", "cups"],
		["spoon", "spoons"]
	],
	[
		["table", "tables"],
		["chair", "chairs"]
	],
	[
		["house", "houses"],
		["barn", "barns"]
	],
	[
		["tree", "trees"],
		["flower", "flowers"]
	],
	[
		["comb", "combs"],
		["toothbrush", "toothbrushes"]
	],
	// [
	// 	["phone", "phones"],
	// 	["key", "keys"]
	// ],
	[
		["clock", "clocks"],
		["lamp", "lamps"]
	],
	[
		["scissors", "scissors"],
		["paintbrush", "paintbrushes"]
	],
	// [
	// 	["balloon", "balloons"],
	// 	["bell", "bells"]
	// ],
	[
		["present", "presents"],
		["party_hat", "party hats"]
	],
	[
		["purse", "purses"],
		["watch", "watches"]
	],
	[
		["necklace", "necklaces"],
		["dress", "dresses"]
	],
])

var trialTypes = shuffle([
	["and", "and/or"],
	["and", "and/noun"],
	["and", "or/noun"],
	["or", "and/or"],
	["or", "and/noun"],
	["or", "or/noun"],
	["noun", "and/or"],
	["noun", "and/noun"],
	["noun", "or/noun"],
	["and", "and/or"],
	["and", "and/noun"],
	["and", "or/noun"],
	["or", "and/or"],
	["or", "and/noun"],
	["or", "or/noun"],
	["noun", "and/or"],
	["noun", "and/noun"],
	["noun", "or/noun"],
	["and", "and/or"],
	["and", "and/noun"],
	["and", "or/noun"],
	["or", "and/or"],
	["or", "and/noun"],
	["or", "or/noun"],
	["noun", "and/or"],
	["noun", "and/noun"],
	["noun", "or/noun"],
	["and", "and/or"],
	["and", "and/noun"],
	["and", "or/noun"],
	["or", "and/or"],
	["or", "and/noun"],
	["or", "or/noun"],
	["noun", "and/or"],
	["noun", "and/noun"],
	["noun", "or/noun"],
])


// ---------------- MAIN EXPERIMENT ------------------
//Show the first instructions slide 
//Enter subject ID and list #
showSlide("instructions");

//The button is disabled until all of the images are preloaded
//Button is also disabled if turk is in preview mode
$("#startButton").attr("disabled", true);
if (turk.previewMode != true) {
	$("#pleaseWait").html("Please wait...");
	$(window).load(function() {
		$("#startButton").attr("disabled", false);
		$("#pleaseWait").html("");
	})
}
//Start the experiment
var experiment = {

	demo: {
		subid: turk.workerId,
		gender: [],
		age: "",
		english: "",
		nativeLanguage: "",
		comments: ""
	},

	start: function() {
		subjectID = turk.workerId;

		showSlide("startGame");
	},

	// test trials
	next: function() {
		document.body.style.background = "black";
		$("#stage").css("background-color", "black");

//get trial images and trial words
		var trialItems = items[[counter]][0][0] + "." + items[[counter]][1][0]; 
		var shuffleItems = shuffle(items[[counter]]);
		var item1 = shuffleItems[0][0];
		var item2 = shuffleItems[1][0];
		var label1 = shuffleItems[0][1];
		var label2 = shuffleItems[1][1];
		var wordType = trialTypes[counter][0];
		var imType = trialTypes[counter][1];
		var imSides = imType.split("/");

		//Name cdiv based on image type
		$('[name="left"]').attr("id", imSides[0]);
		$('[name="right"]').attr("id", imSides[1]);

		//pictures
		var pic1 = "images/" + item1 + ".png";
		var pic2 = "images/" + item2 + ".png";
		var blank = "images/blank.png";

		//books
		var leftBook
		if (imSides[0] == "or") {
			leftBook = shuffle([
				[pic1, blank],
				[pic1, blank],
				[pic2, blank],
				[pic2, blank]
			]);
		} else if (imSides[0] == "and") {
			leftBook = shuffle([
				[pic1, pic2],
				[pic1, pic2],
				[pic2, pic1],
				[pic2, pic1]
			]);
		} else if (imSides[0] == "noun") {
			leftBook = shuffle([
				[pic1, blank],
				[pic1, blank],
				[pic1, blank],
				[pic1, blank]
			]);
		}

		var rightBook
		if (imSides[1] == "or") {
			rightBook = shuffle([
				[pic1, blank],
				[pic1, blank],
				[pic2, blank],
				[pic2, blank]
			]);
		} else if (imSides[1] == "and") {
			rightBook = shuffle([
				[pic1, pic2],
				[pic1, pic2],
				[pic2, pic1],
				[pic2, pic1]
			]);
		} else if (imSides[1] == "noun") {
			rightBook = shuffle([
				[pic1, blank],
				[pic1, blank],
				[pic1, blank],
				[pic1, blank]
			]);
		}

		//fill & show left books
		$("#left1a").attr("src", leftBook[0][0]).show();
		$("#left1b").attr("src", leftBook[0][1]).show();
		$("#left2a").attr("src", leftBook[1][0]).show();
		$("#left2b").attr("src", leftBook[1][1]).show();
		$("#left3a").attr("src", leftBook[2][0]).show();
		$("#left3b").attr("src", leftBook[2][1]).show();
		$("#left4a").attr("src", leftBook[3][0]).show();
		$("#left4b").attr("src", leftBook[3][1]).show();

		//fill & show right books
		$("#right1a").attr("src", rightBook[0][0]).show();
		$("#right1b").attr("src", rightBook[0][1]).show();
		$("#right2a").attr("src", rightBook[1][0]).show();
		$("#right2b").attr("src", rightBook[1][1]).show();
		$("#right3a").attr("src", rightBook[2][0]).show();
		$("#right3b").attr("src", rightBook[2][1]).show();
		$("#right4a").attr("src", rightBook[3][0]).show();
		$("#right4b").attr("src", rightBook[3][1]).show();

		var sentence
		if (wordType == "or") {
			sentence = "I have books about " + label1 + " or " + label2 + "."
		} else if (wordType == "and") {
			sentence = "I have books about " + label1 + " and " + label2 + "."
		} else if (wordType == "noun") {
			sentence = "I have books about " + label1 + "."
		}

		//place sentence text
		$("#sentenceText").html(sentence);

		//prompt text
		var prompt = "Can you find my books?"
		$("#promptText").html(prompt);

		//Get time
		var startTime = (new Date()).getTime();

		//allow clicks 
		var clickDisabled = false;

		//show divs
		$(".cdiv").show()
		showSlide("stage");

		//when image is clicked
		$(".cdiv").on('click touchstart', function(event) {

			//get time
			var endTime = (new Date()).getTime()

			//disable clicks
			if (clickDisabled) return;
			clickDisabled = true;

			//highlight selection in red
			$(this).attr('class', 'selectedDiv');

			//collect data
			var trialNum = counter + 1;

			//what type of image did they choose
			var response = $(this).attr("id");

			//record if chosen pic was left or right
			var side = $(this).attr("name");

			var rt = endTime - startTime;

			var nowdate = getCurrentDate();

			var nowtime = getCurrentTime();

			//data
			var result_string = subjectID + "," + trialNum + "," + trialItems + "," + item1 + "," + item2 + "," +  wordType + "," + imType + "," + side + "," + response + "," + rt + "," + nowdate + "," + nowtime + "\n";

			//no data collection in demo version
			// if (subjectID == "debug") {
			// 	alert(result_string); // debug mode 
			// } else {
			// 	$.post("https://langcog.stanford.edu/cgi-bin/AEN/book-or/book-or_process.php", {
			// 		postresult_string: result_string
			// 	})
			// }

			//update counter
			counter++;

			//clear everything
			setTimeout(function() {
				//hide images and sentences
				$("#sentenceText").html("");
				$("#promptText").html("");
				$(".selectedDiv").attr('class', 'cdiv');
				$(".cdiv").hide();

				setTimeout(function() {
					if (counter == number) {
						experiment.background(); //if experiment is over, finish
					} else {
						experiment.next(); //otherwise pull up next trial
					}
				}, 500)

			}, 500)
		})
	},

	background: function() {
		document.body.style.background = "white";

		//undo spacebar disable
		window.onkeydown = function(e) {}

		$("#gender").trigger("reset");
		$("#age").trigger("reset");
		$("#langCheck").trigger("reset");
		$("#language").trigger("reset");
		$("#comments").trigger("reset");

		var gen = "";
		var ag = "";
		var eng = "";
		var lan = "";
		var comm = "";

		showSlide("askInfo");

		$("#endButton").click(function() {
			var gen = $("input:radio[name=genderButton]:checked").val();
			var ag = $("#ageRange").val();
			var eng = $("input:radio[name=languageButton]:checked").val();
			var lan = $("#primaryLanguage").val();
			var comm = $("#commentQ").val();

			if (gen === undefined | ag === undefined | lan === undefined | eng === undefined) {
				alert("Please answer all of the questions");
			} else {

				experiment.demo.gender = gen;
				experiment.demo.age = ag;
				experiment.demo.english = eng;
				experiment.demo.nativeLanguage = lan;
				experiment.demo.comments = comm;

				experiment.end();
			}
		})
	},


	end: function() {
		//turk.submit(experiment.demo, true);
		showSlide("This is a demo version - no data was collected");
	}
}