const categoryElementsEl = document.querySelectorAll('.item>ul');
const categoryTitleEl = document.querySelectorAll('.item>h2');
const categoryNumber = (categories, titles)=> {
  for(let i = 0; i<categories.length; i+=1){
    const title = titles[i].textContent;
    const numberOfCategories = categories[i].children.length;
    console.log(`Category: ${title}`);
    console.log(`Element: ${numberOfCategories}`);
  }
};
console.log(`Number of categories: ${categoryElementsEl.length}`);
categoryNumber(categoryElementsEl, categoryTitleEl);