const container = document.querySelector("#container");

async function getData() {
    const res = await fetch("http://localhost:3000/json");
    const data = await res.json();

    console.log(data);

    container.innerText = data;
}

async function postData() {
    const res = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify("Hello Worldu"),
    });
    const data = await res.json();
    console.log(data);
}

async function putData() {
    const res = await fetch("http://localhost:3000", {
        method: "PUT",
    });
    const data = await res.text();
    console.log(data);
}

getData();
postData();
putData();