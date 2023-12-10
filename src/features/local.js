



const data = [];


const m = `${data}`;

export const addToLocal = (blogs) => {
  localStorage.setItem('blogs', JSON.stringify(blogs));
}