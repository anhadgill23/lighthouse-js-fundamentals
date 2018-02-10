var talkingCalendar = function(date) {

  //pulls the month from date
  function getMonthInDigits(date) {
    var x = date.charAt(5) + date.charAt(6);
    return x;
  }

  function getMonthInCharacters(getMonthInDigits) {
    if (getMonthInDigits() === 01) {
      return "January";
    }
    else if (getMonthInDigits() === 02) {
      return "February";
    }
    else if (getMonthInDigits() === 03) {
      return "March";
    }
    else if (getMonthInDigits() === 04) {
      return "April";
    }
    else if (getMonthInDigits() === 05) {
      return "May";
    }
    else if (getMonthInDigits() === 06) {
      return "June";
    }
    else if (getMonthInDigits() === 07) {
      return "July";
    }
    else if (getMonthInDigits() === 08) {
      return "August";
    }
    else if (getMonthInDigits() === 09) {
      return "September";
    }
    else if (getMonthInDigits() === 10) {
      return "October";
    }
    else if (getMonthInDigits() === 11) {
      return "November";
    }
    else if (getMonthInDigits() === 12) {
      return "December";
    }

  }

  function getDate(date) {
    var x = date.charAt(8) + date.charAt(9)
    return x;
  }

  function getExtension(getDate) {
    if (x === 01 || x === 11 || x === 21 || x === 31) {
      return "st"
    }
    if (x === 02 || x === 12 || x === 22) {
      return "nd"
    }
    if (x === 03 || x === 13 || x === 23) {
      return "rd"
    }
    else {
      return "th"
    }
  }

  function getYear(date){
    var x = date.charAt(0) + date.charAt(1) + date.charAt(2) + date.charAt(3);
    return x;
  }

return getMonthInCharacters() + " " getMonthInDigits() + getExtension() + ", " + getYear();
}

console.log(talkingCalendar("2017/12/02"));
//console.log(talkingCalendar("2007/11/11"));


/*
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/

