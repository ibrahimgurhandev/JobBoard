const trash = document.getElementsByClassName("trash");


Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const company = this.parentElement.children[0].innerText
    console.log(name)
    fetch('deletejob', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'company': company

      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});