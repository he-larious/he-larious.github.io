// Total movie seats
let hrSeats = 12;
let minSeats = 60;
let secSeats = 60;

// Seats filled
let hrFilled = 0;
let minFilled = 0;
let secFilled = 0;

let img;
let formattedDate;
let dayOfWeek;
let month;
let dayOfMonth;

function preload() {
    img = loadImage('wicked.jpg');
}

// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", 
                "September", "October", "November", "December"];

    let currentDate = new Date();

    dayOfWeek = days[currentDate.getDay()];
    month = months[currentDate.getMonth()];
    dayOfMonth = currentDate.getDate();
}

// draw() is called 60 times per second
function draw() {
    let hr = hour() % 12;
    if (hr === 0) {
        hr = 12; 
    }
    let min = minute();
    let sec = second();

    hrFilled = hr;
    minFilled = min;
    secFilled = sec;

    formattedDate = `${dayOfWeek}, ${month} ${dayOfMonth}`;

    // Print minute value to console for every minute
    if (sec === 0) {
        console.log("Minute: " + min);
    }

    background(0);

    drawTheaterSection(262, 230, hrSeats, hrFilled);
    drawTheaterSection(262, 284, minSeats, minFilled);
    drawTheaterSection(262, 430, secSeats, secFilled);

    drawScreen(100, 165);
    drawMovieDetails();
}

function drawTheaterSection(startX, startY, totalSeats, filledSeats) {
    let seatSize = 20;
    let seatsPerRow = 12;

    for (let i = 0; i < totalSeats; i++) {
        let row = floor(i / seatsPerRow);
        let col = i % seatsPerRow;

        let xPos = startX + col * (seatSize + 3);
        let yPos = startY + row * (seatSize + 3);

        if (i < filledSeats) {
            fill(255, 102, 178);    // Pink for filled seats
        }
        else {
            fill(0, 153, 0);  // Green for unfilled seats
        }

        rect(xPos, yPos, seatSize, seatSize, 7);
    }
}

function drawScreen(x, y) {
    // Screen
    fill(100);
    rect(x, y, 600, 30);

    // Text
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Screen", x + 300, y + 16);
}

function drawMovieDetails() {
    image(img, 250, 25, 0.1 * img.width, 0.1 * img.height);

    fill(255);
    textSize(20);
    textStyle(BOLD);
    textAlign(LEFT);
    text("Wicked (2024)", 350, 60);

    textSize(14);
    textStyle(NORMAL);
    text("Showtime: " + formattedDate, 350, 90);
    text("Theater: Regal Times Square", 350, 110);
}