// Variables

// Letras primera linea
let btnEsc = document.getElementById("btnEsc");
let btnF1 = document.getElementById("btnF1");
let btnF2 = document.getElementById("btnF2");
let btnF3 = document.getElementById("btnF3");
let btnF4 = document.getElementById("btnF4");
let btnF5 = document.getElementById("btnF5");
let btnF6 = document.getElementById("btnF6");
let btnF7 = document.getElementById("btnF7");
let btnF8 = document.getElementById("btnF8");
let btnF9 = document.getElementById("btnF9");
let btnF10 = document.getElementById("btnF10");
let btnF11 = document.getElementById("btnF11");
let btnF12 = document.getElementById("btnF12");
let btnEject = document.getElementById("btnEject");
// Letras segunda linea
let btnSignVirgulilla = document.getElementById("btnSignVirgulilla");
let btnNum1 = document.getElementById("btnNum1");
let btnNum2 = document.getElementById("btnNum2");
let btnNum3 = document.getElementById("btnNum3");
let btnNum4 = document.getElementById("btnNum4");
let btnNum5 = document.getElementById("btnNum5");
let btnNum6 = document.getElementById("btnNum6");
let btnNum7 = document.getElementById("btnNum7");
let btnNum8 = document.getElementById("btnNum8");
let btnNum9 = document.getElementById("btnNum9");
let btnNum0 = document.getElementById("btnNum0");
let btnSignRest = document.getElementById("btnSignRest");
let btnSignSum = document.getElementById("btnSignSum");
let btnDelete = document.getElementById("btnDelete");
// Letras tercer linea
let btnTab = document.getElementById("btnTab");
let btnLetterQ = document.getElementById("btnLetterQ");
let btnLetterW = document.getElementById("btnLetterW");
let btnLetterE = document.getElementById("btnLetterE");
let btnLetterR = document.getElementById("btnLetterR");
let btnLetterT = document.getElementById("btnLetterT");
let btnLetterY = document.getElementById("btnLetterY");
let btnLetterU = document.getElementById("btnLetterU");
let btnLetterI = document.getElementById("btnLetterI");
let btnLetterO = document.getElementById("btnLetterO");
let btnLetterP = document.getElementById("btnLetterP");
let btnSignOpenCurlyBrackets = document.getElementById("btnSignOpenCurlyBrackets");
let btnSignCloseCurlyBrackets = document.getElementById("btnSignCloseCurlyBrackets");
let btnSignPipeLine = document.getElementById("btnSignPipeLine");
// Letras cuarta linea
let btnCapsLock = document.getElementById("btnCapsLock");
let btnLetterA = document.getElementById("btnLetterA");
let btnLetterS = document.getElementById("btnLetterS");
let btnLetterD = document.getElementById("btnLetterD");
let btnLetterF = document.getElementById("btnLetterF");
let btnLetterG = document.getElementById("btnLetterG");
let btnLetterH = document.getElementById("btnLetterH");
let btnLetterJ = document.getElementById("btnLetterJ");
let btnLetterK = document.getElementById("btnLetterK");
let btnLetterL = document.getElementById("btnLetterL");
let btnSignDot = document.getElementById("btnSignDot");
let btnSignComma = document.getElementById("btnSignComma");
let btnReturn = document.getElementById("btnReturn");
// Letras quinta linea
let btnShift1 = document.getElementById("btnShift1");
let btnLetterZ = document.getElementById("btnLetterZ");
let btnLetterX = document.getElementById("btnLetterX");
let btnLetterC = document.getElementById("btnLetterC");
let btnLetterV = document.getElementById("btnLetterV");
let btnLetterB = document.getElementById("btnLetterB");
let btnLetterN = document.getElementById("btnLetterN");
let btnLetterM = document.getElementById("btnLetterM");
let btnSignGreaterThan = document.getElementById("btnSignGreaterThan");
let btnSignLessThan = document.getElementById("btnSignLessThan");
let btnSignInter = document.getElementById("btnSignInter");
let btnShift2 = document.getElementById("btnShift2");
// Letras sexta linea
let btnFuncfn = document.getElementById("btnFuncfn");
let btnFuncControl1 = document.getElementById("btnFuncControl1");
let btnFuncOption1 = document.getElementById("btnFuncOption1");
let btnFuncCommand1 = document.getElementById("btnFuncCommand1");
let btnSpaceBar = document.getElementById("btnSpaceBar");
let btnFuncCommand2 = document.getElementById("btnFuncCommand2");
let btnFuncOption2 = document.getElementById("btnFuncOption2");
let btnFuncleft = document.getElementById("btnFuncleft");
let btnFuncup = document.getElementById("btnFuncup");
let btnFuncdown = document.getElementById("btnFuncdown");
let btnFuncright = document.getElementById("btnFuncright");
// Contenido texto
let contentText = document.getElementById("contentText");
let tempText = "";

let mayusStatus = false;

// Onclicks
btnEsc.onclick = () => {
    // logicaA1();
    alert("Click button ESC");
};
btnF1.onclick = () => {
    // logicaA1();
    alert("Click button F1");
};
btnF2.onclick = () => {
    // logicaA2();
    alert("Click button F2");
};
btnF3.onclick = () => {
    // logicaA3();
    alert("Click button F3");
};
btnF4.onclick = () => {
    // logicaA4();
    alert("Click button F4");
};
btnF5.onclick = () => {
    // logicaA5();
    alert("Click button F5");
};
btnF6.onclick = () => {
    // logicaA6();
    alert("Click button F6");
};
btnF7.onclick = () => {
    // logicaA7();
    alert("Click button F7");
};
btnF8.onclick = () => {
    // logicaA8();
    alert("Click button F8");
};
btnF9.onclick = () => {
    // logicaA9();
    alert("Click button F9");
};
btnF10.onclick = () => {
    // logicaA10();
    alert("Click button F10");
};
btnF11.onclick = () => {
    // logicaA11();
    alert("Click button F11");
};
btnF12.onclick = () => {
    // logicaA12();
    alert("Click button F12");
};
btnEject.onclick = () => {
    // logicaA12();
    alert("Click button btnEject");
};
btnSignVirgulilla.onclick = () => {
    // logicaA12();
    alert("Click button btnSignVirgulilla");
};
btnNum1.onclick = () => {
    contentText.innerHTML = tempText + "1";
    tempText = tempText + "1";
};
btnNum2.onclick = () => {
    contentText.innerHTML = tempText + "2";
    tempText = tempText + "2";
};
btnNum3.onclick = () => {
    contentText.innerHTML = tempText + "3";
    tempText = tempText + "3";
};
btnNum4.onclick = () => {
    contentText.innerHTML = tempText + "4";
    tempText = tempText + "4";
};
btnNum5.onclick = () => {
    contentText.innerHTML = tempText + "5";
    tempText = tempText + "5";
};
btnNum6.onclick = () => {
    contentText.innerHTML = tempText + "6";
    tempText = tempText + "6";
};
btnNum7.onclick = () => {
    contentText.innerHTML = tempText + "7";
    tempText = tempText + "7";
};
btnNum8.onclick = () => {
    contentText.innerHTML = tempText + "8";
    tempText = tempText + "8";
};
btnNum9.onclick = () => {
    contentText.innerHTML = tempText + "9";
    tempText = tempText + "9";
};
btnNum0.onclick = () => {
    contentText.innerHTML = tempText + "0";
    tempText = tempText + "0";
};
btnSignRest.onclick = () => {
    // logicaA12();
    alert("Click button btnSignRest");
};
btnSignSum.onclick = () => {
    // logicaA12();
    alert("Click button btnSignSum");
};
btnDelete.onclick = () => {
    // logicaA12();
    // alert("Click button btnDelete");
    tempText = tempText.slice(0, -1);
    contentText.innerHTML = tempText;
};
btnTab.onclick = () => {
    // logicaA12();
    alert("Click button btnTab");
};
btnLetterQ.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "Q";
        tempText = tempText + "Q";
    } else {
        contentText.innerHTML = tempText + "q";
        tempText = tempText + "q";
    }
};
btnLetterW.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "W";
        tempText = tempText + "W";
    } else {
        contentText.innerHTML = tempText + "w";
        tempText = tempText + "w";
    }
};
btnLetterE.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "E";
        tempText = tempText + "E";
    } else {
        contentText.innerHTML = tempText + "e";
        tempText = tempText + "e";
    }
};
btnLetterR.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "R";
        tempText = tempText + "R";
    } else {
        contentText.innerHTML = tempText + "r";
        tempText = tempText + "r";
    }
};
btnLetterT.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "T";
        tempText = tempText + "T";
    } else {
        contentText.innerHTML = tempText + "t";
        tempText = tempText + "t";
    }
};
btnLetterY.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "Y";
        tempText = tempText + "Y";
    } else {
        contentText.innerHTML = tempText + "y";
        tempText = tempText + "y";
    }
};
btnLetterU.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "U";
        tempText = tempText + "U";
    } else {
        contentText.innerHTML = tempText + "u";
        tempText = tempText + "u";
    }
};
btnLetterI.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "I";
        tempText = tempText + "I";
    } else {
        contentText.innerHTML = tempText + "i";
        tempText = tempText + "i";
    }
};
btnLetterO.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "O";
        tempText = tempText + "O";
    } else {
        contentText.innerHTML = tempText + "o";
        tempText = tempText + "o";
    }
};
btnLetterP.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "P";
        tempText = tempText + "P";
    } else {
        contentText.innerHTML = tempText + "p";
        tempText = tempText + "p";
    }
};
btnSignOpenCurlyBrackets.onclick = () => {
    // logicaA12();
    alert("Click button btnSignOpenCurlyBrackets");
};
btnSignCloseCurlyBrackets.onclick = () => {
    // logicaA12();
    alert("Click button btnSignCloseCurlyBrackets");
};
btnSignPipeLine.onclick = () => {
    // logicaA12();
    alert("Click button btnSignPipeLine");
};
btnCapsLock.onclick = () => {
    // logicaA12();
    // alert("Click button btnCapsLock");
    // mayusStatus = (mayusStatus == false) ? true : false;
    // let statusLightOn = document.getElementById("light-turn-on");
    // let statusLightOff = document.getElementById("light-turn-off");
    if (mayusStatus == false) {
        mayusStatus = true;
        document.getElementById("light-turn-on").style.display = "block";
        document.getElementById("light-turn-off").style.display = "none";
    } else {
        mayusStatus = false;
        document.getElementById("light-turn-on").style.display = "none";
        document.getElementById("light-turn-off").style.display = "block";
    }

};
btnLetterA.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "A";
        tempText = tempText + "A";
    } else {
        contentText.innerHTML = tempText + "a";
        tempText = tempText + "a";
    }
};
btnLetterS.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "S";
        tempText = tempText + "S";
    } else {
        contentText.innerHTML = tempText + "s";
        tempText = tempText + "s";
    }
};
btnLetterD.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "D";
        tempText = tempText + "D";
    } else {
        contentText.innerHTML = tempText + "d";
        tempText = tempText + "d";
    }
};
btnLetterF.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "F";
        tempText = tempText + "F";
    } else {
        contentText.innerHTML = tempText + "f";
        tempText = tempText + "f";
    }
};
btnLetterG.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "G";
        tempText = tempText + "G";
    } else {
        contentText.innerHTML = tempText + "g";
        tempText = tempText + "g";
    }
};
btnLetterH.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "H";
        tempText = tempText + "H";
    } else {
        contentText.innerHTML = tempText + "h";
        tempText = tempText + "h";
    }
};
btnLetterJ.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "J";
        tempText = tempText + "J";
    } else {
        contentText.innerHTML = tempText + "j";
        tempText = tempText + "j";
    }
};
btnLetterK.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "K";
        tempText = tempText + "K";
    } else {
        contentText.innerHTML = tempText + "k";
        tempText = tempText + "k";
    }
};
btnLetterL.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "L";
        tempText = tempText + "L";
    } else {
        contentText.innerHTML = tempText + "l";
        tempText = tempText + "l";
    }
};
btnSignDot.onclick = () => {
    // logicaA12();
    alert("Click button btnSignDot");
};
btnSignComma.onclick = () => {
    // logicaA12();
    alert("Click button btnSignComma");
};
btnReturn.onclick = () => {
    contentText.innerHTML = tempText + "<br>";
    tempText = tempText + "<br>";
};
btnShift1.onclick = () => {
    // logicaA12();
    alert("Click button btnReturn");
};
btnLetterZ.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "Z";
        tempText = tempText + "Z";
    } else {
        contentText.innerHTML = tempText + "z";
        tempText = tempText + "z";
    }
};
btnLetterX.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "X";
        tempText = tempText + "X";
    } else {
        contentText.innerHTML = tempText + "x";
        tempText = tempText + "x";
    }
};
btnLetterC.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "C";
        tempText = tempText + "C";
    } else {
        contentText.innerHTML = tempText + "c";
        tempText = tempText + "c";
    }
};
btnLetterV.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "V";
        tempText = tempText + "V";
    } else {
        contentText.innerHTML = tempText + "v";
        tempText = tempText + "v";
    }
};
btnLetterB.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "B";
        tempText = tempText + "B";
    } else {
        contentText.innerHTML = tempText + "b";
        tempText = tempText + "b";
    }
};
btnLetterN.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "N";
        tempText = tempText + "N";
    } else {
        contentText.innerHTML = tempText + "n";
        tempText = tempText + "n";
    }
};
btnLetterM.onclick = () => {
    if (mayusStatus == true) {
        contentText.innerHTML = tempText + "M";
        tempText = tempText + "M";
    } else {
        contentText.innerHTML = tempText + "m";
        tempText = tempText + "m";
    }
};
btnSignGreaterThan.onclick = () => {
    // logicaA12();
    alert("Click button btnSignGreaterThan");
};
btnSignLessThan.onclick = () => {
    // logicaA12();
    alert("Click button btnSignLessThan");
};
btnSignInter.onclick = () => {
    // logicaA12();
    alert("Click button btnSignInter");
};
btnShift2.onclick = () => {
    // logicaA12();
    alert("Click button btnShift2");
};
btnFuncControl1.onclick = () => {
    // logicaA12();
    alert("Click button btnFuncControl1");
};
btnFuncOption1.onclick = () => {
    // logicaA12();
    alert("Click button btnFuncOption1");
};
btnFuncCommand1.onclick = () => {
    // logicaA12();
    alert("Click button btnFuncCommand1");
};
btnSpaceBar.onclick = () => {
    contentText.innerHTML = tempText + " ";
    tempText = tempText + " ";
};
btnFuncCommand2.onclick = () => {
    // logicaA12();
    alert("Click button btnFuncCommand2");
};
btnFuncOption2.onclick = () => {
    // logicaA12();
    alert("Click button btnFuncOption2");
};
btnFuncleft.onclick = () => {
    // logicaA12();
    alert("Click button btnFuncleft");
};
btnFuncup.onclick = () => {
    // logicaA12();
    alert("Click button btnFuncup");
};
btnFuncdown.onclick = () => {
    // logicaA12();
    alert("Click button btnFuncdown");
};
btnFuncright.onclick = () => {
    // logicaA12();
    alert("Click button btnFuncright");
};

