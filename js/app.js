
var synth = window.speechSynthesis;
var speakButton = document.querySelector('button');
var firstButton = document.querySelector('.first');
var secondButton = document.querySelector('.second');
var thirdButton = document.querySelector('.third');
var fourthButton = document.querySelector('.fourth');
var fifthButton = document.querySelector('.fifth');
var sen = document.querySelector(".sen");

var nouns = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var noun = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

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

function makeSentence(word){
	sentence.push(word);
}

firstButton.onclick = function() {
	firstWord = nouns[count.count1];
	speakNow(firstWord);
	makeSentence(firstWord);
	countChecker(1);
}

secondButton.onclick = function() {
	secondWord = verbs[count.count2];
	speakNow(secondWord);
	makeSentence(secondWord);
	countChecker(2);
}

thirdButton.onclick = function() {
	thirWord = adjectives[count.count3];
	speakNow(thirWord);
	makeSentence(thirWord);
	countChecker(3);
}

fourthButton.onclick = function() {
	fourthWord = noun[count.count4];
	speakNow(fourthWord);
	makeSentence(fourthWord);
	countChecker(4);
}

fifthButton.onclick = function() {
	fifthWord = settings[count.count5];
	speakNow(fifthWord);
	makeSentence(fifthWord);
	countChecker(5);
}

sen.onclick = function() {
	speakNow(sentence);
}
