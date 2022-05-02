function removeDummy() {
    var elem = document.getElementById('rems');
    elem.style.visibility = hidden;
    return false;
}

const btn = document.getElementById('rems');

btn.addEventListener('click', () => {
  // 👇️ hide button
  btn.style.display = 'none';

  // 👇️ show div
  const box = document.getElementById('rems');
  box.style.display = 'block';
});
