<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>crud</title>
</head>

<body>
    <h2 style="text-align: center; margin-top: 20PX; font-size: 50PX;color: rgb(31, 31, 175);">Liste des utilisateurs</h2>
    <a href="{{ route('formulaire') }}" style="position: relative; right: -500px; color: rgb(31, 31, 175);">
        <b>Ajouter</b>
    </a>
    @if(session('success'))
        <div style="color: green;">{{ session('success') }}</div>
    @endif
    <div class="liste">
       <table>
        <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th colspan="2">opération</th>
        </tr>
        @foreach ($clients as $client)
            <tr>
                <td>{{ $client->id }}</td>
                <td>{{ $client->nom }}</td>
                <td>{{ $client->prenom }}</td>
                <td style="display: flex;">
                    
                    <form method="get" action="{{ route('client.get_client', $client->id) }}" style="width: 50%; margin-right: 5px;">
                        <button class="btn del" style="background-color: green;">Modifier</button>
                    </form>
                    <form method="post" action="{{ route('client.delete_cl', $client->id) }}" style="width: 50%; margin-left: 5px;">
                        @csrf
                        @method('DELETE')
                        <button class="btn del" style="background-color: red;">Supprimer</button>
                    </form>
                </td>
            </tr>
        @endforeach
       </table>
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
    .liste{
        background-color: white;
        width: 95%;
        padding: 10px;  
    }
    table{
        width: 100%;
    }
    th{
        background: rgb(31, 31, 175);
        color: white;
        font-size: 25px;
    }
    td{
        padding: 5px 2px 2px 7px;
        background-color: rgba(128, 128, 128, 0.216);
        font-size: 20px;
    }
    tr:hover{
        background-color: rgba(31, 31, 175, 0.205);
    }
    .btn{
        height: 100%;
        width: 100%;
        border: none;
        font-size: 20px;
        padding: 2px;
        color: white;
        cursor: pointer;
    }
    .btn:hover{
        transition: 0.3s;
        opacity: 40%;
    }
</style>

</html>