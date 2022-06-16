/* todos.js */
export default class Todos {
    // Do NOT modify the constructor
    constructor() {
      this.todos = [
        {
            title: "Learn JavaScript",
          category: "work",
        },
        {
          title: "Meditate",
          category: "personal",
        },
      ];
    }
  
    getAll() {
      return this.todos;
      }
  
      getCount() {
        return this.todos.length;   
      }
      
      add(title, category) {
        this.todos.push({title, category});
        return this.todos;   
      }
      
      getWork() {
        return this.todos.filter(item => item.category === "work");  
      }
      
      getWorkCount() {
        return this.getWork().length;  
      }
      
      getPersonal() {
        return this.todos.filter(item => item.category === "personal");    
      }
      
      getPersonalCount() {
        return this.getPersonal().length;     
      }
  }