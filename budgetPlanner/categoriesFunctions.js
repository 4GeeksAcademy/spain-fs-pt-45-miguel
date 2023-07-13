let categories = ['food', 'services', 'housing', 'education'];

function include(list_categories) {
  let new_category = prompt(`Please type the name of the new category: `);
  let counter = 0;

  while ((list_categories.includes(new_category.toLowerCase()) || new_category==='') && counter < 4) {
    if (new_category===''){
        new_category = prompt(`Please enter a new category,  "${new_category}" is not valid: `);
        counter ++;
    }else{
    new_category = prompt(`Please enter a new category, as "${new_category}" already exists: `);
    counter++;
    }
  }
//   console.log(counter)
  if (counter == 4 && (list_categories.includes(new_category.toLowerCase()) || new_category === '')) {
    const categoriesList = list_categories.join(', ');
    new_category = prompt(`It looks like you forgot the current categories: ${categoriesList}. Please enter a category that is not in the list.`);
    if (list_categories.includes(new_category.toLowerCase()) || new_category === '') {
      console.log(`You don't have any more opportunities.`);
      return list_categories;
    }
  }
//   console.log('final')
  list_categories.push(new_category.toLowerCase());
  console.log(`current categories: ${list_categories.join(', ')}`)
  return list_categories;
}

function remove(list_categories) {
  // Remove a category logic goes here
  let rem_category = prompt(`Please type the name of the category that you want to remove: `);
  let counter = 0;

  while (!list_categories.includes(rem_category.toLowerCase()) && counter < 4) {
    rem_category = prompt(`Please enter a new category, as "${rem_category}" does not exist: `);
    counter++;
  }

  if (counter == 4) {
    const categoriesList = list_categories.join(', ');
    rem_category = prompt(`It looks like you forgot the current categories: ${list_categories}. Please enter a category that is in the list: `);
    if (!list_categories.includes(rem_category.toLowerCase())) {
      console.log(`You don't have any more opportunities.`);
      return list_categories;
    }
  }
  const index = list_categories.indexOf(rem_category.toLowerCase());
  list_categories.splice(index, 1)
  console.log(`The current categories are ${list_categories.join(', ')}`)
  return list_categories;
}


function show(list_categories) {
  // Show current categories logic goes here
  console.log(`Here are the current categories
  ${list_categories.join(', ')}`)
}

function edit(list_categories) {
    let category_edit = prompt(`Please select a category that you want to edit.
  The current categories are: ${list_categories.join(', ')}
  Which one do you want to edit?`);
  let counter = 1;
    while (!list_categories.includes(category_edit.toLowerCase()) && counter < 5) {
      category_edit = prompt(`The category "${category_edit}" doesn't exist. Please enter a valid category to edit.`);
      counter ++;
    }
      if (counter == 5) {
    const categoriesList = list_categories.join(', ');
    rem_category = prompt(`It looks like you forgot the current categories: ${list_categories}. Please enter a category that is in the list`);
    if (!list_categories.includes(category_edit.toLowerCase())) {
      console.log(`You don't have any more opportunities.`);
      return list_categories;
    }
  }
  
    const updatedCategory = prompt(`Enter the updated name for the category "${category_edit}":`);
    let new_count = 0
    while (list_categories.includes(updatedCategory.toLowerCase()) && new_count < 2) {
        category_edit = prompt(`The category "${updatedCategory}" is already in the currnt categories. Please enter a valid category to edit.`);
        new_count ++;
      }
    if (new_count == 2){
        console.log(`You don't have any more opportunities.`);
        return list_categories;
    }
    const categoryIndex = list_categories.findIndex(category => category.toLowerCase() === category_edit.toLowerCase());
    list_categories[categoryIndex] = updatedCategory.toLowerCase();
  
    return list_categories;
  }

const prompt = require('prompt-sync')({ sigint: true });

const option = prompt(`What do you want to do?
Include a new category (I)
Remove a category (D)
See the current categories (S)
Edit an existing category (E)`);

switch (option) {
  case "I":
    include(categories);
    break;
  case "D":
    remove(categories);
    break;
  case "S":
    show(categories);
    break;
  case "E":
    edit(categories);
    break;
  default:
    console.log("Invalid option selected");
    break;
}




