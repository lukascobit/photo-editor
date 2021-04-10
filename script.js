const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('db');
const upladFile = document.getElementById('input');
const revertBtn = document.getElementById('rf');