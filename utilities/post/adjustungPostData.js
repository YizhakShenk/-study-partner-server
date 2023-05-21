
const getDateStr = (dateStemp) => {
    if (!dateStemp) {
        return null;
    }
    let day = dateStemp.getDate() > 9 ? `${dateStemp.getDate()}` : `0${dateStemp.getDate()}`;
    let month = dateStemp.getMonth() > 9 ? `${dateStemp.getMonth() + 1}` : `0${dateStemp.getMonth() + 1}`;
    return `${day}/${month}/${dateStemp.getFullYear()}`;
}

const getTimeStr = (timeStemp) => {
    let hours = parseInt(timeStemp / 100)
    let minutes = parseInt(timeStemp % 100)
    let str = ''
    if (hours < 10) {
        str += "0"
    }
    str += hours + ":"
    if (minutes < 10) {
        str += "0"
    }
    str += minutes;
    return str

}



const convertToReadingPossibility = (post) => {
    let temp_day_from = getDateStr(new Date(post.date_from));
    let temp_day_to = getDateStr(new Date(post.date_to));
    let temp_time_from = getTimeStr(post.time_from);
    let temp_time_to = getTimeStr(post.time_to);


    return {
        id: post.id,
        user_id: post.user_id,
        auther_name: post.auther_name,
        category: post.category,
        sub_category: post.sub_category,
        post: post.post,
        date_from: temp_day_from,
        date_to: temp_day_to,
        time_from: temp_time_from,
        time_to: temp_time_to,
        matched: post.matched,
        days: JSON.parse(post.days)
    }
}

module.exports = { convertToReadingPossibility }



