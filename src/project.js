import todo from "./todo.js";

export default class project {

    id;
    name;
    color;
    icon;

    todo_array;



    constructor(name, icon, color) {
        this.name = name;
        this.color = color;
        this.icon = icon;
        this.todo_array = [];
        this.id = crypto.randomUUID();
    }


}


