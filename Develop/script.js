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

var wrk_times = [

    {"09": "",},
    {"10": "",},
    {"11": "",},
    {"12": "",},
    {"13": "",},
    {"14": "",},
    {"15": "",},
    {"16": "",},
    {"17": "",}

];

//-------------------------------------------------------------------Variables-------------------------------------------------------------------------------------------------------
var date_blocks = $('.container');
var current_hour = moment().format("H");
var i = 0;
var target_id = "";
var value = "";


var today_date = moment().format("dddd, MMMM Do") ;
$('#currentDay').text(today_date);

//-------------------------------------------------------------------functions-------------------------------------------------------------------------------------------------------

function save(){
    console.log("hello" + i);
};

function create_table(){
    
    for (i = 0; i < wrk_times.length; i++){

        var time = Object.keys(wrk_times[i]);
        var value = Object.values(wrk_times[i]);
        var BG = moment(time, "HHmm").format("HH");

        div1 = document.createElement("div");
        div1.classList.add("input-group");

        div2 = document.createElement("div");
        div2.classList.add("input-group-prepend");

        text_area = document.createElement("textarea");
        text_area.classList.add("form-control");
        text_area.id = "ID" + time;
        text_area.textContent = localStorage.getItem(time);

        span1 = document.createElement("span");
        span1.classList.add("input-group-text");

        div3 = document.createElement("div");
        div3.classList.add("input-group-prepend");
        div3.id = i;

        span2 = document.createElement("span");
        span2.classList.add("input-group-text", "save-button");
        span2.id = time;
        
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


$(function(){
    create_table()
    $(".save-button").click(function(event){
        console.log(event.target.id);
        target_id = event.target.id;
        console.log(target_id);
        var text = "ID"+target_id;
        value = document.getElementById(text).value; 
        console.log(text);
        console.log(value);
        localStorage.setItem(target_id, value);
    });
});























//-------------------------------------------------------------------Main-------------------------------------------------------------------------------------------------------




















