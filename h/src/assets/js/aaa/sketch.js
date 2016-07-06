// this uses p5.js
var canvasX = 2000;
var canvasY = 1200;
var sel; //this is used for our selection 
var data; // this is gonna be our json variable
var circle = [];
var curtext = ""
var input, button;
var buttonPressed;
var section_display;
var checkbox;
var boxChecked;
var listingbox;
var listingChecked;

////
var stubpurple;
var stubred;
var stubteal;
var stubblue;
var stublightgreen;

  /////
var totalListing = [];
/////
var img;

////
var temparr = [];
var jsonfile;
/////////////////
function preload() { // preloading json file
  jsonfile = "freeformatter-out.json";
  data = loadJSON(jsonfile)
  fontHL = loadFont("Interstate-Regular.ttf");
  img = loadImage("stubhub_logo.png");
}
///////////////////
function mySelectedEvent() {
  section_display = sel.value();
}

function myTypedEvent() {
  section_display = input.value();
}
///////createCheckbox////
function myCheckedEvent() {
  if (this.checked()) {
    boxChecked = true;
  } else {
    boxChecked = false;
  }
}

function listingEvent() {
  if (this.checked()) {
    listingChecked = true;
  } else {
    listingChecked = false;
  }
}



function RowInfo() {
  this.first = 10000;
  this.last = -1;
}
/////////
function createLegend() { //THE LEGEND RETURNS

  this.aisleColour = "green";

  this.killColour = "red";
  this.obstructedColour = "orange";

  this.x = 1000;
  this.y = 15;
  this.rad = 20;
  this.lx1 = 800;
  this.lx2 = lx1 + 200;
  this.ly = 20
   fill('black');
   textFont(fontHL);
  text('Price',220,24);
  text('Listings',290,24);
    ////// stubhub logo /////
  image(img, 400, 0, img.width / 2.5, img.height / 2.5);
  //// NORMAL SEATS
  fill(stubpurple);
  ellipse(this.lx1, this.ly, this.rad, this.rad);
  textFont(fontHL);
  fill("black");
  textSize(20);
  text("Normal Seats", this.lx1 + 20, this.ly + 5);
  //////////////////////////////////
  ///Aisle
  fill(stublightgreen);
  noStroke();
  ellipse(this.lx1, this.ly + 20, this.rad, this.rad);
  fill("black");
  textSize(20);
  text("Aisle", this.lx1 + 20, this.ly + 25);
  ///////  
  ///wheelchair
  fill(stubblue);
  noStroke();
  ellipse(this.lx1, this.ly + 40, this.rad, this.rad);
  fill("black");
  textSize(20);
  text("Wheelchair", this.lx1 + 20, this.ly + 45);
  /////  
  //// kill
  fill(stubred);
  noStroke();
  ellipse(this.lx1, this.ly + 60, this.rad, this.rad);
  fill("black");
  textSize(20);
  text("Kill", this.lx1 + 20, this.ly + 65);
  /////
  /// obstructed
  fill(this.obstructedColour);
  noStroke();
  ellipse(this.lx1, this.ly + 80, this.rad, this.rad);
  fill("black");
  textSize(20);
  text("Obstructed", this.lx1 + 20, this.ly + 85);
  ////////
  ///aisle wheelchair
  fill(stublightgreen); //AISLE_WHEELCHAIR
  noStroke();
  arc(this.lx2, this.ly, this.rad, this.rad, HALF_PI, PI + HALF_PI);
  fill(stubblue);
  noStroke();
  arc(this.lx2, this.ly, this.rad, this.rad, PI + HALF_PI, HALF_PI);
  fill("black");
  textSize(20);
  text("Aisle Wheelchair", this.lx2 + 20, this.ly + 5);
  ////////
  //aisle obstructed
  fill(stublightgreen); //AISLE_OBSTRUCTED
  noStroke();
  arc(this.lx2, this.ly + 20, this.rad, this.rad, HALF_PI, PI + HALF_PI);
  fill(this.obstructedColour);
  noStroke();
  arc(this.lx2, this.ly + 20, this.rad, this.rad, PI + HALF_PI, HALF_PI);
  fill("black");
  textSize(20);
  text("Aisle Obstructed", this.lx2 + 20, this.ly + 25);
  /////
  //aisle kill
  fill(stublightgreen); //AISLE_KILL
  noStroke();
  arc(this.lx2, this.ly + 40, this.rad, this.rad, HALF_PI, PI + HALF_PI);
  fill(stubred);
  noStroke();
  arc(this.lx2, this.ly + 40, this.rad, this.rad, PI + HALF_PI, HALF_PI);
  fill("black");
  textSize(20);
  text("Aisle Kill", this.lx2 + 20, this.ly + 45);
  ////////
  //wheelchair kill
  fill(stubblue); //Wheelchair_kill
  noStroke();
  arc(this.lx2, this.ly + 60, this.rad, this.rad, HALF_PI, PI + HALF_PI);
  fill(stubred);
  noStroke();
  arc(this.lx2, this.ly + 60, this.rad, this.rad, PI + HALF_PI, HALF_PI);
  fill("black");
  textSize(20);
  text("Wheelchair Kill", this.lx2 + 20, this.ly + 65);
  ///////
  //aisle wheelchair kill
  fill(stublightgreen); //AISLE_Wheelchair_Kill
  noStroke();
  arc(this.lx2, this.ly + 80, this.rad, this.rad, HALF_PI + QUARTER_PI, PI + HALF_PI);
  fill(stubblue); //AISLE_Wheelchair_Kill
  noStroke();
  arc(this.lx2, this.ly + 80, this.rad, this.rad, QUARTER_PI, HALF_PI + QUARTER_PI);
  fill(stubred); //AISLE_Wheelchair_Kill
  noStroke();
  arc(this.lx2, this.ly + 80, this.rad, this.rad, PI + HALF_PI, QUARTER_PI);
  fill("black");
  textSize(20);
  text("Aisle Wheelchair Kill", this.lx2 + 20, this.ly + 85);
  //////
}

function item(input) {

  /////////////////////////////// json configuration
  this.venue_config_id = input.venue_config_id;
  this.venue_name = input.venue_name;
  this.listing_id = input.listing_id;
  this.section_id = input.section_id;
  this.section_name = input.section_name;
  this.zone_id = input.zone_id;
  this.zone_name = input.zone_name;
  this.row_name = input.row_name;
  this.row_order = input.row_order;
  this.seat_name = input.seat_name;
  this.seat_order = input.seat_order;
  this.seat_attributes = input.seat_attributes;
  this.price = input.price;
  ///////////////////////////////
  this.x_offset = 0;
  this.y_offset = 120;
  ///////////////////////////////////
  this.rad = 25;
  this.x = this.seat_order * 30 + this.x_offset;
  this.y = this.row_order * 30 + this.y_offset;
  ///////////////////////////////////

  this.aisleColour = "green";
  

  this.obstructedColour = "orange";
  this.legendx = 100;
  this.legendy = 100;

  this.display = function() {
    if (this.seat_attributes == 0) {
      fill(stubpurple);
      noStroke();
      ellipse(this.x, this.y, this.rad, this.rad);
    } else if (this.seat_attributes == "Aisle") {
      fill(stublightgreen);
      noStroke();
      ellipse(this.x, this.y, this.rad, this.rad);
    } else if (this.seat_attributes == "Wheelchair") {
      fill(stubblue);
      noStroke();
      ellipse(this.x, this.y, this.rad, this.rad);
    } else if (this.seat_attributes == "Kill") {
      fill(stubred);
      noStroke();
      ellipse(this.x, this.y, this.rad, this.rad);
    } else if (this.seat_attributes == "Obstructed") {
      fill(this.obstructedColour);
      noStroke();
      ellipse(this.x, this.y, this.rad, this.rad);
    } else if (this.seat_attributes == "Aisle Wheelchair") {
      fill(stublightgreen); //AISLE_WHEELCHAIR
      noStroke();
      arc(this.x, this.y, this.rad, this.rad, HALF_PI, PI + HALF_PI);
      fill(stubblue);
      noStroke();
      arc(this.x, this.y, this.rad, this.rad, PI + HALF_PI, HALF_PI);
    } else if (this.seat_attributes == "Aisle Obstructed") {
      fill(stublightgreen); //AISLE_OBSTRUCTED
      noStroke();
      arc(this.x, this.y, this.rad, this.rad, HALF_PI, PI + HALF_PI);
      fill(this.obstructedColour);
      noStroke();
      arc(this.x, this.y, this.rad, this.rad, PI + HALF_PI, HALF_PI);
    } else if (this.seat_attributes == "Aisle Kill") {
      fill(stublightgreen); //AISLE_KILL
      noStroke();
      arc(this.x, this.y, this.rad, this.rad, HALF_PI, PI + HALF_PI);
      fill(stubred);
      noStroke();
      arc(this.x, this.y, this.rad, this.rad, PI + HALF_PI, HALF_PI);
    } else if (this.seat_attributes == "Wheelchair Kill") {
      fill(stubblue); //Wheelchair_kill
      noStroke();
      arc(this.x, this.y, this.rad, this.rad, HALF_PI, PI + HALF_PI);
      fill(stubred);
      noStroke();
      arc(this.x, this.y, this.rad, this.rad, PI + HALF_PI, HALF_PI);
    } else if (this.seat_attributes == "Aisle Wheelchair Kill") {
      fill(stublightgreen); //AISLE_Wheelchair_Kill
      noStroke();
      arc(this.x, this.y, this.rad, this.rad, HALF_PI + QUARTER_PI, PI + HALF_PI);
      fill(stubblue); //AISLE_Wheelchair_Kill
      noStroke();
      arc(this.x, this.y, this.rad, this.rad, QUARTER_PI, HALF_PI + QUARTER_PI);
      fill(stubred); //AISLE_Wheelchair_Kill
      noStroke();
      arc(this.x, this.y, this.rad, this.rad, PI + HALF_PI, QUARTER_PI);
    }

  }

  this.hover = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    var boxHeight = 150;
    var boxWidth = 400
    if (d < (this.rad / 2)) {
      //  this.colour= color(random(255),random(255),random(255));
      fill(color(50, 55, 100));
      rect(pmouseX, pmouseY, boxWidth, boxHeight);
      textSize(20);
      fill("red");
      text("seat order: " + this.seat_order, mouseX + 20, mouseY + 20, boxWidth, 20);
      text("row order: " + this.row_order, mouseX + 20, mouseY + 40, boxWidth, 20);
      text("seat attributes: " + this.seat_attributes, mouseX + 20, mouseY + 60, boxWidth, 20);
      text("listing ID: " + this.listing_id, mouseX + 20, mouseY + 80, boxWidth, 20);
    }
  }
  this.blended = function() {
  
    if (boxChecked == true) {
      var prev = 0;
      /////// price listing here//////
      if (this.listing_id != 0) {
        fill(color(50, 55, 100));
        //rect(100,100,700,700);
        rect(this.x - this.rad / 2, this.y - this.rad / 2, this.rad, this.rad)
        fill(stublightgreen);
        textSize(16);
        text(round(this.price), this.x - (this.rad / 2), this.y + (this.rad / 2));
      }
    }
  }
  this.listing = function() {
    var curlisting;
    


    var colourArr = [stubpurple, stubred];
    // if ((this.listing_id !=0) && totalListing.indexOf(this.listing_id)==-1){
    //   totalListing.push(this.listing_id)

    // }
    if (this.listing_id != 0) {
      if (this.listing_id % 2 == 0) {
        fill(stubred);
        //rect(100,100,700,700);
        rect(this.x - this.rad / 2, this.y - this.rad / 2, this.rad, this.rad);
        fill("white");
        textSize(16);
        text(round(this.price), this.x - (this.rad / 2), this.y + (this.rad / 2));
      } else {
        fill(stubpurple);
        //rect(100,100,700,700);
        rect(this.x - this.rad / 2, this.y - this.rad / 2, this.rad, this.rad);
        fill("white");
        textSize(16);
        text(round(this.price), this.x - (this.rad / 2), this.y + (this.rad / 2));
      }
    }
  }
 
}


function setup() {
  frameRate(50);
  var c = createCanvas(canvasX, canvasY);
  c.drop(gotFile);
  
  /////
  stubpurple = color('#2f0466');
  stubred = color('#de3480');
  stubteal = color('#00b8b8');
  stubblue = color('#0673ca');
  stublightgreen = color('#0ce043');
  
  
  //////
  checkbox = createCheckbox('', false);
  checkbox.position(200, 10);
  checkbox.changed(myCheckedEvent);
  ///////
  listingbox = createCheckbox('', false);
  listingbox.position(270, 10);
  listingbox.changed(listingEvent);
  //////////
 
  ///////

  /////
  //// selection stuff
  sel = createSelect();
  sel.position(10, 10);
  cur = "Section Listings"
  sel.option(cur);

  for (i = 0; i < data.length; i++) {
    if (temparr.indexOf(data[i].section_name) == -1) {
      temparr.push(data[i].section_name);
    }
  }
  temparr = sort(temparr, temparr.length);
  for (i = 0; i < temparr.length; i++) {
    if (temparr[i] != cur) {
      cur = temparr[i];
      sel.option(cur);
    }
  }



  ////////////
  //// populate data
  for (i = 0; i < data.length; i++) {
    circle.push(new item(data[i]));
  }
  ////////
  input = createInput();
  input.position(10, 35);

  button = createButton('search');
  button.position(150, 35);
  //
}

function gotFile(file){
  var droppedjson= loadJSON(file.data);
  jsonfile= droppedjson;
  
}

function keyPressed() {
  if ((keyCode === ENTER) || (keyCode === RETURN)) {
    myTypedEvent();
  }
}

function draw() {
  background('white');
  createLegend();
  sel.changed(mySelectedEvent);
  
  button.mousePressed(myTypedEvent);
 
  var sectionRowsInfo = []
  var section = [];

  for (i = 0; i < circle.length; i++) {
    if (circle[i].section_name==section_display) {
      
      if (matchAll(section_display,"Lower Outside Center") == "Lower Outside Center") {
        var origin = circle[i].seat_order*30 +circle[i].x_offset;
        if ((int(circle[i].section_id) == 29907 || int(circle[i].section_id == 29913)) && circle[i].x == origin) { //left
          circle[i].x = 1000 - circle[i].x;
        }
        // circle[i].display();
      }
      else {
        while (data[i].row_order > sectionRowsInfo.length) {
          sectionRowsInfo.push(new RowInfo());
        }
        if (sectionRowsInfo[int(data[i].row_order)-1].first > int(data[i].seat_order)) {
          sectionRowsInfo[int(data[i].row_order)-1].first = int(data[i].seat_order);
        }
        if (sectionRowsInfo[int(data[i].row_order)-1].last < int(data[i].seat_order)) {
          sectionRowsInfo[int(data[i].row_order)-1].last = int(data[i].seat_order);
        }
      }
      section.push(circle[i]);
    }
  }

  for (i = 0; i < section.length; i++) {
    if (int(section[i].zone_id) != 45644) {
      var rowLength = sectionRowsInfo[section[i].row_order-1].last - sectionRowsInfo[section[i].row_order-1].first + 1;
      section[i].x = (section[i].seat_order - rowLength/2) * 30 + 500;
      section[i].y = section[i].row_order * 30 + section[i].y_offset;
    }
    section[i].display();
  }
  
  
  for (i = 0; i < section.length; i++) {
    if (boxChecked){
      section[i].blended();
    }
    if (listingChecked){
      section[i].listing();
    }
   
  }
  
  for (i = 0; i < section.length; i++) {
    section[i].hover();
  }
  //onMouseOver();
  textSize(20);
  fill("red");
  text(curtext,100,100,120,120);
}
