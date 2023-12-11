



const data = [];


const m = `${data}`;

export const setToLocal = (blogs) => {
  localStorage.setItem('blogs', JSON.stringify(blogs));
}


export const getBlogs = () => {
  const data = localStorage.getItem('blogs');
  return data === null ? [] : JSON.parse(data);
}