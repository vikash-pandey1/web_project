const clock = document.querySelector('#clock')


setInterval(() => {
    let data = new Date();
    // console.log(data.toLocaleTimeString());
    clock.innerHTML = data.toLocaleTimeString();
}, 1000)