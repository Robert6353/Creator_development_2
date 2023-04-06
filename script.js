//Files variables
const fileItems = document.querySelectorAll('.file');
const contentIframe = document.querySelector('.content-iframe');

//Panel variables
const main = document.querySelector('.main');
const fullscreenIframe = document.querySelector('.fullscreen-iframe');
const backgroundOverlay = document.querySelector('.background-overlay');

// Folder variables
const folderToggles = document.querySelectorAll('.folder-toggle');
const folderContainers = document.querySelectorAll('.folder-container');

//Icon variables
const iconContainers = document.querySelectorAll('.icon-container');
const chevronRights = document.querySelectorAll('.chevron-right');
const chevronDowns = document.querySelectorAll('.chevron-down');

//Create a new file variables
const createNewFile = document.querySelector('.create-new-file');

//Focus button variable
const focusButton = document.querySelector('.focus-button');

//-----------------------------------------------------
//Event listeners
fileItems.forEach((item) => {
  item.addEventListener('click', () => {
    const fileName = item.classList[2]; // Get the unique class name for the file
    contentIframe.src = `${fileName.split('-').join('_')}.html`;
  });
});

main.addEventListener('click', showFullscreenIframe);

//close the iframe and background overlay when clicking outside the iframe
backgroundOverlay.addEventListener('click', () => {
  fullscreenIframe.style.display = 'none';
  fullscreenIframe.src = '';
  backgroundOverlay.style.display = 'none'; // Hide the background overlay
});

//Folder toggle event listener
folderToggles.forEach((folderToggle, index) => {
  folderToggle.addEventListener('click', () => {
    if (folderContainers[index].style.display === 'none') {
      folderContainers[index].style.display = 'block';
    } else {
      folderContainers[index].style.display = 'none';
    }

    // Call iconChange function with the current index
    iconChange(index);
  });
});

//Focus button event listener
focusButton.addEventListener('click', () => {
  window.location.href = contentIframe.src;
});


//----------------------------------------------------
//Functions

//-------------Show fullscreen IFrame function
function showFullscreenIframe() {
  fullscreenIframe.src = 'https://example.com'; // Replace with the desired URL
  fullscreenIframe.style.display = 'block';
  backgroundOverlay.style.display = 'block'; // Show the background overlay
}

//------Change Icon function
chevronDowns.forEach(chevronDown => {
  chevronDown.style.display = 'none';
});

function iconChange(index) {
  if (chevronRights[index].style.display === 'none') {
    chevronRights[index].style.display = 'block';
  } else {
    chevronRights[index].style.display = 'none';
  }

  if (chevronDowns[index].style.display === "block") {
    chevronDowns[index].style.display = "none";
  } else {
    chevronDowns[index].style.display = "block";
  }
}

//--------------Create a new file function and event listener
createNewFile.addEventListener('click', () => {
  const fileName = prompt('Enter file name:').trim();
  if (fileName === '') {
    alert('Please enter a valid file name.');
    return;
  }

  // Create a new file element
  const newFile = document.createElement('div');
  newFile.classList.add('nav-item', 'file', fileName.split(' ').join('-'));

  // Create a span element and add the material-symbols-outlined class
  const newFileSpan = document.createElement('span');
  newFileSpan.classList.add('material-symbols-outlined');
  newFileSpan.textContent = ' description';

  // Create a paragraph element for the file title
  const newFileTitle = document.createElement('p');
  newFileTitle.textContent = fileName;

  // Append the span and paragraph elements to the new file element
  newFile.appendChild(newFileSpan);
  newFile.appendChild(newFileTitle);

  // Add an event listener to the new file
  newFile.addEventListener('click', () => {
    contentIframe.src = `${fileName.split(' ').join('_')}.html`;
  });

  // Append the new file element to the .nav.nav-3 container
  const nav3 = document.querySelector('.nav.nav-3');
  nav3.appendChild(newFile);
});