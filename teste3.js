<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hover underline</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="links-container">
        <ul class="links-list">
          <li><a href="#" class="link">Link 1</a></li>
          <li><a href="#" class="link">Link 2</a></li>
          <li><a href="#" class="link">Link 3</a></li>
        </ul>
      </div>

      <script>
        const links = document.querySelectorAll('.link');
        const linksContainer = document.querySelector('.links-container');
      
        function handleClick(event) {
          event.preventDefault();
          links.forEach(link => link.classList.remove('active'));
          event.target.classList.add('active');
        }
      
        links.forEach(link => {
          link.addEventListener('click', handleClick);
        });
      </script>
</body>
</html>

html,body{
    width: 100%;
    height: 100%;
}

body{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

a{
    font-size: 40px;
    text-decoration: none;
}

a::after{
    content: '';
    width: 0px;
    display: block;
    transition: 0.9s;
}

.link {
    text-decoration: none;
    position: relative;
    display: inline-block;
    color: black;
    transition: 0.4s;
  }

  .link.active::after {
    content: '';
    display: block;
    position: absolute;
    transition: 0.4s;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 4px;
    border-bottom:5px solid tomato;
  }