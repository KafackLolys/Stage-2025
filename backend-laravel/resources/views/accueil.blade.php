<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>crud</title>
</head>
<body>
    <h1 style="text-align: center; margin-top: 20PX; font-size: 50PX;color: rgb(31, 31, 175);">CRUD EN LARAVEL</h1>
    <div style="display: flex;">
        <a href="{{ route('formulaire') }}" class="cart">
            <img src="image/user.png" alt="users" width="300px">
            <b>Utilisateurs</b>
        </a>
        <div class="cart">
            <img src="image/commande.png" alt="commandes" width="300px">
            <b>Commandes</b>
        </div>
    </div>
</body>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    body{
        width: 100%;
        background-color: #f0f0f0;
        justify-content: center;
        font-family: 'Courier New', Courier, monospace;
    }
    .cart{
        background-color: rgb(31, 31, 175);
        height: 500px;
        width: 50%;
        margin: 30px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .cart:hover{
        background-color: rgb(31, 31, 255);
        transition: 0.3s;
    }
     .cart b{
        font-size: 50px;
        color: white;
    }
    a{
        text-decoration: none;
    }
</style>
</html>