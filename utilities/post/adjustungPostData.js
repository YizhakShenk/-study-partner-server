
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
    let Tdfr = getDateStr(new Date(post.date_from));
    let Tdto = getDateStr(new Date(post.date_to));
    let Tfrom = getTimeStr(post.time_from);
    let Tto = getTimeStr(post.time_to);


    return {
        id: post.id,
        user_id: post.user_id,
        auther_name: post.auther_name,
        category: post.category,
        sub_category: post.sub_category,
        post: post.post,
        date_from: Tdfr,
        // date_from: `${Tdfr.getDate() < 10 ? "0" : ""}${Tdfr.getDate()}/${Tdfr.getMonth() < 10 ? "0" : ""}${Tdfr.getMonth() + 1}/${Tdfr.getFullYear()}` || null,
        date_to: Tdto,
        // date_to: `${Tdto.getDate() < 10 ? "0" : ""}${Tdto.getDate()}/${Tdto.getMonth() < 10 ? "0" : ""}${Tdto.getMonth() + 1}/${Tdto.getFullYear()}` || null,
        time_from: Tfrom,
        time_to: Tto,
        matched: post.matched,
        days: JSON.parse(post.days)
    }
}

module.exports = { convertToReadingPossibility }



