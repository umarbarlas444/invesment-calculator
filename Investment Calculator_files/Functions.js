// Set Global Variables
var theSpaces = / /g;
var theChars = /\D/g;
var theNums = /\d/g;
var newWindow;

// Swap Images
function swapImage(theAction, theID) {
if (document.getElementById) {
	if (theAction == 1) {
		document.getElementById(theID).src = "Images/Button_" + theID + "_Over.png";
		}
	if (theAction == 2) {
		document.getElementById(theID).src = "Images/Button_" + theID + "_On.png";
		}
	if (theAction == 0) {
		document.getElementById(theID).src = "Images/Button_" + theID + ".png";
		}
	}
}

// Check Phone
function checkPhone(theField) {
	theField.value = theField.value.replace(theChars, "");
if (!isNaN(theField.value) && theField.value.length == 10) {
	var Part1 = theField.value.substr(0,3);
	var Part2 = theField.value.substr(3,3);
	var Part3 = theField.value.substr(6,4);
	theField.value = Part1 + "-" + Part2 + "-" + Part3;
	return true;
	}
}

// Check Email
function checkEmail(theField) {
var theInvalidChars = /[^A-Za-z0-9._@-]/g;
	theField.value = theField.value.replace(theInvalidChars, "");
var theLength = theField.value.length;
var theAt = theField.value.indexOf("@");
var theLastAt = theField.value.lastIndexOf("@");
var thePeriod = theField.value.lastIndexOf(".");
var theDoublePeriod = theField.value.indexOf("..");
if (!(theLength < 7 || theAt < 2 || (thePeriod > theLength - 2 || thePeriod < theLength - 4) || theAt > thePeriod - 2 || theAt < theLastAt || theDoublePeriod > -1)) {
	return true;
	}
}

// Show Error
function showMessage(theID, theClass, theError) {
if (document.getElementById || document.all) {
	if (document.getElementById) {
		document.getElementById(theID).className = theClass;
		document.getElementById(theID).innerHTML = theError;
		setTimeout("self.scrollTo(0,425)", 300);
		}
	else if (document.all) {
		document.all[theID].className = theClass;
		document.all[theID].innerHTML = theError;
		setTimeout("self.scrollTo(0,425)", 300);
		}
	return false;
	}
else {
	alert(theError);
	return false;
	}
}

// Make Remote
function makeRemote(theURL, theWidth, theHeight, theOptions) {
var theCenterWidth = (window.screen.width - theWidth) / 2;
var theCenterHeight = (window.screen.height - theHeight) / 2;
if (newWindow) {
	newWindow.close();
	}
	newWindow = window.open(theURL, "Remote", "Width=" + theWidth + ",Height=" + theHeight + "," + theOptions);
	newWindow.moveTo(theCenterWidth, theCenterHeight - 50);
	newWindow.focus();
}

// Write Email
function writeEmail(theUser, theDomain, theText) {
var theAddress = theUser + "@" + theDomain;
if (!theText) {
	document.write("<A HREF=\"mailto:" + theAddress + "\">" + theAddress + "</A>");
	}
else {
	document.write("<A HREF=\"mailto:" + theAddress + "\">" + theText + "</A>");
	}
}

// Write Hidden
function writeHidden(theField, theValue) {
if (!theValue) {
	document.write("<INPUT TYPE=\"hidden\" NAME=\"" + theField + "\" VALUE=\"y\">");
	}
else {
	document.write("<INPUT TYPE=\"hidden\" NAME=\"" + theField + "\" VALUE=\"" + theValue + "\">");
	}
}

// Give Focus
function giveFocus(theForm, theField) {
	document[theForm][theField].focus();
}