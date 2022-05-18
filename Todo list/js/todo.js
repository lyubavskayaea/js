/* todo.js */

/**
 * @param {object} data
 */
 export function createTodo(data) {
	let icon = "⏳";
	if (data.completed) {
	  icon = "✅";
	}
  
	return {
	  title: data.todoTitle,
	  isCompleted: data.completed,
	  category: data.chosenCategory,
	  icon: icon,
	  author: {
		firstName: data.user.first,
		lastName: data.user.last
	  }
	};
  }