let mainZipInput = document.getElementById("main-zip");

const mainZipValue = () => {
  if (mainZipInput.value > 20000) {
    return true;
  } else {
    return false;
  }
};
