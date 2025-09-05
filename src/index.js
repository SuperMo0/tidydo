import "./style.css";
import project from "./project.js"
import uixc from "./uix.js";


let projects_array = [];
let uix = new uixc(projects_array);
let p = new project("Cooking", "🎯", "red");
projects_array.push(p);

let home = document.querySelector(".side1");

home.onclick = () => { uix.show_projects() };

uix.show_projects();

let make_project = document.getElementById("make_project_prompt");
let add_button = document.getElementById("add_project");
let confirm = document.getElementById("confirm_project");

add_button.onclick = () => { make_project.style.display = "flex" };

confirm.addEventListener("click", () => {

    let inputs = uix.read_project_input();
    let new_project = new project(inputs.title_input, inputs.icon_input, inputs.color_input);
    projects_array.push(new_project);
    uix.show_projects();
})





