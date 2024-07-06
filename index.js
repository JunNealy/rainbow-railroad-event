function toggleCard(ribbon) {
  const cardContent = ribbon.nextElementSibling;
  if (cardContent.style.display === 'block') {
    cardContent.style.display = 'none';
  } else {
    cardContent.style.display = 'block';
  }
}
