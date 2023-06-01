async function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);

    const response = await fetch("/api/test")
    const temp = await response.json()
    console.log(temp)

    window.location.href = "map.html";
  }
  