/**
 * JSONC_to_JSON(i) - JSONC文字列をJSON文字列に変換します。
 * @param {String} i - 有効なJSONC文字列
 * @returns {String} - 有効なJSON文字列
 */
const JSONC_to_JSON = (i) => {
    let s = 0;
    let o = "";
    for (let j = 0; j < i.length; j++) {
        const q = i[j];
        if (s == 1) {
            if (q == "\"") {
                s = 0;
            }
            o += q;
            continue;
        }
        if (s == 2) {
            if (q == "\n") {
                s = 0;
                o += q;
            }
            continue;
        }
        if (s == 3) {
            if (q == "*" && i[j + 1] == "/") {
                s = 0;
                j += 1;
            }
            continue;
        }
        if (q == "\\") {
            o += q;
            o += i[j + 1];
            j += 1;
            continue;
        }
        if (q == "/") {
            if (i[j + 1] == "/") {
                s = 2;
                j += 1;
                continue;
            }
            if (i[j + 1] == "*") {
                s = 3;
                j += 1;
                continue;
            }
        }
        if (q == "\"") {
            s = 1;
            o += q;
            continue;
        }
        o += q;
        continue;
    }
    return o;
};

