//homepage scripts
const main = document.querySelector('main');
const menu = document.querySelector('aside');
const menuWidth = menu.clientWidth;
let vissible = menuWidth && 1;
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

fetch('../pages/upcoming-events.html')
.then(response => response.text())
.then(data => main.innerHTML = data)

const links = document.querySelectorAll('i')
links.forEach(link => {
    if(!link.getAttribute('data-link')){
        
    }else{
        link.addEventListener('click',(e)=>{
            let source = e.target.getAttribute('data-link');
            spin(1);
            if(menuWidth == 0){
                vissible = 1;
                hideShowMenu();
            }
            fetch('./' + source)
            .then(result => result.text())
            .then(data => {
                spin(0);
                main.innerHTML = data
            })
        })
    }
})

function spin(x){
    const spinner = document.getElementById("spinner");
    if(x == 1){
        overlay.style.display = 'block';
        spinner.classList.remove("hidden")
    }else if(x == 0){
        overlay.style.display = 'none';
        spinner.classList.add("hidden");
    }
}

document.querySelector('.bx-menu').addEventListener('click',hideShowMenu)

function hideShowMenu(){
        let content = document.querySelectorAll('aside i');
        if(vissible){
            menu.style.width = '.1px';
            content.forEach(i => i.style.display = 'none');
            vissible = 0;
        }else{
            menu.style.display = 'flex';
            menu.style.width = '250px'
            setTimeout(()=>{
                content.forEach(i => i.style.display = 'block');
            },100)
            vissible = 1;
        }
    }
    
    //contributions script

    function toggleDetails(element) {
        element.classList.toggle('expanded');
        let details = element.querySelector('.contribution-details');
        if (element.classList.contains('expanded')) {
            details.style.height = details.scrollHeight + 'px';
        } else {
            details.style.height = '0px';
        }
    }

    //library Script

    function toggleAlbum(album) {
        album.classList.toggle('expanded');
    }

    // Messages script
    
    function openChat(element){
        if(element == 'main'){
            alert('coming soon, view those other chats')
        }else{
            const user = element.querySelector('div').getAttribute('id');
            fetch('./chat.html')
            .then(response => response.text())
            .then(data =>{
                let content = `<p class='user-details'>${user}</p>` + data;
                main.innerHTML = content;
            })
        }
    }

    //geneology script

    function show(x){
        let tree = document.querySelector('.tree')
        let history = document.querySelector('.history')
        if(x == 0){
            tree.style.display = 'block';
            history.style.display = 'none'
        }else{
            tree.style.display = 'none';
            history.style.display = 'block'
        }
    }


    document.querySelectorAll(".tree span").forEach(span => {
        span.addEventListener("click", function(event) {
            this.classList.toggle("active");
        });
    });

   // contributions script

    function openPopup(x) {
        if(x == 'contribute'){
            popup.innerHTML = "<button onclick='closePopup()'>x</button>" + `<h2>Contribute</h2>
        <input type="number" id="phone" placeholder="Enter phone number">
        <input type="number" id="amount" placeholder="Enter amount">
        <button onclick="payNow()">Pay</button>
        <h2>OR</h2>
        <p>
            1. Go to Mpesa<br/>
            2. Select Lipa Na Mpesa<br/>
            3. Paybill 1278378<br/>
            4. Account number 12345678<br/>
            5. Amount<br/>
            6. Enter your Pin
        </p>`
        }else if(x == 'create album'){
            popup.innerHTML = `<div class="container">
        <h2>Add New Photo Album</h2>
        <form id="albumForm">
            <input type="text" id="albumName" placeholder="Album Name" required>
            <input type="file" id="photos" multiple accept="image/*">
            <button type="submit">Create Album</button>
        </form>
    </div>`
        }else{
            fetch('../pages/' + x)
            .then(result => result.text())
            .then(data =>{
                popup.style.background = 'rgba(0, 0, 0, 0.1)'
                popup.innerHTML = '<button onclick="closePopup()">x</button>' + data;
            })
        }
        popup.style.visibility = "visible";
        popup.style.opacity = 1;
        overlay.style.display = "block";
    }
    function closePopup() {
        popup.style.visibility = "hidden";
        popup.style.background = '#4b4a4a';
        popup.style.opacity = 0;
        overlay.style.display = "none";
    }

    function toggleSection(id) {
        const section = document.getElementById(id);
        section.classList.toggle('active');
    }
    