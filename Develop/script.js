// Use Moment.js to format the following variables:
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
//var gradDate = moment("2021-06-15").format("MMM Do, YYYY");
//$("#1a").text(gradDate);

// TODO: 2. What day of the week will 1/1/2022 be?
//var weekDay = moment("1-1-2022", "M-D-YYYY").format("ddd MMM Do, YYYY");
//$("#2a").text(weekDay);

// TODO: 3. Out of 365, what day of the year is today?
//var dayYear = moment().format("DDD");
//$("#3a").text(dayYear);

// TODO: 4. What is the current time in the format: hours:minutes:seconds
//var time = moment().format("hh:mm:ss");
//$("#4a").text(time);

// TODO: 5. What is the current Unix timestamp?
///var unix = moment().format("X");
//$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
//var unixFormat = moment.unix(1318781876).format("MMM Do, YYYY, hh:mm:ss");
//$("#6a").text(unixFormat);
//-------------------------------------------------------------------Objects-------------------------------------------------------------------------------------------------------

const wrk_times = [

    {"09": "9AM",},
    {"10": "10AM",},
    {"11": "11AM",},
    {"12": "12PM",},
    {"13": "1PM",},
    {"14": "2PM",},
    {"15": "3PM",},
    {"16": "4PM",},
    {"17": "5PM",}

];

//-------------------------------------------------------------------Variables-------------------------------------------------------------------------------------------------------
var date_blocks = $('.container');
var current_hour = moment().format("H");
var i = 0;

var today_date = moment().format("dddd, MMMM Do") ;
$('#currentDay').text(today_date);

//-------------------------------------------------------------------functions-------------------------------------------------------------------------------------------------------



function create_table(){
    
    for (i = 0; i < wrk_times.length; i++){

        var time = Object.keys(wrk_times[i]);
        var BG = moment(time, "HHmm").format("HH");

        div1 = document.createElement("div");
        div1.classList.add("input-group");

        div2 = document.createElement("div");
        div2.classList.add("input-group-prepend");

        text_area = document.createElement("textarea");
        text_area.classList.add("form-control");

        span1 = document.createElement("span");
        span1.classList.add("input-group-text");

        div3 = document.createElement("div");
        div3.classList.add("input-group-prepend");
        div3.id = i;

        span2 = document.createElement("span");
        span2.classList.add("input-group-text");
        
        i_tag = document.createElement("i");
        i_tag.classList.add("far", "fa-save");

        span1.textContent = moment(Object.keys(wrk_times[i]), "HHmm").format("hA");

       
        
        if(BG < current_hour){
            text_area.style.backgroundColor = "grey";

        }else if(BG > current_hour){
            text_area.style.backgroundColor = "red";
            
        }else{
            text_area.style.backgroundColor = "green";
        }

        date_blocks.append(div1);
        div1.append(div2);
        div1.append(text_area);
        div1.append(div3);
        div2.append(span1);
        div3.append(span2);
        span2.append(i_tag);

    }


};

function color_update(){

};

function save(){

};

























//-------------------------------------------------------------------Main-------------------------------------------------------------------------------------------------------

function init(){

    create_table()







};


init()















