let btn = document.getElementById('btn');
let lnk = document.getElementById('lnk');
let txt = document.getElementById('txt');
let input = document.querySelector('input');
let log = document.getElementById('log');

btn.addEventListener('click', buttonClicked);
function buttonClicked(ev) {
  console.log(ev.type, ev.target, ev.currentTarget);
}
lnk.addEventListener('click', ev => {
  ev.preventDefault();
  console.log(ev.type, ev.target);
});
// function linkClicked(ev) {
//         ev.preventDefault();
//   console.log(ev.type, ev.target, ev.currentTarget);
// }

// On Input
txt.addEventListener('input', ev => {
  console.log(ev.type, ev.target.value);
});

// Change Event
txt.addEventListener('change', ev => {
  console.log(ev.type, ev.target.value);
});

// blur Event
txt.addEventListener('blur', ev => {
  console.log(ev.type);
});

// focus Event
txt.addEventListener('focus', ev => {
  console.log(ev.type);
});

// On abort
window.onabort = function() {
  alert('Load aborted.');
};

// Display date
function displayDate() {
  document.getElementById('demo').innerHTML = Date();
}

// Double click
document.ondblclick = logDoubleClick;

function logDoubleClick(e) {
  log.textContent = `Position: (${e.clientX}, ${e.clientY})`;
}

// let log = document.getElementById('log');

// document.ondblclick = logDoubleClick;

// function logDoubleClick(e) {
//   log.textContent = `Position: (${e.clientX}, ${e.clientY})`;
// }

// On Select
function logSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );

  log.textContent = `You selected: ${selection}`;
}

const textarea = document.querySelector('textarea');
textarea.onselect = logSelection;
// myDiv.addEventListener('click', doSomething);

// function doSomething() {
//   console.log(ev.type); //click
//   console.log(ev.target);
//   return 7;
// }
