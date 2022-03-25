const userBox = document.querySelector(".user-box");
const userInfo = document.querySelector(".user-info");

userBox.addEventListener('click', () => {
    if (userInfo.style.display == "none") {
        userInfo.style.display = "block";
    }else {
        userInfo.style.display = "none";
    }
});