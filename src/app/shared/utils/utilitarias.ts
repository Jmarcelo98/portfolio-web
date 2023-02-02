import * as moment from "moment";

export function subtrairDatas(data: Date) {

    var firstDate = moment(data); 
    var secondDate = moment(new Date());

    var duration = moment.duration(secondDate.diff(firstDate));
    var years = duration.asYears();
    
    return Math.round(years);

}

