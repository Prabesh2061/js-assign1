
var synth = window.speechSynthesis;
var firstButton = document.querySelector('.first');
var secondButton = document.querySelector('.second');
var thirdButton = document.querySelector('.third');
var fourthButton = document.querySelector('.fourth');
var fifthButton = document.querySelector('.fifth');
var sen = document.querySelector(".sen");
var reset = document.querySelector(".reset");
var story = document.querySelector(".story");

var nouns = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var noun = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

var buttonList = [nouns, verbs, adjectives, noun, settings];
buttonList.forEach((e, i) => {
	let item = document.querySelector(`.item${i+1}`);
	e.forEach(el => {
		let li = document.createElement("li");
		li.textContent = el;
		item.appendChild(li);
	});
});

var sentence = [];
let count = {
	count1: 0,
	count2: 0,
	count3: 0,
	count4: 0,
	count5: 0
};

function speakNow(text) {
	var utterThis = new SpeechSynthesisUtterance(text);
	synth.speak(utterThis);
}

function countChecker(num){
	var countIncrement = ++count[`count${num}`];
	if(countIncrement>4){
		count[`count${num}`] = 0;
	}
}

function makeSentence(arr, num){
	// method to check the if same button is pressed
	let items = document.querySelector(`item${num}`);
	if(sentenceChecker(arr)){
		for (let i = 0; i < sentence.length; i++) {
			if(arr.includes(sentence[i])){
				sentence[i] = arr[num];
			}
		}
	}else{
		sentence.push(arr[num]);
	}
}

function sentenceChecker(arr){
	for (let i = 0; i < arr.length; i++) {
		if(sentence.includes(arr[i])){
			return true;
		}
	}
	return false;
}

function crossWords(num){
	let items = document.querySelector(`.item${num}`);
	items.forEach(e => {
		
	});
}

firstButton.onclick = function() {
	speakNow(nouns[count.count1]);
	makeSentence(nouns, count.count1);
	countChecker(1);
}

secondButton.onclick = function() {
	speakNow(verbs[count.count2]);
	makeSentence(verbs, count.count2);
	countChecker(2);
}

thirdButton.onclick = function() {
	speakNow(adjectives[count.count3]);
	makeSentence(adjectives, count.count3);
	countChecker(3);
}

fourthButton.onclick = function() {
	speakNow(noun[count.count4]);
	makeSentence(noun, count.count4);
	countChecker(4);
}

fifthButton.onclick = function() {
	speakNow(settings[count.count5]);
	makeSentence(settings, count.count5);
	countChecker(5);
}

sen.onclick = function() {
	speakNow(sentence);
}

story.onclick = function(){
	var wholeStory = [];
	buttonList.forEach(e => {
		 wholeStory.push(e[Math.floor(Math.random() * e.length)]);
	});
	speakNow(wholeStory);
}

reset.onclick = function(){
	count = {
		count1: 0,
		count2: 0,
		count3: 0,
		count4: 0,
		count5: 0
	};
	sentence.length = 0;
}