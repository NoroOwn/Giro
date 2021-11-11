const btn = document.getElementById ("theme-button");
const link = document.getElementById ("theme-link");

btn.addEventListener("click", ChangeTheme);

function ChangeTheme() {
	let mainTheme = "master.css";
	let darkTheme = "dark.css";
	let currTheme = link.getAttribute("href");
	let theme;

	if (currTheme === mainTheme) {
		currTheme = darkTheme;
		theme = "dark";
	} else {
		currTheme = mainTheme;
		theme = "main";
	}

	link.setAttribute("href", currTheme);

	Save(theme);
}

var a = prompt("Сколько вам лет");
a = parseInt(a);
if (a > 16) {
    alert("Разрешено")
}   
else
{
    alert("Запрещено");
}

var name = prompt("Введите как вас зовут?");
if (!name || name=="null")
    document.write("Привет, незнакомец!")
else
    document.write("Привет, ", name,"!")
	var i = 0;
	var color = ['black', 'blue', 'green'];
	
	function change() {
	  var doc = document.getElementById("background");
	  console.log("called")
	  doc.style.backgroundColor = color[i];
	  i = i + 1;
	  if (i > 2) {
		i = 0;
	  }
	  a()
	}
	
	function a() {
	  return setTimeout(change, 1000);
	}
	a();	
