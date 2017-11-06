

// let state = {
//     num1: '',
//     num2: '',
//     insertingNum1: true,
//     userCommand: undefined
// }
let state = {
    num: '',
    sum: 0,
    lastCommand: '',
}


function number(num) {
        state.num = state.num + num;
        document.getElementById('answer').innerText = state.num;    
}

function command(command) {
    if(command === 'pluss') {
       state.sum += parseInt(state.num); 
       state.lastCommand = command;
    }
    if(command === 'miinus') {
        state.sum -= parseInt(state.num); 
        state.lastCommand = command;
     }
     if(command === 'jaga') {
        state.sum /= parseInt(state.num); 
        state.lastCommand = command;
     }
     if(command === 'korruta') {
        state.sum *= parseInt(state.num);
        state.lastCommand = command; 
     }

    state.num = '';
    console.log(state.sum);

    // kui korrutad, siis sum * num
    // kui jagad, siis sum / num

    // lõpuks state.num = ''
}



function result() {
    command(state.lastCommand);
    document.getElementById('answer').innerText = state.sum;
}

function reset() {
    console.log('hello');
    state = {
        num: '',
        sum: '',
        insertingNum1: true,
        userCommand: undefined
    }
    document.getElementById('answer').innerText = '';
}

window.addEventListener('keydown', function test(event) {
    console.log('inside keydown');
    if(event.keyCode === 49) {
        number(1)
        document.getElementById('1').style.backgroundColor = 'rgba(239, 239, 239, 0.43)';
    };
    if(event.keyCode === 50) {
        number(2)
         document.getElementById('2').style.backgroundColor = 'rgba(239, 239, 239, 0.43)';
    };     
    if(event.keyCode === 51) {
        number(3)
        document.getElementById('3').style.backgroundColor = 'rgba(239, 239, 239, 0.43)';
    };
    if(event.keyCode === 52) {
        number(4)
        document.getElementById('4').style.backgroundColor = 'rgba(239, 239, 239, 0.43)';
    };
    if(event.keyCode === 53) {
        number(5)
        document.getElementById('5').style.backgroundColor = 'rgba(239, 239, 239, 0.43)';
    };
    if(event.keyCode === 54) {
        number(6)
        document.getElementById('6').style.backgroundColor = 'rgba(239, 239, 239, 0.43)';
    };
    if(event.keyCode === 55) {
        number(7)
        document.getElementById('7').style.backgroundColor = 'rgba(239, 239, 239, 0.43)';
    };
    if(event.keyCode === 56) {
        number(8)
        document.getElementById('8').style.backgroundColor = 'rgba(239, 239, 239, 0.43)';
    };    
    if(event.keyCode === 57) {
        number(9)
        document.getElementById('9').style.backgroundColor = 'rgba(239, 239, 239, 0.43)';
    };
    if(event.keyCode === 48) {
        number(0)
        document.getElementById('0').style.backgroundColor = 'rgba(239, 239, 239, 0.43)';
    };
    if(event.keyCode === 220) { 
        command('korruta')
        document.getElementById('t3').style.backgroundColor = 'rgba(239, 239, 239, 0.43)';
    };
    if(event.keyCode === 189) {
        command('miinus')
        document.getElementById('t2').style.backgroundColor = 'rgba(239, 239, 239, 0.43)';
    };
    if(event.keyCode === 191) { 
        command('pluss')
        document.getElementById('t1').style.backgroundColor = 'rgba(239, 239, 239, 0.43)';
    };
    if(event.keyCode === 186) { 
        command('jaga')
        document.getElementById('t6').style.backgroundColor = 'rgba(239, 239, 239, 0.43)';
    };
    if(event.keyCode === 13) { 
        result()
        document.getElementById('t5').style.backgroundColor = 'rgba(239, 239, 239, 0.43)';
    };
    if(event.keyCode === 8) { 
        removeLastNumber()
    };
    if(event.keyCode === 67) { 
        reset()
        document.getElementById('t4').style.backgroundColor = 'rgba(239, 239, 239, 0.43)';
    };
});

window.addEventListener('keyup', function test2(event) {
    console.log(event.target);
    console.log('inside keyup');
    if(event.keyCode === 49) document.getElementById('1').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    if(event.keyCode === 50) document.getElementById('2').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    if(event.keyCode === 51) document.getElementById('3').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    if(event.keyCode === 52) document.getElementById('4').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    if(event.keyCode === 53) document.getElementById('5').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    if(event.keyCode === 54) document.getElementById('6').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    if(event.keyCode === 55) document.getElementById('7').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    if(event.keyCode === 56) document.getElementById('8').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    if(event.keyCode === 57) document.getElementById('9').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    if(event.keyCode === 48) document.getElementById('0').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    if(event.keyCode === 220) document.getElementById('t3').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    if(event.keyCode === 189) document.getElementById('t2').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    if(event.keyCode === 191) document.getElementById('t1').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    if(event.keyCode === 186) document.getElementById('t6').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    if(event.keyCode === 13) document.getElementById('t5').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    if(event.keyCode === 67) document.getElementById('t4').style.backgroundColor = 'rgba(255, 255, 255, 0)';

});

function removeLastNumber() {
    

    if(state.num1.length > 0) { 
        console.log(state.num1)
        state.num1 = state.num1.slice(0, state.num1.length - 1)
        console.log(state.num1)
        document.getElementById('answer').innerText = state.num1;
    }
    // if(state.insertingNum1) {
    //     state.num2 = state.num2.slice(0, state.num2.length -1);
    //     document.getElementById('answer').innerText = state.num2;
    // }
    
}
// clear function
    // userCommand = command;
    // insertingNum1 = false;
function resetNumber() {
    num = '';
}