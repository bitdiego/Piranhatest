$.validator.addMethod("isodate",
    function (value, element, params) {
        return ValidateIsoDate(value);
    });

$.validator.unobtrusive.adapters.addBool("isodate");

let MyMessage = "";

function ValidateIsoDate(input) {

    const inputLen = input.length;
    console.log("inputLen " + inputLen);

    var d = new Date();
    var currentYear = d.getFullYear();

    var numReg = "^[0-9]+$";
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (input === "") {
        return false;
    }
    if (inputLen % 2 > 0 || inputLen > 12 || inputLen < 4) {
        return false;
    }

    if (!input.match(new RegExp('^[0-9]+$'))) {
        return false;
    }
    else {
        var subYear = "";
        var subMonth = "";
        var subDay = "";
        var subHour = "";
        var subMins = "";
        var iYear = 0;
        var iMonth = 0;
        var iDay = 0;
        var iHour = 0;
        var iMins = 0;
        if (inputLen >= 4) {
            subYear = input.substr(0, 4);
            iYear = parseInt(subYear);
            console.log("IYEAR " + iYear);
            //(iYear < 1800) || iYear > (currentYear + 2) 
            if (iYear < 1800 || iYear > currentYear + 2) {
                //MyMessage = "Iso date is outside a valid range";
                console.log("1800 2022> ");
                return false;
            }
        }

        if (inputLen >= 6) {
            subMonth = input.substr(4, 2);
            iMonth = parseInt(subMonth);
            console.log("SMONTH " + subMonth);
            if (iMonth < 1 || iMonth > 12) {
                return false;
            }
        }

        if (input.length >= 8) {
            subDay = input.substr(6, 2);
            iDay = parseInt(subDay);
            if (iMonth !== 2) {

                if (iDay > daysInMonth[iMonth - 1]) {
                    return false;
                }

            }
            else {
                if (isLeap(iYear)) {
                    if (iDay > 29) {
                        return false;
                    }
                }
                else {
                    if (iDay > 28) {
                        return false;
                    }
                }
            }
        }
        if (inputLen >= 10) {
            subHour = input.substr(8, 2);
            iHour = parseInt(subHour);
            if (iHour >= 24) {
                return false;
            }
        }

        if (input.length >= 12) {
            subMins = input.substr(10, 2);
            iMins = parseInt(subMins);
            if (iMins > 59) {
                return false;
            }
        }

    }

    return true;
}

function isLeap(yy) {
    if ((yy % 400 === 0 || yy % 100 !== 0) && (yy % 4 === 0)) {
        return true;

    }
    else {
        return false;
    }

}