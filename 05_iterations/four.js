// Object ke upar "forin" loop lagta h

const myObj = {
    JS: "JavaScript",
    Cpp: "C++",
    py: "python",
    swift: "swift by apple"
}

for (const key in myObj) {
    // console.log(`${key} Shortcut is for ${myObj[key]}`)
}

// Arrays

const programming = ["cpp","Java","Python","ruby","Swift"]

for (const key in programming) {
    console.log(programming[key])
}