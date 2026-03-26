const saveBtn = document.querySelector('.save-button');
const dialog = document.getElementById('saveDialog');
const okBtn = document.getElementById('saveOk');

if (saveBtn && dialog) {
  saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
  });
}

if (okBtn && dialog) {
  okBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
  });
}

// close on outside click
if (dialog) {
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
}
