let array = [];
        console.log("hello world"); 
        document.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                let input = document.getElementById("todoInput");
                array.push(input.value);
                if(input.value.length > 0 ) {
                    let list = document.getElementById("list");
                    list.style.display = "block";
                    list.innerHTML += '<li>'+input.value+'  '+'<button onClick="remove(event)">'+'X'+'</button></li>';
                    input.value = "";
                }
            }
        });
        function remove(event) {
            if (event.target.tagName === "BUTTON") {
                let li = event.target.parentNode;
                li.parentNode.removeChild(li);
                if (document.getElementById("list").children.length === 0) {
                    document.getElementById("list").style.display = "none";
                }
            }
        }
        const toggleBtn = document.getElementById("toggleModeButton");
        const body = document.body;

        toggleBtn.addEventListener("click", () => {
            if (body.classList.contains("dark-mode")) {
                body.classList.remove("dark-mode");
                body.classList.add("light-mode");
                toggleBtn.textContent = "Switch to Dark Mode";
            } else {
                body.classList.remove("light-mode");
                body.classList.add("dark-mode");
                toggleBtn.textContent = "Switch to Light Mode";
            }
        });