export default class todo {


    title;
    description;
    dueDate;
    progress;

    constructor(title, description, dueDate, priority, progress = 0) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.progress = progress;
        this.priority = priority;
    }
}