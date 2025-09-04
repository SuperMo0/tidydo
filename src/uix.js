// import project from "./project.js";

import notec from "./todo.js";


export default class {


    #main = document.getElementById("main");

    constructor(parray) {
        this.projects_array = parray;
    }

    remove_project(id) {
        this.projects_array.forEach((value, index, array) => {
            if (array[index].id == id) {
                this.projects_array.splice(index, 1);
                return;
            }
        })
        this.show_projects();
    }

    append_project_card(project, container) {
        let project_card = document.createElement("div")
        project_card.id = "project_card";
        project_card.style.display = "flex";
        project_card.style.flexDirection = "column";
        let project_title = document.createElement("h2");
        project_title.id = "project_title";
        project_title.textContent = project.name;
        let project_icon = document.createElement("img");
        project_icon.id = project.icon;
        project_icon.src = project.icon;
        project_icon.style.width = "90px";
        project_icon.style.height = "90px";
        let project_panner = document.createElement("div");
        project_card.style.borderTopLeftRadius = "30px"
        project_panner.id = "project_panner";
        project_panner.style.height = "20px"
        project_title.style["align-self"] = "center";
        project_icon.style["align-self"] = "center";
        project_panner.style["background-color"] = project.color;
        project_card.appendChild(project_title);
        project_card.appendChild(project_icon);
        project_card.appendChild(project_panner);
        project_card.dataset.indexNumber = project.id;
        let close = document.createElement("div")
        close.textContent = "x";
        close.style["font-size"] = "30px";
        close.style.width = "30px";
        close.style.height = "30px";
        close.style.position = "absolute";
        close.style.color = "red";
        close.style.left = "220px";
        close.style.cursor = "pointer";
        close.addEventListener("click", (e) => { this.remove_project(project.id) });
        project_card.appendChild(close)

        project_card.addEventListener("click", () => { this.open_project(project) });

        container.appendChild(project_card);

    }
    show_projects() {

        this.#main.replaceChildren();
        let container = document.createElement("div");
        container.id = "main_container";
        container.style.display = "grid";
        container.style.gridTemplateColumns = "repeat(auto-fill,minmax(30ch, 1fr))";
        container.style.gridAutoRows = "200px";
        container.style.gap = "40px";
        container.style.padding = "40px";
        this.projects_array.forEach(element => {
            this.append_project_card(element, container);
        });
        container.style.width = "100%";
        container.style.height = "100%";
        // container.style["background-color"] = "";

        this.#main.appendChild(container);
    }

    open_project(project) {
        this.#main.replaceChildren();
        let container = document.createElement("div");
        container.id = "main_container2";

        container.style.width = "100%";
        container.style.height = "100%";

        container.style.display = "flex"
        container.style.flexDirection = "column";

        container.style.alignItems = "center";

        let heading = document.createElement("h1");
        heading.textContent = project.name;
        heading.style["font-size"] = "4rem";
        let add = document.querySelector("#add_project");
        add = add.cloneNode();
        add.textContent = "+";
        add.style.height = "50px";
        add.addEventListener("click", () => {
            let prompt = this.take_note(project); container.replaceChildren(); container.appendChild(heading);
            container.appendChild(add);
            container.appendChild(prompt)
            container.appendChild(notes_contianer);
        })
        let notes_contianer = document.createElement("div");
        notes_contianer.style.display = "grid";
        notes_contianer.style.gridTemplateColumns = "repeat(auto-fill,minmax(30ch, 1fr))";
        notes_contianer.style.gridAutoRows = "200px";
        notes_contianer.style.gap = "30px";
        notes_contianer.style.padding = "20px";
        notes_contianer.id = "notes_continaer";
        notes_contianer.style.height = "100%";
        notes_contianer.style.width = "100%";
        // notes_contianer.style["background-color"] = "lightgreen";
        container.appendChild(heading);
        container.appendChild(add);
        container.appendChild(notes_contianer);
        this.#main.appendChild(container);
        project.todo_array.forEach((a, index, array) => {
            let no = this.append_note(array[index].title, a.description, a.dueDate, a.priority, a.progress, project, array[index]);
            notes_contianer.appendChild(no);
        })
    }

    take_note(project) {
        let box = document.createElement("div");
        let row1 = document.createElement("div");
        row1.style.display = "flex";
        let title_label = document.createElement("p");
        let title_input = document.createElement("input");
        title_input.type = "text";
        title_label.textContent = "Title";
        row1.appendChild(title_label);
        row1.appendChild(title_input);

        let row2 = document.createElement("div");
        row2.style.display = "flex";

        let des_label = document.createElement("p");
        let des_input = document.createElement("input");
        des_input.type = "text";
        des_label.textContent = "Description";
        row2.appendChild(des_label);
        row2.appendChild(des_input);

        let row3 = document.createElement("div");
        row3.style.display = "flex";
        let date_label = document.createElement("p");
        let date_input = document.createElement("input");
        date_input.type = "date";
        date_label.textContent = "DueDate";
        row3.appendChild(date_label);
        row3.appendChild(date_input);


        let row4 = document.createElement("div");
        row4.style.display = "flex";
        let pri_label = document.createElement("p");
        let pri_input = document.createElement("select");
        pri_input.name = "prio";
        pri_label.textContent = "Enter Priority: ";

        let o1 = document.createElement("option");
        o1.value = "high";
        o1.textContent = "high";
        pri_input.appendChild(o1);

        let o2 = document.createElement("option");
        o2.value = "Medium";
        o2.textContent = "Medium";
        pri_input.appendChild(o2);

        let o3 = document.createElement("option");
        o3.value = "Low";
        o3.textContent = "Low";
        pri_input.appendChild(o3);

        row4.appendChild(pri_label);
        row4.appendChild(pri_input);

        box.appendChild(row1);
        box.appendChild(row2);
        box.appendChild(row3);
        box.appendChild(row4);
        box.style.width = "400px";
        box.style.height = "400px";
        box.style["background-color"] = "red";
        box.style.display = "flex";
        box.style.flexDirection = "column";
        box.style.justifyContent = "space-between";

        let ok = document.createElement("button");
        ok.textContent = "ADD";
        ok.style.width = "50px";
        ok.style.height = "50px";

        ok.addEventListener("click", () => {

            let title = title_input.value;
            let description = des_input.value;
            let duedate = date_input.value;
            let priority = pri_input.value;
            let note = new notec(title, description, duedate, priority, 0);
            project.todo_array.push(note);
            this.open_project(project);

        })
        box.appendChild(ok);
        ok.style.alignSelf = "center";


        return box;
    }


    append_note(title, description, dueDate, priority, progress, project, a) {

        let note_shape = document.createElement("div");
        note_shape.style.width = "240px";
        note_shape.style.hegiht = "400px";
        note_shape.style["background-color"] = "white";
        note_shape.style.gap = "3px";

        note_shape.style.display = "flex";
        note_shape.style.flexDirection = "column";

        let title_priority_container = document.createElement("div");
        title_priority_container.id = "title_priority_container";

        let title_text = document.createElement("p");

        title_text.textContent = title;
        title_text.style.color = "blue";

        let prio = document.createElement("div");

        prio.style.width = "50px";
        prio.style.hegiht = "50px";
        prio.style.borderRadius = "40px";

        if (priority == "high") prio.style["background-color"] = "red";
        else if (priority == "Medium") prio.style["background-color"] = "Orange";
        else prio.style["background-color"] = "green";

        title_priority_container.style.display = "flex";
        title_priority_container.style.gap = "20px";

        title_priority_container.appendChild(title_text);
        title_priority_container.appendChild(prio);

        let des = document.createElement("p");
        des.textContent = description;


        let date = document.createElement("p");
        date.textContent = "Deadline:" + dueDate;
        date.style["background-color"] = "blue";
        date.style.color = "white";
        date.style["margin-top"] = "10px";


        let slider = document.createElement("input");
        slider.type = "range";
        slider.min = "1";
        slider.max = "100";
        slider.value = "0";


        slider.addEventListener("input", (e) => {
            a.progress = e.target.value;
            console.log(e.target.value);
        })

        note_shape.appendChild(title_priority_container);
        note_shape.appendChild(des);
        note_shape.appendChild(date);
        note_shape.append(slider);
        slider.style.alignSelf = "center";
        title_priority_container.style.justifyContent = "space-between";
        note_shape.style.padding = "5px";
        return note_shape;

    }

    read_project_input() {

        let title_input = document.getElementById("title_input");
        let icon_input = document.getElementById("icon_input");
        let color_input = document.getElementById("color_input");

        title_input = title_input.value;
        // icon_input = icon_input.value;
        color_input = color_input.value;
        return { title_input, icon_input, color_input };
    }









}