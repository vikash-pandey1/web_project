//logic

const deletePassword = (website) => {
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e) => {
        return e.website != website;
    })
    localStorage.setItem("passwords", JSON.stringify(arrUpdated))
    alert(`successfully deleted ${website}'s password`)
    showPasswords();
}

const showPasswords = () => {
    let tb = document.querySelector("table");
    let data = localStorage.getItem("passwords")
    if (data == null) {
        tb.innerHTML = "NO Data To Show"
    } else {
        tb.innerHTML = `<tr>
        <th>Website</th>
        <th>Username</th>
        <th>Password</th>
        <th>delete</th>
    </tr>`
        let arr = JSON.parse(data);
        let str = ""
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            str += `<tr>
                <td>${element.website}</td>
                <td>${element.username}</td>
                <td>${element.password}</td>
                <td><button class = "btnsm" onclick = "deletePassword('${element.website}')">Delete</button></td>
            </tr>`
        }
        tb.innerHTML = tb.innerHTML + str;
    }
    website.value = ""
    username.value = ""
    password.value = ""
}

console.log("Working");
showPasswords();
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault()
    console.log("clicked...");
    console.log(username.value, password.value)
    let passwords = localStorage.getItem("passwords")
    console.log(passwords);
    if (passwords == null) {
        let json = []
        json.push({ website: website.value, username: username.value, password: password.value });
        alert("password Saved");
        localStorage.setItem("passwords", JSON.stringify(json))
    } else {
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({ website: website.value, username: username.value, password: password.value });
        alert("password Saved")
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    showPasswords();
})

