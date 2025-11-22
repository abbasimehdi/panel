// utils.js

export const cardColors = [
  { bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', text: 'text-white' },
  { bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', text: 'text-white' },
  { bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', text: 'text-white' },
  { bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', text: 'text-dark' },
  { bg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', text: 'text-dark' },
  { bg: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', text: 'text-dark' },
  { bg: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)', text: 'text-white' },
  { bg: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)', text: 'text-dark' },
  { bg: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)', text: 'text-white' },
  { bg: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', text: 'text-dark' }
];

export const getRandomColor = () =>
  cardColors[Math.floor(Math.random() * cardColors.length)];

export const renderCategoryIcon = (category) => {
  if (category.icon) {
    return <i className={`${category.icon} me-2`}></i>;
  }
  return <i className="fas fa-folder me-2 text-muted"></i>;
};
