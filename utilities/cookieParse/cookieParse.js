
//getting cookie  type from requests, and generate it to an object
const cookieParse = (cookie) => {
    try {
        let obj = {}
        if (!cookie) {
            throw new Error("cookie is not found")
        }
        const temp = cookie.split(';')
        if (temp !== undefined) {
            temp.map((singleCookie) => {
                const TsingleCookie = singleCookie.trim().split('=');
                const key = TsingleCookie[0]
                obj[key] = TsingleCookie[1];
            })
        }
        else {
            const temp = cookie.split('=');
            const key = temp[0];
            obj[key] = temp[1];
        }
        return obj;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

module.exports = {
    cookieParse,
}
