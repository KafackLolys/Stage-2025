<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>crud</title>
</head>

<body>
    <h1 style="text-align: center; margin-top: 20PX; font-size: 50PX;color: rgb(31, 31, 175);">Modification client</h1>
    <div style="display: flex;">
        <div style="text-align: center;">
            <form method="post" action="{{ route('client.update', $client->id) }}" class="cart">
                @csrf
                @method('PUT')
                <h1>Entrer les nouvelles informations</h1>
                <div class="frm">
                    <label for="nom">Nom:</label>
                    <input type="text" name="nom" id="nom" value="{{ old('nom', $client->nom) }}">
                    <label for="prenom">Prénom:</label>
                    <input type="text" name="prenom" id="prenom" value="{{ old('prenom', $client->prenom) }}">
                    <label for="password">Mot de passe:</label>
                    <input type="password" name="password" id="password" value="{{ old('password', $client->password) }}">
                </div>
                <input type="submit" class="save" value="Modifier">
            </form>
            @if(session('success'))
                <div style="color: green;">{{ session('success') }}</div>
            @endif
        </div>
        <a href="{{ route('liste_client') }}" style="position: absolute; right: 50px; color: rgb(31, 31, 175);">
            <b>Liste des utilisateurs</b>
        </a>
    </div>
</body>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    body {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #f0f0f0;
        justify-content: center;
        align-items: center;
        font-family: 'Courier New', Courier, monospace;
    }

    .cart {
        background-color: rgba(255, 255, 255, 0.629);
        box-shadow: 2px 2px 2px rgba(214, 212, 235, 0.058);
        height: 500px;
        width: 500px;
        margin: 30px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .save {
        background-color: rgb(31, 31, 175);
        border: none;
        width: 250px;
        height: 50px;
        color: white;
        font-size: 30px;
        margin-top: 20px;
        cursor: pointer;
    }
    .save:hover{
        transition: 0.3;
        background-color: rgb(31, 31, 255);
    }

    .frm {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
        padding-left: 50px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .frm input{
        width: 80%;
        height: 45px;
        padding-left: 7px;
        border: none;
        border-bottom: solid rgb(31, 31, 175) 2px;
        background-color: rgba(99, 166, 228, 0.205);
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
    }
    .frm label{
        font-size: 25px;
    }
</style>

</html>