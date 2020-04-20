document.body.onload = function() {
  setTimeout(function () {
    var loader = document.getElementById('page_loader');
      if (!loader.classList.contains('done'))
      {
        loader.classList.add('done');  }
  },1000);
}
